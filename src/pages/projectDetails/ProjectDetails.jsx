import "./projectDetails.css";
import { useEffect } from "react";
import Header from "../../components/header/Header";
import Section from "../../components/section/Section";
import { BsTagFill, BsFillRecordCircleFill } from "react-icons/bs";
import { FaChevronCircleLeft } from "react-icons/fa";
import { Work } from "@material-ui/icons";

import { useParams } from "react-router-dom";
import { projects } from "../../data";
import TableSection from "../../components/tableSection/TableSection";

function ProjectDetails({ setSidebar }) {
  const { id } = useParams();
  const [project] = projects.filter((item) => item.id === +id);

  useEffect(() => {
    document.title = ` ${project.title} | مستقل`;
    setSidebar(false);
    window.scrollTo({ top: 0 });
  }, [setSidebar, project.title]);

  return (
    <div className="projectDetails">
      <Header
        path="الرئيسية / المشاريع / برمجة، تطوير المواقع والتطبيقات"
        title={project.title}
      />
      <div className="projectDetailsWrapper">
        <div className="projectDetailsWrapperRight">
          <Section title="تفاصيل المشروع" children={project.description} />
          <Section
            title="المهارات المطلوبة"
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
              </>
            }
          />
        </div>
        <div className="projectDetailsWrapperLeft">
          <TableSection
            title="بطاقة المشروع"
            children={
              <>
                <table className="profileWrapperRightStatisticsCenter border p21">
                  <tr className="tableRow">
                    <td className="tableRowSection">حالة المشروع</td>
                    <td className="tableRowSection">
                      <bdi
                        className="label"
                        style={{ backgroundColor: "#2e8b57" }}
                      >
                        مفتوح
                      </bdi>{" "}
                    </td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection">تاريخ النشر </td>
                    <td className="tableRowSection">منذ 6 ساعات</td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection"> الميزانية </td>
                    <td className="tableRowSection">$25.00 - $50.00</td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection">مدة التنفيذ </td>
                    <td className="tableRowSection">7 أيام</td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection">متوسط العروض </td>
                    <td className="tableRowSection">$35.00</td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection">عدد العروض </td>
                    <td className="tableRowSection">3</td>
                  </tr>
                </table>

                <table className="profileWrapperRightStatisticsBottom border p21">
                  <tr className="tableRow">
                    <td className="tableRowSection">
                      <FaChevronCircleLeft
                        className="icon"
                        size="24"
                        color="#314459"
                      />
                      مرحلة تلقي العروض
                    </td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection">
                      <BsFillRecordCircleFill
                        className="icon"
                        size="24"
                        color="#e0e0e0"
                      />
                      مرحلة التنفيذ
                    </td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection">
                      <BsFillRecordCircleFill
                        className="icon"
                        size="24"
                        color="#e0e0e0"
                      />
                      مرحلة التسليم
                    </td>
                  </tr>
                </table>

                <table className="profileWrapperRightStatisticsBottom  p21">
                  <tr className="tableRow">
                    <td className="tableRowSection">صاحب المشروع</td>
                  </tr>

                  <tr className="tableRow">
                    <td className="tableRowSection">
                      <img
                        className="projectUserImage"
                        src={
                          process.env.PUBLIC_URL + "/assets/default-user.png"
                        }
                        alt=""
                      />
                      <div className="projectUserInfo">
                        <span>{project.username}</span>
                        <span>
                          <Work className="topbarCategoryIcon" />
                          مبرمج مواقع
                        </span>
                      </div>
                    </td>
                  </tr>
                </table>
              </>
            }
          />
          <Section
            title="شارك المشروع"
            children={
              <>
                <input className="optionsSearch" />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
