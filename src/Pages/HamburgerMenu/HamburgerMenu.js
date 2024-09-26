import React from "react";
import "./HamburgerMenu.scss";

const HamburgerMenu = () => {
    return (
        <div className="hamburger-menu-root">
            <div className="hamburger-logo"></div>
            <div className='hamburger-menu-items'>
                <a href="/" className="hamburger-menu">
                    <i class="fa-solid fa-house"></i>
                    <span>Dashboard</span>
                </a>
                <a href="/investments" className="hamburger-menu">
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                    <span>Investments</span>
                </a>
                <a href="/expense" className="hamburger-menu">
                    <i class="fa-solid fa-sack-dollar"></i>
                    <span>Expenses</span>
                </a>
                <a href="/debt" className="hamburger-menu">
                    <i class="fa-solid fa-circle-dollar-to-slot"></i>
                    <span>Debt</span>
                </a>
                <a href="/savings" className="hamburger-menu">
                    <i class="fa-solid fa-piggy-bank"></i>

                    <span>Savings</span>
                </a>
                <div className="hamburger-settings">
                    <a href="#" className="hamburger-menu">
                        <div>
                            <i class="fa-solid fa-gear"></i>
                        </div>
                        <span>Control</span>
                    </a>
                    <a href="#" className="hamburger-menu">
                        <div>
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <span>Account</span>
                    </a>

                </div>
            </div>

        </div>
    );
}

export default HamburgerMenu;
