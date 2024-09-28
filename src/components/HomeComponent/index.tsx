import Footer from "../commons/Footer";
import Navbar from "../commons/Navbar";
import BestOffers from "./BestOffers";
import BgWithSearchBar from "./BgWithSearchBar";
import RestaurentsNearYou from "./RestaurentsNearYou";
import Specialities from "./Specialities";

function HomeComponent() {
    return (
        <div>
            <Navbar /> 
            <BgWithSearchBar/>
            <BestOffers/>
            <RestaurentsNearYou/>
            <Specialities/>
            <Footer/>
        </div>
    )
}

export default HomeComponent;