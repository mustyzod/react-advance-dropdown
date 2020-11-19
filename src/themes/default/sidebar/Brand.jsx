import React from 'react'

const Brand = () => {
    return (
        <div className="sidebar-logo-wrapper">
            <img
                className="brand-logo"
                src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                alt="brand_logo"
                srcSet={process.env.PUBLIC_URL + '/assets/images/logo.png'}
            />
            <img className="brand-text mobile-hide"
                src={process.env.PUBLIC_URL + '/assets/images/logo_text.png'}
                alt="brand_text"
                srcSet={process.env.PUBLIC_URL + '/assets/images/logo_text.png'}
            />
        </div>
    )
}

export default Brand
