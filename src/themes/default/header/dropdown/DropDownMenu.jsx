import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom'

import MainMenu from './menu/MainMenu';
import Settings from './menu/Settings'

const DropDownMenu = () => {
    const [menuHeight, setMenuHeight] = useState(null);
    const [activeMenu, setActiveMenu] = useState('main');
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
    const calcHeight = (el) => {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }
    return (
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
            <MainMenu
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                calcHeight={calcHeight}
            />
            <Settings
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                calcHeight={calcHeight}
            />
        </div>
    )
}
export default DropDownMenu;