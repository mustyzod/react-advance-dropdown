import React from 'react';
import Brand from './Brand'
import UserInfo from './UserInfo'
import Menu from './menu'

const index = () => {
    return (
        <div className="sidebar-container">
            <Brand />
            <UserInfo />
            <Menu />
        </div>
    )
}

export default index
