import React from "react";
import { NavLink } from "react-router-dom";
import './style.scss';
import banner from '../../assets/images/banner.jpg';
import logoimg from '../../assets/images/simple-house-logo.png'

class Header extends React.Component {
    render() {
        return <section>
            <div className="header-banner" style={{ backgroundImage: `url(${banner})` }}>
                <div className="G-container">
                    <div className="banner-box">
                        <div className="banner-logo">
                            <span style={{ backgroundImage: `url(${logoimg})` }}></span>
                            <div>
                                <h1>Avocado House</h1>
                                <p>new restaurant template</p>
                            </div>
                        </div>
                        <div className="banner-nav-list">
                            <ul>
                                <li>
                                    <NavLink to={"/home"}> Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/about"}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/contact"}>Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}
export default Header