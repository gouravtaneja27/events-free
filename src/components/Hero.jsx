// src/components/Hero.jsx
import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

export default function Hero() {
    return (
        <section className="header">
            <Navbar />
            <div className="container">
                <h2 className="text-light fs-6xl fw-xl header-heading position-relative h-100">
                    <img
                        src="/assets/images/lin1.png"
                        alt="line"
                        className="line w-100 max-w-472 position-absolute"
                    />
                    Sed tortor in quisque morbi
                    scelerisque etiam eu.
                </h2>

                <p className="caption  fw-sm fs-2xl text-light position-relative ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficituro
                    
                    urna in dictum<br /> suscipit. Suspendisse maximus ipsum sem. Donec ut
                    justo et leo congue lacinia vitae nec <br />
                    arcu. Nunc elit elit, malesuada id suscipit cursus,
                </p>
             

                <div className="d-flex justify-content-between align-items-center w-309 pt-33">
                    <button className="get-started fs-2xl fw-lg text-light header-button bg-blue">
                        Get Started
                    </button>
                    {/* <Button
                        text="Get Started"
                        className="hero-btn" 
                        onClick={() => alert("Clicked")}
                    /> */}
                  
                
                    <a href="#" className="learn-more fw-400 fs-2xl text-light">
                        Learn more
                    </a>
                </div>

                <div className="blue-box d-flex justify-content-between  position-relative flex-md-row flex-column z-1">
                    <div className="d-flex justify-content-between align-items-center width-lg-178 width-md-150 mx-auto mx-lg-0">
                        <img
                            src="/assets/images/map.png"
                            alt="location"
                            className="w-100 max-w-24"
                        />
                        <div className="ml-20">
                            <p className="bluebox-main text-light fw-md fs-2xl">Location</p>
                            <p className="bluebox-submain text-light fw-sm fs-md">
                                Search by city
                            </p>
                        </div>
                        <div className="white-line d-none d-md-block"></div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center width-lg-178 width-md-150 mx-auto mx-lg-0">
                        <img
                            src="/assets/images/vector.png"
                            alt="date"
                            className="w-100 max-w-23"
                        />
                        <div className="ml-20">
                            <p className="bluebox-main text-light fw-md fs-2xl">Date</p>
                            <p className="bluebox-submain text-light fw-sm fs-md">
                                09/23/2021
                            </p>
                        </div>
                        <div className="white-line d-none d-md-block"></div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center width-ld-178 width-md-150 mx-auto mx-lg-0">
                        <img
                            src="/assets/images/capacity.svg"
                            alt="capacity"
                            className="w-100 max-w-30"
                        />
                        <div className="ml-20">
                            <p className="bluebox-main text-light fw-md fs-2xl">Capicity</p>
                            <p className="bluebox-submain text-light fw-sm fs-md">
                                Search by city
                            </p>
                        </div>
                        <div className="white-line d-none d-md-block"></div>
                    </div>

                    <button className="white-button text-blue go-check fw-xl fs-2xl">
                        GO CHECK
                    </button>
                </div>
            </div>
        </section>
    );
}
