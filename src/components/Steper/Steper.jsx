import React, { useState } from "react";

const Steper = () => {
  const steps = [
    {
      name: 1,
      desc: "product",
    },
    {
      name: 2,
      desc: "payment",
    },
    {
      name: 3,
      desc: "confirm",
    },
    {
      name: 4,
      desc: "submit",
    },
  ];
  const [activeStep, setactiveStep] = useState(1);
  const handelclick = () => {
    setactiveStep((prev) => {
        if(prev != steps.length)
            return prev + 1;
        else
            return 1
    });
  };
  return (
    <div
      id="steper"
      className={`w-[60vw] h-[40vh] flex flex-col gap-20 p-3 bg-gray-900 items-center`}
    >
      <div className="font-bold text-xl">Steper</div>
      <div className="flex justify-between w-full relative">
        <div className="flex bg-gray-400 h-2 absolute top-3 left-0 right-0 mx-3"></div>
        <div
          className={`flex bg-green-400 h-2 absolute top-3 ml-3 mr-3 z-10 ease-linear duration-100`}
          style={{width:`${33*(activeStep-1)}%`}}
        ></div>
        {steps.map((step) => (
          <div className="flex flex-col items-center" key={step.name}>
            <div
              className={`flex items-center text-xs md:text-sm justify-center rounded-[50%] z-50 w-8 h-8 ${
                step.name <= activeStep ? "bg-green-500" : "bg-gray-700"
              }`}
            >
              {step.name <= activeStep ? "✔" : step.name}
            </div>
            <div className="text-xs md:text-sm">{step.desc}</div>
          </div>
        ))}
      </div>
      <button
        onClick={handelclick}
        className="flex items-center justify-center rounded w-20 h-10 bg-blue-500 hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default Steper;
