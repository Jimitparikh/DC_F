import React from "react";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { BsDownload } from "react-icons/bs";
import logo from "../images/logo.svg";
const Tearms = () => {
  return (
    <>
      <div className="tearms-page">
        <div className="tearms-header d-flex justify-content-between align-items-center flex-wrap">
          <div className="left-part d-flex justify-content-between align-items-center flex-wrap">
            <div className="logo-image">
              <a href="#">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            <h1>Terms of Service</h1>
          </div>
          <div className="right-part d-flex align-items-center">
            <a href="" className="primary-color fs-20">
              <BsDownload />
              <span>Download PDF</span>
            </a>
            <p className="modify">
              <span>Last modified</span> Aug 28, 2022
            </p>
          </div>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="tab-items-wrapper d-flex flex-wrap">
            <div className="tab-item-link">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <span>1.</span>Introduction
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <span>2.</span>General Description of Dreamcapcha
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <span>3.</span>Privacy Policy
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    <span>4.</span>Refund & Cancell Policy
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">
                    <span>5.</span>Terms of Use
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">
                    <span>6.</span>Terms & Condition
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">
                    <span>7.</span>Children Policy
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="eighth">
                    <span>8.</span>Cookies Policy
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className="tab-item-content">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="terms-content">
                    <h2>
                      <span>1.</span>Introduction
                    </h2>
                    <ul className="list">
                      <li>
                        <h5>
                          <span>a.</span>Age Restrictions
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Vulputate eu scelerisque felis
                          imperdiet proin fermentum. Volutpat odio facilisis
                          mauris sit amet massa vitae. Lobortis scelerisque
                          fermentum dui faucibus in ornare quam viverra. Quis
                          lectus nulla at volutpat diam ut. Tellus orci ac
                          auctor augue mauris augue neque gravida in. Justo nec
                          ultrices dui sapien eget mi proin. Lectus mauris
                          ultrices eros in. Vitae tempus quam pellentesque nec
                          nam aliquam sem et.
                        </p>
                      </li>
                      <li>
                        <h5>
                          <span>a.</span>Age Restrictions
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Vulputate eu scelerisque felis
                          imperdiet proin fermentum. Volutpat odio facilisis
                          mauris sit amet massa vitae. Lobortis scelerisque
                          fermentum dui faucibus in ornare quam viverra. Quis
                          lectus nulla at volutpat diam ut. Tellus orci ac
                          auctor augue mauris augue neque gravida in. Justo nec
                          ultrices dui sapien eget mi proin. Lectus mauris
                          ultrices eros in. Vitae tempus quam pellentesque nec
                          nam aliquam sem et.
                        </p>
                      </li>
                      <li>
                        <h5>
                          <span>a.</span>Age Restrictions
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Vulputate eu scelerisque felis
                          imperdiet proin fermentum. Volutpat odio facilisis
                          mauris sit amet massa vitae. Lobortis scelerisque
                          fermentum dui faucibus in ornare quam viverra. Quis
                          lectus nulla at volutpat diam ut. Tellus orci ac
                          auctor augue mauris augue neque gravida in. Justo nec
                          ultrices dui sapien eget mi proin. Lectus mauris
                          ultrices eros in. Vitae tempus quam pellentesque nec
                          nam aliquam sem et.
                        </p>
                      </li>
                      <li>
                        <h5>
                          <span>a.</span>Age Restrictions
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Vulputate eu scelerisque felis
                          imperdiet proin fermentum. Volutpat odio facilisis
                          mauris sit amet massa vitae. Lobortis scelerisque
                          fermentum dui faucibus in ornare quam viverra. Quis
                          lectus nulla at volutpat diam ut. Tellus orci ac
                          auctor augue mauris augue neque gravida in. Justo nec
                          ultrices dui sapien eget mi proin. Lectus mauris
                          ultrices eros in. Vitae tempus quam pellentesque nec
                          nam aliquam sem et.
                        </p>
                      </li>
                      <li>
                        <h5>
                          <span>a.</span>Age Restrictions
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Vulputate eu scelerisque felis
                          imperdiet proin fermentum. Volutpat odio facilisis
                          mauris sit amet massa vitae. Lobortis scelerisque
                          fermentum dui faucibus in ornare quam viverra. Quis
                          lectus nulla at volutpat diam ut. Tellus orci ac
                          auctor augue mauris augue neque gravida in. Justo nec
                          ultrices dui sapien eget mi proin. Lectus mauris
                          ultrices eros in. Vitae tempus quam pellentesque nec
                          nam aliquam sem et.
                        </p>
                      </li>
                      <li>
                        <h5>
                          <span>a.</span>Age Restrictions
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Vulputate eu scelerisque felis
                          imperdiet proin fermentum. Volutpat odio facilisis
                          mauris sit amet massa vitae. Lobortis scelerisque
                          fermentum dui faucibus in ornare quam viverra. Quis
                          lectus nulla at volutpat diam ut. Tellus orci ac
                          auctor augue mauris augue neque gravida in. Justo nec
                          ultrices dui sapien eget mi proin. Lectus mauris
                          ultrices eros in. Vitae tempus quam pellentesque nec
                          nam aliquam sem et.
                        </p>
                      </li>
                    </ul>
                    <div className="btn-wrap d-flex">
                      <button className="btn btn-secondary">Decline</button>
                      <button className="btn btn-primary">Accept</button>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="terms-content">
                    General Description of Dreamcapcha
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="terms-content">Privacy Policy</div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div className="terms-content">Refund & Cancell Policy</div>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <div className="terms-content">Terms of Use</div>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <div className="terms-content">Terms & Condition</div>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <div className="terms-content">Children Policy</div>
                </Tab.Pane>
                <Tab.Pane eventKey="eighth">
                  <div className="terms-content">Cookies Policy</div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
        </Tab.Container>
      </div>
    </>
  );
};
export default Tearms;
