import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import homebook from '../../images/Home-Book.png';
import astronut from '../../images/astronut.png';
import bookhomepage from '../../images/book-home-page.jpg';
import trendingbookcover from '../../images/trending-book-cover.png';
import newtrendingbook from '../../images/new-trending-book.png';
import authorprofile from '../../images/author-profile.png';
import offerbooks from '../../images/offer-books.png';
import publishbookauthor from '../../images/publish-book-author.png';
import quetos from '../../images/quetos.png';
import booksdownload from '../../images/books-download.png';
import sliderbook from '../../images/slider-book.png';
import { BsFillStarFill, BsCart3, BsStarHalf, BsStopwatch, BsChevronDown} from "react-icons/bs";
import ProgressBar from "react-bootstrap/ProgressBar";

const Home = ()=>{
  const notify = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });
}
  return (
    <>
        <section className="main-section">
        <div className="main-section-content">
          <h1>Once you peak inside our books, <span className="primary-color">you won't want to leave</span></h1>
          <div className="btn-wrap">
            <button className="btn btn-primary">Write a book</button>
            <button className="btn btn-secondary">Start Reading...</button>
          </div>
          <div className="book-pages-info container">
            <p>Reader Reading Book Creative</p>
            <p>Author Writing Book Creative</p>
          </div>
          <div className="image">
            <img src={homebook} alt="Home Book" className="mx-auto"/>
          </div>
        </div>
      </section>
      <section className="featured-books-section">
        <div className="container-large">
          <div className="featured-books-content">
            <div className="headng d-flex justify-content-between align-items-center">
              <div className="left-content">
                <div className="label-chip mb-2">
                  <p>By Dream Capch</p>
                </div>
                <h4 className="fw-bold">Featured Books</h4>
              </div>
              <div className="left-content">
                <a href="#" className="white-color">View All</a>
              </div>
            </div>
            <diiv className="Books-listing d-flex justify-content-between flex-wrap">
              <div className="left-content">
                <div className="large-box">
                  <img src={astronut} alt="Home Book" className="mx-auto mb-2"/>
                  <div className="add-to-cart-book-box d-flex">
                    <div className="add-cart-book-image">
                      <img src={bookhomepage} alt="Book Cover" />
                    </div>
                    <div className="add-cart-book-data">
                      <div className="title">
                        <h3>Dream psychology</h3>
                        <p>Sigmund Fread</p>
                      </div>
                      <div className="price d-flex justify-content-between align-items-center">
                        <p className="price-number">$18.04 <span>$25.04</span></p>
                        <p className="rating">
                         <BsFillStarFill/>
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
                  </div>
                </div>
              </div>
              <div className="right-content  d-flex justify-content-between flex-wrap">
              <div className="add-to-cart-book-box d-flex">
                    <div className="add-cart-book-image">
                      <img src={bookhomepage} alt="Book Cover" />
                    </div>
                    <div className="add-cart-book-data">
                      <div className="title">
                        <h3>Dream psychology</h3>
                        <p>Sigmund Fread</p>
                      </div>
                      <div className="progress-detail">
                      <p>40-41/159</p>
                      <ProgressBar now={40} />
                    </div>
                      {/* <div className="price d-flex justify-content-between align-items-center">
                        <p className="price-number">$18.04 <span>$25.04</span></p>
                        <p className="rating">
                         <BsFillStarFill/>
                          4.6
                        </p>
                      </div> */}
                      <div className="btn-wrap">
                        <button className="btn btn-add-to-cart"  onClick={notify}>
                         <BsCart3 />
                          Add to cart
                        </button>
                        <ToastContainer />
                      </div>
                    </div>
                  </div>
                  <div className="add-to-cart-book-box d-flex">
                    <div className="add-cart-book-image">
                      <img src={bookhomepage} alt="Book Cover" />
                    </div>
                    <div className="add-cart-book-data">
                      <div className="title">
                        <h3>Dream psychology</h3>
                        <p>Sigmund Fread</p>
                      </div>
                      <div className="price d-flex justify-content-between align-items-center">
                        <p className="price-number">$18.04 <span>$25.04</span></p>
                        <p className="rating">
                         <BsFillStarFill/>
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
                  </div>
                  <div className="add-to-cart-book-box d-flex">
                    <div className="add-cart-book-image">
                      <img src={bookhomepage} alt="Book Cover" />
                    </div>
                    <div className="add-cart-book-data">
                      <div className="title">
                        <h3>Dream psychology</h3>
                        <p>Sigmund Fread</p>
                      </div>
                      <div className="price d-flex justify-content-between align-items-center">
                        <p className="price-number">$18.04 <span>$25.04</span></p>
                        <p className="rating">
                         <BsFillStarFill/>
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
                  </div>
                  <div className="add-to-cart-book-box d-flex">
                    <div className="add-cart-book-image">
                      <img src={bookhomepage} alt="Book Cover" />
                    </div>
                    <div className="add-cart-book-data">
                      <div className="title">
                        <h3>Dream psychology</h3>
                        <p>Sigmund Fread</p>
                      </div>
                      <div className="price d-flex justify-content-between align-items-center">
                        <p className="price-number">$18.04 <span>$25.04</span></p>
                        <p className="rating">
                         <BsFillStarFill/>
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
                  </div>
              </div>
            </diiv>
          </div>
        </div>
      </section>
      <section className="trending-books-section">
        <div className="container">
          <div className="trending-books-content">
            <div className="headng d-flex justify-content-between align-items-center">
              <div className="left-content">
                <div className="label-chip mb-2">
                  <p>Most recommended</p>
                </div>
                <h4 className="fw-bold">Trending Books</h4>
              </div>
              <div className="left-content">
                <a href="#" className="dark-blue ms-3 fw-500">View All</a>
              </div>
            </div>
            <diiv className="Books-listing vertical-align d-flex justify-content-between align-items-center">
             <ul className="trending-books-list">
              <li>
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
                         <BsFillStarFill/>
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
                    <div class="corner-ribbon">No 1</div>
                  </div>
              </li>
              <li>
              <div className="add-to-cart-book-box d-flex position-relative">
                    <div className="add-cart-book-image">
                      <img src={trendingbookcover} alt="Book Cover" />
                    </div>
                    <div className="add-cart-book-data">
                      <div className="title">
                        <h3>Dream psychology</h3>
                        <p>Sigmund Fread</p>
                      </div>
                      <div className="price d-flex justify-content-between align-items-center">
                        <p className="price-number green-color">Free Book</p>
                        <p className="rating">
                         <BsFillStarFill/>
                          4.6
                        </p>
                      </div>
                      <div className="btn-wrap">
                        <button className="btn btn-green btn-add-to-cart">
                         <BsCart3 />
                          Add to cart
                        </button>
                      </div>
                    </div>
                    <div class="trending-corner-label">Trending on #4</div>
                  </div>
              </li>
              <li>
              <div className="add-to-cart-book-box d-flex">
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
                         <BsFillStarFill/>
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
                  </div>
              </li>
              <li>
              <div className="add-to-cart-book-box d-flex">
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
                         <BsFillStarFill/>
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
                  </div>
              </li>
              <li>
              <div className="add-to-cart-book-box d-flex">
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
                         <BsFillStarFill/>
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
                  </div>
              </li>
             </ul>
            </diiv>
          </div>
        </div>
      </section>
       <section className="new-trending-book-section">
        <div className="container">
          <div className="new-trending-book-content d-flex justify-content-between align-items-center">
            <div className="left-part">
              <h6>Our Monsoon Offer Available New Trending Books </h6>
              <div className="btn-wrap">
                <button className="btn btn-white">Explore Now</button>
              </div>
            </div>
            <div className="right-part">
              <ul className="d-flex">
                <li>
                  <img src={newtrendingbook} alt="Book Cover" />
                </li>
                <li>
                  <img src={newtrendingbook} alt="Book Cover" />
                </li>
                <li>
                  <img src={newtrendingbook} alt="Book Cover" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="top-selling-books">
        <div className="container-large">
          <div className="top-selling-books-content d-flex justify-content-between flex-wrap">
            <div className="slider-content">
            <div className="add-label">
                    <p className="fs-18 white-color">Ads</p>
                  </div>
            <Carousel>
                <Carousel.Item>
                  <div className="slider-data">
                    <div className="small-btn">
                      <p>Mystery Thriller</p>
                    </div>
                    <h5 className="slider-title">A Matter of Honour</h5>
                    <p className="author-name">By: Jeffrey Archer</p>
                    <div className="btn-wrap d-flex justify-content-between">
                      <button className="btn"><span>$15</span>Add to Cart</button>
                      <a href="#">More from Author
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.07692 1.75C1.99022 1.75 1.90706 1.78444 1.84575 1.84575C1.78444 1.90706 1.75 1.99022 1.75 2.07692V13.9231C1.75 14.0098 1.78444 14.0929 1.84575 14.1542C1.90706 14.2156 1.99022 14.25 2.07692 14.25H13.9231C14.0098 14.25 14.0929 14.2156 14.1542 14.1542C14.2156 14.0929 14.25 14.0098 14.25 13.9231V9.07692C14.25 8.66271 14.5858 8.32692 15 8.32692C15.4142 8.32692 15.75 8.66271 15.75 9.07692V13.9231C15.75 14.4076 15.5575 14.8723 15.2149 15.2149C14.8723 15.5575 14.4076 15.75 13.9231 15.75H2.07692C1.59239 15.75 1.12771 15.5575 0.785093 15.2149C0.442479 14.8723 0.25 14.4076 0.25 13.9231V2.07692C0.25 1.59239 0.442479 1.12771 0.785093 0.785093C1.12771 0.442479 1.59239 0.25 2.07692 0.25H6.92308C7.33729 0.25 7.67308 0.585786 7.67308 1C7.67308 1.41421 7.33729 1.75 6.92308 1.75H2.07692ZM10.4808 1C10.4808 0.585786 10.8166 0.25 11.2308 0.25H15C15.2005 0.25 15.3825 0.328641 15.5171 0.456753C15.5262 0.465373 15.535 0.474217 15.5436 0.483276C15.6073 0.550207 15.6562 0.626017 15.6904 0.706591C15.7288 0.796713 15.75 0.895879 15.75 1V4.76923C15.75 5.18344 15.4142 5.51923 15 5.51923C14.5858 5.51923 14.25 5.18344 14.25 4.76923V2.81066L8.53033 8.53033C8.23744 8.82322 7.76256 8.82322 7.46967 8.53033C7.17678 8.23744 7.17678 7.76256 7.46967 7.46967L13.1893 1.75H11.2308C10.8166 1.75 10.4808 1.41421 10.4808 1Z" fill="white"/>
                        </svg>
                      </a>
                    </div>
                    <div className="slider-book pb-4 mb-4">
                    <img src={sliderbook} alt="Book Cover" className="mx-auto"/>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="right-content  d-flex justify-content-between align-items-center flex-wrap">
            <div className="headng d-flex justify-content-between align-items-center w-100">
              <div className="left-content">
                <div className="label-chip mb-2">
                  <p>By Dream Capch</p>
                </div>
                <h4 className="fw-bold white-color">Top Selling Books</h4>
              </div>
              <div className="left-content">
                <a href="#" className="white-color">View All</a>
              </div>
            </div>
              <div className="add-to-cart-book-box d-flex">
                    <div className="add-cart-book-image">
                      <img src={bookhomepage} alt="Book Cover" />
                    </div>
                    <div className="add-cart-book-data">
                      <div className="title">
                        <h3>Dream psychology</h3>
                        <p>Sigmund Fread</p>
                      </div>
                      <div className="price d-flex justify-content-between align-items-center">
                        <p className="price-number">$18.04 <span>$25.04</span></p>
                        <p className="rating">
                         <BsFillStarFill/>
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
                  </div>
                  <div className="add-to-cart-book-box d-flex">
                    <div className="add-cart-book-image">
                      <img src={bookhomepage} alt="Book Cover" />
                    </div>
                    <div className="add-cart-book-data">
                      <div className="title">
                        <h3>Dream psychology</h3>
                        <p>Sigmund Fread</p>
                      </div>
                      <div className="price d-flex justify-content-between align-items-center">
                        <p className="price-number">$18.04 <span>$25.04</span></p>
                        <p className="rating">
                         <BsFillStarFill/>
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
                  </div>
                  <div className="add-to-cart-book-box d-flex">
                    <div className="add-cart-book-image">
                      <img src={bookhomepage} alt="Book Cover" />
                    </div>
                    <div className="add-cart-book-data">
                      <div className="title">
                        <h3>Dream psychology</h3>
                        <p>Sigmund Fread</p>
                      </div>
                      <div className="price d-flex justify-content-between align-items-center">
                        <p className="price-number">$18.04 <span>$25.04</span></p>
                        <p className="rating">
                         <BsFillStarFill/>
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
                  </div>
                  <div className="add-to-cart-book-box d-flex">
                    <div className="add-cart-book-image">
                      <img src={bookhomepage} alt="Book Cover" />
                    </div>
                    <div className="add-cart-book-data">
                      <div className="title">
                        <h3>Dream psychology</h3>
                        <p>Sigmund Fread</p>
                      </div>
                      <div className="price d-flex justify-content-between align-items-center">
                        <p className="price-number">$18.04 <span>$25.04</span></p>
                        <p className="rating">
                         <BsFillStarFill/>
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
                  </div>
              </div>
          </div>
        </div>
      </section>
       <section className="top-authors-section">
        <div className="container">
          <div className="top-autors-content">
          <div className="headng d-flex justify-content-between align-items-center">
              <div className="left-content">
                <div className="label-chip mb-2">
                  <p>By Dream Capch</p>
                </div>
                <h4 className="fs-2 fw-bold">Top Authors</h4>
              </div>
              <div className="left-content d-flex align-items-center">
              <Dropdown>
                <Dropdown.Toggle className="btn btn-secondary me-4" id="dropdown-basic">
                 This week <BsChevronDown />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">This Month</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                <a href="#" className="dark-blue ms-3 fw-500">View All</a>
              </div>
          </div>
          <ul className="authors-list d-flex flex-wrap">
            <li>
              <div className="background-box"></div>
              <div className="author-detail">
                <img src={authorprofile} alt="Author Profile" />
                <h4 className="title">Albert Flores</h4>
                <p className="light-grey">Comic & Horror Book Writer</p>
                <ul className="social-network">
                  <li>
                    <h5 className="heading">200</h5>
                    <span>Followers</span>
                  </li>
                  <li>
                    <h5 className="heading">4.5</h5>
                    <span>Rating</span>
                  </li>
                  <li>
                    <h5 className="heading">20+</h5>
                    <span>Book Published</span>
                  </li>
                </ul>
                <div className="btn-wrap">
                  <button className="btn btn-primary">Write a book</button>
                  <a href="#" class="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</a>
                </div>
              </div>
            </li>
            <li>
              <div className="background-box"></div>
              <div className="author-detail">
                <img src={authorprofile} alt="Author Profile" />
                <h4 className="title">Albert Flores</h4>
                <p className="light-grey">Comic & Horror Book Writer</p>
                <ul className="social-network">
                  <li>
                    <h5 className="heading">200</h5>
                    <span>Followers</span>
                  </li>
                  <li>
                    <h5 className="heading">4.5</h5>
                    <span>Rating</span>
                  </li>
                  <li>
                    <h5 className="heading">20+</h5>
                    <span>Book Published</span>
                  </li>
                </ul>
                <div className="btn-wrap">
                  <button className="btn btn-primary">Write a book</button>
                  <a href="#" class="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</a>
                </div>
              </div>
            </li>
            <li>
              <div className="background-box"></div>
              <div className="author-detail">
                <img src={authorprofile} alt="Author Profile" />
                <h4 className="title">Albert Flores</h4>
                <p className="light-grey">Comic & Horror Book Writer</p>
                <ul className="social-network">
                  <li>
                    <h5 className="heading">200</h5>
                    <span>Followers</span>
                  </li>
                  <li>
                    <h5 className="heading">4.5</h5>
                    <span>Rating</span>
                  </li>
                  <li>
                    <h5 className="heading">20+</h5>
                    <span>Book Published</span>
                  </li>
                </ul>
                <div className="btn-wrap">
                  <button className="btn btn-primary">Write a book</button>
                  <a href="#" class="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</a>
                </div>
              </div>
            </li>
            <li>
              <div className="background-box"></div>
              <div className="author-detail">
                <img src={authorprofile} alt="Author Profile" />
                <h4 className="title">Albert Flores</h4>
                <p className="light-grey">Comic & Horror Book Writer</p>
                <ul className="social-network">
                  <li>
                    <h5 className="heading">200</h5>
                    <span>Followers</span>
                  </li>
                  <li>
                    <h5 className="heading">4.5</h5>
                    <span>Rating</span>
                  </li>
                  <li>
                    <h5 className="heading">20+</h5>
                    <span>Book Published</span>
                  </li>
                </ul>
                <div className="btn-wrap">
                  <button className="btn btn-primary">Write a book</button>
                  <a href="#" class="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</a>
                </div>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </section>
       <section className="publish-book-section">
        <div className="container">
          <div className="publish-book-content d-flex justify-content-between align-items-center">
            <div className="left-part">
              <h6>Now Publish Your Book Hassle Free Signup as Author Today.</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <div className="btn-wrap">
                <button className="btn btn-white green-color">Sign up as a Author</button>
              </div>
            </div>
            <div className="right-part">
             <img src={publishbookauthor} alt="Author" />
            </div>
          </div>
        </div>
      </section>
       <section className="client-review-section">
        <div className="container">
          <div className="client-reviw-content">
            <div className="heading">
              <h5>What our client syas about us</h5>
              <span>Lorem ipsum is a dummy text and we can change it</span>
            </div>
            <ul className="client-review-list d-flex justify-content-between flex-wrap">
              <li>
                <div className="d-flex justify-content-between align-items-center">
                  <img src={quetos} alt="Quetos" />
                  <ul className="d-flex review">
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsStarHalf/>
                    </li>
                  </ul>
                </div>
                <div className="review-comment">
                  <h2>Sigmud Freud -<span> CEO of Xyz company</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum</p>
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between align-items-center">
                  <img src={quetos} alt="Quetos" />
                  <ul className="d-flex review">
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsStarHalf/>
                    </li>
                  </ul>
                </div>
                <div className="review-comment">
                  <h2>Sigmud Freud -<span> CEO of Xyz company</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum</p>
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between align-items-center">
                  <img src={quetos} alt="Quetos" />
                  <ul className="d-flex review">
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsStarHalf/>
                    </li>
                  </ul>
                </div>
                <div className="review-comment">
                  <h2>Sigmud Freud -<span> CEO of Xyz company</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum</p>
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between align-items-center">
                  <img src={quetos} alt="Quetos" />
                  <ul className="d-flex review">
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsStarHalf/>
                    </li>
                  </ul>
                </div>
                <div className="review-comment">
                  <h2>Sigmud Freud -<span> CEO of Xyz company</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum</p>
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between align-items-center">
                  <img src={quetos} alt="Quetos" />
                  <ul className="d-flex review">
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsStarHalf/>
                    </li>
                  </ul>
                </div>
                <div className="review-comment">
                  <h2>Sigmud Freud -<span> CEO of Xyz company</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum</p>
                </div>
              </li>
              <li>
                <div className="d-flex justify-content-between align-items-center">
                  <img src={quetos} alt="Quetos" />
                  <ul className="d-flex review">
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsFillStarFill/>
                    </li>
                    <li>
                      <BsStarHalf/>
                    </li>
                  </ul>
                </div>
                <div className="review-comment">
                  <h2>Sigmud Freud -<span> CEO of Xyz company</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section> 
       <section className="offer-banner-section">
        <div className="container">
          <div className="offer-bannner-content d-flex justify-content-between flex-wrap">
            <div className="column d-flex justify-content-between">
              <div className="timer-banner">
                <div className="header d-flex justify-content-between">
                    <h5>By: Jeffrey Archer</h5>
                    <p><BsFillStarFill/> 4.6 </p>
                </div>
                <div className="timer-content">
                  <div className="timer">
                    <p><BsStopwatch/>1:15:46</p>
                  </div>
                  <h2 className="title">Lorem ipsum Monsoon Available Now.</h2>
                  <h2 className="price">$15.04</h2>
                  <div className="btn-wrap">
                  <button className="btn btn-add-to-cart">
                         <BsCart3 />
                          Add to cart
                        </button>
                  </div>
                </div>
              </div>
              <div className="offer-text">
                  <h3 className="text-start">Exclusive Offer</h3>
                  <h4 className="text-end">For Limited Time</h4>
                  <div className="image">
                    <img src={offerbooks} alt="Offer"/>
                  </div>
              </div>
            </div>
            <div className="column d-flex justify-content-between flex-row-reverse">
              <div className="timer-banner">
                <div className="header d-flex justify-content-between">
                    <h5>By: Jeffrey Archer</h5>
                    <p><BsFillStarFill/> 4.6 </p>
                </div>
                <div className="timer-content">
                  <div className="timer">
                    <p><BsStopwatch/>1:15:46</p>
                  </div>
                  <h2 className="title">Lorem ipsum Monsoon Available Now.</h2>
                  <h2 className="price">$15.04</h2>
                  <div className="btn-wrap">
                  <button className="btn btn-add-to-cart">
                         <BsCart3 />
                          Add to cart
                        </button>
                  </div>
                </div>
              </div>
              <div className="offer-text">
                  <h3 className="text-start">Exclusive Offer</h3>
                  <h4 className="text-end">For Limited Time</h4>
                  <div className="image">
                    <img src={offerbooks} alt="Offer"/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className="book-download-section">
        <div className="container">
          <div className="book-download-content d-flex justify-content-between align-items-center">
            <div className="left-part">
              <img src={booksdownload} alt="Books" />
            </div>
            <div className="right-part">
            <h6>Now read your favoruit Books Offline </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <div className="btn-wrap">
                <button className="btn btn-white primary-color">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 25 30" fill="none">
                    <path d="M23.5917 12.8973L18.8433 10.1548L13.9821 15.016L18.8429 19.8769L23.6078 17.1252C24.3508 16.6738 24.7942 15.8852 24.7942 15.016C24.7942 14.1468 24.3505 13.3582 23.5917 12.8973Z" fill="#FFCE00"/>
                    <path d="M13.9813 15.0155L0.740286 1.6792C0.279749 2.13974 6.10352e-05 2.76465 6.10352e-05 3.45546V26.5349C6.10352e-05 27.2257 0.279749 27.8506 0.740286 28.3115L13.9813 15.0155Z" fill="url(#paint0_linear_177_51647)"/>
                    <path d="M13.9816 15.0167L18.8428 10.1555L18.8505 10.1477L12.3371 6.39756L3.75092 1.35127C2.97775 0.874257 2.0402 0.857784 1.25056 1.30185C1.06971 1.41681 0.904978 1.53212 0.740601 1.68002L13.9816 15.0167Z" fill="#00F076"/>
                    <path d="M0.740601 28.312C0.904978 28.4599 1.06971 28.5752 1.25056 28.6902C1.6452 28.904 2.05667 29.0193 2.46779 29.0193C2.91186 29.0193 3.33945 28.8879 3.73445 28.6576L12.3368 23.6355L18.8502 19.8853L18.8425 19.8776L13.9816 15.0164L0.740601 28.312Z" fill="#F63448"/>
                    <defs>
                    <linearGradient id="paint0_linear_177_51647" x1="-5.91753" y1="21.6534" x2="7.39846" y2="8.33702" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#00E2FF"/>
                    <stop offset="1" stop-color="#00C5FF"/>
                    </linearGradient>
                    </defs>
                    </svg>
                  Google Play</button>
                <button className="btn btn-white primary-color">
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                  <g clip-path="url(#clip0_177_51654)">
                  <path d="M23.1664 0.983154H6.45727C3.32782 0.983154 0.794128 3.51684 0.794128 6.6463V23.3589C0.794128 26.4848 3.32782 29.0185 6.45727 29.0185H23.1699C26.2958 29.0185 28.833 26.4848 28.833 23.3554V6.6463C28.8295 3.51684 26.2958 0.983154 23.1664 0.983154Z" fill="url(#paint0_linear_177_51654)"/>
                  <path d="M14.6926 7.42545L15.2604 6.4442C15.6108 5.8309 16.3923 5.62417 17.0056 5.9746C17.6189 6.32503 17.8256 7.10651 17.4752 7.7198L12.0047 17.1888H15.9612C17.2438 17.1888 17.9622 18.6957 17.4051 19.74H5.80545C5.09758 19.74 4.52985 19.1723 4.52985 18.4644C4.52985 17.7565 5.09758 17.1888 5.80545 17.1888H9.05758L13.2209 9.97315L11.9207 7.7163C11.5703 7.103 11.777 6.32854 12.3903 5.9711C13.0036 5.62067 13.7781 5.8274 14.1355 6.44069L14.6926 7.42545Z" fill="white"/>
                  <path d="M9.77248 21.0552L8.54594 23.1823C8.19551 23.7956 7.41404 24.0024 6.80074 23.6519C6.18744 23.3015 5.98071 22.52 6.33114 21.9067L7.2423 20.3298C8.27256 20.0109 9.11012 20.2562 9.77248 21.0552Z" fill="white"/>
                  <path d="M20.3348 17.196H23.6535C24.3613 17.196 24.9291 17.7637 24.9291 18.4716C24.9291 19.1795 24.3613 19.7472 23.6535 19.7472H21.8101L23.0542 21.9059C23.4046 22.5192 23.1979 23.2937 22.5846 23.6511C21.9713 24.0016 21.1968 23.7948 20.8394 23.1815C18.7438 19.5474 17.1702 16.8281 16.1259 15.0163C15.0571 13.1729 15.8211 11.3226 16.5745 10.6953C17.4121 12.1321 18.6632 14.3014 20.3348 17.196Z" fill="white"/>
                  </g>
                  <defs>
                  <linearGradient id="paint0_linear_177_51654" x1="14.8136" y1="0.983154" x2="14.8136" y2="29.0185" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00BFFC"/>
                  <stop offset="1" stop-color="#0073F6"/>
                  </linearGradient>
                  <clipPath id="clip0_177_51654">
                  <rect width="28.0389" height="28.0389" fill="white" transform="translate(0.794128 0.980469)"/>
                  </clipPath>
                  </defs>
                  </svg>
                  App Store</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;