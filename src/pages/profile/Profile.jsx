import { useEffect } from "react";

import "./profile.css";
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import { BsTagFill, BsFillStarFill, BsStar } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";
import { FaTimes } from "react-icons/fa";
import Section from "../../components/section/Section";
import TableSection from "../../components/tableSection/TableSection";

function Profile({ setSidebar, view, setView }) {
  useEffect(() => {
    document.title = " Ibrahim Embaby | مستقل";
    setSidebar(false);
    setView("profile");
    window.scrollTo({ top: 0 });
  }, [setSidebar, setView]);
  return (
    <div className="profile">
      <ProfileHeader view={view} setView={setView} />
      <div className="profileWrapper">
        <div className="profileWrapperRight">
          <Section
            title="نبذة عني"
            children={
              <>
                انا ابراهيم محمد امبابي
                <br />
                تخرجت من هندسة الحاسبات بجامعة حلوان
                <br />
                عندي شغف وحب لتعلم كل ما له علاقة بمجال البرمجة سواء تطوير
                التطبيقات او مواقع الانترنت وايضا اهتم بمجالات اخري مثل الذكاء
                الاصطناعي وتحليل البيانات وتصميم وبرمجة الدوائر الالكترونية
              </>
            }
          />

          <Section
            title="مهاراتي"
            children={
              <>
                <span className="skillBadge">
                  <BsTagFill className="tag" /> CSS
                </span>
                <span className="skillBadge">
                  <BsTagFill className="tag" /> HTML
                </span>
                <span className="skillBadge">
                  <BsTagFill className="tag" /> JavaScript
                </span>
                <span className="skillBadge">
                  <BsTagFill className="tag" /> ReactJS
                </span>
                <span className="skillBadge">
                  <BsTagFill className="tag" /> NodeJS
                </span>
                <span className="skillBadge">
                  <BsTagFill className="tag" /> Flask
                </span>
                <span className="skillBadge">
                  <BsTagFill className="tag" /> Python
                </span>
                <span className="skillBadge">
                  <BsTagFill className="tag" /> MongoDB
                </span>
                <span className="skillBadge">
                  <BsTagFill className="tag" /> MySQL
                </span>
              </>
            }
          />
        </div>

        <div className="profileWrapperLeft">
          <TableSection
            title="إحصائيات"
            children={
              <>
                <table className="profileWrapperRightStatisticsCenter border p21">
                  <tr className="tableRow">
                    <td className="tableRowSection">التقييمات</td>
                    <td className="tableRowSection">
                      <div className="profileWrapperRightStatisticsCenterLeftReviews">
                        <BsFillStarFill
                          style={{ color: "#ffc107" }}
                          className="star"
                        />{" "}
                        <BsFillStarFill
                          style={{ color: "#ffc107" }}
                          className="star"
                        />{" "}
                        <BsFillStarFill
                          style={{ color: "#ffc107" }}
                          className="star"
                        />{" "}
                        <BsStar className="star" /> <BsStar className="star" />{" "}
                        (3)
                      </div>
                    </td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection">معدل إكمال المشاريع </td>
                    <td className="tableRowSection">
                      <bdi className="label">لم يحسب بعد</bdi>{" "}
                    </td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection"> معدل إعادة التوظيف </td>
                    <td className="tableRowSection">
                      <bdi className="label">لم يحسب بعد</bdi>{" "}
                    </td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection">معدل التسليم بالموعد </td>
                    <td className="tableRowSection">
                      <bdi className="label">لم يحسب بعد</bdi>{" "}
                    </td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection">متوسط سرعة الرد </td>
                    <td className="tableRowSection">
                      <bdi className="label">لم يحسب بعد</bdi>{" "}
                    </td>
                  </tr>
                </table>

                <table className="profileWrapperRightStatisticsBottom p21">
                  <tr className="tableRow">
                    <td className="tableRowSection">تاريخ التسجيل </td>
                    <td className="tableRowSection">23 سبتمبر 2018</td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection">آخر تواجد </td>
                    <td className="tableRowSection">منذ دقيقة</td>
                  </tr>
                </table>
              </>
            }
          />

          <TableSection
            title="توثيقات"
            children={
              <table className="profileWrapperRightVerificationsBottom p21">
                <tr className="tableRow">
                  <td className="tableRowSection">
                    <ImCheckmark
                      className="icon"
                      style={{ color: "#3c763d" }}
                    />
                    البريد الإلكتروني
                  </td>
                  <td className="tableRowSection">
                    <ImCheckmark
                      className="icon"
                      style={{ color: "#3c763d" }}
                    />
                    رقم الجوال
                  </td>
                </tr>

                <tr className="tableRow">
                  <td className="tableRowSection">
                    <FaTimes className="icon" style={{ color: "#777" }} />
                    الهوية الشخصية
                  </td>
                  <td className="tableRowSection"></td>
                </tr>
              </table>
            }
          />

          <Section
            title="أوسمة"
            children={
              <div className="profileWrapperRightAchievementsBottom">
                <img
                  src={process.env.PUBLIC_URL + "/assets/badge-1.png"}
                  alt=""
                  width="42"
                  title="مستخدم منذ 4 سنوات
                 سجل في مستقل منذ 4 سنوات"
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
