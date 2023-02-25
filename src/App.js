import React from 'react'
import {  RouterProvider } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./scss/varibles.scss";
import "./scss/style.scss";
import "./scss/common.scss";
import "./scss/modal.scss";
import "./scss/darkmode.scss";
import { router } from './configs/route.config';


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
