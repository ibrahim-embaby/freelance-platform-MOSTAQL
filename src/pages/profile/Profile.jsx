import { useEffect } from 'react'

import './profile.css'
import ProfileHeader from '../../components/profileHeader/ProfileHeader'


function Profile() {
    useEffect(() => {
        document.title = " Ibrahim Embaby | مستقل"

    }, [])
    return (
        <div className='profile'>
            <ProfileHeader />
            <div className="profileWrapper">
                <div className="profileWrapperRight"></div>
                <div className="profileWrapperLeft"></div>
            </div>
        </div>
    )
}

export default Profile