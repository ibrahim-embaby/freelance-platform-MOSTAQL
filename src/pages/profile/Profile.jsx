import { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Topbar from '../../components/topbar/Topbar'
import './profile.css'


function Profile() {
    useEffect(() => {
        document.title = " Ibrahim Embaby | مستقل"

    }, [])
    return (
        <div className='profile'>
            <Topbar />
            <Footer />
        </div>
    )
}

export default Profile