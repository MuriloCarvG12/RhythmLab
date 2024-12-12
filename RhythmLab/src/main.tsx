import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import PageHome  from './pages/pageHome';
import PageMetronome from './pages/pageMetronome';
import PagePractice from './pages/pagePractice';
import PageTheory from './pages/pageTheory';

import './App.css'

const router = createBrowserRouter(
  [
    { path: '/', element: < PageHome />, },
    {path: '/metronome', element: <PageMetronome /> },
    {path: '/practice', element: <PagePractice/>},
    {path: '/theory', element: <PageTheory/> }

  ]
) // defines which components get rendered in each path

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> /** allows us to put the entry point of our app to the routes from router */
  </React.StrictMode>,
)
