import React from 'react';
import { Link } from "react-router-dom";

export const NavLinker = ({ path, text }) => {
    const pathname = window.location.pathname;
    let isActive = ((pathname === path) ? "active" : "");
    return (
        <Link to={path} className={`nav-link ${isActive}`}>{text}</Link>
    );
}