import { getLimitedWords } from '../utils/common'
import { IMG_URL } from '../utils/constants';

const RestoCard = (props) => {
    const {resto} =  props;
    return (
        <div className='resto-card'>
            <div className='resto-image'>
                <img src={IMG_URL + resto.cloudinaryImageId} />
            </div>
            <div className='card-title'>
                {resto.name}
            </div>
            <div className='time-rating'>
                <div className='rating'>
                    {resto.avgRating} Star
                </div>
                <div className='timing'>
                    {resto.sla?.slaString}
                </div>
            </div>
            <div className='cuisine'>
                { getLimitedWords(resto.cuisines.join(", ") ,5)}
            </div>
            <div className='location'>
                {resto.areaName}
            </div>
        </div>
    );
}

export default RestoCard