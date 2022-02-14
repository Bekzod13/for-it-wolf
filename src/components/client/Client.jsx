import React, {useContext} from 'react';
import './client.css';
import { Context } from './../../context/Context';

// import icons
import {AiOutlineStar} from 'react-icons/ai';
import {GrView} from 'react-icons/gr';
import {FiShoppingCart} from 'react-icons/fi';
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';

// import images
import client1 from '../../images/partners/client-3.jpg';
import client2 from '../../images/partners/client-4.jpg';
import client3 from '../../images/partners/client-5.jpg';
import client4 from '../../images/partners/client-6.jpg';
import client5 from '../../images/partners/client-7.jpg';
import client6 from '../../images/partners/client-8.jpg';

const clients = [client1, client2, client3, client4, client5, client6];

const Client = () => {

    const data = useContext(Context);

  return (
    <div className='client-box'>
        <div className="client-header">our clients</div>
        <div className="client-img-box">
            {
                clients.map(img=>(
                    <div className="client-img" key={img}>
                        <img src={img} width="100%" alt="" />
                    </div>
                ))
            }
        </div>
        <div className="bottom-products-container">
        <div className="bottom-product-box">
                <div className="bottom-product-header">
                    <p>best seller</p> 
                    <div>
                        <RiArrowLeftSLine/>
                        <RiArrowRightSLine/>
                    </div>
                </div>
                <div className="bottom-products">
                    {
                        data.bestSeller.map(product=>(
                            <div className="bottom-product" key={product.id}>
                                <div className="bottom-product-img-box">
                                    <img width="100%" src={product.img} alt={product.title} />
                                </div>
                                <div className="bottom-product-details">
                                    <div className="bottom-product-title">
                                        {product.title}
                                    </div>
                                    <div className="bottom-product-price">
                                        ${product.price}
                                        <span>
                                            {
                                                product.notPrice === "" ? "" : (
                                                    <span>
                                                        ${product.notPrice}
                                                    </span>
                                                )
                                            }
                                        </span>
                                    </div>
                                    <div className="bottom-product-stars">
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                    </div>
                                    <div className="bottom-product-action">
                                        <div className="bottom-product-icon">
                                            <GrView/>
                                        </div>
                                        <div className="bottom-product-icon">
                                            <FiShoppingCart/>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-product-sale">
                                    {
                                        product.sale ? (
                                            <span>Sale</span>
                                        ): ""
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="bottom-product-box">
                <div className="bottom-product-header">
                    <p>New Arrivals</p> 
                    <div>
                        <RiArrowLeftSLine/>
                        <RiArrowRightSLine/>
                    </div>
                </div>
                <div className="bottom-products">
                    {
                        data.newArrivals.map(product=>(
                            <div className="bottom-product" key={product.id}>
                                <div className="bottom-product-img-box">
                                    <img width="100%" src={product.img} alt={product.title} />
                                </div>
                                <div className="bottom-product-details">
                                    <div className="bottom-product-title">
                                        {product.title}
                                    </div>
                                    <div className="bottom-product-price">
                                        ${product.price}
                                        <span>
                                            {
                                                product.notPrice === "" ? "" : (
                                                    <span>
                                                        ${product.notPrice}
                                                    </span>
                                                )
                                            }
                                        </span>
                                    </div>
                                    <div className="bottom-product-stars">
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                    </div>
                                    <div className="bottom-product-action">
                                        <div className="bottom-product-icon">
                                            <GrView/>
                                        </div>
                                        <div className="bottom-product-icon">
                                            <FiShoppingCart/>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-product-sale">
                                    {
                                        product.sale ? (
                                            <span>Sale</span>
                                        ): ""
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="bottom-product-box">
                <div className="bottom-product-header">
                    <p>Featured Products</p> 
                    <div>
                        <RiArrowLeftSLine/>
                        <RiArrowRightSLine/>
                    </div>
                </div>
                <div className="bottom-products">
                    {
                        data.productsFeature.map(product=>(
                            <div className="bottom-product" key={product.id}>
                                <div className="bottom-product-img-box">
                                    <img width="100%" src={product.img} alt={product.title} />
                                </div>
                                <div className="bottom-product-details">
                                    <div className="bottom-product-title">
                                        {product.title}
                                    </div>
                                    <div className="bottom-product-price">
                                        ${product.price}
                                        <span>
                                            {
                                                product.notPrice === "" ? "" : (
                                                    <span>
                                                        ${product.notPrice}
                                                    </span>
                                                )
                                            }
                                        </span>
                                    </div>
                                    <div className="bottom-product-stars">
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                        <AiOutlineStar />
                                    </div>
                                    <div className="bottom-product-action">
                                        <div className="bottom-product-icon">
                                            <GrView/>
                                        </div>
                                        <div className="bottom-product-icon">
                                            <FiShoppingCart/>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-product-sale">
                                    {
                                        product.sale ? (
                                            <span>Sale</span>
                                        ): ""
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Client