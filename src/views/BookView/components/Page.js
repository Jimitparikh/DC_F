import React from 'react'
import parse from "html-react-parser";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import trendingbookcover from "../../../images/trending-book-cover.png";
import 'react-quill/dist/quill.snow.css';
import { GrNext, GrPrevious } from "react-icons/gr";
import ReactQuill, { Quill, editor } from 'react-quill';
import "../css/Page.css"
import Loader from "../../../components/Loader";
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { setCurrentPage, setCurrentPageNumber, setPageLoading } from '../store/dataSlice';

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

const Page = () => {
  const dispatch = useDispatch()
  const { CurrentPage, BookData, CurrentPageNumber, Pageloading } = useSelector((state) => state.bookData.data)
  const currentPageIndex = BookData?.pageData?.findIndex((page) => page._id == CurrentPage?._id)

  const isDisableNext = currentPageIndex == BookData?.pageData?.length - 1
  const isDisablePrevious = !currentPageIndex || currentPageIndex <= 0
  console.log(BookData?.pageData?.length);
  const Nextpage = () => {
    dispatch(setPageLoading(true))
    const nextPageIndex = (currentPageIndex + 1)
    dispatch(setCurrentPageNumber(CurrentPageNumber + 1))
    dispatch(setCurrentPage(BookData?.pageData?.[nextPageIndex]))
    dispatch(setPageLoading(false))
  }

  const Previouspage = () => {
    dispatch(setPageLoading(true))
    const previousPageIndex = (currentPageIndex - 1)
    dispatch(setCurrentPageNumber(CurrentPageNumber - 1))
    dispatch(setCurrentPage(BookData?.pageData?.[previousPageIndex]))
    dispatch(setPageLoading(false))

  }

  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === "ql-upin") {
        delete domNode.attribs.onclick;
        return <OverlayTrigger placement="right" trigger="click" delayShow={500} delayHide={150} overlay={renderTooltip} rootClose>
          <span {...domNode.attribs} style={{color : "blue"}}> upin</span>
        </OverlayTrigger>
        // return <span  {...domNode.attribs} onClick={() => { Upin(domNode.attribs.id)  }}> 1 </span>;
      }
    }
  };


  return (
    <>

      <Container>
        <Row>
          <Col >
            <GrPrevious onClick={() => { !isDisablePrevious && Previouspage() }}
              style={{ fontSize: "42px", left: "70%", top: "45vh", position: "relative", cursor: isDisablePrevious ? "not-allowed" : "pointer" }} />
          </Col>
          <Col>
            <div className='page'>
              { !Pageloading && <div className='content'> {CurrentPage?.pageContent && parse(CurrentPage?.pageContent, options)}</div>
              /* <div className='content'>
                <ReactQuill
                  value={CurrentPage?.pageContent}
                  readOnly={true}
                  theme={"bubble"}
                />
              </div> */
              } 
              { 
                Pageloading &&  <Loader/>
                }
            </div> 
          </Col>
          <Col >
            <GrNext
              onClick={() => { !isDisableNext && Nextpage() }}
              style={{ fontSize: "42px", top: "45vh", position: "relative", cursor: isDisableNext ? "not-allowed" : "pointer" }} />
          </Col>
        </Row>
      </Container>


    </>
  )
}

export default Page