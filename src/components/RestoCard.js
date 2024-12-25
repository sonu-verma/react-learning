import { getLimitedWords } from '../utils/common'
import { IMG_URL } from '../utils/constants';

const RestoCard = (props) => {
    const {resto} =  props;
    return (
        <div className='m-4 w-[271px] rounded-md bg-gray-100 hover:bg-gray-200'>
            <div className='resto-image'>
                <img className='h-[220px] w-[271px] p-0 m-0 rounded-md' src={IMG_URL + resto.cloudinaryImageId} />
            </div>
            <div className='p-2 h-16 border-t-4 border-red-500 rounded-lg font-bold'>
                {resto.name}
            </div>
            <div className='p-2 flex justify-between'>
                <div className='rating'>
                    {resto.avgRating} Star
                </div>
                <div className='timing'>
                    {resto.sla?.slaString}
                </div>
            </div>
            <div className='p-2 h-16'>
                { getLimitedWords(resto.cuisines.join(", ") ,5)}
            </div>
            <div className='p-2'>
                {resto.areaName}
            </div>
        </div>
    );
}

export default RestoCard