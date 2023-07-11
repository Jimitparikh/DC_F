import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaChevronDown, FaRegFileAudio, FaUniversity } from "react-icons/fa";
import {
  BsCameraVideo,
  BsFileText,
  BsPlayCircle,
} from "react-icons/bs";
import audiobookcover from "../../../images/audio-book-cover.png";
import ebookcover from "../../../images/ebook-cover.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const MyBooks = () => {
    return (
        <div className="my-book-tab-content">
            <h5 className="tab-title">My Stories</h5>
            <div className="my-books-content">
                <div className="book-feature">
                    <div className="heading d-flex justify-content-between align-items-center">
                        <h6>
                            {" "}
                            <BsFileText />
                            E-books
                        </h6>
                        <a href="#">View all</a>
                    </div>
                    <ul className="e-book-list">
                        <li>
                            <div className="e-book-item d-flex justify-content-between">
                                <div className="e-book-image">
                                    <img src={ebookcover} alt="Book Cover" />
                                </div>
                                <div className="e-book-data">
                                    <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                        <p>40-41/159</p>
                                        <ProgressBar now={40} />
                                    </div>

                                    <div className="btn-wrap">
                                        <Dropdown
                                            as={ButtonGroup}
                                            className="primary"
                                            align="end"
                                        >
                                            <Button>Continue Reading</Button>
                                            <Dropdown.Toggle
                                                split
                                                id="dropdown-split-basic"
                                            >
                                                <FaChevronDown />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    Register as Author
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">
                                                    Register as Affliate
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    className="active"
                                                    href="#/action-3"
                                                >
                                                    Have Account? Login
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="e-book-item d-flex justify-content-between">
                                <div className="e-book-image">
                                    <img src={ebookcover} alt="Book Cover" />
                                </div>
                                <div className="e-book-data">
                                    <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                        <p>40-41/159</p>
                                        <ProgressBar now={40} />
                                    </div>

                                    <div className="btn-wrap">
                                        <Dropdown
                                            as={ButtonGroup}
                                            className="primary"
                                            align="end"
                                        >
                                            <Button>Continue Reading</Button>
                                            <Dropdown.Toggle
                                                split
                                                id="dropdown-split-basic"
                                            >
                                                <FaChevronDown />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">
                                                    Register as Author
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">
                                                    Register as Affliate
                                                </Dropdown.Item>
                                                <Dropdown.Item
                                                    className="active"
                                                    href="#/action-3"
                                                >
                                                    Have Account? Login
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="book-feature audio-books">
                    <div className="heading d-flex justify-content-between align-items-center">
                        <h6>
                            {" "}
                            <FaRegFileAudio />
                            Audio Stories
                        </h6>
                        <a href="#">View all</a>
                    </div>
                    <ul className="e-book-list">
                        <li>
                            <div className="e-book-item d-flex justify-content-between">
                                <div className="e-book-image">
                                    <img
                                        src={audiobookcover}
                                        alt="Book Cover"
                                    />
                                </div>
                                <div className="e-book-data">
                                    <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                        <p>40-41/159</p>
                                        <ProgressBar now={40} />
                                    </div>
                                </div>
                            </div>
                            <div className="continue-watching">
                                <BsPlayCircle />
                                <p>Continue Listening</p>
                            </div>
                        </li>
                        <li>
                            <div className="e-book-item d-flex justify-content-between">
                                <div className="e-book-image">
                                    <img
                                        src={audiobookcover}
                                        alt="Book Cover"
                                    />
                                </div>
                                <div className="e-book-data">
                                    <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                        <p>40-41/159</p>
                                        <ProgressBar now={40} />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="e-book-item d-flex justify-content-between">
                                <div className="e-book-image">
                                    <img
                                        src={audiobookcover}
                                        alt="Book Cover"
                                    />
                                </div>
                                <div className="e-book-data completed">
                                    <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                        <p>40-41/159</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="e-book-item d-flex justify-content-between">
                                <div className="e-book-image">
                                    <img
                                        src={audiobookcover}
                                        alt="Book Cover"
                                    />
                                </div>
                                <div className="e-book-data">
                                    <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                        <p>40-41/159</p>
                                        <ProgressBar now={40} />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="book-feature audio-books">
                    <div className="heading d-flex justify-content-between align-items-center">
                        <h6>
                            {" "}
                            <BsCameraVideo />
                            Video Stories
                        </h6>
                        <a href="#">View all</a>
                    </div>
                    <ul className="e-book-list">
                        <li>
                            <div className="e-book-item d-flex justify-content-between">
                                <div className="e-book-image">
                                    <img
                                        src={audiobookcover}
                                        alt="Book Cover"
                                    />
                                </div>
                                <div className="e-book-data">
                                    <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                        <p>40-41/159</p>
                                        <ProgressBar now={40} />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="e-book-item d-flex justify-content-between">
                                <div className="e-book-image">
                                    <img
                                        src={audiobookcover}
                                        alt="Book Cover"
                                    />
                                </div>
                                <div className="e-book-data">
                                    <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                        <p>40-41/159</p>
                                        <ProgressBar now={40} />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="e-book-item d-flex justify-content-between">
                                <div className="e-book-image">
                                    <img
                                        src={audiobookcover}
                                        alt="Book Cover"
                                    />
                                </div>
                                <div className="e-book-data">
                                    <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                        <p>40-41/159</p>
                                        <ProgressBar now={40} />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="e-book-item d-flex justify-content-between">
                                <div className="e-book-image">
                                    <img
                                        src={audiobookcover}
                                        alt="Book Cover"
                                    />
                                </div>
                                <div className="e-book-data">
                                    <div className="title">
                                        <h3>Dream psychology</h3>
                                        <p>Sigmund Fread</p>
                                    </div>
                                    <div className="progress-detail">
                                        <p>40-41/159</p>
                                        <ProgressBar now={40} />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyBooks