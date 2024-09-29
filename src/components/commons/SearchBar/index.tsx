import SearchIcon from '@mui/icons-material/Search';
import SwiggyButton from "../SwiggyButton";
import SwiggyInputText from "../SwiggyInputText";
import './SearchBar.scss'

interface SearchBarProps {
    data: any,
    setData: any,
    className?: string
}

function SearchBar({ data, setData, className }: SearchBarProps) {
    return (

        <div className={`${className} SearchBar`}>
            <SearchIcon className="SearchBar_icon" />
            <SwiggyInputText data={data} setData={setData} />
            <div className="SearchBar_button">
                <SwiggyButton txt="Search" />
            </div>

        </div>

    )
}

export default SearchBar;