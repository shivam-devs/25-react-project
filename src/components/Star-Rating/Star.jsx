import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Star = ({ stars = 5 }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoverIdx, setHovetIdx] = useState(0);

  return (
    <div
        id="star"
      className={`w-[60vw] h-[40vh] flex flex-col gap-20 p-3 bg-gray-900 items-center`}
    >
      <div className="font-bold text-xl">Star Rating</div>
      <div className="flex gap-2">
        {[...Array(stars)].map((_, idx) => {
          idx += 1;
          return <FaStar
            key={idx}
            className={`text-3xl ease-in-out ${idx <= hoverIdx && "text-yellow-400"} ${idx <= activeIdx && hoverIdx==0 && "text-yellow-400"}`}
            onMouseMove={()=>setHovetIdx(idx)}
            onMouseLeave={()=>setHovetIdx(0)}
            onClick={()=>setActiveIdx((prev) => prev!==idx && idx)}
          />;
        })}
      </div>
    </div>
  );
};

export default Star;
