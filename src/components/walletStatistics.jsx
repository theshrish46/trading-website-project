import React from 'react';
import wallet from './../assets/wallet.png';

import './../style/utility.scss';
import './../style/walletstats.scss';

const walletStatistics = () => {
    return (
        <div className='container'>
            <div className="wallet-menu">
                <div className='wallet-head'>
                    <img src={wallet} alt="an img" />
                    <h3>Wallet Statistics</h3>
                </div>
                <div className="wallet-menuList">
                    <div className="wallet-menu-first">
                        <h4>User’s Wallet Balance - 000000</h4>

                        <div>
                            <div className="wallet-left">
                                <ul>
                                    <li>
                                        <span>API Partner</span>
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
                                        <span>DSA Partner</span>
                                        <span>000000</span>
                                    </li>
                                    <li>
                                        <span>B2C Customer</span>
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

                    <div className="wallet-menu-second">
                        <h4>User Joining</h4>
                        <div>
                            <div className="wallet-left">
                                <h4>Payment Gateway</h4>
                                <div>
                                </div>
                                <ul>
                                    <li>
                                        <span>Today</span>
                                        <span>10,000</span>
                                    </li>
                                    <li>
                                        <span>Yesterday</span>
                                        <span>10,000</span>
                                    </li>
                                    <li>
                                        <span>This Month</span>
                                        <span>10000</span>
                                    </li>
                                    <li>
                                        <span>Last Month</span>
                                        <span>10,000</span>
                                    </li>
                                    <li>
                                        <span>Total FY</span>
                                        <span>10,000</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="wallet-mid">
                                <h4>VA</h4>
                                <div>

                                    <ul>
                                        <li>
                                            <span>Today</span>
                                            <span>10,000</span>
                                        </li>
                                        <li>
                                            <span>Yesterday</span>
                                            <span>10,000</span>
                                        </li>
                                        <li>
                                            <span>This Month</span>
                                            <span>10,000</span>
                                        </li>
                                        <li>
                                            <span>Last Month</span>
                                            <span>10,000</span>
                                        </li>
                                        <li>
                                            <span>Total FY</span>
                                            <span>10,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="wallet-right">
                                <h4>Manually</h4>
                                <div>

                                    <ul>
                                        <li>
                                            <span>Today</span>
                                            <span>10,000</span>
                                        </li>
                                        <li>
                                            <span>Yesterday</span>
                                            <span>10,000</span>
                                        </li>
                                        <li>
                                            <span>This Month</span>
                                            <span>10,000</span>
                                        </li>
                                        <li>
                                            <span>Last Month</span>
                                            <span>10,000</span>
                                        </li>
                                        <li>
                                            <span>Total FY</span>
                                            <span>10,000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section className='section'></section>
        </div>
    )
}

export default walletStatistics
