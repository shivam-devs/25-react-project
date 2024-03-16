import { useState } from "react";
import data from "./data";
const Accordian = () => {
  const [visible, setVisible] = useState([]);
  const handelClick = (e) => {
    if (visible.length == 0) setVisible([...visible, e.target.id]);
    else {
      const nArray = visible.filter((el) => el !== e.target.id);
      visible.indexOf(e.target.id) === -1
        ? setVisible([...visible, e.target.id])
        : setVisible(nArray);
    }
  };
  return (
    <div id="accordian" className="w-[60vw] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col gap-3 p-3 items-center noselect">
      <div className="font-bold text-xl">Accordian</div>
      {data.map((item, idx) => (
        <div
          className="ease-in-out duration-300 w-[80%] text-center outline-double bg-gray-800 hover:bg-gray-700 cursor-pointer rounded p-3"
          key={item.id}
          id={item.id}
          onClick={handelClick}
        >
          <p id={item.id} className="font-bold sm:text-sm text-xs lg:text-lg">{item.question + " +"}</p>
          {visible && visible.indexOf(item.id) !== -1 ? (
            <div id={item.id} className="opacity-85">{item.answer}</div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
