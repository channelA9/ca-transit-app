import React from "react";

const Selection = ({dataArr, state, stateChange}) => {
  const selections = [];
  dataArr = dataArr
  selections.push(<option className="bg-transparent text-black font-light text-2xl selected:font-bold" value={-1}>All Prefectures</option>)

  Object.keys(dataArr).forEach(key => {
    let pref = (dataArr[key]);
    selections.push(<option className="bg-transparent text-black font-light text-2xl selected:font-bold" value={pref.id}>{pref.name.en}</option>)

  });


  return (<select className="w-fit h-fit bg-transparent text-white font-extrabold text-4xl" id="prefectures" name="prefectures" value={state} onChange={(e) => stateChange(e)}>{selections}</select>);
};

export default Selection;
