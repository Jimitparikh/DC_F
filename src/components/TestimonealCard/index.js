import React from 'react'
import quetos from '../../images/quetos.png';
import { BsFillStarFill, BsStarHalf} from "react-icons/bs";


const TestimonealCard = () => {
  return (
    <>
    <div className="d-flex justify-content-between align-items-center">
      <img src={quetos} alt="Quetos" />
      <ul className="d-flex review">
        <li>
          <BsFillStarFill />
        </li>
        <li>
          <BsFillStarFill />
        </li>
        <li>
          <BsFillStarFill />
        </li>
        <li>
          <BsFillStarFill />
        </li>
        <li>
          <BsStarHalf />
        </li>
      </ul>
    </div>
    <div className="review-comment">
      <h2>Sigmud Freud -<span> CEO of Xyz company</span></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum</p>
    </div>
    </>
  
  )
}

export default TestimonealCard
