import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './Component/Home.jsx';
import AddRecipe from './Component/AddRecipe.jsx';
import RecipeDetails from './Component/RecipeDetails.jsx';
import AllRecipes from './Component/AllRecipes.jsx';
import MyRecipe from './Component/MyRecipe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('http://localhost:5000/recipes/home')
      },

    ]
  },
  {
    path: '/allRecipe',
    Component: AllRecipes,
    loader: () => fetch('http://localhost:5000/recipes')
  },
  {
    path: "/addRecipe",
    Component: AddRecipe
  },
  {
    path: '/myRecipe',
    element: <MyRecipe></MyRecipe>,
    loader : () => fetch('http://localhost:5000/recipes')
  },
  {
    path: '/recipeDetails/:id',
    loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`),
    element: <RecipeDetails></RecipeDetails>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
