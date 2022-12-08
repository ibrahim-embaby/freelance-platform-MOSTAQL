import './home.css'
import Topbar from '../../components/topbar/Topbar'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { useEffect } from 'react'



function Home() {
    useEffect(() => {
        document.title = "   لوحة التحكم  | مستقل"

    }, [])
    return (
        <div className='home'>
            <Topbar />
            <Header path="الرئيسية" title="لوحة التحكم" noFilter />
            <Footer />
        </div>

    )
}

export default Home