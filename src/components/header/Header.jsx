import './header.css'

import { IoInformationCircleSharp } from 'react-icons/io5'
function Header(props) {
    return (

        <div className='header'>
            <div className="headerRight">
                <div className="headerPath">{props.path}</div>
                <div className="headerTitle">{props.title}</div>
            </div>
            {
                props.noFilter
                    ? (
                        props.how
                            ? (
                                <button className='howButton'>
                                    <IoInformationCircleSharp size='16px' />
                                    كيف تضيف مشروع
                                </button>
                            )
                            : null
                    )
                    : (<div className="headerLeft">
                        <select className='headerSelect' name="" id="">
                            <option value="">الأحدث</option>
                            <option value="">الأقدم</option>
                            <option value="">الأقل عروضًا</option>
                            <option value="">الأكثر عروضًا</option>
                        </select>
                    </div>)
            }

        </div>
    )
}

export default Header