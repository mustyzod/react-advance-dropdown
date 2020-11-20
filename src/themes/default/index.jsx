import React from 'react'
import './assets/css/style.css'
import Header from './header'
import Sidebar from './sidebar'

const index = (props) => {
    return (
        <div className="main-wrapper">
            <Sidebar />
            <div className="container-right">
                <Header />
                <div className="content-wrapper">
                    {props.children}
                </div>
                <div className="footer">
                    footer
                </div>

            </div>
        </div>
    )
}
export default index
