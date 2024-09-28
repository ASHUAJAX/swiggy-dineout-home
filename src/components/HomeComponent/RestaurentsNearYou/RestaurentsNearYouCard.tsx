import "./RestaurentsNearYou.scss";
interface RestaurentsNearYouCardProps {
  data: {
    name: string,
    location: string,
    rating: string,
    image: any,
  }
}

function RestaurentsNearYouCard({ data }: RestaurentsNearYouCardProps) {

  return (
    <div className="RestaurentsNearYouCard">
      <div style={{ background: `url(${data.image})` }} className="RestaurentsNearYouCard_image">
      </div>
      <div className="RestaurentsNearYouCard_info">
        <div className="RestaurentsNearYouCard_info_left">
          <p className="RestaurentsNearYouCard_info_left_name">{data.name}</p>
          <p className="RestaurentsNearYouCard_info_left_location">{data.location}</p>
        </div>
        <div className="RestaurentsNearYouCard_info_right">
          <p className="RestaurentsNearYouCard_info_right_rating">{data.rating}</p>
        </div>
      </div>
    </div>
  )
}

export default RestaurentsNearYouCard;