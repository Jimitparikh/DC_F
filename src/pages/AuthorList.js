import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Breadcrums from "../pages/Breadcrums";
import Dropdown from 'react-bootstrap/Dropdown';
import authorprofile from '../images/author-profile.png';
import { FaChevronDown } from 'react-icons/fa';
const AuthorList = ()=>{
  return (
    <>
        <Breadcrums />
        <section className='author-list-section'>
            <div className='container'>
                <div className="author-list-header">
                    <h1>Authors</h1>
                    <p className="fa-18 light-grey">Over 100+ Authors are join with us.</p>
                </div>
                <div className='author-list-tabbing d-flex justify-content-between'>
                    <div className='author-list-tab-left '>
                    <Tabs
                    defaultActiveKey="Action and Adventur"
                    transition={false}
                    id="fill-tab-example"
                    >
                        <Tab eventKey="Action and Adventur" title="Action and Adventur">
                            <div className='tab-content-data'>
                            <section className="top-authors-section">
                <div className="top-autors-content">
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
                </section>
                            </div>
                        </Tab>
                        <Tab eventKey="Classic" title="Classic">
                            <div className='tab-content-data'>Classic</div>
                        </Tab>
                        <Tab eventKey="Comic Book or Graphic Novel" title="Comic Book or Graphic Novel">
                            <div className='tab-content-data'>Comic Book or Graphic Novel</div>
                        </Tab>
                        <Tab eventKey="Detective and Mystery" title="Detective and Mystery"> 
                            <div className='tab-content-data'>Detective and Mystery</div>
                        </Tab>
                        <Tab eventKey="Fantasy" title="Fantasy">
                            <div className='tab-content-data'>Fantasy</div>
                        </Tab>
                        <Tab eventKey="Historical Fiction" title="Historical Fiction">
                            <div className='tab-content-data'>Historical Fiction</div>
                        </Tab>
                    </Tabs>
                    </div>
                    <div className='author-list-tab-right '>
                    <Dropdown>
                        <Dropdown.Toggle className="btn btn-secondary" id="dropdown-basic">
                        This week <FaChevronDown />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">This Month</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}
export default AuthorList;