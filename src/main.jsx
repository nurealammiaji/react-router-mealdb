import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Meals from './components/Meals/Meals.jsx';
import Header from './components/Header/Header.jsx';
import MealDetails from './components/MealDetails/MealDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><App></App><br /><br /><h3>Welcome to MealDB</h3><br /><br /><p>Find delicious meals <Link to='/meals'>here</Link></p></div>
  },
  {
    path: 'about',
    element: <div><Header></Header><br /><br /><h3>About Us</h3></div>
  },
  {
    path: 'meals',
    element: <Meals></Meals>,
    loader: () => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  },
  {
    path:'meal/:mealId',
    element: <MealDetails></MealDetails>,
    loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`)
  },
  {
    path: 'contact',
    element: <div><Header></Header><br /><br /><h3>Contact Us</h3></div>
  },
  {
    path: '*',
    element: <h1>Sorry! Not Found</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
