import React, { useState } from "react";

const RandomColor = () => {
  const [colorType,setColortype] = useState('hex');
  const [bgColor,setBgColor] = useState('#0a566d');

  const handelHex = () =>{
    setColortype('hex')
    const arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    let color = '#';
    for(let i =0;i<6;i++){
      color += arr[Math.floor(Math.random()*arr.length)]
    }
    setBgColor((prev)=>prev=color);
  }
  const handelRgb = () =>{
    setColortype('rgb')
    let g = Math.floor(Math.random()*256);
    let r = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    const color = `rgb(${r},${g},${b})`
    setBgColor(color)
  }
  return (
    <div id="randomcolor" className={`w-[60vw] min-h-[40vh] flex flex-col gap-3 p-3 items-center noselect`} style={{backgroundColor: `${bgColor}`}}>
      <div className="font-bold text-sm md:text-xl">Random Color Genarator</div>
      <div className="flex gap-5">
        <button className="bg-blue-500 outline-none flex p-3 md:text-lg text-xs" onClick={handelHex}>GENARATE HEX</button>
        <button className="bg-blue-500 outline-none flex p-3 md:text-lg text-xs" onClick={handelRgb}>GENARATE RGB</button>
      </div>
      <div>{colorType+"--> "+ bgColor}</div>
    </div>
  );
};

export default RandomColor;
