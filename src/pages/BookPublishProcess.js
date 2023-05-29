import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {
  BsCheck2,
  BsFileEarmarkMusic,
  BsFillCheckCircleFill,
  BsFillPlayFill,
  BsImage,
  BsPin,
  BsPlayCircle,
  BsUpload,
} from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { MdContentCopy, MdFindReplace } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ImFileVideo } from "react-icons/im";
import trendingbookcover from "../images/trending-book-cover.png";
import bookhomepage from "../images/book-home-page.jpg";
import audiolistimage from "../images/audio-list.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import video from "../images/dummy-video.mp4";

const BookPublishProcess = () => {
  const [BookPublishProcess, setBookPublishProcess] = useState(false);
  const setBookPublishProcessclose = () => setBookPublishProcess(false);
  const setBookPublishProcessshow = () => setBookPublishProcess(true);

  const [addaudio, setaddaudio] = useState(false);
  const setaddaudioclose = () => setaddaudio(false);
  const setaddaudiosshow = () => setaddaudio(true);

  const [addvideo, setaddvideo] = useState(false);
  const setaddvideoclose = () => setaddvideo(false);
  const setaddvideosshow = () => setaddvideo(true);

  const [addimage, setaddimage] = useState(false);
  const setaddimageclose = () => setaddimage(false);
  const setaddimagesshow = () => setaddimage(true);

  const [replacesent, setreplacesent] = useState(false);
  const setreplacesentclose = () => setreplacesent(false);
  const setreplacesentshow = () => setreplacesent(true);

  const [audiolist, setaudiolist] = useState(false);
  const setaudiolistclose = () => setaudiolist(false);
  const setaudiolistshow = () => setaudiolist(true);

  const [videolist, setvideolist] = useState(false);
  const setvideolistclose = () => setvideolist(false);
  const setvideolistshow = () => setvideolist(true);

  const renderTooltip = (props) => (
    <Tooltip
      className="text-detail-tooltip-content"
      id="button-tooltip"
      {...props}
    >
      <div className="tooltip-body">
        <div className="image">
          <img src={trendingbookcover} alt="Image" />
        </div>
        <div className="body-details">
          <h4>This is title place</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo lorem ipsum it consequat{" "}
            <a href="#">...Read More</a>
          </p>
        </div>
      </div>
    </Tooltip>
  );

  return (
    <>
      <div className="btn-wrap d-flex mt-4 ms-4 container flex-wrap">
        <button className="btn" onClick={setBookPublishProcessshow}>
          Step 1
        </button>

        <button className="btn ms-2" onClick={setaddaudio}>
          Add Audio Modal
        </button>
        <button className="btn ms-2" onClick={setaddvideo}>
          Add Video Modal
        </button>
        <button className="btn ms-2" onClick={setaddimage}>
          Add Image Modal
        </button>
        <button className="btn ms-2" onClick={setreplacesent}>
          Replace Sentenace
        </button>
        <button className="btn ms-2" onClick={setaudiolist}>
          Audi list
        </button>
        <button className="btn ms-2" onClick={setvideolist}>
          Video list
        </button>
      </div>
      <div className="container mt-4 pt-4 text-detail-popover">
        <h4>Text click details popover demo</h4>
        <p className="mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="mt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of
          <OverlayTrigger placement="right" overlay={renderTooltip}>
            <span>Hover me to see</span>
          </OverlayTrigger>
        </p>
      </div>
      <Modal
        show={BookPublishProcess}
        onHide={setBookPublishProcessclose}
        className="large-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Complete book publish process</Modal.Title>
        </Modal.Header>
        <Modal.Body className="has-footer">
          <div className="book-publish-process">
            <div className="stepper-menu">
              <div className="stepper-nav">
                <div className="stepper-item completed">
                  <div className="stepper-item-details d-flex">
                    <div className="stepper-icon">
                      <div className="stepper-icon-inner">
                        <BsCheck2 />
                        <div className="number">1</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stepper-item current">
                  <div className="stepper-item-details d-flex">
                    <div className="stepper-icon">
                      <div className="stepper-icon-inner">
                        <BsCheck2 />
                        <div className="number">2</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stepper-item pending">
                  <div className="stepper-item-details d-flex">
                    <div className="stepper-icon">
                      <div className="stepper-icon-inner">
                        <BsCheck2 />
                        <div className="number">3</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="stepper-item pending">
                  <div className="stepper-item-details d-flex">
                    <div className="stepper-icon">
                      <div className="stepper-icon-inner">
                        <BsCheck2 />
                        <div className="number">4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="stepper-nav-content">
                <div className="step-content-left">
                  {/* First step content Start*/}
                  <ul className="main-list">
                    <li>
                      <div class="input-field-item">
                        <label>Book Name</label>
                        <input
                          type="text"
                          class="input-box"
                          placeholder="Enter book name"
                        ></input>
                      </div>
                    </li>
                    <li>
                      <div class="input-field-item">
                        <label>Description</label>
                        <textarea
                          type="text"
                          class="input-box"
                          placeholder="Write short description about book..."
                        ></textarea>
                      </div>
                    </li>
                    <li>
                      <label>Book Category</label>
                      <div className="checkbox-group d-flex flex-wrap">
                        <div className="form-check me-4 pe-1 mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          ></input>
                          <label
                            className="form-check-label"
                            for="defaultCheck1"
                          >
                            E-book
                          </label>
                        </div>
                        <div className="form-check me-4 pe-1 mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck2"
                          ></input>
                          <label
                            className="form-check-label"
                            for="defaultCheck2"
                          >
                            Audio
                          </label>
                        </div>
                        <div className="form-check me-4 pe-1 mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck3"
                          ></input>
                          <label
                            className="form-check-label"
                            for="defaultCheck3"
                          >
                            Video
                          </label>
                        </div>
                        <div className="form-check me-4 pe-1 mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck4"
                          ></input>
                          <label
                            className="form-check-label"
                            for="defaultCheck4"
                          >
                            General
                          </label>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5 className="title">Book Edition</h5>
                      <p className="fs-14 light-grey mb-3">
                        Add your book to one or more Edition. Edition can help
                        viewers to discover your book’s faster
                      </p>
                      <Dropdown className="input-box without-background w-50">
                        <Dropdown.Toggle id="dropdown-basic">
                          Select gender <FaChevronDown />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Female
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Other</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li>
                      <h5 className="title">Tags</h5>
                      <p className="fs-14 light-grey mb-3">
                        Tags can be useful if content in your Books is commonly
                        misspelt. Otherwise, tags play a minimal role in helping
                        readers to find your Book.
                      </p>
                      <input
                        type="text"
                        class="input-box"
                        placeholder="Enter book name"
                      ></input>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fs-14 light-grey mt-1">
                          Enter comma after each tags.
                        </p>
                        <p className="fs-14 light-grey">0/10</p>
                      </div>
                    </li>
                    <li>
                      <div className="row">
                        <div className="col-md-6">
                          <h5 className="title">Tags</h5>
                          <p className="fs-14 light-grey mb-3">
                            Select your book’s language
                          </p>
                          <Dropdown className="input-box without-background">
                            <Dropdown.Toggle id="dropdown-basic">
                              Select gender <FaChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Male
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Female
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Other
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="col-md-6">
                          <h5 className="title">Tags</h5>
                          <p className="fs-14 light-grey mb-3">
                            Select your book’s language
                          </p>
                          <Dropdown className="input-box without-background">
                            <Dropdown.Toggle id="dropdown-basic">
                              Select gender <FaChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Male
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Female
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Other
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5 className="title">Age restriction</h5>
                      <p className="fs-14 light-grey mb-3">
                        Age-restricted books are not shown to some audience of
                        Dreamcapcha. These books are restricted to age below 18.
                      </p>
                      <div className="radio-button-group checkbox-group">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          ></input>
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Yes, restrict my video to viewers over 18
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          ></input>
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            No, don't restrict my video to viewers over 18 only
                          </label>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* First step content End*/}

                  {/* Second step content Start*/}
                  <ul className="main-list">
                    <li>
                      <h5 className="title">Pricing Type</h5>
                      <p className="fs-14 light-grey mb-3">
                        Select your book pricing type where you want to publish
                        it for free or you want to make id Paid and wanted to
                        earn money
                      </p>
                      <div className="radio-button-group checkbox-group d-flex flex-wrap">
                        <div class="form-check me-4">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          ></input>
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Free Book
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          ></input>
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Paid Book
                          </label>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* Second step content End*/}

                  {/* Third step content Start*/}
                  <ul className="main-list">
                    <li>
                      <h5 className="title">Content Check</h5>
                      <p className="fs-14 light-grey mb-3">
                        We'll review your book for issues that may restrict its
                        visibility and then you will have the opportunity to fix
                        issues before publishing your book.
                      </p>
                      <div className="copyright-box">
                        <div>
                          <p>Copyright</p>
                          <span>No Issue Found</span>
                        </div>
                        <div>
                          <BsFillCheckCircleFill />
                        </div>
                      </div>
                      <p className="remember fs-14 light-grey mt-1">
                        <span className="danger-color">Remember: </span>These
                        check results aren't final. Issues may come up in the
                        future that impact your book.
                      </p>
                    </li>
                    {/* Third step content End*/}
                  </ul>
                  {/* Third step content End*/}

                  {/* Fourth step content Start*/}
                  <ul className="main-list visibility-step">
                    <li>
                      <h5 className="title">Visibility</h5>
                      <p className="fs-14 light-grey">
                        Choose when to publish and who can read your book.
                      </p>
                    </li>
                    <li>
                      <div className="radio-button-group-wrapper">
                        <div className="radio-button-group checkbox-group">
                          <div class="form-check me-4">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Save or Publish
                            </label>
                            <p className="fs-14 light-grey mt-2 ms-1">
                              Make your Book public or private
                            </p>
                          </div>
                          <div className="radion-buttons-child">
                            <div className="radio-button-group checkbox-group">
                              <div class="form-check me-4">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault1"
                                ></input>
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault1"
                                >
                                  Private
                                </label>
                                <p className="fs-14 light-grey mt-2 ms-1">
                                  Only you can read your book
                                </p>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="flexRadioDefault"
                                  id="flexRadioDefault2"
                                ></input>
                                <label
                                  class="form-check-label"
                                  for="flexRadioDefault2"
                                >
                                  Public
                                </label>
                                <p className="fs-14 light-grey mt-2 ms-1">
                                  Everyone can read your book
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="radio-button-group-wrapper">
                        <div className="radio-button-group checkbox-group">
                          <div class="form-check me-4">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            ></input>
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Schedule
                            </label>
                            <p className="fs-14 light-grey mt-2 ms-1">
                              Select a date to make your book public
                            </p>
                          </div>
                          <div className="input-field-group d-flex flex-wrap">
                            <div className="w-100 d-flex flex-wrap">
                              <input className="input-box" type="date"></input>
                              <Dropdown className="input-box without-background w-50">
                                <Dropdown.Toggle id="dropdown-basic">
                                  Select gender <FaChevronDown />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">
                                    Male
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">
                                    Female
                                  </Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">
                                    Other
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <p className="fs-14 light-grey mt-1">
                              Book will be Private before publishing
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5 className="heading-title">
                        Before you publish, check the following:
                      </h5>
                      <h5 className="title">
                        Is this book is only of people age above 18
                      </h5>
                      <p className="fs-14 light-grey mb-4">
                        Age-restricted books are not shown to some audience of
                        Dreamcapcha. These books are restricted to age below 18.
                      </p>
                      <h5 className="title">Copyright Content</h5>
                      <p className="fs-14 light-grey">
                        Age-restricted books are not shown to some audience of
                        Dreamcapcha. These books are restricted to age below 18.
                      </p>
                    </li>
                  </ul>
                  {/* Fourth step content End*/}
                </div>
                <div className="step-content-right">
                  <div className="upload-cover">
                    <BsUpload />
                    <p className="fs-14 light-grey">Upload book cover</p>
                  </div>
                  {/* <h4 className="note">
                    <strong>NOTE:</strong> only png, jpg, jpeg file types
                  </h4> */}
                  <div className="book-link">
                    <label>Book Link</label>
                    <div className="position-relative">
                      <input
                        className="input-box"
                        placeholder="https://testbook//261.sdb.com"
                      ></input>
                      <button className="btn">
                        <MdContentCopy />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-wrap justify-content-between">
          <div className="checkbox-group d-flex">
            <div className="form-check me-4 pe-1 mb-0">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck8"
              ></input>
              <label
                className="form-check-label light-grey"
                for="defaultCheck8"
              >
                By publishing this book you agree with our all T&C of
                Dreamcapcha
              </label>
            </div>
          </div>
          <div className="btn-wrap d-flex">
            <button
              className="btn btn-grey me-3"
              onClick={setBookPublishProcessclose}
            >
              Cancle
            </button>
            <button
              className="btn btn-green"
              onClick={setBookPublishProcessshow}
            >
              Next
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal show={addaudio} onHide={setaddaudioclose} className="large-modal">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Add Audio</Modal.Title>
        </Modal.Header>
        <Modal.Body className="has-footer add-assets-modal">
          <div className="add-assets-modal-tab">
            <Tabs
              defaultActiveKey="Upload"
              transition={false}
              id="fill-tab-example"
            >
              <Tab eventKey="Upload" title="Upload">
                <div className="tab-content-data">
                  <div className="tab-content-details">
                    <div className="icon">
                      <BsFileEarmarkMusic />
                    </div>
                    <div className="details">
                      <p>Drag and drop your audio file </p>
                      <span>
                        Upload your audio file here to attach with the word &
                        sentence
                      </span>
                    </div>
                    <div className="btn-wrap">
                      <button className="btn btn-green">Select Files</button>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="My Assets" title="My Assets">
                <div className="tab-content-data">
                  <div className="tab-content-details">
                    <div className="icon">
                      <BsFileEarmarkMusic />
                    </div>
                    <div className="details">
                      <p>Drag and drop your audio file </p>
                    </div>
                    <div className="music-player d-flex justify-content-between align-items-center">
                      <BsPlayCircle />
                      <div className="music-progress-bar">
                        <span className="progress-line"></span>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value="0"
                          class="music-progress"
                          id="progress"
                        ></input>
                      </div>
                      <p className="fs-14 light-grey">-15s</p>
                      <p className="delete-icon">
                        <RiDeleteBin6Line />
                      </p>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end">
          <div className="btn-wrap d-flex">
            <button className="btn btn-grey me-3">Cancle</button>
            <button className="btn btn-green">Next</button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal show={addvideo} onHide={setaddvideoclose} className="large-modal">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className="has-footer add-assets-modal">
          <div className="add-assets-modal-tab">
            <Tabs
              defaultActiveKey="Upload"
              transition={false}
              id="fill-tab-example"
            >
              <Tab eventKey="Upload" title="Upload">
                <div className="tab-content-data">
                  <div className="tab-content-details">
                    <div className="icon">
                      <ImFileVideo />
                    </div>
                    <div className="details">
                      <p>Drag and drop your video file </p>
                      <span>
                        Upload your video file here to attach with the word &
                        sentence
                      </span>
                    </div>
                    <div className="btn-wrap">
                      <button className="btn btn-green">Select Files</button>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="My Assets" title="My Assets">
                <div className="tab-content-data">
                  <div className="tab-content-details">
                    <div className="icon">
                      <BsFileEarmarkMusic />
                    </div>
                    <div className="details">
                      <p>Drag and drop your audio file </p>
                    </div>
                    <div className="music-player d-flex justify-content-between align-items-center">
                      <BsPlayCircle />
                      <div className="music-progress-bar">
                        <span className="progress-line"></span>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value="0"
                          class="music-progress"
                          id="progress"
                        ></input>
                      </div>
                      <p className="fs-14 light-grey">-15s</p>
                      <p className="delete-icon">
                        <RiDeleteBin6Line />
                      </p>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end">
          <div className="btn-wrap d-flex">
            <button className="btn btn-grey me-3">Cancle</button>
            <button className="btn btn-green">Next</button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal show={addimage} onHide={setaddimageclose} className="large-modal">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Add Image</Modal.Title>
        </Modal.Header>
        <Modal.Body className="has-footer add-assets-modal">
          <div className="add-assets-modal-tab">
            <Tabs
              defaultActiveKey="Upload"
              transition={false}
              id="fill-tab-example"
            >
              <Tab eventKey="Upload" title="Upload">
                <div className="tab-content-data">
                  <div className="tab-content-details">
                    <div className="icon">
                      <BsImage />
                    </div>
                    <div className="details">
                      <p>Drag and drop your image file </p>
                      <span>
                        Upload your image file here to attach with the word &
                        sentence
                      </span>
                    </div>
                    <div className="btn-wrap">
                      <button className="btn btn-green">Select Files</button>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="My Assets" title="My Assets">
                <div className="tab-content-data">
                  <div className="tab-content-details">
                    <div className="uploaded-image">
                      <img src={trendingbookcover} />
                      <span>Test Image.jpg</span>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end">
          <div className="btn-wrap d-flex">
            <button className="btn btn-grey me-3">Cancle</button>
            <button className="btn btn-green">Next</button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal show={replacesent} onHide={setreplacesentclose}>
        <Modal.Header closeButton>
          <Modal.Title>Replace Sentenace</Modal.Title>
        </Modal.Header>
        <Modal.Body className="has-footer">
          <div className="replace-sentenace-modal">
            <div className="input-item">
              <label>Find What</label>
              <div className="find-word-input">
                <input
                  className="input-box"
                  placeholder="Find the word Which you want to replace"
                ></input>
                <button className="btn btn-secondary">Find Word</button>
              </div>
            </div>
            <div className="input-item">
              <label>Replace with</label>
              <input
                className="input-box"
                placeholder="Enter the word you want to replace with"
              ></input>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-wrap justify-content-between">
          <div className="btn-wrap">
            <button className="btn btn-grey">Next</button>
          </div>
          <div className="btn-wrap d-flex">
            <button className="btn btn-grey me-3">Replace</button>
            <button className="btn btn-grey">Replace All</button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal
        show={audiolist}
        onHide={setaudiolistclose}
        className="large-modal"
      >
        <Modal.Body>
          <div className="audio-list-modal">
            <div className="audio-list">
              <img src={audiolistimage} class="img-fluid" alt="Audio list" />
            </div>
            <div className="audio-player-list">
              <h2 className="fs-20 mb-4">Chapters</h2>
              <div className="player-list-detail active">
                <div className="player-list-image">
                  <img src={bookhomepage} alt="Book Cover" />
                </div>
                <div className="player-list-data">
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
              <div className="player-list-detail">
                <div className="player-list-image">
                  <img src={bookhomepage} alt="Book Cover" />
                </div>
                <div className="player-list-data">
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
              <div className="player-list-detail">
                <div className="player-list-image">
                  <img src={bookhomepage} alt="Book Cover" />
                </div>
                <div className="player-list-data">
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
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={videolist}
        onHide={setvideolistclose}
        className="large-modal"
      >
        <Modal.Body>
          <div className="audio-list-modal video-list-modal">
            <div className="audio-list">
            <h2 className="fs-20 mb-2">Chapters</h2>
            <p className="fs-14 light-grey">Sigmund Freud </p>
              <div className="video-container">
                <div className="video">
                  <video src={video} controls="controls" autoplay="true" />
                </div>
                <a class="video-play-button" href="#">
                  <span>
                    <BsFillPlayFill />
                  </span>
                </a>
                <span className="left-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                  <path d="M0.0820312 22V0H2.83203V22H0.0820312ZM23.9154 22L8.05703 11L23.9154 0V22ZM21.1654 16.7292V5.27083L12.8695 11L21.1654 16.7292Z" fill="#666666"/>
                  </svg>                  
                </span>
                <span className="right-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                  <path d="M21.1654 22V0H23.9154V22H21.1654ZM0.0820312 22V0L15.9404 11L0.0820312 22ZM2.83203 16.7292L11.1279 11L2.83203 5.27083V16.7292Z" fill="#666666"/>
                  </svg>                  
                </span>
              </div>
              <div className="desc">
                <h2 className="fs-20 mb-2">Description</h2>
                <p className="fs-14 light-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodothe action or process.</p>
              </div>
            </div>
            <div className="audio-player-list">
            <h2 className="fs-20 mb-4">Chapters</h2>
              <div className="player-list-detail active">
                <div className="player-list-image">
                  <img src={bookhomepage} alt="Book Cover" />
                </div>
                <div className="player-list-data">
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
              <div className="player-list-detail">
                <div className="player-list-image">
                  <img src={bookhomepage} alt="Book Cover" />
                </div>
                <div className="player-list-data">
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
              <div className="player-list-detail">
                <div className="player-list-image">
                  <img src={bookhomepage} alt="Book Cover" />
                </div>
                <div className="player-list-data">
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
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default BookPublishProcess;
