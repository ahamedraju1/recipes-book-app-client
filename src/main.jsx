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
import SignIn from './Component/SignIn.jsx';
import SignUp from './Component/SignUp.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import NotFound from './Component/NotFound.jsx';
import Slider from './Component/Slider.jsx';
import RecipeBook from './Component/RecipeBook.jsx';

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
      {
        path: '/',
        Component: Slider
      }

    ]
  },
  {
    path: '/allRecipe',
    Component: AllRecipes,
    loader: () => fetch('http://localhost:5000/recipes')
  },
  {
    path: "/addRecipe",
    element: <PrivateRoutes> <AddRecipe/> </PrivateRoutes>
  },
  {
    path: '/my-recipe',
    element: <PrivateRoutes><MyRecipe></MyRecipe></PrivateRoutes>
  },
  {
    path: '/recipeDetails/:id',
    loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`),
    element: <PrivateRoutes>
      <RecipeDetails></RecipeDetails>
    </PrivateRoutes>
  },
  {
    path: '/signIn',
    Component: SignIn
  }
  ,
  {
    path: '/singUp',
    Component: SignUp
  },
  {
    path: '/recipeBook',
    Component: RecipeBook
  },

  {
    path: '/*',
    Component: NotFound
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
