// import React from 'react'


// export default function Section2() {
//     return (
//         <section className="section2">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-6 col-12">
//                         <img src="/src/assets/images/section-2.png" alt="image" className="w-100" />
//                     </div>
//                     <div className="col-lg-6 col-12">
//                         <img src="/src/assets/images/line2.png" alt="line" />
//                         <h2 className="text-dark fw-xl fs-5xl section2-heading">What make us special ?</h2>
//                         <p className="fw-sm fs-lg section2-description text-dark">Lorem ipsum dolor sit amet, consectetur
//                             adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit cursus,</p>


//                         <div className="row ">
//                             <div className="col-lg-6 ">
//                                 <div className="main-card d-flex justify-content-center">
//                                     <div className="section2-card position-relative">
//                                         <div className="card-circle position-absolute d-flex justify-content-center align-items-center">
//                                             <img src="/src/assets/images/sharing.png" alt="sharing" />
//                                         </div>
//                                         <div className="card-data">
//                                             <h4 className="card-heading fw-md fs-3xl text-blue d-flex justify-content-center">sharing</h4>
//                                             <p className="card-description fw-sm fs-lg text-light-blue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 ">
//                                 <div className="main-card d-flex justify-content-center">
//                                     <div className="section2-card position-relative ">
//                                         <div className="card-circle position-absolute d-flex justify-content-center align-items-center">
//                                             <img src="/src/assets/images/info.png" alt="info" />
//                                         </div>


//                                         <div className="card-data">
//                                             <h4 className="card-heading fw-md fs-3xl text-blue d-flex justify-content-center">info</h4>
//                                             <p className="card-description fw-sm fs-lg text-light-blue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row d-flex justify-content-center">
//                             <div className="col-lg-6 col-12">
//                                 <div className="main-card d-flex justify-content-center mt-20">
//                                     <div className="section2-card position-relative ">
//                                         <div className="card-circle position-absolute d-flex justify-content-center align-items-center">
//                                             <img src="/src/assets/images/help.png" alt="help" />
//                                         </div>
//                                         <div className="card-data">
//                                             <h4 className="card-heading fw-md fs-3xl text-blue d-flex justify-content-center">Help</h4>
//                                             <p className="card-description fw-sm fs-lg text-light-blue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </div>


//         </section>
//     )
// }

import React, { useState } from 'react'

export default function Section2() {

    const [playVideo, setPlayVideo] = useState(false);

    return (
        <section className="section2">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12">

                        {!playVideo ? (
                            <div className="video-thumbnail position-relative" onClick={() => setPlayVideo(true)} style={{ cursor: "pointer" }}>
                                <img src="/assets/images/iiii.png" alt="video thumbnail" className="w-100" />

                         
                              
                            </div>
                        ) : (
                            <iframe
                                width="100%"
                                height="400"
                                    src="https://www.youtube.com/embed/qjzqgiIVM5k?autoplay=1"
                                title="Video"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        )}

                    </div>

                    <div className="col-lg-6 col-12">
                        <img src="/assets/images/line2.png" alt="line" />
                        <h2 className="text-dark fw-xl fs-5xl section2-heading">What make us special ?</h2>
                        <p className="fw-sm fs-lg section2-description text-dark">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit.
                        </p>

                        <div className="row ">
                            <div className="col-lg-6 ">
                                <div className="main-card d-flex justify-content-center">
                                    <div className="section2-card position-relative">
                                        <div className="card-circle position-absolute d-flex justify-content-center align-items-center">
                                            <img src="/assets/images/sharing.png" alt="sharing" />
                                        </div>
                                        <div className="card-data">
                                            <h4 className="card-heading fw-md fs-3xl text-blue d-flex justify-content-center">sharing</h4>
                                            <p className="card-description fw-sm fs-lg text-light-blue">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 ">
                                <div className="main-card d-flex justify-content-center">
                                    <div className="section2-card position-relative ">
                                        <div className="card-circle position-absolute d-flex justify-content-center align-items-center">
                                            <img src="/assets/images/info.png" alt="info" />
                                        </div>
                                        <div className="card-data">
                                            <h4 className="card-heading fw-md fs-3xl text-blue d-flex justify-content-center">info</h4>
                                            <p className="card-description fw-sm fs-lg text-light-blue">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 col-12">
                                <div className="main-card d-flex justify-content-center mt-20">
                                    <div className="section2-card position-relative ">
                                        <div className="card-circle position-absolute d-flex justify-content-center align-items-center">
                                            <img src="/assets/images/help.png" alt="help" />
                                        </div>
                                        <div className="card-data">
                                            <h4 className="card-heading fw-md fs-3xl text-blue d-flex justify-content-center">Help</h4>
                                            <p className="card-description fw-sm fs-lg text-light-blue">Lorem ipsum dolor sit amet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
