import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import { useEffect } from "react";
import "./portfolio.css";

function Portfolio({ setSidebar, view, setView }) {
  useEffect(() => {
    document.title = " Ibrahim Embaby | معرض الأعمال";
    setSidebar(false);
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="portfolio">
      <ProfileHeader view={view} setView={setView} />
      <div className="portfolioWrapper">
        <div className="portfolioBody">لا توجد نتائج بحث</div>
      </div>
    </div>
  );
}

export default Portfolio;
