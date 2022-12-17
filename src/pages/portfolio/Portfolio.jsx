import ProfileHeader from '../../components/profileHeader/ProfileHeader'
import { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Topbar from '../../components/topbar/Topbar'
import './portfolio.css'

function Portfolio() {
    useEffect(() => {
        document.title = " Ibrahim Embaby | معرض الأعمال"

    }, [])
    return (
        <div className='portfolio'>
            <Topbar />
            <ProfileHeader />
            <div className="portfolioWrapper">
                <div className="portfolioWrapperRight"></div>
                <div className="portfolioWrapperLeft"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio