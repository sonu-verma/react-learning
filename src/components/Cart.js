import { useDispatch, useSelector } from "react-redux"
import { IMG_URL } from "../utils/constants"
import { clearCart } from "../utils/cartSlice"
const Cart = () => {
    const cartItem = useSelector((store)=> store.cart.items)
    console.log("cartItem", cartItem)
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return <div className="m-4 p-4 text-center">
        <div className="flex justify-center items-center p-2">
            <h1 className="font-bold text-2x">Cart</h1>
            <button className="bg-orange-400 text-black rounded-sm p-4" onClick={handleClearCart}>Clear Cart</button>
        </div>
        {
            cartItem.length ==0 ? <h1>cart is empty</h1> : cartItem?.map((item) => 
                <div className="flex bg-gray-100 p-4 m-4 rounded-lg hover:bg-gray-200 text-left justify-between w-6/12 m-auto" key={item.card.info?.id}>
                    <div className="leading-loose w-9/12 m-4">
                        <div>
                            <span className={ !item.card.info?.isVeg?'bg-red-500 p-1 rounded-xl text-sm': 'bg-green-300 px-3 rounded-xl text-sm'}>{item.card.info?.isVeg?'Veg': 'Non Veg'}</span>
                            <h4><b>{item.card.info?.name}</b></h4>
                            <h4  className="text-sm"><b>Rs.{item.card.info?.defaultPrice /100 || item.card.info?.price /100 }</b></h4>
                                {
                                    (item.card.info?.ratings?.aggregatedRating?.rating)? <h4 className="text-sm" style={ { marginLeft: "0px"}}><span className="font-bold text-3xl text-green-600">*</span>{item.card.info?.ratings.aggregatedRating.rating } ({item.card.info?.ratings.aggregatedRating.ratingCountV2})</h4>: ""
                                } 
                        </div>
                        <div>
                            <p className="text-xs">{ item.card.info?.description }</p>
                        </div>
                    </div>
                    <div className="w-3/12 p-2">  
                        <img className="mx-1 rounded-md w-full"  src={ IMG_URL+item.card.info.imageId} />
                    </div>
                </div> 
            )
        } 
        
    </div>
}


export default Cart