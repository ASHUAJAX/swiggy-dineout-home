import "./RestaurentsNearYou.scss";
import RestaurentsNearYouCard from "./RestaurentsNearYouCard";
import restaurentsNearYouData from "./restaurentsNearYouData.js";

function RestaurentsNearYou() {
  return (
    <div className="RestaurentsNearYou">
      <div className="RestaurentsNearYou_container">
        <h1>Restaurants Near You</h1>
        <div className="RestaurentsNearYou_container_cardWrapper">
          {restaurentsNearYouData.map((elm, index) => {
            return <RestaurentsNearYouCard key={index} data={elm} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default RestaurentsNearYou;
