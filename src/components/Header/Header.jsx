import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='bg-light d-flex align-items-center justify-content-between rounded p-2'>
                <h2>MealDB</h2>
                <nav>
                    <Link className='me-3' to="/">Home</Link>
                    <Link className='me-3' to="/about">About</Link>
                    <Link className='me-3' to="/meals">Meals</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </>
    );
};

export default Header;