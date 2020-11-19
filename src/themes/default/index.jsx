import React from 'react'
import './assets/css/style.css'
import Header from './header'
import Sidebar from './sidebar'

const index = () => {
    return (
        <div className="main-wrapper">
            <Sidebar />
            <Header />
        </div>
    )
}
export default index
