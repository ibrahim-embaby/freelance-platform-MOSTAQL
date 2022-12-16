import { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Topbar from '../../components/topbar/Topbar'
import { FaUser, FaMapMarkerAlt } from 'react-icons/fa'
import { IoBriefcaseSharp } from 'react-icons/io5'
import { BiSliderAlt } from 'react-icons/bi'
import './profile.css'


function Profile() {
    useEffect(() => {
        document.title = " Ibrahim Embaby | مستقل"

    }, [])
    return (
        <div className='profile'>
            <Topbar />
            <div className="personalInfo">
                <div className="personalInfoTop">
                    <img className="personalInfoTopImg" src="assets/user.png" alt="" />
                    <div className="personalInfoTopUsername">Ibrahim Embaby</div>
                    <div className="personalInfoTopDetails">
                        <span className='personalInfoTopDetailsIconContainer'><FaUser className='personalInfoTopDetailsIcon' /> مستقل</span>
                        <span className='personalInfoTopDetailsIconContainer'><IoBriefcaseSharp className='personalInfoTopDetailsIcon' />  برمجة، تطوير المواقع والتطبيقات</span>
                        <span className='personalInfoTopDetailsIconContainer'><FaMapMarkerAlt className='personalInfoTopDetailsIcon' /> مصر</span>
                    </div>
                </div>
                <div className="personalInfoBottom">
                    <div className="personalInfoBottomLeft">
                        <div className="personalInfoBottomLeftItem active">
                            <FaUser className='personalInfoBottomLeftItemIcon' /> الملف الشخصي
                        </div>
                        <div className="personalInfoBottomLeftItem">
                            <IoBriefcaseSharp className='personalInfoBottomLeftItemIcon' /> معرض الأعمال
                        </div>
                    </div>
                    <div className="personalInfoBottomRight">
                        <BiSliderAlt className='personalInfoBottomRightIcon' />
                        تعديل الملف الشخصي
                    </div>
                </div>
            </div>
            <div className="profileWrapper">
                <div className="profileWrapperRight"></div>
                <div className="profileWrapperLeft"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile