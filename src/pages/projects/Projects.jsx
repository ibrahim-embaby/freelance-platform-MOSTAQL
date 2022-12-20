import { useEffect } from 'react'
import Browser from '../../components/browser/Browser'
import Header from '../../components/header/Header'
import Project from '../../components/project/Project'
import Options from '../../components/options/Options'
import './projects.css'


function Home() {
    useEffect(() => {

        document.title = "المشاريع المفتوحة | مستقل"
    }, [])
    return (
        <>
            <Header path="الرئيسية / المشاريع" title="المشاريع المفتوحة" />
            <div className="main">

                <div className="mainBody">
                    <div className="mainOffers">
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" button />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" button />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" button />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" button />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" button />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" button />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" button />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" button />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" button />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" button />
                        <Project title="عنوان المشروع" username="اسم المستخدم" time="منذ 7 دقائق" offersNumber="عرض واحد" description="تفاصيل المشروع" button />

                        <Browser />
                    </div>
                    <div className="mainOptions">
                        <Options />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home