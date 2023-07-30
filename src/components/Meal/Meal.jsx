import Col from 'react-bootstrap/Col';
import { Link} from 'react-router-dom';

const Meal = ({meal}) => {

    const {idMeal, strMeal, strMealThumb} = meal;

    return (
        <Col className="bg-light rounded p-2 col-4 border border-primary">
            <div className='mb-2 w-100 h-50'>
                <img className='w-100 h-100 rounded' src={strMealThumb} alt=""/>
            </div>
            <h3 className='my-3'>{strMeal}</h3>
            <br /><br />
            <Link to={`/meal/${idMeal}`}><button className='rounded'>Meal Details</button></Link>
        </Col>
    );
};

export default Meal;