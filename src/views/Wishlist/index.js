import React, { useEffect } from "react";
import { BiTrash, BiTrashAlt } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { BsCart3, BsFillStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux'
import Breadcrums from "../../components/Breadcrums";
import { get_Wishlist, remove_Wishlist } from './store/dataSlice';
import trendingbookcover from '../../images/trending-book-cover.png';
import { injectReducer } from '../../store/index'
import reducer from './store'
import Loader from "../../components/Loader";
injectReducer('wishlist', reducer)

const Wishlist = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const { loading , wishlistedBookss} = useSelector((state) => state.wishlist.data)
  const books = wishlistedBookss
  const count = books.length ;

  const removeAllHandler = () => {
    dispatch(remove_Wishlist({ readerID: user._id, type: 0 }))
    dispatch(get_Wishlist({ readerID: user._id }))
    toast.success("All Books Removed from Wishlist!!!", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  const removeOneHandler = (data) => {
    dispatch(remove_Wishlist({ readerID: user._id, bookID: data, type: 1 }))
    dispatch(get_Wishlist({ readerID: user._id }))
    toast.success("Book Removed from Wishlist!!!", {
      position: toast.POSITION.TOP_CENTER
    });
  }
  useEffect(() => {
    dispatch(get_Wishlist({ readerID: user._id }))
  }, [ dispatch , count])

  return (
    <>
      <Breadcrums />
      <ToastContainer />
      <section className="wishlist-section">
        <div className="container">
          <div className="heading d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <h1>
                Wishlist<span>({count})</span>
              </h1>
              <p className="fa-18 light-grey">
                Over 100+ Authors are join with us.
              </p>
            </div>
            {books.length !== 0 && !loading &&
              <div className="btn-wrap">
                <button className="btn btn-grey me-3">
                  <BsCart3 className="body-color" />
                  Move all to Cart
                </button>
                <button onClick={removeAllHandler} className="btn btn-grey">
                  <BiTrashAlt className="danger-color" />
                  Remove All
                </button>
              </div>}
          </div>
          <div className="trending-books-section">
            <div className="trending-books-content">
              <div className="Books-listing vertical-align d-flex justify-content-between align-items-center">
                {books &&
                  <ul className="trending-books-list">
                    {books.map((book, index) => {
                      return <li key={index}>
                        <div className="add-to-cart-book-box d-flex overflow-hidden position-relative">
                          <div className="add-cart-book-image">
                            <img src={book.imageUrl} alt="Book Cover" />
                          </div>
                          <div className="add-cart-book-data">
                            <div className="title">
                              <Link to={"/book-detail?id=" + book.bookID}>
                                <h3>{book.bookName}</h3>
                              </Link>
                              <p>{book.authorName}</p>
                            </div>
                            <div className="price d-flex justify-content-between align-items-center">
                              <p className="price-number">
                                ${book.price} <span>$25.04</span>
                              </p>
                              <p className="rating">
                                <BsFillStarFill />
                                {book.averageRating}
                              </p>
                            </div>
                            <div className="btn-wrap d-flex justify-content-between align-items-center">
                              <button onClick={() => { removeOneHandler(book.bookID) }} className="btn btn-grey">
                                <BiTrashAlt className="danger-color" />
                              </button>
                              <button className="btn btn-add-to-cart">
                                <BsCart3 />
                                Add to cart
                              </button>
                            </div>
                          </div>
                          <div className="corner-ribbon">No 1</div>
                        </div>
                      </li>
                    })
                    }
                  </ul>
                } 
                {loading && 
                  <Loader />
                }

              </div>
              {books.length === 0 &&
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6 mx-auto">
                      <h3 style={{ color: "gray" }}>Wishlist is Empty!!</h3>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Wishlist;
