import React from 'react';

import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { GoTools } from 'react-icons/go';
import { CiUser } from 'react-icons/ci';
import { FaWallet } from 'react-icons/fa';
import { BiNotepad } from 'react-icons/bi';
import { CgNotes } from 'react-icons/cg';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BiNote } from 'react-icons/bi';
import { AiOutlineTable } from 'react-icons/ai';
import { CiSquareMore } from 'react-icons/ci';

import './../style/utility.scss';
import './../style/subheader.scss';

const subHeader = () => {
    return (
        <div className='container'>
            <div className="sub-header">
                <div className="home-link">
                    <a href="#">Home <MdOutlineArrowForwardIos /></a>
                </div>

                <div className="home-head">
                    <h3>Welcome Mr. Admin</h3>
                </div>

                <div className="home-list">
                    <ul>
                        <li>
                            <GoTools className='icon' />
                            Setup
                            <IoIosArrowDown />
                        </li>
                        <li>
                            <CiUser className='icon' />
                            User
                            <IoIosArrowDown />

                        </li>
                        <li>
                        <FaWallet className='icon' />
                            Wallet Fund
                            <IoIosArrowDown />

                        </li>
                        <li>
                        <BiNotepad className='icon'/>
                            Statement
                            <IoIosArrowDown />

                        </li>
                        <li>
                        <CgNotes className='icon' />
                            Ledger
                            <IoIosArrowDown />

                        </li>
                        <li>
                        <AiOutlineCreditCard className='icon' />
                            Credit Services
                            <IoIosArrowDown />

                        </li>
                        <li>
                        <BiNote className='icon'/>
                            Complaints
                            <IoIosArrowDown />

                        </li>
                        <li>
                        <CiUser className='icon' />
                            Management
                            <IoIosArrowDown />

                        </li>
                        <li>
                        <AiOutlineTable className='icon' />
                            Accounting
                            <IoIosArrowDown />

                        </li>
                        <li>
                        <CiSquareMore className='icon' />
                            More
                            <IoIosArrowDown />

                        </li>
                    </ul>
                </div>
            </div>
            <section className='section'></section>
        </div>
    )
}

export default subHeader
