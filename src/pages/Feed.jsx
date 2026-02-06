



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
