import React, { useState } from "react";
import { FaFolder, FaFile,FaChevronRight,FaChevronDown } from "react-icons/fa";
const Folder = ({ data }) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      {data.isFolder ? (
        <div>
          <div
            onClick={() => setExpand(!expand)}
            className="flex w-[10rem] items-center gap-1 cursor-pointer"
          ><span>{!expand ? <FaChevronRight className="text-xs font-thin"/>:<FaChevronDown className="text-xs font-thin"/>}</span>
            <FaFolder className="h-3 w-3 text-yellow-500" />
            {data.name}
          </div>
          {expand &&
            data.items.map((item) => (
              <div className="ml-3" key={item.name}>
                <Folder data={item} />
              </div>
            ))}
        </div>
      ) : (
        <div className="flex items-center gap-1">
          <FaFile className="h-3 w-3 text-blue-400" />
          {data.name}
        </div>
      )}
    </>
  );
};
export default Folder;
