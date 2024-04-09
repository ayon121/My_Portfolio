import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Pages/layout/Root';
import Home from './Components/Pages/Home/Home';
import ErrorPage from './Components/Pages/ErrorPAge/ErrorPage';
import AllProjects from './Components/Pages/AllProjects/AllProjects';
import Contactme from './Components/Pages/Contactme/Contactme';
import ProjectDetails from './Components/Pages/ProjectDetails/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home> </Home>
      },
      {
        path : '/projects',
        element : <AllProjects></AllProjects>
      },
      {
        path : "/contact", 
        element : <Contactme></Contactme>
      },
      {
        path : "/projectDetails/:id" , 
        element : <ProjectDetails></ProjectDetails>,
        loader : () => fetch('projects.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
