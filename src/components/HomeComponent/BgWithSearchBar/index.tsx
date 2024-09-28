import { useState } from "react";
import SwiggyButton from "../../commons/SwiggyButton";
import SwiggyInputText from "../../commons/SwiggyInputText";
import "./BgWithSearchBar.scss";
import SearchIcon from '@mui/icons-material/Search';
function BgWithSearchBar() {
    const [data, setData] = useState({
        name: "SearchInSwiggy",
        placeholder: "Search for Restaurants, Cuisines, Location...",
        value: "",
    });

    return (
        <div className="BgWithSearchBar">
            <h1 className="BgWithSearchBar_heading">It's Now Safe To <span className="BgWithSearchBar_heading_highlighted">Crave!</span></h1>
            <div className="BgWithSearchBar_Search">
                <SearchIcon className="BgWithSearchBar_Search_icon" />
                <SwiggyInputText data={data} setData={setData} />
                <div className="BgWithSearchBar_Search_button">
                    <SwiggyButton txt="Search" />
                </div>

            </div>
        </div>
    )
}

export default BgWithSearchBar