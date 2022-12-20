import ProfileHeader from '../../components/profileHeader/ProfileHeader'
import { useEffect } from 'react'
import './portfolio.css'

function Portfolio() {
    useEffect(() => {
        document.title = " Ibrahim Embaby | معرض الأعمال"

    }, [])
    return (
        <div className='portfolio'>
            <ProfileHeader portfolio />
            <div className="portfolioWrapper">
                <div className="portfolioBody">
                    لا توجد نتائج بحث
                </div>
            </div>
        </div>
    )
}

export default Portfolio