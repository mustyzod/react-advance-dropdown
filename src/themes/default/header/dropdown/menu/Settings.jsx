import React from 'react';
import { CSSTransition } from 'react-transition-group';
import * as Icons from '../../../zodicons'
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
                    to="#"
                    leftIcon={<Icons.ArrowIcon />}
                    goToMenu="main"
                    setActiveMenu={props.setActiveMenu}
                />
                <DropDownItem to="/update-profile" leftIcon={<Icons.UserEditIcon />}>Update Profile</DropDownItem>
                <DropDownItem to="/reset-password" leftIcon={<Icons.KeyIcon />}>Reset Password</DropDownItem>
            </div>
        </CSSTransition>
    )
}

export default Settings
