import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login/Index";
import User from "./Pages/User/Index";
import Home from "./Pages/Home/Index";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/userlist',
        element: <User/>
    },
    {
        path: '/home',
        element: <Home/>
    }
])