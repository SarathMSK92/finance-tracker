import React from 'react'
import './Navbar.scss'
import notification_icon from '../../assets/images/notification-icon.png'
import user_logo from '../../assets/images/sarathkumar-logo.jpg'
import navbar_title_logo from '../../assets/images/logo.png'

function Navbar() {
    return (
        <div className='navbar-root'>
            <div className='navbar-left'>
                <div className='navbar-logo'>
                    <img src={navbar_title_logo} alt='navbar-title-logo' className='navbar-title-logo' />
                </div>
            </div>

            <div className='navbar-right'>
                <div className='navbar-search'></div>

                <div className='navbar-account'>
                    <img src={notification_icon} className='navbar-notification-icon' alt='navbar-notification-icon' />
                    <img src={user_logo} className='navbar-user-login-icon' alt='navbar-user-login-icon' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
