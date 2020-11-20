import React from 'react'
import { CSSTransition } from 'react-transition-group';
import * as Icons from '../../../zodicons'
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
                    to="#"
                    leftIcon={<Icons.ArrowIcon />}
                    goToMenu="main"
                    setActiveMenu={props.setActiveMenu}
                />
                <DropDownItem to="/itsupport" leftIcon={<Icons.OnlineSupportIcon />}>IT Support</DropDownItem>
                <DropDownItem to="/maintenance" leftIcon={<Icons.ToolsIcon />}>Maintenance</DropDownItem>
                <DropDownItem to="/hr-request" leftIcon={<Icons.HumanResourcesIcon />}>Human Resources</DropDownItem>
                <DropDownItem to="/nx-request" leftIcon={<Icons.EngineerIcon />}>NX Request</DropDownItem>
            </div>
        </CSSTransition>
    )
}

export default Assistance
