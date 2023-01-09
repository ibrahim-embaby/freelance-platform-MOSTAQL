import "./topbar.css";
import { Work, AccountTree, Dehaze } from "@material-ui/icons";
import { GiTicket } from "react-icons/gi";
import { FaEnvelope, FaSearch, FaBell } from "react-icons/fa";

import { Link } from "react-router-dom";
import { BiPlusMedical } from "react-icons/bi";

import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";

function Topbar() {
  const [sidebar, setSidebar] = useState(false);

  const handleClick = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="topbar">
        <div className="topbarLeft">
          <div className="userImgContainer">
            <img
              className="userImg"
              src={process.env.PUBLIC_URL + "/assets/user.png"}
              alt=""
            />
          </div>

          <div className="topbarIconContainer">
            <FaBell className="topbarIcon" />
          </div>
          <div className="topbarIconContainer">
            <FaEnvelope className="topbarIcon" />
          </div>
          <div className="topbarIconContainer search">
            <FaSearch className="topbarIcon" />
          </div>
        </div>
        <div className="topbarRight">
          <Link to="/profile/portfolio" className="topbarCategoryContainer">
            <span className="topbarCategoryText">أعمالي</span>
            <Work className="topbarCategoryIcon" />
          </Link>
          <Link to="/bids" className="topbarCategoryContainer">
            <span className="topbarCategoryText">عروضى</span>
            <GiTicket className="topbarCategoryIcon" />
          </Link>
          <Link to="/projects" className="topbarCategoryContainer">
            <span className="topbarCategoryText">تصفح المشاريع</span>
            <AccountTree className="topbarCategoryIcon" />
          </Link>
          <Link to="/create" className="topbarCategoryContainer">
            <span className="topbarCategoryText">أضف مشروع</span>
            <BiPlusMedical size="14" className="topbarCategoryIcon" />
          </Link>
          <Link to="/" className="topbarLogoContainer big">
            <img
              className="topbarLogo big"
              src={process.env.PUBLIC_URL + "/assets/logo.png"}
              alt=""
            />
          </Link>
          <Link to="/" className="topbarLogoContainer small">
            <img
              className="topbarLogo small"
              src={process.env.PUBLIC_URL + "/assets/small-logo.png"}
              alt=""
            />
          </Link>
          <div className="topbarList" onClick={handleClick}>
            <Dehaze className="topbarListIcon" />
          </div>
        </div>
      </div>
      <Sidebar sidebar={sidebar} />
    </>
  );
}

export default Topbar;
