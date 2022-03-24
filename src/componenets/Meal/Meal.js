import React from 'react';
import './Meal.css'

const Meal = ({meal,handleClick}) => {
    // console.log(meal);
    const {strMealThumb,strMeal,strInstructions,strCategory,strArea} = meal
    
    return (
        <div className='meal'>
            <div className='meal-img'>
                <img src={strMealThumb} alt="" />
            </div>
           
           <div className='meal-info'>
               <h4>Title:{strMeal}</h4>
            <p>{strInstructions.slice(0,103)}</p>
            <p>Category:{strCategory}</p>
            <p>Area:a{strArea}</p>
           </div>
            <button className='btnn' onClick={()=>handleClick(meal)}>ADD TO CART</button>
        </div>
    );
};

export default Meal;