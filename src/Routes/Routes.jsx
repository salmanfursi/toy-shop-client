import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import ErrorElement from '../Component/ErrorPage/ErrorElement';

import Blogs from '../Component/Blog/Blog';
import Login from '../Component/Login/Login';
import Register from '../Component/Register/Register';
import Home from '../Component/Home/Home/Home';
import AddToys from '../Pages/AddToy/Addtoy';
import AllToys from '../Pages/AllToy/AllToys';
import PrivateRoute from './PrivateRoute';
import ToyCardDetails from '../Pages/AllToy/ToyCardDetails';
import CategoryDetails from '../Component/ShopByCategory/CateGoryDetails';
import MyToys from '../Pages/MyToy/MyToys';
import UpdateToy from '../Pages/MyToy/UpdateToy';

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      errorElement: <ErrorElement></ErrorElement>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "/addtoy",
            element: <AddToys></AddToys>
         },
         {
            path: "/alltoy",
            element: <AllToys></AllToys>,
            loader: () =>
               fetch("https://toy-shop-server-dgsz5cipj-salmanfursi.vercel.app//toys"),
         },
         {
            path: "/toyCardDetails/:id",
            element: (
               <PrivateRoute>
                  <ToyCardDetails></ToyCardDetails>
               </PrivateRoute>
            ),
            loader: ({ params }) =>
               fetch(
                  `https://toy-shop-server-dgsz5cipj-salmanfursi.vercel.app//${params.id}`
               ),
         },
         {
            path: "/categoryDetails/:id",
            element: (
               <PrivateRoute>
                  <CategoryDetails></CategoryDetails>
               </PrivateRoute>
            )
         },
         {
            path: "/mytoy",
            element: (
               <PrivateRoute>
                  <MyToys></MyToys>
               </PrivateRoute>
            ),
         },
         {
            path: "/updateToy/:id",
            element: <UpdateToy></UpdateToy>,
            loader: ({ params }) =>
              fetch(
                `https://toy-shop-server-dgsz5cipj-salmanfursi.vercel.app//toys/${params.id}`
              ),
          },
         {
            path: "/login",
            element: <Login></Login>
         },
         {
            path: "/register",
            element: <Register></Register>
         },
         {
            path: "/blog",
            element: <Blogs></Blogs>
         }

      ]
   },
]);

export default router;