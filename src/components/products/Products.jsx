import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import './products.css';
import { Context } from './../../context/Context';


// import images
import proSideImg from '../../images/img/imgside.jpg';
import prosideworker from '../../images/img/prosideworker.jpg';
import naski from '../../images/baby3.jpg';
import jiring from '../../images/jiring.png';
import shampoo from '../../images/shampoo.png';


// import icons
import {AiOutlineStar, AiOutlineHeart} from 'react-icons/ai';
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';
import {FiShoppingCart} from 'react-icons/fi';
import {BsCartPlusFill} from 'react-icons/bs';


const Products = () => {

  const data = useContext(Context);

  return (
    <div className="products-box">
      {/* left sidebar */}
      <div className="pro-sidebar">
          <div className="pro-side-header">
            Categories
          </div>
          <div className="pro-side-top-tags">
            <div className="pro-side-top-tag">
              <span>Soft Toys</span>
              <span>+</span>
            </div>
            <div className="pro-side-top-tag">
              <span>Activity Play</span>
              <span>+</span>
            </div>
            <div className="pro-side-top-tag">
              <span>Learning Toys</span>
              <span>+</span>
            </div>
            <div className="pro-side-top-tag">
              <span>Staking Toys</span>
              <span>+</span>
            </div>
            <div className="pro-side-top-tag">
              <span>Walkers & Push</span>
              <span>+</span>
            </div>
            <div className="pro-side-top-tag pro-side-top-tag-end">
              <span>Baby Carries</span>
              <span>+</span>
            </div>
          </div>
          <div className="pro-side-top-img-box">
            <img width='100%' src={proSideImg} alt="proSideImg" />
            <div className="pro-img-top-title">Stylish Bags</div>
          </div>
          <div className="pro-side-header">
            Tertimonials
          </div>
          <div className="pro-worker-box">
            <div className="pro-worker-img-box">
              <img src={prosideworker} alt="" />
            </div>
            <div className="pro-img-title pro-img-top-title"> Christina Art Director</div>
            <div className="pro-side-worker-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, quae repellendus dicta nesciunt cum eaque eveniet at voluptate.
            </div>
            <div className="pro-side-worker-dots">
              <div className="pro-side-worker-dot pro-side-worker-dot-blue"></div>
              <div className="pro-side-worker-dot pro-side-worker-dot-red"></div>
            </div>
          </div>
          <div className="pro-side-header">
            Featured products
          </div>
          <div className="pro-side-products-div">
            {
              data.sideProducts.map(
                product=>(
                  <div className="side-product" key={product.id}>
                    <div className="side-pro-box">
                      <p className="side-pro-title">
                        {product.title}
                      </p>
                      <p className="side-pro-price">
                        ${product.price}
                      </p>
                      <p className="side-pro-not-price">
                        {
                          product.notPrice === "" ? "" : (
                            <span>${product.notPrice}</span>
                          )
                        }
                      </p>
                      <div className="side-pro-stars">
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                      </div>
                    </div>
                    <div className="side-pro-box">
                      <img width='100%'  src={product.img} alt={product.title} />
                    </div>
                  </div>
                )
              )
            }
          </div>
          <div className="pro-side-header">
            Featured posts
          </div>
          <div className="pro-side-posts">
            {
              data.sidePosts.map(post=>(
                <div className='side-post' key={post.id} >
                  <div>
                    <img width='100%'  src={post.img} alt={post.title} />
                  </div>
                  <div className='side-post-details'>
                    <p className="side-post-date">
                      {post.date}
                    </p>
                    <p className="side-post-title">
                      {post.title}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className="pro-side-header">
            Daily Deals
          </div>
          <div className="sidebar-bottom-product">
            <div className="side-bottom-img">
              <img width='100%'  src={naski} alt="" />
            </div>
            <div className="side-bottom-product-details">
              <p className="side-bottom-pro-title">
                Critter Clinic Shoes
              </p>
              <p className="side-bottom-pro-price">
                $340.00
              </p>
              <div className="side-pro-stars">
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
                <AiOutlineStar/>
              </div>
            </div>
          </div>
      </div>
       {/* left sidebar end */}
       {/* top products */}
        <div className="pro-main">
            <div className="pro-main-header">
              <p className="pro-main-header-text">
                Top Categories
              </p>
              <div className="pro-main-header-links">
                <Link to="/" className="pro-main-header-link pro-main-header-link-active">
                    Featured Products
                  </Link>
                  <Link to="/" className="pro-main-header-link">
                    New Products
                  </Link>
                  <Link to="/" className="pro-main-header-link">
                    Best Sellers
                  </Link>
                  <div className="pro-main-link-angle">
                    <div className="pro-main-link-angle-left">
                      <RiArrowLeftSLine/>
                    </div>
                    <div className="pro-main-link-angle-right">
                      <RiArrowRightSLine/>
                    </div>
                  </div>
              </div>
            </div>
            <div className="top-category-box">
              {
                data.topProducts.map(product=>(
                  <div className="top-product" key={product.id}>
                    <div className="top-pro-img">
                      <img width="100%" src={product.img} alt={product.title} />
                    </div>
                    <div className="top-pro-details">
                      <div className="top-pro-title">
                        {product.title}
                      </div>
                      <div className="top-pro-pricies">
                        <div className="top-pro-pricies-left">
                          <p className="top-pro-price">${product.price} <span className="top-pro-not-price"> {product.notPrice === "" ? "": (<span>${product.notPrice}</span>)}</span></p>
                          <div className="top-pro-stars">
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                          </div>
                        </div>
                        <div className="top-pro-pricies-right">
                          <FiShoppingCart/>
                        </div>
                      </div>
                      <div className="top-pro-sale">
                        {product.sale === false ? "": (<span>Sale</span>)}
                      </div>
                      <div className="top-pro-aksiya">
                        {product.aksiya === "" ? "": (<span>{product.aksiya}</span>)}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="pro-ads-box">
              <div className="pro-ads pro-ads-1">
                <div>
                  <h3 className="pro-ads-header pro-ads-header-1">Biko</h3>
                  <p className="pro-ads-decs">Baby Bags</p>
                  <div className="pro-ads-price pro-ads-price-1">15% - 20% Off</div>
                  <Link to='/' className="pro-ads-link pro-ads-link-1">View More</Link>
                </div>
              </div>
              <div className="pro-ads pro-ads-2">
                <div>
                  <h3 className="pro-ads-header pro-ads-header-2">Me Me</h3>
                  <p className="pro-ads-decs">Best Towels</p>
                  <div className="pro-ads-price pro-ads-price-2">20% - 40% Off</div>
                  <Link to='/' className="pro-ads-link pro-ads-link-2">View More</Link>
                </div>
              </div>
            </div>
            <div className="pro-main-header">
              <p className="pro-main-header-text">
                Special Products
              </p>
              <div className="pro-main-header-links">
                  <div className="pro-main-link-angle">
                    <div className="pro-main-link-angle-left">
                      <RiArrowLeftSLine/>
                    </div>
                    <div className="pro-main-link-angle-right">
                      <RiArrowRightSLine/>
                    </div>
                  </div>
              </div>
            </div>
            <div className="shampoo">
              <img src={jiring} width="200px" alt="jiring" />
              <div className="shampoo-main">
                  <div className="shampoo-header">Rattle 'N Maracas</div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ea adipisci est?</p>
                  <p className="shampoo-price">$900</p>
                  <div className="top-pro-stars">
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                  </div>
                  <div className="shampoo-btns">
                    <div className="shampoo-btn">
                        <BsCartPlusFill/>
                        Add to Cart
                      </div>
                      <div className="shampoo-btn">
                        <AiOutlineHeart/>
                        Add to wishlist
                      </div>
                  </div>
              </div>
              <img src={shampoo} width="250px" alt="shampoo" />
            </div>
            <div className="hurry-hero">
            </div>
            <div className="pro-main-header">
              <p className="pro-main-header-text">
                Featured Products
              </p>
              <div className="pro-main-header-links">
                  <div className="pro-main-link-angle">
                    <div className="pro-main-link-angle-left">
                      <RiArrowLeftSLine/>
                    </div>
                    <div className="pro-main-link-angle-right">
                      <RiArrowRightSLine/>
                    </div>
                  </div>
              </div>
            </div>
            <div className="top-category-box">
              {
                data.featureProducts.map(product=>(
                  <div className="top-product" key={product.id}>
                    <div className="top-pro-img">
                      <img width="100%" src={product.img} alt={product.title} />
                    </div>
                    <div className="top-pro-details">
                      <div className="top-pro-title">
                        {product.title}
                      </div>
                      <div className="top-pro-pricies">
                        <div className="top-pro-pricies-left">
                          <p className="top-pro-price">${product.price} <span className="top-pro-not-price"> {product.notPrice === "" ? "": (<span>${product.notPrice}</span>)}</span></p>
                          <div className="top-pro-stars">
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
                          </div>
                        </div>
                        <div className="top-pro-pricies-right">
                          <FiShoppingCart/>
                        </div>
                      </div>
                      <div className="top-pro-sale">
                        {product.sale === false ? "": (<span>Sale</span>)}
                      </div>
                      <div className="top-pro-aksiya">
                        {product.aksiya === "" ? "": (<span>{product.aksiya}</span>)}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
       {/* top products end */}
    </div>
  )
}

export default Products