import { ScatterplotLayer } from '@deck.gl/layers';
import { stations } from 'japan-train-data'


const initialViewState = {
    longitude:  138.2529,
    latitude: 36.2048,
    zoom: 5,
    pitch: 0,
    bearing: 0
};
// 36.2048° N, 138.2529° E
const layerOptions = {
    id: 'japan-train-station-layer',
    data: stations,
    getPosition: d => [d.location.lng, d.location.lat],
    getFillColor: d => [64,64,64],
    getLineColor: d => [0, 0, 0],
    getRadius: d => (10*(d.lines.length)),
    opacity: 0.1,
    stroked: false,
    filled: true,
    radiusUnits: 'meters',
    radiusScale: 1,
    radiusMinPixels: 1,
    radiusMaxPixels: 2,   
}

export const JPTrainStationLayer = {
    
    layerOptions,
    initialViewState,
    LayerClass: ScatterplotLayer,
};
