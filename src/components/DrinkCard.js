const DrinkCard = (props) => {
    
    const {strDrinkThumb, strGlass, strAlcoholic, strCategory,strDrink } =  props.drink;

    return <>
        <div className='m-4 w-[271px] rounded-md' style={ {backgroundColor:"#F4F4F4" }}>
            <div className='resto-image'>
                <img className="h-[220px] w-[271px] p-0 m-0 rounded-md" src={ strDrinkThumb } />
            </div>
            <div className='p-2 border-t-4 border-red-500 rounded-lg font-bold'>
                {strGlass}
            </div>
            <div className='p-2 flex justify-between'>
                <div className='rating'>
                    {strDrink}
                </div>
                <div className='timing'>
                    {strAlcoholic}
                </div>
            </div>
            <div className='p-2'>
                {strCategory}
            </div>
        </div>
    </>
}

export default DrinkCard