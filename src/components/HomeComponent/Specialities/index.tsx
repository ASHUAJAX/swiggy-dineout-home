import './Specialities.scss';
import specialitiesData from './specialities';

function Specialities() {
    return (
        <div className='specialities'>
            {
                specialitiesData.map((elm, index) => {
                    return <div className='specialities_card' key={index}>
                        <img src={elm.img} className='specialities_card_img' alt='Specialities Img' />
                        <p className='specialities_card_name'>{elm.name}</p>
                    </div>
                })
            }

        </div>
    )
}

export default Specialities