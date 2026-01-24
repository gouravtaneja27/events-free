import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Username() {
    return (
        <>
            <Navbar />
            <section className="username-page py-5 ">
                <div className="container">

                    <p className="path fw_sm fs_md">Home &gt; Username</p>
                  
                    <div className="row align-items-center mb-5">

                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <img
                                src="/assets/images/usermain.png"
                                alt="event"
                                className="w-100 rounded-4"
                            />
                        </div>
                        <div className=" col-lg-8">
                            <h1 className="fs-5xl fw-xl mb-2">Jhone Doe</h1>

                            <div className="d-flex flex-wrap gap-3 mb-3">
                                <button className="btn btn-primary rounded-pill px-4 py-2 fs-md">
                                    Unique journey of meed
                                </button>
                                <button className="btn btn-outline-primary rounded-pill px-4 py-2 fs-md">
                                    Show journey of meed
                                </button>
                            </div>

                            <p className="text-muted fs-2xl mb-4">
                                Duistem volupalis eget augue iaculis hendrerit quis at fringilla.
                                Senectus gravida sed interdum pretium quam morbi cursus non nulla
                                hendrerit vulputate in duis donec eu. Ut vitae dolor fringilla urna
                                eget aliquet.
                            </p>
                            <div className="d-flex flex-wrap gap-4 fs-md text-muted">
                                <span className="d-flex align-items-center gap-2">
                                    <img
                                        src="/assets/images/cl.png"
                                        alt="date"
                                        className="max-w-20"
                                    />
                                    10/02/2022
                                </span>
                                <span className="d-flex align-items-center gap-2">
                                    <img
                                        src="/assets/images/m.png"
                                        alt="location"
                                        className="max-w-20"
                                    />
                                    Mumbai
                                </span>
                                <span className="d-flex align-items-center gap-2">
                                    <img
                                        src="/assets/images/p.png"
                                        alt="likes"
                                        className="max-w-20"
                                    />
                                    1,080
                                </span>
                                <span className="d-flex align-items-center gap-2">
                                    <img
                                        src="/assets/images/g.png"
                                        alt="views"
                                        className="max-w-20"
                                    />
                                    1,080
                                </span>
                                <span className="d-flex align-items-center gap-2">
                                    <img
                                        src="/assets/images/t.png"
                                        alt="ticket"
                                        className="max-w-20"
                                    />
                                    1,080
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center mb-5 g-4">

                        <div className="col-lg-6">
                            <div className="p-4 p-lg-5 bg-white rounded-4 shadow-sm h-100">
                                <div className="mb-3">

                                    <img src="./assets/images/qute.png" alt="quotation mark"></img>


                                </div>
                                <p className="fs-2xl text-muted mb-0">
                                    Semper faucibus suscipit ultrices, sed lorem semper et tellus
                                    gravida pretium. Ocuamsi cursus sit semper eleifend tortor
                                    luctus tristique. Nunc volutpat urnas et tortor consequat non
                                    non arcu facilisi volutpat, diam porttitor. Eu malesuada nunc
                                    mauris faucibus lectus sit. Enim aliquam sollicitudin arcu
                                    cursus sit risus posuere. Metus ut sit aliquet tempus eget ut
                                    amet. Suspendisse gravida molestie porta nunc et, nibh. Sit
                                    malesuada ut nullam pellentesque. Gravida tristique vivamus nec
                                    vitae. Dignissim massa volutpat neque posuere dapibus urna
                                    facilisis viverra vulputate.
                                </p>
                            </div>
                        </div>


                        <div className="col-lg-6">
                            <div className="position-relative rounded-4 overflow-hidden shadow-sm">

                                <iframe width="560" height="315" src="https://www.youtube.com/embed/3LRZRSIh_KE?si=RQsDo1Y4l-7EkDZV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="w-100">
                                </iframe>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <img src="./assets/images/line2.png" alt="line" className="d-flex mx-auto"></img>
                        <h2 className="fs-3xl fw-xl text-center mb-2">Gallery</h2>
                        <div className="d-flex justify-content-center mb-4">

                        </div>
                    </div>
                    <div className="parent gap-sm-4 gap-2">
                        <div className="div41">
                            <img
                                src="./assets/images/r1.png"
                                alt="image1"
                                className="main1-img w-100" />
                        </div>
                        <div className="div42">
                            <img src="./assets/images/r2.png" alt="image2  " className="main1-img w-100" /> </div>
                        <div className="div43">
                            <img src="./assets/images/r3.png" alt="image3 " className="main1-img w-100" /> </div>
                        <div className="div44">
                            <img src="./assets/images/r4.png" alt="image4 " className="main1-img w-100" /> </div>
                        <div className="div45">
                            <img src="./assets/images/r5.png" alt="image5 " className="main1-img w-100" /> </div>
                        <div className="div46">
                            <img src="./assets/images/r6.png" alt="image6" className="main1-img w-100 " /> </div>
                    </div>


                    <div className="mb-4 text-center">
                        <img src="./src/assets/images/line2.png" alt="line" className="mx-auto d-flex mt-67" />
                        <h2 class="tell-us fw_lg fs_2xl text-dark">Tell Us!</h2>
                        <div className="d-flex justify-content-center mb-3">

                        </div>
                        <p className="text-muted fs-2xl mb-0">
                            Duistem volupatipsum eget quisque iaculis hendrerit quis at
                            fringilla. Senectus gravida sed <br />
                            interdum pretium at quam morbi
                            cursus non nulla hendrerit<br /> vulputate in duis donec eu. Ut vitae
                            dolor fringilla urna eget aliquet.
                        </p>
                    </div>
                    <div className="bg-white rounded-4 shadow-sm p-3 p-md-4 mb-4">
                        <div className="d-flex align-items-center gap-3 mb-3">
                            <img
                                src="/assets/images/gl1.png"
                                alt="user"
                                className="rounded-circle"
                                style={{ width: "40px", height: "40px" }}
                            />
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                placeholder="Add a new comment"
                            />
                            <button className="btn btn-primary rounded-pill px-4">
                                Post Comment
                            </button>
                        </div>
                    </div>
                    <div class="pt-md-47 mt-71 ">
                        <div class="d-flex align-items-start mb-24">
                            <img src="./assets/images/gl2.png"
                                alt="profile1"
                                className="rounded-circle"
                                style={{ width: "56px", height: "56px" }}
                            />
                            <div>
                                <div class="box2 ml-20">
                                    <p class="username fw_md fs_lg text-dark">Username</p>
                                    <p class="comment fw_sm fs_lg ">Dictumst vulputate eget quisque iaculis hendrerit quis ut
                                        fringilla. Senectus gravida sed interdum pretium at quam
                                        morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit.
                                        Ut vitae dolor fringilla urna
                                        eget aliquet.</p>
                                </div>
                                <div class="d-flex align-items-center mt-8">
                                    <img src="./assets/images/delete1.png" alt="delete" class="ml-30" />
                                    <p class="remove-comment fw_sm fs_lg mb-0 ml-5">Remove Comment</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-24">
                            <img src="./assets/images/gl3.png" alt="profile2"
                                className="rounded-circle"
                                style={{ width: "56px", height: "56px" }}
                            />
                            <div>
                                <div class="box2 ml-20 ">
                                    <p class="username fw_md fs_lg text-dark">Username</p>
                                    <p class="comment fw_sm fs_lg ">Senectus gravida sed interdum pretium at quam morbi. Nunc,
                                        libero nam cursus sem faucibus urna. Hendrerit vulputate in
                                        duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
                                </div>
                                <div class="d-flex align-items-center mt-8">
                                    <img src="./assets/images/delete1.png" alt="delete" class="ml-30" />
                                    <p class="remove-comment fw_sm fs_lg mb-0 ml-5">Remove Comment</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-24">
                            <img src="./assets/images/gl4.png" alt="profile3"
                                className="rounded-circle"
                                style={{ width: "56px", height: "56px" }} />
                            <div>
                                <div class="box2 ml-20">
                                    <p class="username fw_md fs_lg text-dark">Username</p>
                                    <p class="comment fw_sm fs_lg ">Senectus gravida sed interdum pretium at quam morbi. Nunc,
                                        libero nam cursus sem faucibus urna. Hendrerit vulputate in
                                        duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
                                </div>
                                <div class="d-flex align-items-center mt-8">
                                    <img src="./assets/images/delete1.png" alt="delete" class="ml-30" />
                                    <p class="remove-comment fw_sm fs_lg mb-0 ml-5">Remove Comment</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-24">
                            <img src="./assets/images/gl5.png" alt="profile4"
                                className="rounded-circle"
                                style={{ width: "56px", height: "56px" }} />
                            <div>
                                <div class="box2 ml-20">
                                    <p class="username fw_md fs_lg text-dark">Username</p>
                                    <p class="comment fw_sm fs_lg ">Senectus gravida sed interdum pretium at quam morbi. Nunc,
                                        libero nam cursus sem faucibus urna. Hendrerit vulputate in
                                        duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
                                </div>
                                <div class="d-flex align-items-center mt-8">
                                    <img src="./assets/images/delete1.png" alt="delete" class="ml-30" />
                                    <p class="remove-comment fw_sm fs_lg mb-0 ml-5">Remove Comment</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-24">
                            <img src="./assets/images/gl6.png" alt="profile5"
                                className="rounded-circle"
                                style={{ width: "56px", height: "56px" }} />
                            <div>
                                <div class="box2 ml-20">
                                    <p class="username fw_md fs_lg text-dark">Username</p>
                                    <p class="comment fw_sm fs_lg ">Senectus gravida sed interdum pretium at quam morbi. Nunc,
                                        libero nam cursus sem faucibus urna. Hendrerit vulputate in
                                        duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
                                </div>
                                <div class="d-flex align-items-center mt-8">
                                    <img src="./assets/images/delete1.png" alt="delete" class="ml-30" />
                                    <p class="remove-comment fw_sm fs_lg mb-0 ml-5">Remove Comment</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-24">
                            <img src="./assets/images/gl7.png" alt="profile6"
                                className="rounded-circle"
                                style={{ width: "56px", height: "56px" }} />
                            <div>
                                <div class="box2 ml-20">
                                    <p class="username fw_md fs_lg text-dark">Username</p>
                                    <p class="comment fw_sm fs_lg ">Senectus gravida sed interdum pretium at quam morbi. Nunc,
                                        libero nam cursus sem faucibus urna. Hendrerit vulputate in
                                        duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
                                </div>
                                <div class="d-flex align-items-center mt-8">
                                    <img src="./assets/images/delete1.png" alt="delete" class="ml-30" />
                                    <p class="remove-comment fw_sm fs_lg mb-0 ml-5">Remove Comment</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-24">
                            <img src="./assets/images/gl8.png" alt="profile7"
                                className="rounded-circle"
                                style={{ width: "56px", height: "56px" }} />
                            <div>
                                <div class="box2 ml-20">
                                    <p class="username fw_md fs_lg text-dark">Username</p>
                                    <p class="comment fw_sm fs_lg ">Senectus gravida sed interdum pretium at quam morbi. Nunc,
                                        libero nam cursus sem faucibus urna. Hendrerit vulputate in
                                        duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
                                </div>
                                <div class="d-flex align-items-center mt-8">
                                    <img src="./assets/images/delete1.png" alt="delete" class="ml-30" />
                                    <p class="remove-comment fw_sm fs_lg mb-0 ml-5">Remove Comment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           <Footer />
        </>
    );
}
