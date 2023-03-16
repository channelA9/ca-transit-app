import Selection from "src/components/selectionList";

const Menu = ({ prefectureData, selectedPrefecture, setPrefecture }) => {
  return (
    <div className="w-screen h-0 absolute z-10 overflow-visible">
      <nav className="w-fit h-fit md:flex flex-col place-content-start absolute place-items-start p-4 m-4">
        <Selection
          className="w-fit"
          title="Prefecture"
          dataArr={prefectureData}
          state={selectedPrefecture}
          stateChange={setPrefecture}
        />
        
      </nav>
        <div className="w-64 h-fit bg-black bg-opacity-30 float-right p-4 m-4 text-white text-xs">
          <p> Information obtained from <a href="https://github.com/adieuadieu/japan-train-data"><u>https://github.com/adieuadieu/japan-train-data</u> </a> 
           with data sourced from <a href="https://www.ekidata.jp/"><u>ekiData</u></a></p>
        </div>
    </div>
  );
};

/* <h3 className="text-white pt-4">Layers</h3>
<Check title="Stations" />
<Check title="Lines" />
<h3 className="text-white pt-4">Extra</h3>
<Check title="Station Density" />
*/

export default Menu;