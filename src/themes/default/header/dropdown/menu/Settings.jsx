import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ArrowIcon } from '../../../icons/arrow.svg'
import { ReactComponent as BoltIcon } from '../../../icons/bolt.svg'
import DropDownItem from '../DropDownItem';

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
                <DropDownItem>Update Profile</DropDownItem>
                <DropDownItem leftIcon={<BoltIcon />}>Reset Password</DropDownItem>
            </div>
        </CSSTransition>
    )
}

export default Settings
