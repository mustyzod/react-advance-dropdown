import React from 'react'
import NavItem from './NavItem'
import DropDownMenu from './dropdown/DropDownMenu'
import PlusMenu from './plusmenu/PlusMenu'
import Navbar from './Navbar'

import * as Icons from '../zodicons'

const index = () => {
    return (
        <Navbar>
            <NavItem icon={<Icons.PlusIcon />}>
                <PlusMenu />
            </NavItem>
            <NavItem icon={<Icons.BellIcon />} />
            <NavItem icon={<Icons.MessengerIcon />} />
            <NavItem icon={<Icons.CaretIcon />}>
                {/* Dropdown goes here */}
                <DropDownMenu />
            </NavItem>
        </Navbar>
    )
}

export default index