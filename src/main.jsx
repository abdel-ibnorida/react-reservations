import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Home from './components/Home/Home.jsx';
import DefaultLayout from './layouts/DefaultLayout.jsx';
import Login from './components/Login/Login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path='rooms' element={
        <h1>
          stanze
        </h1>}
      />
      <Route path="/room/:id" element={
        <h1>
          stanza
        </h1>
      }
      />
      <Route path='faq' element={
        <h1>
          faq
        </h1>}
      />
      <Route path='login' element={<Login/>}/>
      <Route path='dashboard' element={
        <h1>
          dash
        </h1>}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
