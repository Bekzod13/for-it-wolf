import React from 'react';
import './foot.css';

// import icons
import {ImPhone} from 'react-icons/im';
import {GrMail, GrFacebookOption, GrGoogle} from 'react-icons/gr';
import {BsTwitter} from 'react-icons/bs';
import {FaTelegramPlane} from 'react-icons/fa';
import appstore from '../../images/icon/App-logo-1.png';
import pmarket from '../../images/icon/App-logo-2.png';
import mstore from '../../images/icon/App-logo-3.png';
import bfooter from '../../images/footer.png'

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <div className="container footer">
        <div className="footer-box">
            <h3>Help</h3>
            <a href="/" className="footer-link">search</a>
            <a href="/" className="footer-link">consultant</a>
            <a href="/" className="footer-link">help & FAQs</a>
            <a href="/" className="footer-link">Location & Store</a>
            <a href="/" className="footer-link">News</a>
          </div>
          <div className="footer-box">
            <h3>Support</h3>
            <a href="/" className="footer-link">contact us</a>
            <a href="/" className="footer-link">orders and returns</a>
            <a href="/" className="footer-link">consultant</a>
            <a href="/" className="footer-link">help & FAQs</a>
            <a href="/" className="footer-link">Location & Store</a>
          </div>
          <div className="footer-box">
            <h3>Information</h3>
            <a href="/" className="footer-link">about us</a>
            <a href="/" className="footer-link">privacy & Policy</a>
            <a href="/" className="footer-link">terms & conditions</a>
            <a href="/" className="footer-link">manufactures</a>
            <a href="/" className="footer-link">orders returns</a>
          </div>
          <div className="footer-box">
            <h3>contact us</h3>
            <a href="/" className="footer-link">no: 58 A, East Madison Street,</a>
            <a href="/" className="footer-link">Baltimore, MD, USA 4508</a>
            <a href="/" className="footer-link">  
              <span>
                <ImPhone /> 
              </span>
              <span>(00) 000 111 222</span>
            </a>
            <a href="/" className="footer-link"> 
              <span>
                <GrMail /> 
              </span>
              <span>info@somedomain.com</span>
            </a>
          </div>
        </div>
        <div className="container footer-sub">
          <div className="footer-sub-box">
            <p>Contact with us</p>
            <div className='sub-footer-icons'>
              <a href="/" className="footer-sub-link">
                <BsTwitter/>
              </a>
              <a href="/" className="footer-sub-link">
                <GrFacebookOption/>
              </a>
              <a href="/" className="footer-sub-link">
                <GrGoogle/>
              </a>
              <a href="/" className="footer-sub-link">
                <FaTelegramPlane/>
              </a>
            </div>
          </div>
          <div className="footer-sub-box">
            <p>Download our app</p>
            <div className="div-footer-img-box">
              <a href="/"> 
                <img src={appstore} alt="appstore" />
              </a>
              <a href="/"> 
                <img src={pmarket} alt="pmarket" />
              </a>
              <a href="/">
                <img src={mstore} alt="mstore" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer-bg">
        <div className="container bottom-footer">
          <p>Copyright &copy; 2018, baby-planet Powered by Shopify</p>
          <img src={bfooter} height="30px" alt="" />
        </div>
      </div>
    </>
  )
}

export default Footer;