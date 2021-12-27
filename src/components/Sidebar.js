import React, {useState} from 'react';
import logo from '../img/logo.png'
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import About from "../pages/About";

const Sidebar = () => {

    return (
        <BrowserRouter>
            <div className="sidebar">
                <NavLink className="sidebar__img" to="/home">
                    <img src={logo} alt=""/>
                </NavLink>
                <div className="sidebar__link">
                    <i className='bx bx-list-ul'></i>Меню
                </div>
                <NavLink className="sidebar__link" activeClassName="active__link" to="/home">
                    <i className='bx bx-home'></i>Главная страница
                </NavLink>
                <NavLink className="sidebar__link" activeClassName="active__link" to="/catalog">
                    <i className='bx bx-home'></i>Каталог
                </NavLink>
                <NavLink className="sidebar__link" activeClassName="active__link" to="/about">
                    <i className='bx bx-home'></i>О нас
                </NavLink>
                <div className="sidebar__link">
                    <i className='bx bx-dots-horizontal-rounded'></i>показать еще
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Sidebar;