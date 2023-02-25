import React from 'react';
import { Link , useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from '../../images/logo.svg';
import { BsCart3, BsSearch, BsHeart, BsChevronDown, BsXLg, BsBell } from "react-icons/bs";
import { FaRegEdit, FaRegUser } from 'react-icons/fa';
import { BiMenuAltRight } from "react-icons/bi";
import { IoBookOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAccountBalanceWallet, MdOutlineGroup, MdOutlineSpaceDashboard } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import userprofile from '../../images/user-menu-profile.png';
import './index.css';
import { logout } from "../../slices/auth";
import Loader from '../Loader';


const Header = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn , user } = useSelector((state) => state.auth);
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  const logouthandler =  ()=> {
    setLoading(true);
    dispatch(logout())
    .unwrap()
    .then(() => {
        navigate("/");
    })
    .catch(() => {
        setLoading(false);
    });
  }

  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <ul className="list d-flex justify-content-end">
              <li>
                <Link to='/about-us' className="light-grey ms-4">About us</Link>
              </li>
              <li className="ms-3">
                <a href="#" className="light-grey ms-4">Terms & condition</a>
              </li>
              <li className="ms-3">
                <Link to='/contact-us' className="light-grey ms-4">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-middle user-activate">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="column">
              <div className="logo-image">
                <Link to='/'>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="column">
              <div className="header-search">
                <input className="input-box" placeholder="Search Books, Category, Author"></input>
                <button className="btn btn-primary">
                  <BsSearch />
                </button>
              </div>
            </div>
            <div className='column humberger-menu' onClick={()=> toggleClass()}>
              <BiMenuAltRight />
            </div>
            <div className="column d-flex align-items-center">
              <div className="icon">
                <IoBookOutline />
                <span>My Books</span>
              </div>
                <div className="icon">
                  <BsHeart />
              <Link to='/wishlist' className='link'>
                  <span>Wishlist</span>
              </Link>
                </div>
              <div className="icon">
                <BsCart3 />
                <span>My Cart</span>
                <p className="count-label">4</p>
              </div>
              <div className="icon">
                <BsBell />
                <span>Notification</span>
                <div className='notification-circle'></div>
              </div>
              {/* Without Login user dropdown */}
              { !isLoggedIn &&
                <Dropdown as={ButtonGroup} className="primary" align="end">
                <Link to="/register"> <Button>Register</Button></Link>
                <Dropdown.Toggle split id="dropdown-split-basic">
                  <BsChevronDown />
                  <FaRegUser />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Register as Author</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Register as Affliate</Dropdown.Item>
                  <Dropdown.Item ><Link to="/login">Have Account? Login</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              }
            

              {/* Login user dropdown */}
              { isLoggedIn && user &&
                <Dropdown className="user-profile-dropdown" align="end">
                <Dropdown.Toggle id="dropdown-basic">
                  <FaRegUser />
                </Dropdown.Toggle>
                <p>Profile</p>
                <Dropdown.Menu>
                  <div className='profile-detail d-flex align-items-center'>
                    <div className='user-image'>
                      <img src={userprofile} alt="Profile"></img>
                    </div>
                    <div className='user-name'>
                      <h5>{ user.firstName && user.firstName + " " + user.lastName }</h5>
                      <p><IoLocationOutline />Minsk, Belarus</p>
                    </div>
                  </div>
                  <div className='line'></div>
                  <Dropdown.Item href="#/action-2" className='active'>
                    <MdOutlineSpaceDashboard /> <Link to='/user-dashboard'>My dashboard</Link> 
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <MdOutlineAccountBalanceWallet />My Wallet
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <MdOutlineGroup />My Following
                  </Dropdown.Item>
                  <div className='line'></div>
                  <Dropdown.Item href="#/action-3">
                    <FaRegEdit />Edit Profile
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <AiOutlinePoweroff /><a onClick={()=> {logouthandler()}} > Logout</a>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              }
            </div>
          </div>
        </div>
        <div className={isActive ? 'show header-bottom' : "header-bottom"}>
          <div className="container">
            <ul className="navbar-item d-flex">
              <div className='close-menu' onClick={()=> toggleClass()}>
                <BsXLg  />
              </div>
              <li>
                <a href="#" className="white-color">All Books</a>
              </li>
              <li className="dd-menu-wrapper">
                <a href="#" className="white-color dropdown-arrow">Category <BsChevronDown /></a>
                <div className="dd-menu-content show-dropdown">
                  <div className="dd-menu d-flex">
                    <div className="left-part d-flex flex-wrap">
                      <div className="column">
                        <h4 className="column-title">Biographies & Memoirs</h4>
                        <ul className="link-list">
                          <li>
                            <a href="#">Arts & Literature</a>
                          </li>
                          <li>
                            <a href="#">Cultural</a>
                          </li>
                          <li>
                            <a href="#">European</a>
                          </li>
                          <li>
                            <a href="#">Historical</a>
                          </li>
                          <li>
                            <a href="#">Leaders & Notable People</a>
                          </li>
                          <li>
                            <a href="#">View All</a>
                          </li>
                        </ul>
                      </div>
                      <div className="column">
                        <h4 className="column-title">Biographies & Memoirs</h4>
                        <ul className="link-list">
                          <li>
                            <a href="#">Arts & Literature</a>
                          </li>
                          <li>
                            <a href="#">Cultural</a>
                          </li>
                          <li>
                            <a href="#">European</a>
                          </li>
                          <li>
                            <a href="#">Historical</a>
                          </li>
                          <li>
                            <a href="#">Leaders & Notable People</a>
                          </li>
                          <li>
                            <a href="#">View All</a>
                          </li>
                        </ul>
                      </div>
                      <div className="column">
                        <h4 className="column-title">Biographies & Memoirs</h4>
                        <ul className="link-list">
                          <li>
                            <a href="#">Arts & Literature</a>
                          </li>
                          <li>
                            <a href="#">Cultural</a>
                          </li>
                          <li>
                            <a href="#">European</a>
                          </li>
                          <li>
                            <a href="#">Historical</a>
                          </li>
                          <li>
                            <a href="#">Leaders & Notable People</a>
                          </li>
                          <li>
                            <a href="#">View All</a>
                          </li>
                        </ul>
                      </div>
                      <div className="column">
                        <h4 className="column-title">Biographies & Memoirs</h4>
                        <ul className="link-list">
                          <li>
                            <a href="#">Arts & Literature</a>
                          </li>
                          <li>
                            <a href="#">Cultural</a>
                          </li>
                          <li>
                            <a href="#">European</a>
                          </li>
                          <li>
                            <a href="#">Historical</a>
                          </li>
                          <li>
                            <a href="#">Leaders & Notable People</a>
                          </li>
                          <li>
                            <a href="#">View All</a>
                          </li>
                        </ul>
                      </div>
                      <div className="column">
                        <h4 className="column-title">Biographies & Memoirs</h4>
                        <ul className="link-list">
                          <li>
                            <a href="#">Arts & Literature</a>
                          </li>
                          <li>
                            <a href="#">Cultural</a>
                          </li>
                          <li>
                            <a href="#">European</a>
                          </li>
                          <li>
                            <a href="#">Historical</a>
                          </li>
                          <li>
                            <a href="#">Leaders & Notable People</a>
                          </li>
                          <li>
                            <a href="#">View All</a>
                          </li>
                        </ul>
                      </div>
                      <div className="column">
                        <h4 className="column-title">Biographies & Memoirs</h4>
                        <ul className="link-list">
                          <li>
                            <a href="#">Arts & Literature</a>
                          </li>
                          <li>
                            <a href="#">Cultural</a>
                          </li>
                          <li>
                            <a href="#">European</a>
                          </li>
                          <li>
                            <a href="#">Historical</a>
                          </li>
                          <li>
                            <a href="#">Leaders & Notable People</a>
                          </li>
                          <li>
                            <a href="#">View All</a>
                          </li>
                        </ul>
                      </div>
                      <div className="column">
                        <h4 className="column-title">Biographies & Memoirs</h4>
                        <ul className="link-list">
                          <li>
                            <a href="#">Arts & Literature</a>
                          </li>
                          <li>
                            <a href="#">Cultural</a>
                          </li>
                          <li>
                            <a href="#">European</a>
                          </li>
                          <li>
                            <a href="#">Historical</a>
                          </li>
                          <li>
                            <a href="#">Leaders & Notable People</a>
                          </li>
                          <li>
                            <a href="#">View All</a>
                          </li>
                        </ul>
                      </div>
                      <div className="column">
                        <h4 className="column-title">Biographies & Memoirs</h4>
                        <ul className="link-list">
                          <li>
                            <a href="#">Arts & Literature</a>
                          </li>
                          <li>
                            <a href="#">Cultural</a>
                          </li>
                          <li>
                            <a href="#">European</a>
                          </li>
                          <li>
                            <a href="#">Historical</a>
                          </li>
                          <li>
                            <a href="#">Leaders & Notable People</a>
                          </li>
                          <li>
                            <a href="#">View All</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="right-part">
                      <div className="column">
                        <h4 className="column-title">Sub Categories</h4>
                        <ul className="link-list">
                          <li>
                            <a href="#">Arts & Literature</a>
                          </li>
                          <li>
                            <a href="#">Cultural</a>
                          </li>
                          <li>
                            <a href="#">European</a>
                          </li>
                          <li>
                            <a href="#">Historical</a>
                          </li>
                          <li>
                            <a href="#">Leaders & Notable People</a>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" className="white-color">Authors</a>
              </li>
              <li>
                <a href="#" className="white-color">Bestsellers</a>
              </li>
              <li>
                <a href="#" className="white-color">New Release</a>
              </li>
              <li>
                <a href="#" className="white-color">Audio Books</a>
              </li>
              <li>
                <a href="#" className="white-color">Video Books</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;