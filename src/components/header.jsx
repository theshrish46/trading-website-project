import React from 'react';

import logo from './../assets/logo.png';
import profile from './../assets/profile.png';
import { IoIosArrowDown } from 'react-icons/io';

import { AiOutlineLogout } from 'react-icons/ai';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { VscTrash } from 'react-icons/vsc';

import './../style/color.scss';
import './../style/utility.scss';
import './../style/header.scss';

const header = () => {
    function clickHandler() {
        const subMenu = document.querySelector('#hidden-menu')
        if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none'

        } else {
            subMenu.style.display = 'block'
        }
    }
    return (
        <div className='container'>
            <header className='header'>
                <div className="header-logo">
                    <img src={logo} alt="an img" />
                </div>

                <div className="header-profile">
                    <div>
                        <img src={profile} alt="an img" />
                        <IoIosArrowDown size={23} onClick={clickHandler} />
                    </div>

                    <div className="header__menu" id='hidden-menu'>
                        <ul>
                            <li>
                                <MdOutlineAdminPanelSettings className='header-icon' />
                                Admin Profile
                            </li>

                            <li>
                                <AiFillLock className='header-icon' />
                                Change Password
                            </li>

                            <li>
                                <VscTrash className='header-icon' />
                                CLear Cache
                            </li>

                            <li>
                                <AiOutlineLogout className='header-icon' />
                                Logout
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default header
