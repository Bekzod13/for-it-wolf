import React from 'react';
import './hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero-box'>
        <div className="hero-main hero">
            <h3>
                Kids Accessories n Toys
            </h3>
            <h1>
                Bingo Lingo
            </h1>
            <p>
                We create the best toys your kids
            </p>
            <Link to='/' className="hero-link">
                Browse Products
            </Link>
        </div>
        <div className="hero-top hero">
            <h3>
                Baby Strollers
            </h3>
            <h1>
                Chick me
            </h1>
            <Link to='/' className="hero-link">
                Browse Products
            </Link>
        </div>
        <div className="hero-bottom hero">
            <h3>
                Baby Care Products
            </h3>
            <h1>
                Baby Love
            </h1>
            <Link to='/' className="hero-link">
                Browse Products
            </Link>
        </div>
    </div>
  )
}

export default Hero