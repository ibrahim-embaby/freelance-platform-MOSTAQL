import { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'
import ProfileHeader from '../../components/profileHeader/ProfileHeader'


function Profile() {
    useEffect(() => {
        document.title = " Ibrahim Embaby | مستقل"

    }, [])
    return (
        <div className='profile'>
            <Topbar />
            <ProfileHeader />
            <div className="profileWrapper">
                <div className="profileWrapperRight"></div>
                <div className="profileWrapperLeft"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile