import { GridLayer } from '@deck.gl/layers';
import { stations } from 'japan-train-data'

const layerOptions = {
    id: 'japan-train-station-layer',
    data: stations,
    getPosition: d => [d.location.lng, d.location.lat],
    colorRange: [[255,247,243,20],[253,224,221,75],[252,197,192,150],[250,159,181,180],[247,104,161,180],[221,52,151,180],[174,1,126,180],[122,1,119,180],[73,0,106,200]],
    pickable: false,
    extruded: true,
    cellSize: 1000,
    elevationScale: 5,
}

export const JPStationDensity = {
    layerOptions,
    LayerClass: GridLayer
};
