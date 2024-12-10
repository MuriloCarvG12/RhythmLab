import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import  Page1  from './pages/page1';
import Page2 from './pages/page2';
import './App.css'

const router = createBrowserRouter(
  [
    { path: '/', element: < Page1 />, },
    {path: '/test', element: <Page2/> },
  ]
) // defines which components get rendered in each path

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> /** allows us to put the entry point of our app to the routes from router */
  </React.StrictMode>,
)
