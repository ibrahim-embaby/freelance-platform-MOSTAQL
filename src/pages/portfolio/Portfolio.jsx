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
            <ProfileHeader portfolio />
            <div className="portfolioWrapper">
                <div className="portfolioBody">
                    لا توجد نتائج بحث
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio