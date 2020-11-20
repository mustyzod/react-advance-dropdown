import React, { useState, useRef, useEffect } from 'react'



const NavItem = (props) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    // console.log("You clicked outside of me!");
                    setOpen(false)
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    useOutsideAlerter(dropdownRef);
    return (
        <li className="nav-item">
            <span className="icon-button" onClick={() => setOpen(!open)} /*ref={dropdownRef}*/>
                {props.icon}
            </span>
            {open && props.children}
        </li>
    )
}
export default NavItem;