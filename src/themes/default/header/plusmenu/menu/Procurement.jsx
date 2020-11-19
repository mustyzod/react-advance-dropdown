import React from 'react'
import { CSSTransition } from 'react-transition-group';
import {
    ArrowIcon,
    NDAIcon,
    PermissionIcon,
    ContractIcon,
    ShoppingCartIcon,
    SampleIcon,
    PurchaseOrderIcon,
    ShipmentIcon
} from '../../../zodicons'
import DropDownItem from '../../DropDownItem';

const Procurement = (props) => {
    return (
        <CSSTransition
            in={props.activeMenu === 'procurement'}
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
                <DropDownItem leftIcon={<NDAIcon />}>NDA</DropDownItem>
                <DropDownItem leftIcon={<PermissionIcon />}>LOI</DropDownItem>
                <DropDownItem leftIcon={<ContractIcon />}>LTA</DropDownItem>
                <DropDownItem leftIcon={<ShoppingCartIcon />}>Purchasing</DropDownItem>
                <DropDownItem leftIcon={<SampleIcon />}>Free Sample</DropDownItem>
                <DropDownItem leftIcon={<PurchaseOrderIcon />}>Purchase Order Document</DropDownItem>
                <DropDownItem leftIcon={<ShipmentIcon />}>Shipment</DropDownItem>
            </div>
        </CSSTransition>
    )
}

export default Procurement
