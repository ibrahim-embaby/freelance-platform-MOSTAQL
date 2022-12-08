import { useEffect } from 'react'
import Browser from '../../components/browser/Browser'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Project from '../../components/project/Project'
import Options from '../../components/options/Options'
import Topbar from '../../components/topbar/Topbar'
import './projects.css'


function Home() {
    useEffect(() => {

        document.title = "المشاريع المفتوحة | مستقل"
    }, [])
    return (
        <>
            <Topbar className="topbar" />
            <Header path="الرئيسية / المشاريع" title="المشاريع المفتوحة" />
            <div className="main">

                <div className="mainBody">
                    <div className="mainOffers">
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" />

                        <Browser />
                    </div>
                    <div className="mainOptions">
                        <Options />
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Home