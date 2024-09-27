import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import logo from "../../../assets/images/logo.png";
import navdata from "./navdata.json";
import './navbar.scss';
import SwiggyButton from '../SwiggyButton';
function Navbar() {
  return (
    <div className='navbarContainer'>

      <div className='navbarContainer__varientTop'>
        <img src={logo} alt="swiggy-logo" />

        <div>
          <LocationOnOutlinedIcon />
          <ArrowDropDownOutlinedIcon />
        </div>

        <nav>
          <ul>
            {
              navdata.map((elm)=>{
                return <p>{elm.navItemName}</p>
              })
            }
          </ul>
          <SwiggyButton txt={"login"} />
        </nav>
      </div>
    </div>
  )
}

export default Navbar