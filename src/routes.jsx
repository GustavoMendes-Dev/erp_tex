import React from "react";
import { Route, BrowserRouter as Routers } from "react-router-dom";

import Login from './views/login'; // Página de Login.
import Forgot from './views/forgot-pass'; // Página de Recuperação de senha.
import Main from "./views/main";

const RoutesAdmin = () => {
    return(
        <Routers>
            <Route component = { Login }  path="/login" exact />
            <Route component = { Forgot }  path="/forgot-password" />
            <Route component = { Main }  path="/" />
        </Routers>
    )
 }
 
 export default RoutesAdmin;