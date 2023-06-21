import React from 'react'
import trendingbookcover from '../../images/trending-book-cover.png';
import { BsCart3, BsFillStarFill } from 'react-icons/bs'

const BookCard = () => {
  return (
    <div className="add-to-cart-book-box d-flex overflow-hidden position-relative">
                    <div className="add-cart-book-image">
                      <img src={trendingbookcover} alt="Book Cover" />
                    </div>
                    <div className="add-cart-book-data">
                      <div className="title">
                        <h3>Dream psychology</h3>
                        <p>Sigmund Fread</p>
                      </div>
                      <div className="price d-flex justify-content-between align-items-center">
                        <p className="price-number">$18.04 <span>$25.04</span></p>
                        <p className="rating">
                          <BsFillStarFill />
                          4.6
                        </p>
                      </div>
                      <div className="btn-wrap">
                        <button className="btn btn-add-to-cart">
                          <BsCart3 />
                          Add to cart
                        </button>
                      </div>
                    </div>
                    <div className="corner-ribbon">No 1</div>
                  </div>
  )
}

export default BookCard