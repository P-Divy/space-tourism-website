import React, { useEffect,useState } from "react";
import data from "../data.json";
import SliderComponent from "./technology-slider";

const TechComponent = () => {
    const [technology] = useState(data.technology);
    const [currentItem, setcurrentItem] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const setItem = (i) => {
        const current = technology.filter((item, index) => index === i);
        setcurrentItem(current);
        setCurrentIndex(i);
      };
      useEffect(() => {
        const current1 = technology.filter((item, index) => index === 0);
        setcurrentItem(current1);
      },[]);
    //   const setData = async () =>
    //     technology().then((res) => {
    //       const current = res.technology.filter((item, index) => index === 0);
    //       setcurrentItem(current);
    //       setTechnology(res.technology);
    //     });
    return(
        <>
        <SliderComponent
          current={currentItem}
          index={currentIndex}
          setItem={setItem}
        /> 
    </>
      
    );


};

export default TechComponent;