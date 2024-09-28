import bestOffer15 from "../../../assets/images/bestOffers/bestOffers15.png";
import bestOffer20 from "../../../assets/images/bestOffers/bestOffers20.png";
import bestOffer25 from "../../../assets/images/bestOffers/bestOffers25.png";
import bestOffer30 from "../../../assets/images/bestOffers/bestOffers30.png";
import "./BestOffers.scss";
function BestOffers() {
    const offersData = [bestOffer15, bestOffer20, bestOffer25, bestOffer30].reverse();

    return (
        <div className="BestOffers">
            <div className="BestOffers_container">
                <h1>Best offers</h1>
                <div className="BestOffers_container_offers">
                    {offersData.map((elm,index) => {
                        return (
                            <div key={index} className="BestOffers_container_offers_card">
                                <img className="BestOffers_container_offers_card_img" src={elm} alt="swiggyBestOffersImage" />
                            </div>
                        );
                    })}
                </div>
            </div>



        </div>
    );
}

export default BestOffers;
