import React from 'react';
import logowhite from '../images/logo-white.svg';
import horror from '../images/horror.png';
const ReaderOnboardScreen = ()=>{
  return (
    <>
    <section className='reader-onboard-screen'>
        <div className='container'>
            <div className='reader-onboard-screen-content'>
            <div className="logo-image">
                    <a href="#">
                        <img src={logowhite} alt="Logo" />
                    </a>
                </div>
                <div className='select-categories'>
                    <div className='select-categories-header d-flex justify-content-between align-items-center flex-wrap'>
                        <div className='header-title'>
                            <h1>Select categories</h1>
                            <p>Select your any <span>five favourit book</span> category </p>
                        </div>
                        <div className='btn-wrap'>
                            <button className='btn'>Proceed (0)</button>
                        </div>
                    </div>
                    <ul className='categories-list d-flex flex-wrap'>
                        <li>
                            <div className='categories-list-content'>
                                <img src={horror} alt="Horror"></img>
                                <h3>Horror</h3>
                            </div>
                        </li>
                        <li>
                            <div className='categories-list-content'>
                                <img src={horror} alt="Horror"></img>
                                <h3>Love</h3>
                            </div>
                        </li>
                        <li>
                            <div className='categories-list-content'>
                                <img src={horror} alt="Horror"></img>
                                <h3>Action</h3>
                            </div>
                        </li>
                        <li>
                            <div className='categories-list-content'>
                                <img src={horror} alt="Horror"></img>
                                <h3>Adventure</h3>
                            </div>
                        </li>
                        <li>
                            <div className='categories-list-content'>
                                <img src={horror} alt="Horror"></img>
                                <h3>Detective</h3>
                            </div>
                        </li>
                        <li>
                            <div className='categories-list-content'>
                                <img src={horror} alt="Horror"></img>
                                <h3>Mystery</h3>
                            </div>
                        </li>
                        <li>
                            <div className='categories-list-content'>
                                <img src={horror} alt="Horror"></img>
                                <h3>Fantasy</h3>
                            </div>
                        </li>
                        <li>
                            <div className='categories-list-content'>
                                <img src={horror} alt="Horror"></img>
                                <h3>Comic</h3>
                            </div>
                        </li>
                        <li>
                            <div className='categories-list-content'>
                                <img src={horror} alt="Horror"></img>
                                <h3>Historical</h3>
                            </div>
                        </li>
                        <li>
                            <div className='categories-list-content'>
                                <img src={horror} alt="Horror"></img>
                                <h3>Fiction</h3>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul className='link-list d-flex flex-wrap'>
                    <li>
                        <a href='#'>Join Affiliate Program</a>
                    </li>
                    <li>
                        <a href='#'>About us</a>
                    </li>
                    <li>
                        <a href='#'>Terms & condition</a>
                    </li>
                    <li>
                        <a href='#'>Contact us</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  );
}
export default ReaderOnboardScreen;