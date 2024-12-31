import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addToCart } from "../utils/cartSlice";

const ItemCard = (props) => {
    const { info, item } = props
    
    const dispatch = useDispatch();

    const handleAddToCartItem = (item) => {
        dispatch(addToCart({...item, qty: 1 }))
        console.log("item,", item)
    }
    return <>
        {
         <div className="flex bg-gray-100 p-4 mb-2 rounded-lg hover:bg-gray-200 " key={info?.id}>
            <div className="info-div leading-loose w-9/12">
                <div>
                    <span className={ !info?.isVeg?'bg-red-500 p-1 rounded-xl text-sm': 'bg-green-300 px-3 rounded-xl text-sm'}>{info?.isVeg?'Veg': 'Non Veg'}</span>
                    <h4><b>{info?.name}</b></h4>
                    <h4  className="text-sm"><b>Rs.{info?.defaultPrice /100 || info?.price /100 }</b></h4>
                        {
                            (info?.ratings?.aggregatedRating?.rating)? <h4 className="text-sm" style={ { marginLeft: "0px"}}><span className="font-bold text-3xl text-green-600">*</span>{info?.ratings.aggregatedRating.rating } ({info?.ratings.aggregatedRating.ratingCountV2})</h4>: ""
                        } 
                </div>
                <div>
                    <p className="text-xs">{ info?.description }</p>
                </div>
            </div>
            <div className="w-3/12 p-4">
                <div className="absolute ">
                    <button className="px-1 mx-11 text-black bg-orange-400 rounded-sm" onClick={ () => handleAddToCartItem(item) }>Add +</button>
                </div>    
                <img className="mx-1 rounded-md w-full"  src={ IMG_URL+info.imageId} />
            </div>
        </div> 
        }
    </>
}

export default ItemCard