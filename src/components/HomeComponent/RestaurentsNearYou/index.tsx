import "./RestaurentsNearYou.scss";
import RestaurentsNearYouCard from "./RestaurentsNearYouCard";
import { useRef } from "react";
// @ts-ignore
import restaurentsNearYouData from "./restaurentsNearYouData.js";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function RestaurentsNearYou() {
  const cardWrapperRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (cardWrapperRef.current) {
      cardWrapperRef.current.scrollLeft -= 270; // Adjust the scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (cardWrapperRef.current) {
      cardWrapperRef.current.scrollLeft += 270; // Adjust the scroll amount as needed
    }
  };

  return (
    <div className="RestaurentsNearYou">
      <div className="RestaurentsNearYou_container">
        <div className="RestaurentsNearYou_container_wrapper">
          <h1>Restaurants Near You</h1>
          <p>See All</p>
        </div>

      

        <div className="RestaurentsNearYou_container_mainWrapper">
          <div className="RestaurentsNearYou_container_mainWrapper_navigationIconLeft">
          <button  onClick={scrollLeft}><ArrowBackIcon/></button>
          </div>
         
          <div
            className="RestaurentsNearYou_container_mainWrapper_cardWrapper"
            ref={cardWrapperRef}
          >
            {restaurentsNearYouData.map((elm: any, index: any) => {
              return <RestaurentsNearYouCard key={index} data={elm} />;
            })}

          </div>
          <div className="RestaurentsNearYou_container_mainWrapper_navigationIconRight">
          <button  onClick={scrollRight}><ArrowForwardIcon/></button>
          </div>
          </div>

      </div>
    </div>
  );
}

export default RestaurentsNearYou;
