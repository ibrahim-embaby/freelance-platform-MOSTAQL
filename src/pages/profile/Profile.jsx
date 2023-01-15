import { useEffect } from "react";

import "./profile.css";
import ProfileHeader from "../../components/profileHeader/ProfileHeader";

function Profile({ setSidebar, view, setView }) {
  useEffect(() => {
    document.title = " Ibrahim Embaby | مستقل";
    setSidebar(false);
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="profile">
      <ProfileHeader view={view} setView={setView} />
      <div className="profileWrapper">
        <div className="profileWrapperRight"></div>
        <div className="profileWrapperLeft"></div>
      </div>
    </div>
  );
}

export default Profile;
