import React from 'react'
import { Link, NavLink } from "react-router-dom";
import activeuser from '../../images/active-user.png';

const LoginDescription = () => {
    return (
        <>
            <div className='login-page-desc'>
                <h1>Welcome to <span>our community</span></h1>
                <p className='desc'>
                    Mahatma Gandhi written by Romain Rolland, a French novelist and Nobel Prize winner, presents the life and legacy ‘Mahatma Gandhi’ written by Romain Rolland,
                </p>
                <div className='active-user d-flex align-items-center'>
                    <img src={activeuser} alt="Active users"></img>
                    <span>4k+ Active Readers on Dreamcapcha </span>
                </div>
            </div>
            <ul className='list d-flex flex-wrap'>
                <li>
                    <a href='http://testaffiliate.dreamcapcha.com/'>Join Affiliate Program</a>
                </li>
                <li>
                    <NavLink to='/about-us'>About us</NavLink>
                </li>
                <li>
                    <NavLink to='/Terms&Conditions'>Terms & condition</NavLink>
                </li>
                <li>
                    <NavLink to='/contact-us'>Contact us</NavLink>
                </li>
            </ul></>
    )
}

export default LoginDescription;