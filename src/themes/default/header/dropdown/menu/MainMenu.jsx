import React from 'react'
import { CSSTransition } from 'react-transition-group';
import * as Icons from '../../../zodicons'
import DropDownItem from '../../DropDownItem';

const ProfileImg = () => {
    return (
        <img className="profile-img" src="https://hub.gunsel.com.tr/employeeImages/27345.jpg" alt="profile_img" srcSet="https://hub.gunsel.com.tr/employeeImages/27345.jpg" />
    )
}
const MainMenu = (props) => {
    return (
        <CSSTransition
            in={props.activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={props.calcHeight}
        >
            <div className="menu">
                <DropDownItem to="/myprofile" leftIcon={<ProfileImg />}>My Profile</DropDownItem>
                <DropDownItem
                    to="#"
                    leftIcon={<Icons.CogIcon />}
                    rightIcon={<Icons.ArrowIcon />}
                    goToMenu="settings"
                    setActiveMenu={props.setActiveMenu}
                >
                    Settings
                </DropDownItem>
            </div>
        </CSSTransition>
    )
}

export default MainMenu
