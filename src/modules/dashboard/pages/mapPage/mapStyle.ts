import type { Map } from "@maplibre/maplibre-react-native";
import type { ComponentProps } from "react";

export type MapStyle = ComponentProps<typeof Map>["mapStyle"];

// 1. The base map. Change this URL to switch to a completely different look.
export const STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";

// 2. Types of map data to hide (the "poi" layers are the shops, bus stops, etc.)
const HIDDEN_SOURCE_LAYERS = ["poi"];

// 3. Colour tweaks: layer id -> paint properties to override
const PAINT_OVERRIDES: Record<string, Record<string, string>> = {
  // example (layer ids depend on the style, see below):
  // background: { "background-color": "#f5f1e6" },
};

type StyleLayer = {
  id: string;
  "source-layer"?: string;
  paint?: Record<string, unknown>;
};

export async function loadMapStyle(): Promise<MapStyle> {
  try {
    const style = await (await fetch(STYLE_URL)).json();

    style.layers = (style.layers as StyleLayer[])
      .filter((l) => !HIDDEN_SOURCE_LAYERS.includes(l["source-layer"] ?? ""))
      .map((l) =>
        PAINT_OVERRIDES[l.id]
          ? { ...l, paint: { ...l.paint, ...PAINT_OVERRIDES[l.id] } }
          : l,
      );

    return style;
  } catch {
    return STYLE_URL; // fallback: the normal, unedited map
  }
}
