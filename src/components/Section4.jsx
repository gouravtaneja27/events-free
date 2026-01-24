import React from 'react'
import SignUpForm from './Signupform'

export default function Section4() {
return (
    <section className="section4">
        <div className="container">
            <div className="row mb-lg-168 mb-50">
                <div className="col-lg-6 col-12">
                    <img src="/src/assets/images/line2.png" alt="line" className="mb-9" />
                    <h3 className="section4-heading text-dark">Explore our latest events</h3>
                    <p className="fw-sm fs-lg section4-description text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec arcu.</p>
                    <a href="#" className="text-dark learn-more fw-xl fs-lg">LEARN MORE</a>
                </div>
                <div className="col-lg-6 col-12 d-flex justify-content-center">
                    <div className="d-flex gap-24 flex-column flex-sm-row ">
                        <div className="section4-card">
                            <img src="/src/assets/images/sec4-1.png" alt="img" className="w-100" />
                            <p className="card-date fw-sm fs-lg text-dark">09/23/2021</p>
                            <p className="sectio4-card-heading fw-md fs-3xl">Lorem ipsum</p>
                            <p className="section4-card-caption fw-sm fs-lg text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in</p>
                        </div>
                        <div className="section4-card">
                            <img src="/src/assets/images/sec4-2.png" alt="img" className="w-100" />
                            <p className="card-date fw-sm fs-lg text-dark">09/23/2021</p>
                            <p className="sectio4-card-heading fw-md fs-3xl">Lorem ipsum</p>
                            <p className="section4-card-caption fw-sm fs-lg text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row row-gap-5">
                <div className="col-lg-6 col-12">
                    <img src="/src/assets/images/section4-bgimg.png" alt="image" className="w-90" />
                </div>
                <div className="col-lg-6 col-12 ">
                    <img src="/src/assets/images/line2.png" alt="line" />
                    <h3 className="join-us text-dark fs-5xl fw-xl">Join Us !</h3>
                    <p className="section4-caption fw-sm fs-lg text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue</p>


               < SignUpForm />


                </div>
            </div>
        </div>
    </section>
)
}


// function SignUpForm() {
//     const handleSubmit = (e) => {
//         e.preventDefault()
        
//         alert('Form submitted (demo)')
//     }


//     return (
//         <form onSubmit={handleSubmit}>
//             <h4 className="sign-up text-dark fs-4xl fw-xl">Sign Up</h4>
//             <div className="w-100 d-flex justify-content-between mb-16 flex-column flex-sm-row gap-20">
//                 <input type="text" placeholder="First Name " className="px-17 w-sm-49 w-100" />
//                 <input type="text" placeholder="Last Name" className="px-17 w-sm-49 w-100 " />
//             </div>
//             <input type="email" placeholder="Email Address" className="px-17 w-100 mb-16" />
//             <div className="mb-16 d-flex justify-content-between flex-sm-row flex-column gap-20 ">
//                 <input type="password" placeholder="Password" className="px-17 w-sm-49 w-100" />
//                 <input type="password" placeholder="Confirm Password" className="px-17 w-sm-49 w-100" />
//             </div>
//             <textarea placeholder="About Me" className="w-100 textarea"></textarea>
//             <button className="form-button bg-blue w-100 text-light">Sign up</button>
//         </form>
//     )
// }