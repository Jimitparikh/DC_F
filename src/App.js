import React, {useEffect} from 'react'
import {  RouterProvider } from 'react-router-dom'
import { router } from './configs/route.config';
import { gapi } from 'gapi-script';

function App() {
  useEffect(()=> {
    function start(){
      gapi.client.init({
        clientId : "1021250016588-dbm8d47js5vu8jkqgkok7gl9i2baa2qi.apps.googleusercontent.com",
        scope : ""
      })
    }
    gapi.load('client:auth2', start)
  })
  return (
    <RouterProvider router={router} />
  );
}

export default App;
