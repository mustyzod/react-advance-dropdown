import React from 'react';
import Dashboard from './Dashboard'
import Department from './Department'
import HumanResource from './HumanResource'


function index() {
    return (
        <div className="sidemenu-wrapper">
            <Dashboard />
            <Department />
            <HumanResource />
        </div>
    )
}

export default index

