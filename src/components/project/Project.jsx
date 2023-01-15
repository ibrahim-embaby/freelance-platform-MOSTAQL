import { ArrowDropDown, Person, QueryBuilder } from "@material-ui/icons";
import { GiTicket } from "react-icons/gi";
import { BiPlusMedical, BiCalendar } from "react-icons/bi";
import { FaRegMoneyBillAlt } from "react-icons/fa";

import "./project.css";

function Project(props) {
  return (
    <div className="project">
      <div className="projectHeader">
        <div className="projectHeaderRight">
          <div className="projectHeaderRightTitle">
            {props.offer && (
              <>
                <bdi className="label">مُغلق</bdi>{" "}
              </>
            )}

            {props.title}
          </div>
          <div className="projectHeaderRightIcons">
            <Person className="projectHeaderRightIcon" />
            <span className="projectHeaderRightText">{props.username}</span>
            <QueryBuilder className="projectHeaderRightIcon" />
            <span className="projectHeaderRightText"> {props.time}</span>
            {!props.offer && (
              <>
                <GiTicket className="projectHeaderRightIcon" />
                <span className="projectHeaderRightText">
                  {props.offersNumber}
                </span>
              </>
            )}
            {props.offer && (
              <>
                <FaRegMoneyBillAlt className="projectHeaderRightIcon" />
                <span className="projectHeaderRightText">{props.price}</span>
                <BiCalendar className="projectHeaderRightIcon" />
                <span className="projectHeaderRightText">{props.duration}</span>
              </>
            )}
          </div>
        </div>
        {props.button && (
          <div className="projectHeaderLeft">
            <button className="projectHeaderLeftButton">
              <span className="projectHeaderLeftButtonRight">
                <BiPlusMedical style={{ marginLeft: "5px" }} />
                <span>أضف عرضك</span>
              </span>
              <ArrowDropDown
                className="projectHeaderLeftButtonDropDown"
                style={{ borderRight: "0.1px solid #1c6ca1" }}
              />
            </button>
          </div>
        )}
      </div>
      <div className="projectDesc">{props.description}</div>
    </div>
  );
}

export default Project;
