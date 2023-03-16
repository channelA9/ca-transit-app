import { LineLayer } from "@deck.gl/layers";
import { lines } from "japan-train-data";

// temporarily selects the first line
const dataa = lines[0];

let lineData = [];

function parseLinesFromPref(pref) {
  let prefLines = pref.lines
  for (let j = 0; j < prefLines.length; j++) {
    let lineId = prefLines[j].id;
    let trueLineData = lines.find(({ id }) => id === lineId);
    for (let i = 0; i < trueLineData.stations.length - 1; i++) {
      lineData.push({
        lineName: trueLineData.name.ja,
        color: [200,59,160,200],
        width: 3,
        from: {
          name: trueLineData.stations[i].name.ja,
          coordinates: [
            trueLineData.stations[i].location.lng,
            trueLineData.stations[i].location.lat,
          ],
        },
        to: {
          name: trueLineData.stations[i + 1].name.ja,
          coordinates: [
            trueLineData.stations[i + 1].location.lng,
            trueLineData.stations[i + 1].location.lat,
          ],
        },
      });
    }
  }
}

function updateLineData(prefId, prefData) {
  lineData = [];
  if (prefData) {
    if (prefId < 0) {
      
      for (let i = 0; i < prefData.length; i++) {
        let pref = prefData[i];
        parseLinesFromPref(pref);
      }
    } else {
      parseLinesFromPref(prefData);
    }
  }
  return lineData;
}

const initialViewState = {
  longitude: 138.2529,
  latitude: 36.2048,
  zoom: 5,
  pitch: 0,
  bearing: 0,
};
// 36.2048° N, 138.2529° E
const defaultOptions = {
  id: "japan-train-lines-layer",
  data: lineData,
  pickable: true,
  getWidth: 5,
  getSourcePosition: (d) => d.from.coordinates,
  getTargetPosition: (d) => d.to.coordinates,
  getColor: [0, 0, 240],
};

export const JPLines = {
  defaultOptions,
  initialViewState,
  LayerClass: LineLayer,
  updateLineData,
};
