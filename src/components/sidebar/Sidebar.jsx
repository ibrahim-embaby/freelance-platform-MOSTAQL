import "./sidebar.css";
import { HiHashtag } from "react-icons/hi";
import { GrCubes, GrLink } from "react-icons/gr";
import { GiTicket } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { TiImage } from "react-icons/ti";
import { FaList } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
import { Link } from "react-router-dom";

function Sidebar({ sidebar, setView }) {
  // const [side, setSide] = useState(sidebar)
  // const handleClick = () => {
  //     setSide(!side)
  // }
  // useEffect(() => {
  //     setSide(sidebar)
  // }, [sidebar])
  // console.log(sidebar, side);

  return (
    <div className={sidebar ? "sidebar appear" : "sidebar disappear"}>
      <div
        className={
          sidebar ? "sidebarWrapper appear" : "sidebarWrapper disappear"
        }
      >
        <input type="text" className="sidebarInput" placeholder="ابحث عن ..." />
        <ul className="sidebarList">
          <Link to="/create" className="sidebarListItem">
            <BiPlusMedical className="sidebarListItemIcon" />
            أضف مشروع
          </Link>
          <Link to="/bids" className="sidebarListItem">
            <GiTicket className="sidebarListItemIcon" />
            عروضي
          </Link>
          <Link
            to="/profile/portfolio"
            className="sidebarListItem"
            onClick={() => setView("portfolio")}
          >
            <MdWork className="sidebarListItemIcon" />
            أعمالي
          </Link>
          <Link to="/projects" className="sidebarListItem">
            <GrCubes className="sidebarListItemIcon" />
            تصفح المشاريع
          </Link>
          <li className="sidebarListItem">
            <TiImage className="sidebarListItemIcon" />
            تصفح معرض الأعمال
          </li>
          <li className="sidebarListItem">
            <GrCubes className="sidebarListItemIcon" />
            أقسام المشاريع
          </li>
          <li className="sidebarListItem">
            <FaList className="sidebarListItemIcon" />
            التصنيفات
          </li>
          <li className="sidebarListItem">
            <GrLink className="sidebarListItemIcon" />
            مستقل
          </li>
          <li className="sidebarListItem">
            <HiHashtag className="sidebarListItemIcon" />
            تابعنا
          </li>
        </ul>
      </div>
      <div className={sidebar ? "overlay appear" : "overlay disappear"}></div>
    </div>
  );
}

export default Sidebar;
