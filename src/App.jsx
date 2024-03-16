import "./App.css";
import Accordian from "./components/Accordian/Accordian.jsx";
import Loadmore from "./components/Load-More/Loadmore.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import RandomColor from "./components/Random-Color/RandomColor.jsx";
import Star from "./components/Star-Rating/Star.jsx";
import Steper from "./components/Steper/Steper.jsx";
import VsCode from "./components/VsCode/VsCode.jsx";
import ImageSlider from "./components/image-slider/ImageSlider.jsx";
import Links from "./utility/Link.js";
function App() {
  const scroll = (e) => {
    const section = document.querySelector(e.target.id);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <>
      <Navbar />
      <div className="mt-20 flex md:ml-[16rem] justify-between px-1">
        <div className="text-white mt-[3rem] fixed left-0 top-5 md:flex p-1 flex-col gap-2 items-center border-r hidden min-w-64 h-[97vh] overflow-auto noScroll">
          {Links.map((item, idx) => (
            <span className="flex bg-blue-500 hover:bg-blue-900 justify-center cursor-pointer outline outline-1 w-full p-2" onClick={scroll} key={idx} id={item.path}>
              {item.name}
            </span>
          ))}
        </div>
        <div className="w-[98vw] md:w-auto text-white flex flex-col items-center gap-5">
          {/* Accordian Component */}
          <Accordian />
          {/* Random Color */}
          <RandomColor />
          {/* Star Rating */}
          <Star />
          {/* Steper */}
          <Steper />
          {/* vscode */}
          <VsCode />
          {/* Image Slider */}
          <ImageSlider />
          {/* Load More Data */}
          <Loadmore />
        </div>
        <div className="text-white h-[100vh] hidden md:block md:min-w-64"></div>
      </div>
    </>
  );
}

export default App;
