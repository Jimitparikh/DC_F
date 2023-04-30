import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import userprofile from "../../../images/user-profile.png";
import dummyImage from "../../../images/dummy-img.png";
import {BsThreeDotsVertical} from "react-icons/bs";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { HiOutlineChatAlt } from "react-icons/hi";

export const CommunityWallTab = () => {
    return (
        <div className="tab-content-data">
            <div className="community-post-tab-content">
                <div className="banner-list">
                    <div className="heading d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center flex-wrap">
                            <div className="user-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="19"
                                    viewBox="0 0 20 19"
                                    fill="none"
                                >
                                    <path
                                        d="M9.9974 8.97266C8.71406 8.97266 7.66406 8.56432 6.8474 7.74766C6.03073 6.93099 5.6224 5.88099 5.6224 4.59766C5.6224 3.31432 6.03073 2.26432 6.8474 1.44766C7.66406 0.63099 8.71406 0.222656 9.9974 0.222656C11.2807 0.222656 12.3307 0.63099 13.1474 1.44766C13.9641 2.26432 14.3724 3.31432 14.3724 4.59766C14.3724 5.88099 13.9641 6.93099 13.1474 7.74766C12.3307 8.56432 11.2807 8.97266 9.9974 8.97266ZM0.664062 18.3352V15.5935C0.664062 14.8546 0.848785 14.2227 1.21823 13.6977C1.58767 13.1727 2.06406 12.774 2.6474 12.5018C3.95017 11.9185 5.19948 11.481 6.39531 11.1893C7.59115 10.8977 8.79184 10.7518 9.9974 10.7518C11.203 10.7518 12.3988 10.9025 13.5849 11.2039C14.771 11.5053 16.0155 11.9379 17.3182 12.5018C17.921 12.774 18.4071 13.1727 18.7766 13.6977C19.146 14.2227 19.3307 14.8546 19.3307 15.5935V18.3352H0.664062ZM2.41406 16.5852H17.5807V15.5935C17.5807 15.2824 17.4884 14.9859 17.3036 14.7039C17.1189 14.422 16.8905 14.2129 16.6182 14.0768C15.3738 13.474 14.2363 13.0609 13.2057 12.8372C12.1752 12.6136 11.1057 12.5018 9.9974 12.5018C8.88906 12.5018 7.8099 12.6136 6.7599 12.8372C5.7099 13.0609 4.5724 13.474 3.3474 14.0768C3.07517 14.2129 2.85156 14.422 2.67656 14.7039C2.50156 14.9859 2.41406 15.2824 2.41406 15.5935V16.5852ZM9.9974 7.22266C10.7557 7.22266 11.3828 6.97474 11.8786 6.47891C12.3745 5.98307 12.6224 5.35599 12.6224 4.59766C12.6224 3.83932 12.3745 3.21224 11.8786 2.71641C11.3828 2.22057 10.7557 1.97266 9.9974 1.97266C9.23906 1.97266 8.61198 2.22057 8.11615 2.71641C7.62031 3.21224 7.3724 3.83932 7.3724 4.59766C7.3724 5.35599 7.62031 5.98307 8.11615 6.47891C8.61198 6.97474 9.23906 7.22266 9.9974 7.22266Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <p className="fs-20 fw-500">
                                Romain Rolland
                                <span className="light-grey fs-14 fw-normal ms-2">
                                    10 hours ago
                                </span>
                            </p>
                        </div>
                        <Dropdown
                            className="without-background position-relative"
                            align="end"
                        >
                            <Dropdown.Toggle id="dropdown-basic">
                                <BsThreeDotsVertical />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                    All
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    Images
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    Videos
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    Audio
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="post-data-details">
                        <p>
                            Mahatma Gandhi’ written by Romain Rolland, a
                            French novelist and Nobel Prize winner Rolland,
                            a French novelist and Nobel Prize winner
                            <span> random</span> <span>#newpost</span>
                        </p>
                        <div className="post-image">
                            <img
                                src={dummyImage}
                                alt="Image"
                                className="uploaded-image"
                            ></img>
                        </div>
                        <ul className="like d-flex">
                            <li>
                                <AiOutlineLike />
                                <span>11 Likes</span>
                            </li>
                            <li className="selected">
                                <HiOutlineChatAlt />
                                <span>20 Comments</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="banner-list">
                    <div className="heading d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center flex-wrap">
                            <div className="user-icon">
                                <img
                                    src={userprofile}
                                    alt="Author Profile"
                                />
                            </div>
                            <p className="fs-20 fw-500">
                                Romain Rolland
                                <span className="light-grey fs-14 fw-normal ms-2">
                                    10 hours ago
                                </span>
                            </p>
                        </div>
                        <Dropdown
                            className="without-background position-relative"
                            align="end"
                        >
                            <Dropdown.Toggle id="dropdown-basic">
                                <BsThreeDotsVertical />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                    All
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    Images
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    Videos
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    Audio
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="post-data-details">
                        <p>
                            Mahatma Gandhi’ written by Romain Rolland, a
                            French novelist and Nobel Prize winner Rolland,
                            a French novelist and Nobel Prize winner
                            <span> random</span> <span>#newpost</span>
                        </p>
                        <div className="post-image">
                            <img
                                src={dummyImage}
                                alt="Image"
                                className="uploaded-image"
                            ></img>
                        </div>
                        <ul className="like d-flex">
                            <li>
                                <AiOutlineLike />
                                <span>11 Likes</span>
                            </li>
                            <li className="selected">
                                <HiOutlineChatAlt />
                                <span>20 Comments</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
