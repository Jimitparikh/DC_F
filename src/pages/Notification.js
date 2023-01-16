import React from "react";
import { BsCheck2All } from "react-icons/bs";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import bookcover from "../images/notification-book-cover.png";
import notificationuser from "../images/notification-user.png";

const Notification = () => {
  return (
    <>
      <section className="notification-section show">
        <div className="notification-wrapper">
          <div className="notification-content">
            <div className="header d-flex justify-content-between align-items-center">
              <h2> Notifications</h2>
              <a href="#">
                <BsCheck2All />
                Mark all as read
              </a>
            </div>
            <div className="notification-tabbing">
              <Tabs
                defaultActiveKey="all"
                transition={false}
                id="fill-tab-example"
              >
                <Tab eventKey="all" title="All">
                  <div className="tab-content-data">
                    <div className="all-tab-content">
                      <ul>
                        <li>
                          <div className="data d-flex">
                            <div className="image">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                              >
                                <rect
                                  width="60"
                                  height="60"
                                  rx="30"
                                  fill="url(#paint0_linear_791_67269)"
                                />
                                <g clip-path="url(#clip0_791_67269)">
                                  <path
                                    d="M26 28.6667L30 32.6667L40.6667 22"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M40.6654 30V38C40.6654 38.7072 40.3844 39.3855 39.8843 39.8856C39.3842 40.3857 38.7059 40.6666 37.9987 40.6666H21.9987C21.2915 40.6666 20.6132 40.3857 20.1131 39.8856C19.613 39.3855 19.332 38.7072 19.332 38V22C19.332 21.2927 19.613 20.6145 20.1131 20.1144C20.6132 19.6143 21.2915 19.3333 21.9987 19.3333H33.9987"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_791_67269"
                                    x1="30"
                                    y1="0"
                                    x2="32"
                                    y2="77.5"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#07B550" />
                                    <stop offset="1" stop-color="#00642A" />
                                  </linearGradient>
                                  <clipPath id="clip0_791_67269">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                      transform="translate(14 14)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="headings">
                              <h5>
                                Verification <span>1m ago</span>
                              </h5>
                              <p>Your account is successfully verified.</p>
                            </div>
                          </div>
                          <div className="book-cover-image"></div>
                        </li>
                        <li>
                          <div className="data d-flex">
                            <div className="image">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                              >
                                <rect
                                  width="60"
                                  height="60"
                                  rx="30"
                                  fill="url(#paint0_linear_791_67286)"
                                  fill-opacity="0.7"
                                />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M22.3028 22.3027C22.6933 21.9122 23.3265 21.9122 23.717 22.3027L30.0001 28.5858L36.2831 22.3027C36.6737 21.9122 37.3068 21.9122 37.6973 22.3027C38.0879 22.6932 38.0879 23.3264 37.6973 23.7169L31.4143 30L37.6973 36.2831C38.0879 36.6736 38.0879 37.3068 37.6973 37.6973C37.3068 38.0878 36.6737 38.0878 36.2831 37.6973L30.0001 31.4142L23.717 37.6973C23.3265 38.0878 22.6933 38.0878 22.3028 37.6973C21.9122 37.3068 21.9122 36.6736 22.3028 36.2831L28.5858 30L22.3028 23.7169C21.9122 23.3264 21.9122 22.6932 22.3028 22.3027Z"
                                  fill="white"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_791_67286"
                                    x1="30"
                                    y1="0"
                                    x2="30"
                                    y2="60"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#ED3A3A" />
                                    <stop offset="1" stop-color="#990101" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <div className="headings">
                              <h5>
                                Verification Failed <span>1m ago</span>
                              </h5>
                              <p>
                                All the details which you have provided is seems
                                like not valid kindly share valid details.
                              </p>
                            </div>
                          </div>
                          <div className="book-cover-image"></div>
                        </li>
                        <li>
                          <div className="data d-flex">
                            <div className="image">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                              >
                                <rect
                                  width="60"
                                  height="60"
                                  rx="30"
                                  fill="url(#paint0_linear_791_67328)"
                                />
                                <g clip-path="url(#clip0_791_67328)">
                                  <path
                                    d="M39.3359 35.332V39.332C39.3359 39.6857 39.1955 40.0248 38.9454 40.2748C38.6954 40.5249 38.3562 40.6654 38.0026 40.6654H22.0026C21.2954 40.6654 20.6171 40.3844 20.117 39.8843C19.6169 39.3842 19.3359 38.7059 19.3359 37.9987V21.9987M36.6693 24.6654V20.6654C36.6693 20.3117 36.5288 19.9726 36.2787 19.7226C36.0287 19.4725 35.6896 19.332 35.3359 19.332H22.0026C21.2954 19.332 20.6171 19.613 20.117 20.1131C19.6169 20.6132 19.3359 21.2915 19.3359 21.9987C19.3359 22.7059 19.6169 23.3842 20.117 23.8843C20.6171 24.3844 21.2954 24.6654 22.0026 24.6654H38.0026C38.3562 24.6654 38.6954 24.8058 38.9454 25.0559C39.1955 25.3059 39.3359 25.6451 39.3359 25.9987V29.9987L36.6693 24.6654Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M40.668 30V35.3333H35.3346C34.6274 35.3333 33.9491 35.0524 33.449 34.5523C32.9489 34.0522 32.668 33.3739 32.668 32.6667C32.668 31.9594 32.9489 31.2811 33.449 30.781C33.9491 30.281 34.6274 30 35.3346 30H40.668Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_791_67328"
                                    x1="30"
                                    y1="0"
                                    x2="32"
                                    y2="77.5"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#07B550" />
                                    <stop offset="1" stop-color="#00642A" />
                                  </linearGradient>
                                  <clipPath id="clip0_791_67328">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                      transform="translate(14 14)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="headings">
                              <h5>
                                Payment Successfull<span>1m ago</span>
                              </h5>
                              <p>
                                Payment of $50 was successfull and it will added
                                to your wallet.
                              </p>
                            </div>
                          </div>
                          <div className="book-cover-image"></div>
                        </li>
                        <li>
                          <div className="data d-flex">
                            <div className="image">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                              >
                                <rect
                                  width="60"
                                  height="60"
                                  rx="30"
                                  fill="url(#paint0_linear_791_67358)"
                                  fill-opacity="0.7"
                                />
                                <g clip-path="url(#clip0_791_67358)">
                                  <path
                                    d="M39.3359 35.332V39.332C39.3359 39.6857 39.1955 40.0248 38.9454 40.2748C38.6954 40.5249 38.3562 40.6654 38.0026 40.6654H22.0026C21.2954 40.6654 20.6171 40.3844 20.117 39.8843C19.6169 39.3842 19.3359 38.7059 19.3359 37.9987V21.9987M36.6693 24.6654V20.6654C36.6693 20.3117 36.5288 19.9726 36.2787 19.7226C36.0287 19.4725 35.6896 19.332 35.3359 19.332H22.0026C21.2954 19.332 20.6171 19.613 20.117 20.1131C19.6169 20.6132 19.3359 21.2915 19.3359 21.9987C19.3359 22.7059 19.6169 23.3842 20.117 23.8843C20.6171 24.3844 21.2954 24.6654 22.0026 24.6654H38.0026C38.3562 24.6654 38.6954 24.8058 38.9454 25.0559C39.1955 25.3059 39.3359 25.6451 39.3359 25.9987V29.9987L36.6693 24.6654Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M40.668 30V35.3333H35.3346C34.6274 35.3333 33.9491 35.0524 33.449 34.5523C32.9489 34.0522 32.668 33.3739 32.668 32.6667C32.668 31.9594 32.9489 31.2811 33.449 30.781C33.9491 30.281 34.6274 30 35.3346 30H40.668Z"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_791_67358"
                                    x1="30"
                                    y1="0"
                                    x2="30"
                                    y2="60"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#ED3A3A" />
                                    <stop offset="1" stop-color="#990101" />
                                  </linearGradient>
                                  <clipPath id="clip0_791_67358">
                                    <rect
                                      width="32"
                                      height="32"
                                      fill="white"
                                      transform="translate(14 14)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="headings">
                              <h5>
                                Payment Failed<span>1m ago</span>
                              </h5>
                              <p>
                                Payment of $10 was failed due to your bank
                                issue.
                              </p>
                            </div>
                          </div>
                          <div className="book-cover-image"></div>
                        </li>
                        <li>
                          <div className="data d-flex">
                            <div className="image">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                              >
                                <rect
                                  width="60"
                                  height="60"
                                  rx="30"
                                  fill="#F3EBFC"
                                />
                                <path
                                  d="M29.9987 30.0013C31.3172 30.0013 32.6062 29.6103 33.7025 28.8778C34.7988 28.1452 35.6533 27.104 36.1579 25.8859C36.6625 24.6677 36.7945 23.3272 36.5373 22.034C36.28 20.7408 35.6451 19.5529 34.7127 18.6206C33.7804 17.6882 32.5925 17.0533 31.2993 16.7961C30.0061 16.5388 28.6657 16.6709 27.4475 17.1754C26.2293 17.68 25.1881 18.5345 24.4556 19.6308C23.723 20.7272 23.332 22.0161 23.332 23.3346C23.3341 25.1021 24.0372 26.7966 25.287 28.0463C26.5368 29.2961 28.2312 29.9992 29.9987 30.0013ZM29.9987 19.3346C30.7898 19.3346 31.5632 19.5692 32.221 20.0088C32.8788 20.4483 33.3915 21.073 33.6942 21.8039C33.997 22.5348 34.0762 23.3391 33.9218 24.115C33.7675 24.8909 33.3865 25.6037 32.8271 26.1631C32.2677 26.7225 31.555 27.1034 30.7791 27.2578C30.0031 27.4121 29.1989 27.3329 28.468 27.0302C27.7371 26.7274 27.1123 26.2147 26.6728 25.5569C26.2333 24.8991 25.9987 24.1258 25.9987 23.3346C25.9987 22.2738 26.4201 21.2564 27.1703 20.5062C27.9204 19.7561 28.9378 19.3346 29.9987 19.3346Z"
                                  fill="#8131D9"
                                />
                                <path
                                  d="M41.9805 40.4494C41.3999 37.7504 39.8729 35.3481 37.6755 33.6767C35.4781 32.0053 32.7553 31.1751 29.9991 31.3361C27.243 31.1751 24.5202 32.0053 22.3228 33.6767C20.1254 35.3481 18.5984 37.7504 18.0178 40.4494L17.7578 42.0028H42.2405L41.9805 40.4494ZM21.1298 39.3361C21.9898 37.3028 24.2658 34.0028 29.9991 34.0028C35.6805 34.0028 37.9765 37.3001 38.8538 39.3361H21.1298Z"
                                  fill="#8131D9"
                                />
                              </svg>
                            </div>
                            <div className="headings">
                              <h5>
                                Jake tyson <span>1m ago</span>
                              </h5>
                              <p>
                                All the details which you have provided is seems
                                like not valid kindly share valid details.
                              </p>
                            </div>
                          </div>
                          <div className="book-cover-image"></div>
                        </li>
                        
                        <li>
                          <div className="data d-flex">
                            <div className="image">
                              <img
                                src={notificationuser}
                                alt="Book Cover"
                              ></img>
                            </div>
                            <div className="headings">
                              <h5>
                                Verification <span>1m ago</span>
                              </h5>
                              <p>
                                Liked your comment:{" "}
                                <a href="#">
                                  Nice Book i hav to purchase this book as.
                                </a>
                              </p>
                            </div>
                          </div>
                          <div className="book-cover-image">
                            <img src={bookcover} alt="Book Cover"></img>
                          </div>
                        </li>
                        <li>
                          <div className="data d-flex">
                            <div className="image">
                              <img
                                src={notificationuser}
                                alt="Book Cover"
                              ></img>
                            </div>
                            <div className="headings">
                              <h5>
                                Romain Rolland <h4 className="label">Author</h4>
                                <span>2h ago</span>
                              </h5>
                              <p>Your account is successfully verified.</p>
                            </div>
                          </div>
                          <div className="book-cover-image"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="following" title="Following">
                <div className="tab-content-data">
                    <div className="all-tab-content">
                      <ul>
                        <li>
                          <div className="data d-flex">
                            <div className="image">
                              <img
                                src={notificationuser}
                                alt="Book Cover"
                              ></img>
                            </div>
                            <div className="headings">
                              <h5>
                              Romain Rolland <span>1m ago</span>
                              </h5>
                              <p>
                                Liked your comment:{" "}
                                <a href="#">
                                  Nice Book i hav to purchase this book as.
                                </a>
                              </p>
                            </div>
                          </div>
                          <div className="book-cover-image">
                            <img src={bookcover} alt="Book Cover"></img>
                          </div>
                        </li>
                        <li>
                          <div className="data d-flex">
                            <div className="image">
                              <img
                                src={notificationuser}
                                alt="Book Cover"
                              ></img>
                            </div>
                            <div className="headings">
                              <h5>
                                Romain Rolland <h4 className="label">Author</h4>{" "}
                                <span>2h ago</span>
                              </h5>
                              <p>Your account is successfully verified.</p>
                            </div>
                          </div>
                          <div className="book-cover-image"></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="community" title="Community">
                  <div className="tab-content-data"></div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Notification;
