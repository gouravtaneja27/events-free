import React from 'react'


export default function Section3() {
    return (
        <section className="section3 ">
            <div className="container">
                <h3 className="section3-heading fw-xl fs-5xl text-light mx-auto">Lorem ipsum dolor sit amet, consectetur</h3>
                <p className="section3-description fw-sm fs-lg text-light mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec</p>
                <div className="container">
                    <div className="d-flex justify-content-between mw-920 mx-auto pt-78 flex-sm-row flex-column">
                        <div className="d-flex align-items-center flex-column">
                            <img src="/src/assets/images/people3.png" alt="participants" />
                            <h3 className="text-light number fw-xl fs-4xl">8800</h3>
                            <p className="text-light data fw-sm fs-xl">PARTICIPANTS</p>
                        </div>
                        <div className="d-flex align-items-center flex-column">
                            <img src="/src/assets/images/files3.png" alt="participants" />
                            <h3 className="text-light number fw-xl fs-4xl">300</h3>
                            <p className="text-light data fw-sm fs-xl">TOPICS</p>
                        </div>
                        <div className="d-flex align-items-center flex-column">
                            <img src="/src/assets/images/headphone3.png" alt="participants" />
                            <h3 className="text-light number fw-xl fs-4xl">50</h3>
                            <p className="text-light data fw-sm fs-xl">SPEAKERS</p>
                        </div>
                        <div className="d-flex align-items-center flex-column">
                            <img src="/src/assets/images/cup3.png" alt="participants" />
                            <h3 className="text-light number fw-xl fs-4xl">30</h3>
                            <p className="text-light data fw-sm fs-xl">AWARDS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}