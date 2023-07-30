import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Meals from './components/Meals/Meals.jsx';
import Header from './components/Header/Header.jsx';
import MealDetails from './components/MealDetails/MealDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: 'about',
    element: <Header></Header>
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
    element: <Header></Header>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
