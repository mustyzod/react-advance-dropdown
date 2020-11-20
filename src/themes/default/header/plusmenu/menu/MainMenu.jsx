import React from 'react'
import { CSSTransition } from 'react-transition-group';
import * as Icons from '../../../zodicons'
import DropDownItem from '../../DropDownItem';

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
                <DropDownItem
                    to="#"
                    leftIcon={<Icons.QuestionIcon />}
                    rightIcon={<Icons.ArrowIcon />}
                    goToMenu="assistance"
                    setActiveMenu={props.setActiveMenu}
                >
                    Need Assistance
                </DropDownItem>
                <DropDownItem
                    to="#"
                    leftIcon={<Icons.ProcurementIcon />}
                    rightIcon={<Icons.ArrowIcon />}
                    goToMenu="procurement"
                    setActiveMenu={props.setActiveMenu}
                >
                    Procurement
                </DropDownItem>
                <DropDownItem to="/timeoff" leftIcon={<Icons.SunbedIcon />}>TimeOff</DropDownItem>
            </div>
        </CSSTransition>
    )
}

export default MainMenu
