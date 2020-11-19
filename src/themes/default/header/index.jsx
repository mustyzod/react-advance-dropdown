import React from 'react'
import '../assets/style.css'
import NavItem from './dropdown/NavItem'
import DropDownMenu from './dropdown/DropDownMenu'
import Navbar from './dropdown/Navbar'
import { ReactComponent as BellIcon } from '../icons/bell.svg'
import { ReactComponent as MessengerIcon } from '../icons/messenger.svg'
import { ReactComponent as CaretIcon } from '../icons/caret.svg'
import { ReactComponent as PlusIcon } from '../icons/plus.svg'

const index = () => {
    return (
        <Navbar>
            <NavItem icon={<PlusIcon />} />
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