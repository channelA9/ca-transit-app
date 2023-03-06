import DeckGL from "@deck.gl/react";
import mapboxgl from "mapbox-gl";

import { Map } from "react-map-gl";
import { CSVLoader } from "@loaders.gl/csv";

import { CPUGridLayer, HexagonLayer, ScatterplotLayer } from "deck.gl";

const layer = new ScatterplotLayer({
  id:'ca-transit-stops',
  data: "https://gis.data.ca.gov/datasets/900992cc94ab49dbbb906d8f147c2a72_0.csv?outSR=%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D",
  loaders: [CSVLoader],
  loadOptions: {
    csv: {
      header: true,
      delimiter: ",",
      dynamicTyping: true,
      skipEmptyLines: true,
    },
  },
  getPosition: (d) => [(parseFloat(d.X)/100000), parseFloat(d.Y)/100000],
  getFillColor: d => [51, 255, 60],
  getLineColor: d => [0, 0, 0],
  opacity: 0.8,
  stroked: true,
  filled: true,
  radiusScale: 6,
  radiusMinPixels: 1,
  radiusMaxPixels: 100,
  lineWidthMinPixels: 1,
});

export const CATransitStops = {
  layer,
};
