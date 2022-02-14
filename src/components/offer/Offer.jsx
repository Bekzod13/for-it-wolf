import React from 'react';
import './offer.css';

// import images
import icon1 from '../../images/icon/icon1.png'
import icon2 from '../../images/icon/icon2.png'
import icon3 from '../../images/icon/icon3.png'
import icon4 from '../../images/icon/icon4.png'


const Offer = () => {
  return (
    <div className='offer-box'>
        <div className="offer">
            <img src={icon1} alt="icon1" />
            <div>
                <h3>Free Shipping</h3>
                <p>Deliver to Door</p>
            </div>
        </div>
        <div className="offer">
            <img src={icon2} alt="icon2" />
            <div>
                <h3>24x7 Support</h3>
                <p>in Safe Hands</p>
            </div>
        </div>
        <div className="offer">
            <img src={icon3} alt="icon3" />
            <div>
                <h3>Big Saving</h3>
                <p>at Lowest Price</p>
            </div>
        </div>
        <div className="offer">
            <img src={icon4} alt="icon4" />
            <div>
                <h3>Money Back</h3>
                <p>Easy to Return</p>
            </div>
        </div>
    </div>
  )
}

export default Offer