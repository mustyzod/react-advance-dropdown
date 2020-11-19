import React, { useState } from 'react';
import { DepartmentIcon, ArrowDownIcon } from '../../zodicons'

const dummy = [{ name: "Communications" }, { name: "Production" }]

const Department = () => {
    const [open, setOpen] = useState(false)
    return (
        <ul className="sidemenu">
            <li className="sidemenu-parent" onClick={() => setOpen(!open)} >
                <DepartmentIcon />
                <span className="sidemenu-text mobile-hide">
                    Department
                </span>

                <span className="sidemenu-arrow mobile-hide"><ArrowDownIcon /></span>
            </li>
            {
                open
                    ?
                    <div className="sidemenu-dropdown-contents">
                        {
                            dummy.map((department, index) => (
                                <li key={index} className="sidemenu-item" >
                                    <span className="sidemenu-dropdown">
                                        {department.name}
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

export default Department;
