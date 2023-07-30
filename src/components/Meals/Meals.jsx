import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

const Meals = () => {

    const meals = useLoaderData();
    console.log(meals);

    return (
        <div>
            <Header></Header>
        </div>
    );
};

export default Meals;