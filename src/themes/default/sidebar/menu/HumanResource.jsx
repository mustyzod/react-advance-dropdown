import React, { useState } from 'react';
import * as Icons from '../../zodicons'

const dummy = [
    { name: "Active Employee" },
    { name: "Passive Employee" },
    { name: "Outsource Employee" },
    { name: "Phone Extension" },
    { name: "Seating Plan" },
    { name: "Organogram" },
    { name: "TimeOff" },
    { name: "Attendance" },
]

const HumanResource = () => {
    const [open, setOpen] = useState(false)
    return (
        <ul className="sidemenu">
            {/* <li className="sidemenu-parent sidemenu-active" onClick={() => setOpen(!open)} > */}
            <li className="sidemenu-parent" onClick={() => setOpen(!open)} >
                <Icons.HRIcon />
                <span className="sidemenu-text mobile-hide">
                    Human Resource
                </span>
                <span className="sidemenu-arrow mobile-hide"><Icons.ArrowDownIcon /></span>
            </li>
            {
                open
                    ?
                    <div className="sidemenu-dropdown-contents">
                        {
                            dummy.map((menu, index) => (
                                <li key={index} className="sidemenu-item" >
                                    <span className="sidemenu-dropdown">
                                        {menu.name}
                                    </span>
                                </li >
                            ))
                        }
                    </div >
                    :
                    null
            }
        </ul>
    );
};

export default HumanResource;
