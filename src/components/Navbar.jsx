
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

  
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    
    const isFeedPage = location.pathname === "/feed";

    return (
        <header
            className={`
                navbar
                ${scrolled ? "navbar-scroll" : ""}
                ${isFeedPage ? "navbar-feed" : ""}
                ${open ? "nav-open" : ""}
            `}
        >
            <nav className="navbar-inner ">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between "> 
                        <div className="d-flex align-items-center header-logo ">
                            <NavLink to="/">
                                <img
                                    src="/assets/images/logo.png"
                                    alt="logo"
                                    className="w-100 max-w-98"
                                />
                            </NavLink>
                            <NavLink to="/">
                                <img
                                    src="/assets/images/Eventfree.png"
                                    alt="logo-text"
                                    className="d-sm-block w-100 max-w-203"
                                />
                            </NavLink>
                        </div>

                        <div className="d-flex justify-content-between gap-30 justify-content-between align-items-center ">
                            <button
                                className={`menu-icon d-lg-none ${open ? "open" : ""}`}
                                onClick={() => setOpen(!open)}
                                aria-label="menu"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>

                            <div className={`hstack gap-5 menu-list ${open ? "show" : ""}`}>
                                <NavLink to="/" className="nav-attribute">
                                    HOME
                                </NavLink>

                                <NavLink to="/events" className="nav-attribute">
                                    EVENTS
                                </NavLink>

                                <NavLink to="/feed" className="nav-attribute">
                                    FEED
                                </NavLink>

                                <NavLink to="/username" className="nav-attribute">
                                    USER NAME
                                </NavLink>

                                <button className="nav-button">
                                    Log Out
                                </button>
                                {/* <Button className="text-white font-semibold text-16" text="Log Out" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
