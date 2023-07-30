import { useLoaderData } from "react-router-dom";

const MealDetails = () => {

    const mealDetails = useLoaderData();
    const {idMeal, strMeal, strCategory, strInstructions, strMealThumb, strArea} = mealDetails.meals[0];
    console.log(mealDetails);

    return (
        <div>
            <div>
                <img src={strMealThumb} alt="" />
            </div>
            <h3 className="my-3">{strMeal}</h3>
            <p>ID: {idMeal}</p>
            <p>Area: {strArea}</p>
            <p>Category: {strCategory}</p>
            <p>Instructions: {strInstructions}</p>
        </div>
    );
};

export default MealDetails;