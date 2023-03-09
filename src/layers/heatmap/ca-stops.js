import DeckGL from "@deck.gl/react";
import mapboxgl from "mapbox-gl";

import { Map } from "react-map-gl";
import { CSVLoader } from "@loaders.gl/csv";
import { CPUGridLayer, HexagonLayer, ScatterplotLayer } from "deck.gl";

let data = "https://data.cityofnewyork.us/resource/5rq2-4hqu.json";

const layer = new ScatterplotLayer({
  /**
   * Data format:
   * Valid GeoJSON object
   */
  id:'ca-transit-stops',
  data,
  pickable: true,
  opacity: 0.8,
  stroked: true,
  filled: true,
  radiusScale: 6,
  radiusMinPixels: 1,
  radiusMaxPixels: 100,
  lineWidthMinPixels: 1,
  getPosition: d => d.the_geom.coordinates,
  getRadius: d => Math.sqrt(d.exits),
  getFillColor: d => [255, 140, 0],
  getLineColor: d => [0, 0, 0]
  
});

export const CATransitStops = {
  layer,
};
