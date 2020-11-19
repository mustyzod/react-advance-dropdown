import React from 'react'
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as CogIcon } from '../../../icons/cog.svg'
import { ReactComponent as ArrowIcon } from '../../../icons/arrow.svg'
import DropDownItem from '../DropDownItem';

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
                <DropDownItem>My Profile</DropDownItem>
                <DropDownItem
                    leftIcon={<CogIcon />}
                    rightIcon={<ArrowIcon />}
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
