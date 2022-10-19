import React from "react";
import HomePage from "./pages/HomePage";
import { Outlet, Route } from "react-router-dom";
import Header from "../../components/Header";

function HomeTemplate() {
    return (
        <div className="hometemplate_container">
            <Header />
            <div class="content">
                <Outlet />
            </div>
            <footer className="footer">Footer</footer>
        </div>
    );
}

export default HomeTemplate;
