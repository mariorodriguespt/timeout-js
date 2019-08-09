import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'mobx-react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import stores from './stores';
import { HomePage } from './pages';



ReactDOM.render(
    <Provider { ...stores }>
        <BrowserRouter>
            <MainLayout>
                <Route exact path='/' component={ HomePage }/>
            </MainLayout>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
);