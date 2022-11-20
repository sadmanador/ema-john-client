import React from 'react';
import { Outlet } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import Header from '../components/Header/Header';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <BreadCrumbs></BreadCrumbs>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;