import React from 'react'
import NavItem from './NavItem'
import DropDownMenu from './dropdown/DropDownMenu'
import PlusMenu from './plusmenu/PlusMenu'
import Navbar from './Navbar'

import {
    BellIcon,
    MessengerIcon,
    CaretIcon,
    PlusIcon
} from '../zodicons'

const index = () => {
    return (
        <Navbar>
            <NavItem icon={<PlusIcon />}>
                <PlusMenu />
            </NavItem>
            <NavItem icon={<BellIcon />} />
            <NavItem icon={<MessengerIcon />} />
            <NavItem icon={<CaretIcon />}>
                {/* Dropdown goes here */}
                <DropDownMenu />
            </NavItem>
        </Navbar>
    )
}

export default index