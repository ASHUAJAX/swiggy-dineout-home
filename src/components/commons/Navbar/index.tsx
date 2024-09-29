import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import logo from "../../../assets/images/logo.png";
import navdata from "./navdata.json";
import "./navbar.scss";
import SwiggyButton from "../SwiggyButton";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SwiggyInputText from "../SwiggyInputText";
import SearchBar from "../SearchBar";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
  const webLocation = useLocation();
  const [data, setData] = useState({
    name: "location",
    placeholder: "Please type a location",
    value: "",
  });
  const [searchBarData, setSearchBarData] = useState({
    name: "SearchInSwiggy",
    placeholder: "Search for Restaurants, Cuisines, Location...",
    value: "",
  });
  const [isStickyNavbar, setIsStickyNavbar] = useState(false);

  // const [locationData, seLocationData] = useState({
  //   selectedLoc: "",
  //   popularLocs: [
  //     "Rajouri Garden, West Delhi",
  //     "Sector 29, Gurgaon",
  //     "DLF Cyber City, Gurgaon",
  //   ],
  // });

  const getScrollFunc = (): void => {
    if (window.scrollY > 370) {
      setIsStickyNavbar(true);
    } else {
      setIsStickyNavbar(false);
    }
  }

  useEffect(() => {

    window.addEventListener("scroll", getScrollFunc);

    return () => {
      window.removeEventListener("scroll", getScrollFunc);
    }

  }, [])

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

{/* navbar desktop */}
        <nav className="navbarContainer__varientTop_nav">
          <ul>
            {navdata.map((elm, index) => {
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
        <div >
          <SwiggyButton txt={"login"} />
        </div>
      </div>

{/* sticky navbar desktop */}
      {
        isStickyNavbar && <div className="stickyNavbarContainer">
          <div className="navbarContainer__varientSticky">
            <div className="navbarContainer__varientSticky_child">
              <img
                className="navbarContainer__varientSticky_child_logo"
                src={logo}
                alt="swiggy-logo"
              />

              <div className="navbarContainer__varientSticky_child_location">
                <LocationOnOutlinedIcon className="navbarContainer__varientSticky_child_location_locationIcon" />
                <SwiggyInputText data={data} setData={setData} />
                <ArrowDropDownOutlinedIcon className="navbarContainer__varientSticky_child_location_dropdownIcon" />
              </div>
            </div>

            <div className="navbarContainer__varientSticky_search">
              <SearchBar className="navbarContainer__varientSticky_search_searchBar" data={searchBarData} setData={setSearchBarData} />
            </div>

            <div >
              <SwiggyButton txt={"login"} />
            </div>
          </div>
          <div className="hr"></div>
          <nav className="navbarContainer__varientSticky_nav">
            <ul>
              {navdata.map((elm, index) => {
                return (
                  <li
                    key={index}
                    className={`${elm.path === webLocation.pathname &&
                      "navbarContainer__varientSticky_nav_active"
                      }`}
                  >
                    {elm.navItemName}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      }

      {/* mobile navbar */}
      <div className="varientMobileContainer">
        <div className="navbarContainer__varientMobile">
          <div className="navbarContainer__varientMobile_child">
            <img
              className="navbarContainer__varientMobile_child_logo"
              src={logo}
              alt="swiggy-logo"
            />

            <div className="navbarContainer__varientMobile_child_location">
              <LocationOnOutlinedIcon className="navbarContainer__varientMobile_child_location_locationIcon" />
              <SwiggyInputText data={data} setData={setData} />
              <ArrowDropDownOutlinedIcon className="navbarContainer__varientMobile_child_location_dropdownIcon" />
            </div>
          </div>
          <SwiggyButton txt={"login"} />
          <div className="navbarContainer__varientMobile_menu">
            <MenuIcon />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
