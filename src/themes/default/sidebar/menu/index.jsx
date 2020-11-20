import React from 'react';
import Dashboard from './Dashboard'
import Department from './Department'
import HumanResource from './HumanResource'
import Production from './Production'


function index() {
    return (
        <div className="sidemenu-wrapper">
            <Dashboard />
            <Department />
            <HumanResource />
            <Production />
        </div>
    )
}

export default index

