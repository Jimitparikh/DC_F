import React from "react";
import Breadcrums from "../../components/Breadcrums";
import { BsXLg } from "react-icons/bs";
import Filter from "./Components/Filter";
import Books from "./Components/BookList";
import { injectReducer } from '../../store/index'
import reducer from './store'
import "./index.css"
injectReducer('books', reducer)

const BookList = () => {
 
  return (
    <>
      <Breadcrums />
      <section className="book-category-section">
        <div className="container">
          <div className="book-category-content d-flex justify-content-between flex-wrap">
           <Filter/>
            <div className="books-listing">
              <div className="books-listing-header">
                <h2>All Books</h2>
                <p className="fa-18 light-grey">Over 2000+ Books available here. find it now!</p>
                <ul className="filter-label-list d-flex flex-wrap">
                  <li className="filter-label">
                    <span>Free Books</span>
                    <a href="#">
                      <BsXLg />
                    </a>
                  </li>
                  <li className="filter-label">
                    <span>Free Books</span>
                    <a href="#">
                      <BsXLg />
                    </a>
                  </li>
                </ul>
              </div>
             <Books/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BookList;
