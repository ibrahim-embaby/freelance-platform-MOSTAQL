import Header from '../../components/header/Header'
import './myOffers.css'
import { useEffect } from 'react'



function MyOffers() {
    useEffect(() => {
        document.title = " العروض الخاصة بي  | مستقل"

    }, [])
    return (
        <div className='myOffers'>
            <Header path="الرئيسية" title="العروض الخاصة بي" />
        </div>
    )
}

export default MyOffers