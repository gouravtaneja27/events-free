// src/pages/Feed.jsx

// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Feed() {
//     return (
//         <>
//             <Navbar />
           

//             <div class="container">
//                 <div class="row mt-87  row-gap-5">
//                     <div class="col-xl-4 ">
//                         <img src="./src/assets/images/rj1.png" alt="profile picture" class=" cursor w-100 " />
//                     </div>
//                     <div class="col-xl-8">
//                         <p class="text_color_grey fw_sm fs_lg font-family line-height-150">Home &gt; Feed</p>
//                         <h2 class="fw_lg fs_4xl font-family line-height-150  text-dark">Jhone Doe</h2>
//                         <p class="fw_sm fs_lg font-family line-height-150 text_color_grey">Dictumst vulputate eget quisque
//                             iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam
//                             morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut
//                             vitae dolor fringilla urna
//                             eget aliquet.</p>
//                         <p class="fw_lg fs_lg  text_color_grey font-family line-height-150 ">Following Events :</p>
//                         <div class="d-flex justify-content-between flex-md-row flex-column gap-md-0 gap-4">
//                             <div class="card1 d-flex align-items-center gap-3  ">
//                                 <img src="./src/assets/images/rj2.png" alt="image" class="w-100  " />
//                                 <div>
//                                     <h2 class="fw_xl fs_lg font-family line-height-100 text-dark">Augue etiam</h2>
//                                     <p class="fw_sm fs_sm font-family line-height-100 text_color_grey">Quis et id urna
//                                         sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis.</p>
//                                 </div>
//                             </div>
//                             <div class="card1 d-flex align-items-center gap-3">
//                                 <img src="./src/assets/images/rj3.png" alt="image" class="w-100 " />
//                                 <div>
//                                     <h2 class="fw_xl fs_lg font-family line-height-100 text-dark">Augue etiam</h2>
//                                     <p class="fw_sm fs_sm font-family line-height-100 text_color_grey">Quis et id urna
//                                         sagittis. Enim lacus, felis, libero sed nisl vitae blandit sociis.</p>
//                                 </div>
//                             </div>
//                             <a href="" class="card2 d-flex align-items-center flex-column bg_color_lavender">
//                                 <p class="fw_lg fs_3xl font-family line-height-150 text_number_color_grey">+15</p>
//                                 <p class="fw_sm fs_lg font-family line-height-150 text_number_color_grey">more</p>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
           
//             </>
        
//     );
// }



import React from 'react'
import FeedSection1 from '../components/FeedSection1'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CommentsSection from '../components/CommentsSection'

const Feed = () => {
    return (
        <div>
            <Navbar />
            <FeedSection1 />
            <CommentsSection />
            <Footer />
        </div>
    )
}

export default Feed
