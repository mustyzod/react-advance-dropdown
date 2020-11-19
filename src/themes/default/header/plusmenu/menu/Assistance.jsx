import React from 'react'
import { CSSTransition } from 'react-transition-group';
import {
    ArrowIcon,
    OnlineSupportIcon,
    ToolsIcon,
    HumanResourcesIcon,
    EngineerIcon
} from '../../../zodicons'
import DropDownItem from '../../DropDownItem';

const Assistance = (props) => {
    return (
        <CSSTransition
            in={props.activeMenu === 'assistance'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={props.calcHeight}
        >
            <div className="menu">
                <DropDownItem
                    leftIcon={<ArrowIcon />}
                    goToMenu="main"
                    setActiveMenu={props.setActiveMenu}
                />
                <DropDownItem leftIcon={<OnlineSupportIcon />}>IT Support</DropDownItem>
                <DropDownItem leftIcon={<ToolsIcon />}>Maintenance</DropDownItem>
                <DropDownItem leftIcon={<HumanResourcesIcon />}>Human Resources</DropDownItem>
                <DropDownItem leftIcon={<EngineerIcon />}>NX Request</DropDownItem>
            </div>
        </CSSTransition>
    )
}

export default Assistance
