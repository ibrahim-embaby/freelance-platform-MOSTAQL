import { Add, ArrowDropDown, Person, QueryBuilder } from '@material-ui/icons'
import { GiTicket } from 'react-icons/gi'
import { BiPlusMedical } from 'react-icons/bi'

import './project.css'

function Project(props) {
    return (
        <div className='project'>
            <div className="projectHeader">
                <div className="projectHeaderRight">
                    <div className="projectHeaderRightTitle">
                        {props.title}
                    </div>
                    <div className="projectHeaderRightIcons">
                        <Person className='projectHeaderRightIcon' />
                        <span className='projectHeaderRightText'>{props.username}</span>
                        <QueryBuilder className='projectHeaderRightIcon' />
                        <span className='projectHeaderRightText'> {props.time}</span>
                        <GiTicket className='projectHeaderRightIcon' />
                        <span className='projectHeaderRightText'> {props.offersNumber}</span>
                    </div>
                </div>
                {props.button && <div className="projectHeaderLeft">
                    <button className="projectHeaderLeftButton">
                        <span className="projectHeaderLeftButtonRight">
                            <BiPlusMedical style={{ "marginLeft": "5px" }} />
                            <span>أضف عرضك</span>
                        </span>
                        <ArrowDropDown className='projectHeaderLeftButtonDropDown' style={{ "border-right": "0.1px solid #1c6ca1" }} />
                    </button>

                </div>}
            </div>
            <div className="projectDesc">{props.description}</div>
        </div>
    )
}

export default Project