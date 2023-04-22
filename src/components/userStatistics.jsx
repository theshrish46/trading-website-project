import React from 'react';
import userHead from './../assets/man.png';

import './../style/utility.scss';
import './../style/userstats.scss';

const userStatistics = () => {
    return (
        <div className='container'>
            <div className="stats-menu">
                <div className='user-head'>
                    <img src={userHead} alt="an img" />
                    <h3>User Statistics</h3>
                </div>
                <div className="user-menuList">
                    <div className="menu-first">
                        <h4>User Joining</h4>

                        <div>
                            <div className="left">
                                <ul>
                                    <li>
                                        <span>Sub Admin</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>Reseller API Partner</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>Distributer Dsa Partner</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>B2C Member</span>
                                        <span>000000</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <span>API Partner</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>Master DSA Partner</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>Dsa Partner</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>Block User</span>
                                        <span>000000</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="menu-second">
                        <h4>User Joining</h4>

                        <div>
                            <div className="left">
                                <ul>
                                    <li>
                                        <span>Sub Admin</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>Reseller API Partner</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>Distributer Dsa Partner</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>B2C Member</span>
                                        <span>000000</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <span>API Partner</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>Master DSA Partner</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>Dsa Partner</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>Block User</span>
                                        <span>000000</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <section className='.section'></section>
        </div>
    )
}

export default userStatistics
