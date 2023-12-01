import {createBrowserRouter} from "react-router-dom";
import React from "react";
import TopPage from "../Pages/TopPage";
import ErrorPage from "../Pages/ErrorPage"
import {Layout} from "../Components/Layout/Leyout"
import Characters from "../Pages/Characters";
import FramesVS from "../Pages/FramesVS";
import Tier from "../Pages/Tier";
import Tips from "../Pages/Tips";

export const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:"/",
        element:<TopPage/>
      },{
        path:"/characters",
        element:<Characters/>
      },{
        path:"/framesvs",
        element:<FramesVS/>
      },{
        path:"/tier",
        element:<Tier/>
      },{
        path:"tips",
        element:<Tips/>
      }]
  }])