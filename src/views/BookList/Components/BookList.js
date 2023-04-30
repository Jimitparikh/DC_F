import React, { useEffect, useNavigate } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { BsFillStarFill, BsCart3 } from "react-icons/bs";
import trendingbookcover from '../../../images/trending-book-cover.png';
import { get_Books } from '../store/dataSlice';
import Loader from '../../../components/Loader';
import { get_Wishlist } from '../../Wishlist/store/dataSlice';

const Books = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth);
    const data = useSelector((state) => state.books.data.bookList)
    const loading = useSelector((state) => state.books.data.loading)
    const books = data.books
    useEffect(() => {
        dispatch(get_Books())
    }, [])

    return (
        <>
            <section className="trending-books-section">
                <div className="trending-books-content">
                    <div className="Books-listing vertical-align d-flex justify-content-between align-items-center">
                        {books &&
                            <ul className="trending-books-list">
                                {books.map((book, index) => {
                                    return <li key={index}>
                                        <div className="add-to-cart-book-box d-flex overflow-hidden position-relative">
                                            <div className="add-cart-book-image">
                                                <Link className='link' to={"/book-detail?id=" + book._id}>
                                                    <img src={book.imageUrl} alt="Book Cover" />
                                                </Link>
                                            </div>
                                            <div className="add-cart-book-data">
                                                <div className="title">
                                                    <h3>
                                                        <Link className='link' to={"/book-detail?id=" + book._id}>
                                                            {book.bookName}
                                                        </Link>
                                                    </h3>
                                                    <p>{book.authorName}</p>
                                                </div>
                                                <div className="price d-flex justify-content-between align-items-center">
                                                    <p className="price-number">{book.price} <span>$25.04</span></p>
                                                    <p className="rating">
                                                        <BsFillStarFill />
                                                        {book.averageRating}
                                                    </p>
                                                </div>
                                                <div className="btn-wrap">
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

                    </div>
                </div>
            </section>
            <div className="pagination-wrapper">
                <div className="pagination-content d-flex align-items-center justify-content-between flex-wrap">
                    <div className="pagination-number">
                        <p>Showing 1 to 5 of 20 entries</p>
                    </div>
                    <div className="pagination-list">
                        <button className="btn btn-prev">Prev</button>
                        <ul>
                            <li className="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                        </ul>
                        <button className="btn btn-next">Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Books