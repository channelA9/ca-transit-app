import { HexagonLayer, ScatterplotLayer } from "deck.gl";

const INITIAL_VIEW_STATE = {
    longitude: -122.4,
    latitude: 37.8,
    zoom: 5,
  };

  const layer = new HexagonLayer({
    id: 'hexagon-la-business-layer',
    data: 'https://data.lacity.org/resource/6rrh-rzua.json?$limit=40000&$WHERE=location_1%20IS%20NOT%20NULL',
    pickable: true,
    extruded: true,
    radius: 1000,
    elevationScale: 4,
    coverage: 0.8,
    opacity: 0.8,

    getPosition: d => [parseFloat(d.location_1.longitude), parseFloat(d.location_1.latitude)]
  })

export const LABusinessesLayer = {
    layer,
    INITIAL_VIEW_STATE,
    LayerClass: HexagonLayer,
};
