import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Meal from "../Meal/Meal";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Meals = () => {

    const meals = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Container fluid>
                <Row className="my-3 row row-cols-auto">
                    {
                        meals?.meals.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Meals;