import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'


// import icons
import {ImPhone} from 'react-icons/im';
import {GrMail} from 'react-icons/gr';
import {TiLocationArrow} from 'react-icons/ti';
import {FaTruck, FaSearch} from 'react-icons/fa';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {IoMdHeartEmpty} from 'react-icons/io';
import {BsHandbag} from 'react-icons/bs';
import logo from '../../images/logo.png';
import user from '../../images/icon/user.svg';

const Navbar = () => {
  return (
    <>
        <div className="nav-top-bg">
            <div className="container nav-top">
            <div className="nav-top-left">
                    <a href="tel:+00000111222">
                        <span>
                            <ImPhone /> 
                        </span>
                        <span>
                            (00) 000 111 222
                        </span>
                    </a>
                    <a href="info@somedomain.com">
                        <span>
                            <GrMail /> 
                        </span>
                        <span>
                            info@somedomain.com
                        </span>
                    </a>
                </div>
                <div className="nav-top-right">
                    <a href="https://www.google.maps.com">
                        <span>
                            <TiLocationArrow /> 
                        </span>
                        <span>
                            Store Location
                        </span>
                    </a>
                    <a href="tel:+00000111222">
                        <span>
                            <FaTruck /> 
                        </span>
                        <span>
                            Truck Your Order
                        </span>
                    </a>
                    <div className="money">
                        <p className="active-money">
                            USD <span><MdKeyboardArrowDown/></span>
                        </p>
                        <div className="money-course">
                            <p>USD</p>
                            <p>EUR</p>
                            <p>RUB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="nav-bg">
            <div className="container nav-main">
                <Link to='/' className="nav-logo">
                    <img src={logo} alt="" />
                </Link>
                <div className="nav-search-box">
                    <div className="nav-drop-box">
                        <p className='active-nav-category'>
                            <span>All Categories</span>
                            <span><MdKeyboardArrowDown/></span>
                        </p>
                        <div className='nav-categories'>
                            <p>all Categories</p>
                            <p>boys clothing</p>
                            <p>girl clothing</p>
                        </div>
                    </div>
                    <div className="nav-input">
                        <input type="text" placeholder='Search...' />
                    </div>
                    <div className="nav-search-btn">
                        <FaSearch />
                    </div>
                </div>
                <div className="nav-main-right">
                    <Link to="/likes" className="nav-right-link">
                        <IoMdHeartEmpty/>
                    </Link>
                    <Link to="/cart" className="nav-right-link">
                        <span>
                            <BsHandbag />
                        </span>
                        <div className="nav-cart">
                            <div className="nav-cart-count-item">
                                0
                            </div>
                            <div className="nav-cart-count-money">
                                $ 0.00
                            </div>
                        </div>
                    </Link>
                    <Link to="/profile" className="nav-right-link">
                        <img src={user} width="24px" alt="" />
                    </Link>
                </div>
            </div>
        </div>
        <div className="nav-bottom">
            <a href="/" className="nav-bottom-link">home <MdKeyboardArrowDown/></a>
            <a href="/" className="nav-bottom-link">shop <MdKeyboardArrowDown/></a>
            <a href="/" className="nav-bottom-link">health and safety <MdKeyboardArrowDown/></a>
            <a href="/" className="nav-bottom-link">baby clothes <MdKeyboardArrowDown/></a>
            <a href="/" className="nav-bottom-link">baby toys</a>
            <a href="/" className="nav-bottom-link">pages <MdKeyboardArrowDown/></a>
        </div>
    </>
  )
}

export default Navbar;