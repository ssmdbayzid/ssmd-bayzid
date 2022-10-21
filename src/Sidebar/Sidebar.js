import React from 'react';
import {BiUserCircle} from "react-icons"

const Sidebar = () => {

    const menuItem = [
        {
            path: "/home",
            name: "/",
            Icons: <BiUserCircle />>,
        },
        {
            path: "#about",
            name: "/",
            Icons: <BiUserCircle />>,
        },
        {
            path: "#services",
            name: "/",
            Icons: <BiUserCircle />>,
        },
        {
            path: "#contact",
            name: "/",
            Icons: <BiUserCircle />>,
        },
        {
            path: "/project/:id",
            name: "/",
            Icons: <BiUserCircle />>,
        },
        {
            path: "/",
            name: "/",
            Icons: <BiUserCircle />>,
        },
    ]


    return (
        <div>
            This is Side bar
        </div>
    );
};

export default Sidebar;