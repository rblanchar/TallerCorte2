import React from "react";
import { useAuth } from "./AuthProvider";
import Navbar from "./NavBar";
import './Dashboard.css';

const Dashboard = () => {
    const auth = useAuth();

    return (
        <div>
            <Navbar />
            <h3 className="titleH3">MAS VENDIDOS {/* {auth.user} */}</h3>
            <div className="wrapper">
                <div className="container2">
                    <ul className="options-list">
                        <li>DIJE ARBOL DE LA VIDA</li>
                    </ul>
                </div>
                <div className="container3">
                    <ul className="options-list">
                        <li>DIJE CRISTO</li>
                    </ul>
                </div>
                <div className="container4">
                    <ul className="options-list">
                        <li>DIJE ANCLA</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
