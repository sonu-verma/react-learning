const DrinkCard = (props) => {
    
    const {strDrinkThumb, strGlass, strAlcoholic, strCategory,strDrink } =  props.drink;

    return <>
        <div className='resto-card'>
            <div className='resto-image'>
                <img src={ strDrinkThumb } />
            </div>
            <div className='card-title'>
                {strGlass}
            </div>
            <div className='time-rating'>
                <div className='rating'>
                    {strDrink}
                </div>
                <div className='timing'>
                    {strAlcoholic}
                </div>
            </div>
            <div className='cuisine'>
                {/* { getLimitedWords(resto.cuisines.join(", ") ,5)} */}
            </div>
            <div className='location'>
                {strCategory}
            </div>
        </div>
    </>
}

export default DrinkCard