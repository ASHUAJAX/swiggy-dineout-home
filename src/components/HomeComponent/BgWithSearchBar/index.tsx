import { useState } from "react";

import "./BgWithSearchBar.scss";
import SearchBar from "../../commons/SearchBar";

function BgWithSearchBar() {
    const [data, setData] = useState({
        name: "SearchInSwiggy",
        placeholder: "Search for Restaurants, Cuisines, Location...",
        value: "",
    });

    return (
        <div className="BgWithSearchBar">
            <h1 className="BgWithSearchBar_heading">It's Now Safe To <span className="BgWithSearchBar_heading_highlighted">Crave!</span></h1>
            <SearchBar className="BgWithSearchBar_search"  setData={setData} data={data} />
        </div>
    )
}

export default BgWithSearchBar