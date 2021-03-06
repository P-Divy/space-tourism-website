import React from "react";


import img1 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import img2 from "../assets/technology/image-spaceport-portrait.jpg";
import img3 from "../assets/technology/image-space-capsule-portrait.jpg";
import img4 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import img5 from "../assets/technology/image-spaceport-landscape.jpg";
import img6 from "../assets/technology/image-space-capsule-landscape.jpg";


const SliderComponent = ({current, index , setItem}) => {
    const imgIndex = (index) => {
        switch(index) {
            case 0:
                return img1;
            case 1:
                return img2;
            case 2:
                return img3;
            default:
                return false;
        }
    };

    const imgIndexTablet = (index) => {
        switch(index) {
            case 0:
                return img4;
            case 1:
                return img5;
            case 2:
                return img6;
            default:
                return false;
        }
    };
    return (
        <div className="technology-wrapper">
        <div className="technology-header">
          <h1>
            <span>0 3 </span> S P A C E &nbsp;&nbsp;&nbsp;L A U N C H
            &nbsp;&nbsp;&nbsp;1 0 1
          </h1>
        </div>
        <div className="technology-body">
          <div className="tech-img">
            <img src={imgIndex(index)} alt="" className="desktop" />
            <img src={imgIndexTablet(index)} alt="" className="tablet" />
          </div>
          <div className="control-slider">
            <button
              onClick={() => setItem(0)}
              style={
                index === 0
                  ? { backgroundColor: "#fff", color: "#000" }
                  : { backgroundColor: "transparent" }
              }
            >
              1
            </button>
            <button
              onClick={() => setItem(1)}
              style={
                index === 1
                  ? { backgroundColor: "#fff", color: "#000" }
                  : { backgroundColor: "transparent" }
              }
            >
              2
            </button>
            <button
              onClick={() => setItem(2)}
              style={
                index === 2
                  ? { backgroundColor: "#fff", color: "#000" }
                  : { backgroundColor: "transparent" }
              }
            >
              3
            </button>
          </div>
          {current.map((item) => (
            <div className="tech-info" key={index}>
              <span>T H E&nbsp;&nbsp;&nbsp;T E R M I N O L O G Y . . .</span>
              <h1>{item.name.toUpperCase()}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default SliderComponent;
