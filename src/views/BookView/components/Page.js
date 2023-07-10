import React, { useState } from 'react'
import parse from "html-react-parser";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import 'react-quill/dist/quill.snow.css';
import { GrNext, GrPrevious } from "react-icons/gr";
import "../css/Page.css"
import "../css/ql.scss"
import Loader from "../../../components/Loader";
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import { setCurrentPage, setCurrentPageNumber, setPageLoading } from '../store/dataSlice';
import { BaseFileURL } from '../../../configs/app.config';


const Page = () => {
  const dispatch = useDispatch()
  const { CurrentPage, BookData, CurrentPageNumber, Pageloading, Upins } = useSelector((state) => state.bookData.data)
  const currentPageIndex = BookData?.pageData?.findIndex((page) => page._id == CurrentPage?._id)
  const [upin , setupin] = useState("")
  const isDisableNext = currentPageIndex == BookData?.pageData?.length - 1
  const isDisablePrevious = !currentPageIndex || currentPageIndex <= 0
  console.log(BookData?.pageData?.length);
  
  const renderTooltip = (props) => (
    <Tooltip
      className="text-detail-tooltip-content"
      id="button-tooltip"
      {...props}
    >
      <div className="tooltip-body">
      <div className="image">
         {upin?.img ? <img  src={BaseFileURL + upin.img} alt="Image" /> : null}
        </div>
        <div className='image'>
        {upin?.video ? (
          <video width="100%" controls>
          <source src={BaseFileURL + upin.video} />
          Your browser does not support HTML video.
        </video>
        ) : null}
        </div>
        <div className='image'>
        {upin?.uvideo ? (
          <iframe
            title="video"
            width="100%"
            height="200"
            src={upin?.uvideo}
            allowFullScreen
          />
        ) : null}
        </div>
        <div className='image'>
        {upin?.audio ? (
         <div className="d-flex justify-content-center">
         <audio controls controlsList="noplaybackrate nodownload">
           <source src={BaseFileURL + upin.audio} />
           Your browser does not support the audio element.
         </audio>
       </div>
        ) : null}
        </div>
        <div className="body-details">
          <h4>{upin?.title}</h4>
          <p>
            {upin?.description}
          </p>
        </div>
      </div>
    </Tooltip>
  );

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

  const setUpin = (upinId) => {
    console.log(Upins);
    let upinData = Upins?.find((upin) => {
      return  upin._id == upinId
    })
    setupin(upinData)
    console.log(upin);
  }

  const options = {
    replace: (domNode) => {
      if (domNode.attribs && domNode.attribs.class === "ql-upin") {
        return <OverlayTrigger placement="right" trigger="click" delayShow={700} delayHide={150} overlay={renderTooltip} rootClose>
          <span {...domNode.attribs}  onClick={() => { setUpin(domNode.attribs.id)  }} style={{cursor : "pointer"}}> {domNode?.children?.[0].data}</span>
        </OverlayTrigger>
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
              {!Pageloading &&
                <div className='content'> {CurrentPage?.pageContent && parse(CurrentPage?.pageContent, options)}</div>
                // <div className='content' dangerouslySetInnerHTML={{__html: CurrentPage?.pageContent}} ></div>
                //  <div className='content'>
                //   <ReactQuill
                //     value={CurrentPage?.pageContent}
                //     readOnly={true}
                //     theme={"bubble"}
                //   />
                // </div> 
              }
              {
                Pageloading && <Loader />
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