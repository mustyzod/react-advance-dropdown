import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {
    ArrowIcon,
    KeyIcon,
    UserEditIcon
} from '../../../zodicons'
import DropDownItem from '../../DropDownItem';

const Settings = (props) => {
    return (
        <CSSTransition
            in={props.activeMenu === 'settings'}
            unmountOnExit
            timeout={500}
            classNames="menu-secondary"
            onEnter={props.calcHeight}
        >
            <div className="menu">
                <DropDownItem
                    leftIcon={<ArrowIcon />}
                    goToMenu="main"
                    setActiveMenu={props.setActiveMenu}
                />
                <DropDownItem leftIcon={<UserEditIcon />}>Update Profile</DropDownItem>
                <DropDownItem leftIcon={<KeyIcon />}>Reset Password</DropDownItem>
            </div>
        </CSSTransition>
    )
}

export default Settings
