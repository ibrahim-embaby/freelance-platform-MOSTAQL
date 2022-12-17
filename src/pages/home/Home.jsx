import './home.css'
import Topbar from '../../components/topbar/Topbar'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Project from '../../components/project/Project'
import { BiSliderAlt } from 'react-icons/bi'
import { HiCheckCircle } from 'react-icons/hi'
import { MdAddCircle } from 'react-icons/md'
import { TbCircle } from 'react-icons/tb'
import { QueryBuilder } from '@material-ui/icons'
import { useEffect } from 'react'



function Home() {
    useEffect(() => {
        document.title = "   لوحة التحكم  | مستقل"

    }, [])
    return (
        <div className='home'>
            <Topbar />
            <Header path="الرئيسية" title="لوحة التحكم" noFilter />
            <div className="homeWrapper">
                <div className="homeRight">
                    <div className="homeRightInfo homeRightItem">
                        <div className="homeRightInfoTop border">
                            <img className='homeRightInfoTopImg' src={process.env.PUBLIC_URL + "/assets/user.png"} alt="" />
                            اسم المستخدم
                        </div>
                        <div className="homeRightInfoBottom">
                            <BiSliderAlt />
                            تعديل الملف الشخصي
                        </div>
                    </div>
                    <div className="homeRightSteps homeRightItem">
                        <div className="homeRightStepsTop border">خطوات إكمال الحساب</div>
                        <div className="homeRightStepsBottom">
                            <div className="homeRightStepsBottomItem"> <HiCheckCircle style={{ "color": "#3c763d" }} />
                                <span className='homeRightStepsBottomItemText' style={{ "color": "#3c763d", "textDecoration": "line-through" }}>
                                    تأكيد رقم الجوال
                                </span>
                            </div>
                            <div className="homeRightStepsBottomItem"> <HiCheckCircle style={{ "color": "#3c763d" }} /> <span className='homeRightStepsBottomItemText' style={{ "color": "#3c763d", "textDecoration": "line-through" }}>إضافة المهارات</span></div>
                            <div className="homeRightStepsBottomItem"> <TbCircle style={{ "color": "#2386C8" }} /> <span className='homeRightStepsBottomItemText'>إضافة أعمال جديدة</span></div>
                            <div className="homeRightStepsBottomItem"> <TbCircle style={{ "color": "#2386C8" }} /> <span className='homeRightStepsBottomItemText'> توثيق الهوية </span></div>
                        </div>
                    </div>
                    <div className="homeRightMessages homeRightItem">
                        <div className="homeRightMessagesTop border">
                            <span>الرسائل الجديدة</span>
                            <span style={{ "fontSize": "36px" }}>0</span>
                        </div>
                        <div className="homeRightMessagesBottom">
                            <div className="homeRightMessagesBottomItem ">الرسائل الواردة <span className='bold m5' >0</span></div>
                            <div className="homeRightMessagesBottomItem ">الرسائل الصادرة <span className='bold m5' >0</span></div>
                        </div>
                    </div>
                    <div className="homeRightWorks homeRightItem">
                        <div className="homeRightWorksTop border">
                            <span>أعمالي</span>
                            <span style={{ "fontSize": "36px" }}>0</span>
                        </div>
                        <div className="homeRightWorksBottom">
                            <MdAddCircle />
                            <span className='m5'>أضف عمل</span>
                        </div>
                    </div>
                    <div className="homeRightArticles homeRightItem">
                        <div className="homeRightArticlesTop border">مدونة مستقل</div>
                        <div className="homeRightArticlesBottom">
                            <div className="homeRightArticlesBottomItem ">
                                <div className="homeRightArticlesBottomItemText">دليل كتابة المحتوى التسويقي الذي يروج نشاطك التجاري</div>
                                <span className='homeRightArticlesBottomItemTime'>
                                    <QueryBuilder className='homeRightArticlesBottomItemTimeIcon' />
                                    نشر منذ يوم و 43 دقيقة
                                </span>
                            </div>
                            <div className="homeRightArticlesBottomItem ">
                                <div className="homeRightArticlesBottomItemText">تعرّف إلى كيفية تصميم فيديو وايت بورد لا ينسى</div>

                                <span className='homeRightArticlesBottomItemTime'>
                                    <QueryBuilder className='homeRightArticlesBottomItemTimeIcon' />
                                    نشر منذ يوم و 43 دقيقة
                                </span>
                            </div>
                            <div className="homeRightArticlesBottomItem ">
                                <div className="homeRightArticlesBottomItemText">أكاديمية محمد العيسي وتعليم التجارة الإلكترونية</div>

                                <span className='homeRightArticlesBottomItemTime'>
                                    <QueryBuilder className='homeRightArticlesBottomItemTimeIcon' />
                                    نشر منذ يوم و 43 دقيقة
                                </span>
                            </div>
                            <div className="homeRightArticlesBottomItem ">
                                <div className="homeRightArticlesBottomItemText">دليل المبتدئين إلى لغة PHP</div>

                                <span className='homeRightArticlesBottomItemTime'>
                                    <QueryBuilder className='homeRightArticlesBottomItemTimeIcon' />
                                    نشر منذ يوم و 43 دقيقة
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="homeRightLast homeRightItem">
                        <div className="homeRightLastTop border">تعرف على أنا</div>
                        <div className="homeRightLastBottom">
                            <img className='homeRightLastBottomImg' src={process.env.PUBLIC_URL + "/assets/ana-logo.png"} alt="" />
                            أداة واحدة تجمع كل ما تحتاجه لإدارة مشاريعك وفريق عملك عن بعد

                        </div>
                    </div>
                </div>

                <div className="homeLeft">

                    <div className="homeLeftCash homeLeftItem">
                        <div className="homeLeftCashTop border">
                            <div className="homeLeftCashTopItem">
                                <h4 className='homeLeftCashTopItemHeader' style={{ "color": "#1abc9c" }}>الرصيد الكلي</h4>
                                <span className='homeLeftCashTopItemNumber' style={{ "color": "#1abc9c" }}>$1,823.50</span>
                            </div>
                            <div className="homeLeftCashTopItem">
                                <h4 className='homeLeftCashTopItemHeader' >الرصيد القابل للسحب</h4>
                                <span className='homeLeftCashTopItemNumber'>$1,072.50</span>
                            </div>
                        </div>
                        <div className="homeLeftCashBottom">
                            <div className="homeLeftCashBottomItem">الرصيد المتاح <span className='bold m5 zeroColor' >$1,072.50</span></div>
                            <div className="homeLeftCashBottomItem">الرصيد المعلق <span className='bold m5 zeroColor'>$751.00</span></div>
                        </div>
                    </div>

                    <div className="homeLeftOffers homeLeftItem">
                        <div className="homeLeftOffersTop border">

                            <div className="homeLeftOffersTopRight">
                                <h4 className=' homeLeftOffersTopRightTitle m7 lh' >عروضي</h4>
                                <span style={{ 'fontSize': '36px' }}>12</span>
                            </div>
                            <div className="homeLeftOffersTopLeft">
                                <div className="homeLeftOffersTopLeftItem">
                                    <div className="homeLeftOffersTopLeftItemInfo">
                                        <div className="homeLeftOffersTopLeftItemInfoRight">
                                            1 بانتظار الموافقة
                                        </div>
                                        <div className="homeLeftOffersTopLeftItemInfoLeft">9%</div>
                                    </div>
                                    <div className="homeLeftOffersTopLeftItemBar">
                                        <span className='underProgress'></span>
                                        <span className='progress progress1'></span>
                                    </div>
                                </div>

                                <div className="homeLeftOffersTopLeftItem">
                                    <div className="homeLeftOffersTopLeftItemInfo">
                                        <div className="homeLeftOffersTopLeftItemInfoRight">
                                            1 قيد التنفيذ
                                        </div>
                                        <div className="homeLeftOffersTopLeftItemInfoLeft">9%</div>
                                    </div>
                                    <div className="homeLeftOffersTopLeftItemBar">
                                        <span className='underProgress'></span>
                                        <span className='progress progress2'></span>
                                    </div>
                                </div>

                                <div className="homeLeftOffersTopLeftItem">
                                    <div className="homeLeftOffersTopLeftItemInfo">
                                        <div className="homeLeftOffersTopLeftItemInfoRight">
                                            5  المكتملة
                                        </div>
                                        <div className="homeLeftOffersTopLeftItemInfoLeft">42%</div>
                                    </div>
                                    <div className="homeLeftOffersTopLeftItemBar">
                                        <span className='underProgress'></span>
                                        <span className='progress progress3'></span>
                                    </div>
                                </div>

                                <div className="homeLeftOffersTopLeftItem">
                                    <div className="homeLeftOffersTopLeftItemInfo">
                                        <div className="homeLeftOffersTopLeftItemInfoRight">
                                            4  المستبعدة
                                        </div>
                                        <div className="homeLeftOffersTopLeftItemInfoLeft">34%</div>
                                    </div>
                                    <div className="homeLeftOffersTopLeftItemBar">
                                        <span className='underProgress'></span>
                                        <span className='progress progress4'></span>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="homeLeftOffersBottom">
                            <div className="homeLeftOffersBottomItem">العروض المتاحة <span className='bold m5 zeroColor' >10</span></div>
                            <div className="homeLeftOffersBottomItem">العروض المتبقية <span className='bold m5 zeroColor'>10</span></div>
                        </div>
                    </div>

                    <div className="homeLeftProjects homeLeftItem">
                        <div className="homeLeftProjectsTop border">آخر مشاريع برمجة، تطوير المواقع والتطبيقات</div>
                        <div className="homeLeftProjectsBottom">
                            <Project className="homeLeftProjectsBottomItem" title="حل مشكلة تثبيت سكربت لارافل" username="Fahad A." time="منذ 34 دقيقة" offersNumber="أضف أول عرض" />
                            <Project className="homeLeftProjectsBottomItem" title="إنشاء تطبيق للجوال" username=" Ali A." time=" منذ 38 دقيقة" offersNumber=" 14 عرض" />
                            <Project className="homeLeftProjectsBottomItem" title="تصميم موقع على الوردبريس" username=" Khadijah A." time="منذ 47 دقيقة" offersNumber="عرض واحد" />
                            <Project className="homeLeftProjectsBottomItem" title="برمجة إضافة أداة في قوقل كروم لمساعدة المعلمين على تحضير الدروس لمنصة مدرستي" username=" Bader A." time=" منذ 52 دقيقة" offersNumber=" أضف أول عرض" />
                            <Project className="homeLeftProjectsBottomItem" title="تصميم صفحة اندكس واحدة احترافية لحين فتح الموقع" username=" Bader A." time="منذ ساعة" offersNumber=" 7 عروض" />

                        </div>

                    </div>

                    <div className="homeLeftLast homeLeftItem">
                        <div className="homeLeftLastTop border">
                            <img width="100px" src={process.env.PUBLIC_URL + "/assets/academy-logo.png"} alt="" />
                        </div>
                        <div className="homeLeftLastBottom">
                            <div className="homeLeftLastBottomItem lh">
                                <span className='homeLeftLastBottomItemTitle'> دورة إدارة تطوير المنتجات</span>
                                <span className='homeLeftLastBottomItemTitle'>دورة علوم الحاسوب</span>
                                <span className='homeLeftLastBottomItemTitle'>تطوير تطبيقات الويب باستخدام لغة JavaScript</span>
                                <span className='homeLeftLastBottomItemTitle'>تطوير تطبيقات الويب باستخدام لغة Python</span>
                            </div>
                            <div className="homeLeftLastBottomItem lh">
                                <span className='homeLeftLastBottomItemTitle'>تطوير واجهات المستخدم</span>
                                <span className='homeLeftLastBottomItemTitle'>تطوير تطبيقات الويب باستخدام لغة PHP</span>
                                <span className='homeLeftLastBottomItemTitle'>تطوير تطبيقات الويب باستخدام لغة Ruby</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div >

    )
}

export default Home