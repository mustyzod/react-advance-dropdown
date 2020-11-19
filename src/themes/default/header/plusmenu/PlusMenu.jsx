import React, { useState, useEffect, useRef } from 'react';

import MainMenu from './menu/MainMenu';
import Assistance from './menu/Assistance'
import Procurement from './menu/Procurement'

const PlusMenu = () => {
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
        <div className="dropdown" style={{ height: menuHeight}} ref={dropdownRef}>
            <MainMenu
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                calcHeight={calcHeight}
            />
            <Assistance
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                calcHeight={calcHeight}
            />
            <Procurement
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                calcHeight={calcHeight}
            />
        </div>
    )
}

export default PlusMenu
