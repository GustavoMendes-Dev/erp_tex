import React from "react";
import { Route, BrowserRouter as Routers, Switch, Redirect } from "react-router-dom";

import Login from './views/Login'; // Página de Login.
import Forgot from './views/forgot-pass'; // Página de Recuperação de senha.

import Error404 from './views/Layout/pages/error404'

import Dashboard from "./views/dashboard";
import Sales from "./views/Layout/pages/sales";
import Products from "./views/Layout/pages/products";

const RoutesAdmin = () => {
    return(
        <Routers>
            <Switch>
                <Route component = { Login }  path="/login" exact />
                <Route component = { Forgot }  path="/forgot-password" />

                <Route component = { Dashboard }  path="/" exact />
                <Route component = { Sales }  path="/sales" />
                <Route component = { Products }  path="/products" />

                <Route component = { Error404 } />
            </Switch>
        </Routers>
    )
 }
 
 export default RoutesAdmin;