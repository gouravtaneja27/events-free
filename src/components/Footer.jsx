import React from 'react'


export default function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="row row-gap-5">
                    <div className="col-lg-6 col-12">
                        <img src="/src/assets/images/footer-logo.svg" alt="logo" className="w-100 max-w-316" />
                        <p className="footer-description text-light fw-sm fs-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.c</p>
                        <div className="d-flex justify-content-between width-100">
                            <img src="/src/assets/images/insta.svg" alt="instagram" className="social-media" />
                            <img src="/src/assets/images/facebook.svg" alt="facebook" className="social-media" />
                            <img src="/src/assets/images/twitter.svg" alt="twitter" className="social-media" />
                        </div>
                    </div>


                    <div className="col-lg-6 col-12">
                        <div className="row row-gap-5">
                            <div className="col-lg-6 col-12 d-flex">
                                <ul>
                                    <li className="main fw-xl fs-md text-light">SERVICES</li>
                                    <li className="sub-main text-light fw-sm fs-sm">About</li>
                                    <li className="sub-main text-light fw-sm fs-sm">News</li>
                                    <li className="sub-main text-light fw-sm fs-sm">ullamcorper</li>
                                    <li className="sub-main text-light fw-sm fs-sm">Contact</li>
                                </ul>
                                <ul>
                                    <li className="main fw-xl fs-md text-light">EVENTS</li>
                                    <li className="sub-main text-light fw-sm fs-sm">ullamcorper</li>
                                    <li className="sub-main text-light fw-sm fs-sm">ullamcorpers</li>
                                    <li className="sub-main text-light fw-sm fs-sm">ullamcorper</li>
                                    <li className="sub-main text-light fw-sm fs-sm">ullamcorper</li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-12">
                                <h3 className="main fw-xl fs-md text-light">GALLERY</h3>
                                <div className="grid-parent">
                                    <div className="div11"> <img src="/src/assets/images/g1.png" alt="" className="w-100" />
                                    </div>
                                    <div className="div12"><img src="/src/assets/images/g2.png" alt="" className="w-100" />
                                    </div>
                                    <div className="div31"><img src="/src/assets/images/g3.png" alt="" className="w-100" />
                                    </div>
                                    <div className="div14"><img src="/src/assets/images/g4.png" alt="" className="w-100" />
                                    </div>
                                    <div className="div15"><img src="/src/assets/images/g5.png" alt="" className="w-100" />
                                    </div>
                                    <div className="show-box"><a href="#" className=" text-light show-more fw-xl fs-sm">Show <br /> More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <p className="text-light d-flex justify-content-center fs-sm fw-sm mt-10">© Credits of companyName belong to companyName.</p>
                </div>
            </div>
        </section>
    )
}