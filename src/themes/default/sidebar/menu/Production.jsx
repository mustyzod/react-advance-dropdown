import React, { useState } from 'react';
import * as Icons from '../../zodicons'

const dummy = [
    { name: "Production Request" },
    { name: "Production Report" },
    { name: "Manage Plans" }
]

const Production = () => {
    const [open, setOpen] = useState(false)
    return (
        <ul className="sidemenu">
            {/* <li className="sidemenu-parent sidemenu-active" onClick={() => setOpen(!open)} > */}
            <li className="sidemenu-parent" onClick={() => setOpen(!open)} >
                <Icons.VehicleProductionIcon />
                <span className="sidemenu-text mobile-hide">
                    Production
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

export default Production;
