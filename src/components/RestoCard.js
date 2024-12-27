import { getLimitedWords } from '../utils/common'
import { IMG_URL } from '../utils/constants';

const RestoCard = (props) => {
    const {resto} =  props;
    return (
        <div className='m-4 w-[271px] rounded-md bg-gray-100 hover:bg-gray-200'>
            <div className='resto-image'>
                <img className='h-[220px] w-[271px] p-1 m-0 rounded-lg' src={IMG_URL + resto.cloudinaryImageId} />
            </div>
            <div className='p-2 h-16 border-t-4 border-red-500 rounded-lg font-bold hover:border-orange-400'>
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

export const WithPromotedRestoCard = (RestoCard) => {
    // console.log("RestoCard", RestoCard);
    return (props) => {
        return (
            <div>
                <label className='absolute mt-2 ml-5 px-2 bg-green-700 text-white rounded-sm'>Veg</label>
                <RestoCard {...props} />
             </div>
        )
    }
}

export default RestoCard

// {
//     position: absolute;
//     margin-top: 3px;
//     margin-left: 18px;
//     background: green;
//     color: white;
//     padding: 3px;
//     border-radius: 10px;
// }