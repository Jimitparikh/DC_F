import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Chapter from "./components/Chapter";
import { useDispatch, useSelector } from "react-redux";
import { get_Book, get_Chapters, get_Pages, get_Upins, load_Book, setCurrentPage, setCurrentPageNumber, setLoading } from "./store/dataSlice";
import { useSearchParams } from "react-router-dom";
import { injectReducer } from '../../store/index'
import 'react-quill/dist/quill.snow.css';
import { BaseFileURL } from "../../configs/app.config";
import reducer from './store'
import Loader from "../../components/Loader";
import Page from "./components/Page";
injectReducer('bookData', reducer)

const ReadBook = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const dispatch = useDispatch()
  const data = useSelector((state) => state.bookData.data.BookDetail)
  const { CurrentPage, BookData, CurrentPageNumber, Bloading } = useSelector((state) => state.bookData.data)
  const percentage = CurrentPageNumber / BookData?.pageData?.length * 100


  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(get_Book({ bookID: id }))
    DisplayinitalData()
    if (BookData?.pageData?.length > 0) {
      dispatch(setCurrentPageNumber((BookData?.pageData?.findIndex((page) => page._id == CurrentPage?._id) + 1)))
    }
    dispatch(setLoading(false))
  }, [])

  const DisplayinitalData = () => {
    if (data.isBookChapterWise) {
      dispatch(get_Upins({ bookID: id }))
      dispatch(get_Chapters({ bookID: id }))
      dispatch(load_Book({ bookID: id }))
    }
  }

  return (
    <>
      {!Bloading && <section className="read-book-section">
        <div className="read-book-header">
          <div className="header-left">
            <div className="d-flex align-items-center">
              <img width="50px" height="100px" src={BaseFileURL + data.imageUrl} alt="Book"></img>
              <p className="book-title">{data.bookName}</p>
            </div>
          </div>
          {/* <div className="header-right">
            <ul>
              <li>
                <Form>
                  <p>Light</p>
                  <Form.Check type="switch" id="custom-switch" label="Dark" />
                </Form>
              </li>
              <li>
                <a href="#">
                  <BiExpand />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiFileFind />
                </a>
              </li>
              <li>
                <a href="#">
                  <MdTextFields />
                </a>
              </li>
              <li>
                <a href="#">
                  <BiTask />
                </a>
              </li>
            </ul>
            <div className="mobile-menu">
              <Form>
                
                <Form.Check type="switch" id="custom-switch"/>
              </Form>
              <Dropdown className="without-background" align="end">
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="d-flex justify-content-between"
                >
                  <HiMenu />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                  <p className="item-selector">
                    <BiExpand /> Expand
                  </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                  <p className="item-selector">
                    <BiFileFind /> Search Text
                  </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <p className="item-selector">
                    <MdTextFields /> Text Style
                  </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <p className="item-selector">
                    <BiTask /> Annotation
                  </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div> */}
        </div>
        <div className="read-book-body">
          <div className="view ql-editor book-chapter-box">
            {data.isBookChapterWise ? <Chapter id={id} /> : <></>}
          </div>
          <br/>
          <div className="book-chapter-text">
            <Page />
          </div>
        </div>
        <div className="read-book-footer">
          <div className="progress-detail">
            <p>page {CurrentPageNumber}/{BookData?.pageData?.length}</p>
            <ProgressBar now={percentage} />
            <p>Percentage {percentage > 0 ? percentage.toFixed(0) : "0"}%</p>
          </div>
        </div>
        {/* <div className="display-text-setting-sidebar">
          <div className="sidebar-content">
            <div className="heading d-flex justify-content-between align-items-center">
              <p className="fs-20 fw-500">Display & text Setting</p>
              <a href="#" className="light-grey fs-20">
                <MdClose />
              </a>
            </div>
            <div className="sidebar-details">
              <ul className="list">
                <li>
                  <div className="d-flex justify-content-between flex-wrap align-items-center">
                    <p className="fs-20 light-grey">Font Size</p>
                    <div className="font-size-increment d-flex align-items-center">
                      <a href="#" className="info-state">
                        <AiOutlineMinusCircle />
                      </a>
                      <p className="fs-20 light-grey fw-500">16px</p>

                      <a href="#" className="info-state">
                        <AiOutlinePlusCircle />
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <p className="title">Line Height</p>
                  <div className="progress-detail">
                    <ProgressBar now={40} />
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <p className="fw-14 light-grey">Default</p>
                      <p className="fw-14 light-grey">100%</p>
                    </div>
                  </div>
                </li>
                <li>
                  <p className="title">Text Justify</p>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <a href="#" className="text-align-label active">
                      <AiOutlineAlignLeft />
                      left
                    </a>
                    <a href="#" className="text-align-label">
                      <AiOutlineAlignRight />
                      Right
                    </a>
                    <a href="#" className="text-align-label">
                      <BsJustify />
                      Justify
                    </a>
                  </div>
                </li>
                <li>
                  <p className="title">Page Layout</p>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <a href="#" className="text-align-label">
                      <MdHdrAuto />
                      Auto
                    </a>
                    <a href="#" className="text-align-label active">
                      <MdMenuBook />
                      Double
                    </a>
                    <a href="#" className="text-align-label">
                      <FiFileText />
                      Single
                    </a>
                  </div>
                </li>
                <li>
                  <p className="title">Color Formate</p>
                  <div className="color-formate">
                    <a href="#" className="color-formate-label active">
                      <span>Aa</span>
                      <IoIosCheckmarkCircle />
                    </a>
                    <a href="#" className="color-formate-label">
                      <span>Aa</span>
                      <IoIosCheckmarkCircle />
                    </a>
                    <a href="#" className="color-formate-label">
                      <span>Aa</span>
                      <IoIosCheckmarkCircle />
                    </a>
                    <a href="#" className="color-formate-label">
                      <span>Aa</span>
                      <IoIosCheckmarkCircle />
                    </a>
                    <a href="#" className="color-formate-label">
                      <span>Aa</span>
                      <IoIosCheckmarkCircle />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <div className="search-option-sidebar">
          <div className="search-option-content">
            <div className="heading d-flex justify-content-between align-items-center">
              <p className="fs-20 fw-500">Search</p>
              <a href="#" className="light-grey fs-20">
                <MdClose />
              </a>
            </div>
            <div className="search-option-body">
              <div className="header-search">
                <input
                  className="input-box"
                  placeholder="Search words, sentenace"
                ></input>
                <BsSearch />
              </div>
              <div className="search-result">
                <span className="fs-14 light-grey">2 Results Found</span>
                <ul>
                  <li>
                    <h5>
                      <BsSearch /> Chap 1 - Page 10
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod <span className="yellow">tempor</span>{" "}
                      incididunt ut labore et dolore magna aliqua...
                    </p>
                  </li>
                  <li>
                    <h5>
                      <BsSearch /> Chap 1 - Page 10
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod <span className="red">tempor</span>{" "}
                      incididunt ut labore et dolore magna aliqua...
                    </p>
                  </li>
                  <li>
                    <h5>
                      <BsSearch /> Chap 1 - Page 10
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod <span className="green">tempor</span>{" "}
                      incididunt ut labore et dolore magna aliqua...
                    </p>
                  </li>
                  <li>
                    <h5>
                      <BsSearch /> Chap 1 - Page 10
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod <span className="blue">tempor</span>{" "}
                      incididunt ut labore et dolore magna aliqua...
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="annotation-sidebar">
          <div className="annotation-content">
            <div className="heading d-flex justify-content-between align-items-center">
              <p className="fs-20 fw-500">Annotation</p>
              <Dropdown className="input-box without-background">
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="d-flex justify-content-between"
                >
                  <p className="item-selector">
                    <span className="box yellow"></span>Yellow Highlights
                  </p>
                  <FaChevronDown />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <p className="item-selector">
                      <span className="box yellow"></span>Yellow Highlights
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <p className="item-selector">
                      <span className="box red"></span>red Highlights
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <p className="item-selector">
                      <span className="box green"></span>green Highlights
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <p className="item-selector">
                      <span className="box blue"></span>blue Highlights
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="annotation-body">
              <div className="annotation-result d-flex justify-content-between flex-wrap">
                <p>Man and superman: Sigmund Freud</p>
                <p>4 Highlights</p>
              </div>
              <ul>
                <li>
                  <div className="title">
                    <h2>
                      <AiOutlineFileText />
                      Man and superman: Sigmund Freaud
                    </h2>
                    <Dropdown className="without-background" align="end">
                      <Dropdown.Toggle id="dropdown-basic">
                        <BsThreeDotsVertical />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Images</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Videos</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Audio</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <p>
                    Page 1 <span>6m ago</span>
                  </p>
                  <h4 className="yellow">
                    This is test annotation for testing
                  </h4>
                </li>
                <li>
                  <div className="title">
                    <h2>
                      <AiOutlineFileText />
                      Man and superman: Sigmund Freaud
                    </h2>
                    <Dropdown className="without-background" align="end">
                      <Dropdown.Toggle id="dropdown-basic">
                        <BsThreeDotsVertical />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Images</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Videos</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Audio</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <p>
                    Page 1 <span>6m ago</span>
                  </p>
                  <h4 className="yellow">
                    This is test annotation for testing
                  </h4>
                </li>
                <li>
                  <div className="title">
                    <h2>
                      <AiOutlineFileText />
                      Man and superman: Sigmund Freaud
                    </h2>
                    <Dropdown className="without-background" align="end">
                      <Dropdown.Toggle id="dropdown-basic">
                        <BsThreeDotsVertical />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Images</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Videos</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Audio</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <p>
                    Page 1 <span>6m ago</span>
                  </p>
                  <h4 className="yellow">
                    This is test annotation for testing
                  </h4>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </section>}
      {Bloading &&
        <Loader />
      }
    </>
  );
};
export default ReadBook;
