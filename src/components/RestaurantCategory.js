import { useState } from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = (props) => {
    const { category, currentAccordion, setChooseCategory } = props;
    const [showItemList, setShowItemList] = useState(false);

    const handleActiveAccordion = () => {
        setChooseCategory()
    }
    return <>
        <div className="bg-gray-50 p-1 rounded-lg m-2 text-xl p-2">
            <div className="flex justify-between my-4 cursor-pointer" onClick={()=> handleActiveAccordion()}>
                <span className="font-bold">{category.title} ({category.itemCards.length})</span>
                {/* <span className="font-bold">^</span> */}
                <span className="">v</span>
            </div>
            {
                currentAccordion ? (
                    category?.itemCards?.map((itemCard, index) =>{
                        return <ItemCard 
                            key={itemCard.card.info.id} 
                            info={itemCard?.card?.info} 
                        />
                    })
                ) : ''
            }
        </div>
    </>
}

export default RestaurantCategory