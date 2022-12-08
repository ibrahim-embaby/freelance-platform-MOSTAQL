import Footer from '../../components/footer/Footer'
import Topbar from '../../components/topbar/Topbar'
import Header from '../../components/header/Header'
import './myOffers.css'
import { useEffect } from 'react'



function MyOffers() {
    useEffect(() => {
        document.title = " العروض الخاصة بي  | مستقل"

    }, [])
    return (
        <div className='myOffers'>
            <Topbar />
            <Header path="الرئيسية" title="العروض الخاصة بي" />
            <Footer />
        </div>
    )
}

export default MyOffers