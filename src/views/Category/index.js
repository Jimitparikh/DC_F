import React, {useState} from "react";
import Breadcrums from "../../components/Breadcrums";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { BsXLg, BsFillStarFill, BsCart3, BsFilterLeft} from "react-icons/bs";
import trendingbookcover from '../../images/trending-book-cover.png';
const Category = () => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
        <Breadcrums />
      <section className="book-category-section">
        <div className="container">
          <div className="book-category-content d-flex justify-content-between flex-wrap">
            <div className={isActive ? 'show filter-section': "filter-section"}>
              <div className="filter-header d-flex align-items-center justify-content-between flex-wrap">
                <div className="filter-icon" onClick={toggleClass}>
                    <BsFilterLeft />
                </div>
               <div className="filter-header-wrapper d-flex align-items-center justify-content-between flex-wrap w-100">
               <h1>All Filter</h1>
                <a href="#">Clear All</a>
               </div>
              </div>
              <Accordion
                defaultActiveKey={["0"]}
                alwaysOpen
                className="category-page-accordian"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Book Type</Accordion.Header>
                  <Accordion.Body>
                    <div className="checkbox-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        ></input>
                        <label className="form-check-label" for="defaultCheck1">
                          Free Book
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck2"
                        ></input>
                        <label className="form-check-label" for="defaultCheck2">
                          Paid Book
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck3"
                        ></input>
                        <label className="form-check-label" for="defaultCheck3">
                          Rental Books
                        </label>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Language</Accordion.Header>
                  <Accordion.Body>
                    <div className="checkbox-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck4"
                        ></input>
                        <label className="form-check-label" for="defaultCheck4">
                          US English
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck5"
                        ></input>
                        <label className="form-check-label" for="defaultCheck5">
                          French
                        </label>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Media Type</Accordion.Header>
                  <Accordion.Body>
                    <div className="checkbox-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck6"
                        ></input>
                        <label className="form-check-label" for="defaultCheck6">
                          Audio Books
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck7"
                        ></input>
                        <label className="form-check-label" for="defaultCheck7">
                          Video Books
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck8"
                        ></input>
                        <label className="form-check-label" for="defaultCheck8">
                          eBooks
                        </label>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Ratings</Accordion.Header>
                  <Accordion.Body>
                    <div className="checkbox-group">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck9"
                            ></input>
                            <label
                              className="form-check-label"
                              for="defaultCheck9"
                            >
                              1 Star
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck10"
                            ></input>
                            <label
                              className="form-check-label"
                              for="defaultCheck10"
                            >
                              2 Star
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck11"
                            ></input>
                            <label
                              className="form-check-label"
                              for="defaultCheck11"
                            >
                              3 Star
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck12"
                            ></input>
                            <label
                              className="form-check-label"
                              for="defaultCheck12"
                            >
                              4 Star
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck13"
                            ></input>
                            <label
                              className="form-check-label"
                              for="defaultCheck13"
                            >
                              5 Star
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Price range</Accordion.Header>
                  <Accordion.Body>
                    <div className="input-group">
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            className="input-box"
                            placeholder="Min Price"
                          ></input>
                        </div>
                        <div className="col-md-6">
                          <input
                            className="input-box"
                            placeholder="Max Price"
                          ></input>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Publish Date</Accordion.Header>
                  <Accordion.Body>
                    <div className="checkbox-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck14"
                        ></input>
                        <label
                          className="form-check-label"
                          for="defaultCheck14"
                        >
                          Last 3 months
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck15"
                        ></input>
                        <label
                          className="form-check-label"
                          for="defaultCheck15"
                        >
                          Last 6 months
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck16"
                        ></input>
                        <label
                          className="form-check-label"
                          for="defaultCheck16"
                        >
                          Last Year
                        </label>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>Dream capcha’s Choice</Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="See our favorits"
                        className="switch-revers"
                      />
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="books-listing">
                <div className="books-listing-header">
                    <h2>All Books</h2>
                    <p className="fa-18 light-grey">Over 2000+ Books available here. find it now!</p>
                    <ul className="filter-label-list d-flex flex-wrap">
                    <li className="filter-label">
                        <span>Free Books</span>
                       <a href="#">
                        <BsXLg />
                       </a>
                    </li>
                    <li className="filter-label">
                        <span>Free Books</span>
                        <a href="#">
                        <BsXLg />
                       </a>
                    </li>
                </ul>
                </div>
                <section className="trending-books-section">
                <div className="trending-books-content">
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
                                    <button className="btn btn-green">
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
                </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Category;
