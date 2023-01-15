import "./profileHeader.css";
import { FaUser, FaMapMarkerAlt } from "react-icons/fa";
import { IoBriefcaseSharp } from "react-icons/io5";
import { BiSliderAlt, BiPlusMedical } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProfileHeader({ view, setView }) {
  return (
    <div className="personalInfo">
      <div className="personalInfoTop">
        <img
          className="personalInfoTopImg"
          src={process.env.PUBLIC_URL + "/assets/user.png"}
          alt=""
        />
        <div className="personalInfoTopUsername">Ibrahim Embaby</div>
        <div className="personalInfoTopDetails">
          <span className="personalInfoTopDetailsIconContainer">
            <FaUser className="personalInfoTopDetailsIcon" /> مستقل
          </span>
          <span className="personalInfoTopDetailsIconContainer">
            <IoBriefcaseSharp className="personalInfoTopDetailsIcon" /> برمجة،
            تطوير المواقع والتطبيقات
          </span>
          <span className="personalInfoTopDetailsIconContainer">
            <FaMapMarkerAlt className="personalInfoTopDetailsIcon" /> مصر
          </span>
        </div>
      </div>
      <div className="personalInfoBottom">
        <div className="personalInfoBottomLeft">
          <Link
            to="/profile"
            className={
              view === "profile"
                ? "personalInfoBottomLeftItem profileActive"
                : "personalInfoBottomLeftItem"
            }
            onClick={() => setView("profile")}
          >
            <FaUser className="personalInfoBottomLeftItemIcon" />
            الملف الشخصي
          </Link>

          <Link
            to="/profile/portfolio"
            className={
              view === "portfolio"
                ? "personalInfoBottomLeftItem profileActive"
                : "personalInfoBottomLeftItem"
            }
            onClick={() => setView("portfolio")}
          >
            <IoBriefcaseSharp className="personalInfoBottomLeftItemIcon" /> معرض
            الأعمال
          </Link>
        </div>
        <div className="personalInfoBottomRight">
          {view === "portfolio" && (
            <div
              className="personalInfoBottomRightButton"
              style={{ marginLeft: "3px" }}
            >
              <BiPlusMedical className="personalInfoBottomRightButtonIcon" />
              أضف عمل
            </div>
          )}
          <div className="personalInfoBottomRightButton">
            <BiSliderAlt className="personalInfoBottomRightButtonIcon" />
            تعديل الملف الشخصي
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
