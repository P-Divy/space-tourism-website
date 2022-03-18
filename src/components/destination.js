import React, { useEffect, useState } from "react";
import data from "../data.json"

import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";

import img1 from "../assets/destination/image-moon.png";
import img2 from "../assets/destination/image-mars.png";
import img3 from "../assets/destination/image-titan.png";
import img4 from "../assets/destination/image-europa.png";

const DestinationComponent = () => {
    const [desti] = useState(data.destinations);
    let glide;
    useEffect(async () => {
        glide = new Glide(".glide", {
          perView: 1,
          type: "carousel",
        }).mount();
      }, []);

   const imgIndex = (index) => {
       switch (index) {
           case 0:
               return img1;
            case 1:
                return img2;
            case 2:
                return img3;
            case 3:
                return img4;
            default:
                return false;
            }
   };

    return(
      <div className="destination wrapper">
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {desti.map((item, index) => (
                <li className="glide__slide" key={index}>
                  <div className="content destin">
                    <div className="title-img">
                      <h1>
                        <span>0 1 </span> P I C K&nbsp;&nbsp;&nbsp;Y O U
                        R&nbsp;&nbsp;&nbsp;D E S T I N A T I O N
                      </h1>
                      <img src={imgIndex(index)} alt={item.name} />
                    </div>
                    <div className="wrapper-slider">
                      <div className="header-slider" data-glide-el="controls[nav]">
                        <button data-glide-dir="=0">M O O N</button>
                        <button data-glide-dir="=1">M A R S</button>
                        <button data-glide-dir="=2">E U R O P A</button>
                        <button data-glide-dir="=3">T I T A N</button>
                      </div>
                      <div className="slider">
                        <div className="content-slider">
                          <h1>{item.name.toUpperCase()}</h1>
                          <p>{item.description}</p>
                          <hr />
                          <div className="info-slider">
                            <div className="info-box">
                              <h2>AVG. DISTANCE</h2>
                              <span>{item.distance.toUpperCase()}</span>
                            </div>
                            <div className="info-box">
                              <h2>EST. TRAVEL TIME</h2>
                              <span>{item.travel.toUpperCase()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
     </div>
         
    );
};

export default DestinationComponent;