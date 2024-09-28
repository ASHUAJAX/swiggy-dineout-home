import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import logo from "../../../assets/images/logo.png";
import navdata from "./navdata.json";
import "./navbar.scss";
import SwiggyButton from "../SwiggyButton";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SwiggyInputText from "../SwiggyInputText";
function Navbar() {
  const webLocation = useLocation();
  const [data, setData] = useState({
    name: "location",
    placeholder: "Please type a location",
    value: "",
  });



  // const [locationData, seLocationData] = useState({
  //   selectedLoc: "",
  //   popularLocs: [
  //     "Rajouri Garden, West Delhi",
  //     "Sector 29, Gurgaon",
  //     "DLF Cyber City, Gurgaon",
  //   ],
  // });

  return (
    <div className="navbarContainer">
      <div className="navbarContainer__varientTop">
        <div className="navbarContainer__varientTop_child">
          <img
            className="navbarContainer__varientTop_child_logo"
            src={logo}
            alt="swiggy-logo"
          />

          <div className="navbarContainer__varientTop_child_location">
            <LocationOnOutlinedIcon className="navbarContainer__varientTop_child_location_locationIcon" />
            <SwiggyInputText data={data} setData={setData} />
            <ArrowDropDownOutlinedIcon className="navbarContainer__varientTop_child_location_dropdownIcon" />
          </div>
        </div>

        <nav className="navbarContainer__varientTop_nav">
          <ul>
            {navdata.map((elm,index) => {
              return (
                <li 
                key={index}
                  className={`${elm.path === webLocation.pathname &&
                    "navbarContainer__varientTop_nav_active"
                    }`}
                >
                  {elm.navItemName}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="navbarContainer__varientTop_child">
          <SwiggyButton txt={"login"} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
