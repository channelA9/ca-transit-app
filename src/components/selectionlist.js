import React from "react";

const Selection = ({ title, dataArr, state, stateChange }) => {
  const selections = [];
  dataArr = dataArr;
  selections.push(
    <option
      className="bg-transparent text-black font-light text-2xl selected:font-bold"
      value={-1}
    >
      All
    </option>
  );

  Object.keys(dataArr).forEach((key) => {
    let set = dataArr[key];
    selections.push(
      <option
        className="bg-transparent text-black font-light text-2xl selected:font-bold"
        value={set.id}
      >
        {set.name.ja}
      </option>
    );
  });

  return (
    <>
      <label className="w-fit bg-transparent text-white text-xl">{title}</label>
      <select
        className="w-fit h-fit bg-transparent text-white font-extrabold text-4xl"
        placeholder="None"
        id="prefectures"
        name="prefectures"
        value={state}
        onChange={(e) => stateChange(e)}
      >
        {selections}
      </select>
    </>
  );
};

export default Selection;
