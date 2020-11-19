import React from 'react'
import { CSSTransition } from 'react-transition-group';
import {
    ProcurementIcon,
    QuestionIcon,
    SunbedIcon,
    ArrowIcon
} from '../../../zodicons'
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
                    leftIcon={<QuestionIcon />}
                    rightIcon={<ArrowIcon />}
                    goToMenu="assistance"
                    setActiveMenu={props.setActiveMenu}
                >
                    Need Assistance
                </DropDownItem>
                <DropDownItem
                    leftIcon={<ProcurementIcon />}
                    rightIcon={<ArrowIcon />}
                    goToMenu="procurement"
                    setActiveMenu={props.setActiveMenu}
                >
                    Procurement
                </DropDownItem>
                <DropDownItem leftIcon={<SunbedIcon />}>TimeOff</DropDownItem>
            </div>
        </CSSTransition>
    )
}

export default MainMenu
