import { CreditCard, Facebook, Twitter } from '@material-ui/icons'
import './footer.css'
import {
    FaCcVisa,
    FaCcPaypal,
    FaCcMastercard
} from 'react-icons/fa'
function Footer() {
    return (
        <div className='footer'>
            <div className="footerTop">

                <div className="footerTopLeft">
                    <div className="footerTopLeftTop">
                        <div className="footerTopRightSectionTitle">
                            تابع مستقل على
                        </div>
                        <div className="footerTopLeftTopLinks">
                            <Twitter className='footerTopLeftTopLinksIcon' style={{ "color": "#1da1f2" }} />
                            <Facebook className='footerTopLeftTopLinksIcon' style={{ "color": "#1877f2" }} />
                        </div>
                    </div>
                    <div className="footerTopLeftBottom">
                        <div className="footerTopRightSectionTitle">
                            وسائل الدفع المتاحة
                        </div>
                        <FaCcVisa className='footerTopLeftTopLinksIcon' />
                        <FaCcPaypal className='footerTopLeftTopLinksIcon' />
                        <FaCcMastercard className='footerTopLeftTopLinksIcon' />
                    </div>
                </div>
                <div className="footerTopRight">
                    <div className="footerTopRightSection">
                        <div className="footerTopRightSectionTitle">مستقل</div>
                        <div className="footerTopRightSectionLink">عن مستقل</div>
                        <div className="footerTopRightSectionLink">الأسئلة الشائعة</div>
                        <div className="footerTopRightSectionLink">ضمان حقوقك</div>
                        <div className="footerTopRightSectionLink">شروط الاستخدام</div>
                        <div className="footerTopRightSectionLink">بيان الخصوصية</div>
                    </div>

                    <div className="footerTopRightSection">
                        <div className="footerTopRightSectionTitle">مشاريع</div>
                        <div className="footerTopRightSectionLink">مشاريع أعمال</div>
                        <div className="footerTopRightSectionLink"> مشاريع برمجة</div>
                        <div className="footerTopRightSectionLink">مشاريع هندسة وعمارة </div>
                        <div className="footerTopRightSectionLink"> مشاريع تصميم</div>
                        <div className="footerTopRightSectionLink">مشاريع تسويق </div>
                        <div className="footerTopRightSectionLink"> مشاريع كتابة وترجمة </div>
                        <div className="footerTopRightSectionLink"> مشاريع دعم ومساعدة </div>
                        <div className="footerTopRightSectionLink">مشاريع تدريب  </div>
                        <div className="footerTopRightSectionLink"> التصنيفات  </div>


                    </div>

                    <div className="footerTopRightSection">
                        <div className="footerTopRightSectionTitle">روابط</div>
                        <div className="footerTopRightSectionLink"> مستقل للمؤسسات</div>
                        <div className="footerTopRightSectionLink">معرض الأعمال </div>
                        <div className="footerTopRightSectionLink">مدونة مستقل </div>
                        <div className="footerTopRightSectionLink">مركز المساعدة </div>
                    </div>


                </div>
            </div>
            <div className="footerCenter">
                <div className="footerCenterRight">© 2022 Hsoub. All rights reserved.</div>
                <div className="footerCenterLeft">© 2022 حسوب. جميع الحقوق محفوظة.</div>
            </div>
            <div className="footerBottom">
                <div className="footerBottomLogo">
                    <img className="footerBottomLogoImg" src={process.env.PUBLIC_URL + "/assets/hasoub.png"} alt="" />
                </div>
                <div className="footerBottomItems">
                    <div className="footerBottomItemsWrapper">

                        <div className="footerBottomItem">
                            <div className="footerBottomItemTitle">أنا</div>
                            <div className="footerBottomItemDesc">أداة واحدة لإدارة مشاريعك وفريقك</div>
                        </div>

                        <div className="footerBottomItem">
                            <div className="footerBottomItemTitle">مستقل</div>
                            <div className="footerBottomItemDesc">أكبر منصة عمل حر في العالم العربي</div>
                        </div>

                        <div className="footerBottomItem">
                            <div className="footerBottomItemTitle">خمسات</div>
                            <div className="footerBottomItemDesc">سوق بيع وشراء الخدمات المصغرة</div>
                        </div>

                        <div className="footerBottomItem">
                            <div className="footerBottomItemTitle">بيكاليكا</div>
                            <div className="footerBottomItemDesc">متجر القوالب والمنتجات الرقمية</div>
                        </div>

                        <div className="footerBottomItem">
                            <div className="footerBottomItemTitle">بعيد</div>
                            <div className="footerBottomItemDesc">موقع توظيف الخبراء عن بعد</div>
                        </div>

                        <div className="footerBottomItem">
                            <div className="footerBottomItemTitle">زيتون</div>
                            <div className="footerBottomItemDesc">برنامج خدمة العملاء الأكثر بساطة</div>
                        </div>

                        <div className="footerBottomItem">
                            <div className="footerBottomItemTitle">أكاديمية حسوب</div>
                            <div className="footerBottomItemDesc">دورات احترافية لتطوير مستقبلك</div>
                        </div>

                        <div className="footerBottomItem">
                            <div className="footerBottomItemTitle">موسوعة حسوب</div>
                            <div className="footerBottomItemDesc"> المرجع الشامل للمطورين العرب </div>
                        </div>

                        <div className="footerBottomItem">
                            <div className="footerBottomItemTitle">حسوب I/O</div>
                            <div className="footerBottomItemDesc"> مجتمع للنقاش الهادف والموضوعي </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer