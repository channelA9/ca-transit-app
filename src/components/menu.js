import Slider from "./slider";
import Selection from "./selectionlist";
const Menu = ({prefectureData, selectedPrefecture, setPrefecture}) => {
  return (
    <div className="w-fit h-fit flex place-content-center  place-items-start z-10 p-4 ">

      <Selection className=""
        dataArr={prefectureData}
        state={selectedPrefecture}
        stateChange={setPrefecture}
      />
    </div>
  );
};

export default Menu;
