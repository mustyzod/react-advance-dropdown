import React from 'react';
const Navbar = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <ul className="navbar-nav">
                    {props.children}
                </ul>
            </nav>
        </React.Fragment>
    )
}
export default Navbar;