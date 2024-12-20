import { getLimitedWords } from '../utils/common'

const RestoCard = (props) => {
    const {resto} =  props;
    return (
        <div className='resto-card'>
            <div className='resto-image'>
                <img src="https://i.pinimg.com/736x/63/bc/77/63bc77206180eb114cfb3aa61c11e86c.jpg" />
            </div>
            <div className='card-title'>
                {resto.name}
            </div>
            <div className='time-rating'>
                <div className='rating'>
                    {resto.avgRating} Star
                </div>
                <div className='timing'>
                    {resto.sla.slaString}
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