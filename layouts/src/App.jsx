import { Home } from 'lucide-react'
import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import AppLayout from './components/layouts/AppLayout';
import ProductLayout from './components/layouts/product/ProductLayout';
import Product from './components/pages/Product';
import ProductList from './components/ProductList';
import Error from './components/pages/Error';


function App() {
  

  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },   
        {
          path: "/about",
          element: <About />,
        },   
        {
          path: "/contact",
          element: <Contact />,
        },   
      ]
    },
    {
      path: "/product",
      element: <ProductLayout />,
      children: [
        {
          path: "/product/products",
          element: <Product />,
        },   
        {
          path: "/product/products-list",
          element: <ProductList />,
        },   
        {
          path: "/product/3",
          element: <Contact />,
        },   
      ]
    },
    {
      path: "*",
      element: <AppLayout />,
      children: [
        {
          path: "*",
          element: <Error />,
        },   
      ]
    }
  ]);

  return (
  <RouterProvider router={router} />
  )
}

export default App
