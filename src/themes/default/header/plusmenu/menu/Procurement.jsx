import React from 'react'
import { CSSTransition } from 'react-transition-group';
import * as Icons from '../../../zodicons'
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
                    to="#"
                    leftIcon={<Icons.ArrowIcon />}
                    goToMenu="main"
                    setActiveMenu={props.setActiveMenu}
                />
                <DropDownItem to="/nda" leftIcon={<Icons.NDAIcon />}>NDA</DropDownItem>
                <DropDownItem to="/loi" leftIcon={<Icons.PermissionIcon />}>LOI</DropDownItem>
                <DropDownItem to="/lta" leftIcon={<Icons.ContractIcon />}>LTA</DropDownItem>
                <DropDownItem to="/purchasing" leftIcon={<Icons.ShoppingCartIcon />}>Purchasing</DropDownItem>
                <DropDownItem to="/free-sample" leftIcon={<Icons.SampleIcon />}>Free Sample</DropDownItem>
                <DropDownItem to="/purchase-order" leftIcon={<Icons.PurchaseOrderIcon />}>Purchase Order Document</DropDownItem>
                <DropDownItem to="/shipment" leftIcon={<Icons.ShipmentIcon />}>Shipment</DropDownItem>
            </div>
        </CSSTransition>
    )
}

export default Procurement
