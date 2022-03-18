import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";


//Components
import NavbarComponent from "./navbar";
import HomeComponent from "./home";
import DestinationComponent from "./destination";
import CrewComponent from "./crew";
import TechComponent from "./technology";

//Styles
import "../scss/index.scss";

const AppComponent = () => {

  const location = useLocation().pathname;
  const newClass = location.split("/")[1];
  
  return(

    <div className={"main " + newClass}>
      <NavbarComponent currentRoute={newClass} />
      <Routes>
      <Route path="/" element={<HomeComponent />}>
      </Route>
      <Route path="/destination" element={<DestinationComponent />}>
      </Route>
      <Route path="/crew" element={<CrewComponent />}>
      </Route>
      <Route path="/technology" element={<TechComponent />}>
      </Route>
      </Routes>
    </div>
  );
};

export default AppComponent;
  

      