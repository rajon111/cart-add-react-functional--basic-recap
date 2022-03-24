import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals,setMeals]= useState([])
    const[cart,setCart] = useState([])
    console.log(cart);

    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[])
    const handleClick =(meal)=>{
        const newCart =[...cart,meal]
        setCart(newCart)
    }
    return (
        <div className='meals'>
                
            <div className="meal-container">
                
                {
                  meals.map(meal=><Meal key={meal.idMeal} meal={meal} handleClick={handleClick}></Meal>)  
                }
            </div>

            <div className="cart-container">
                <h2>Cart container:{cart.length}</h2>

                    {
                        cart.map(item=> <div><h3>Item:{item.strMeal}</h3> <p>Subcategory:{item.strCategory}</p>
                        </div> )
                    }
            </div>
        </div>
    );
};

export default Meals;