import React, { useEffect , useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import userprofile from "../../../images/user-profile.png";
import { BsFillStarFill, BsStar, BsStarHalf, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineDislike, AiOutlineLike, AiOutlineStar } from "react-icons/ai";
import { Rating } from 'react-simple-star-rating'
import { formatDistance } from 'date-fns'
import { useDispatch, useSelector } from "react-redux";
import { get_Reviews } from "../store/dataSlice";
export const ReviewsTab = ({id}) => {
    const dispatch = useDispatch();
    const { reviewsList, reviewsCount } = useSelector((state) => state.authorDetail.data)
    const [ratingValue, setRatingValue] = useState(0)
    const handleRating = (rate) => {
        setRatingValue(rate)
    }
    useEffect(() => {
        dispatch(get_Reviews({ authorID: id }))
    }, [])
    return (
        <div className="tab-content-data">
            <div className="rate-author-detail">
                <div className="author-detail-left-part">
                    <h5>4.1</h5>
                    <div >
                        <Rating
                            allowFraction
                            readonly
                            initialValue={0.5}
                            size={20}
                        />
                    </div>
                    <span className="fs-14 light-grey">
                        {reviewsCount ? reviewsCount : 0} reviews
                    </span>
                </div>
                <div className="author-detail-right-part">
                    <p className="fs-14">Rate author</p>
                    <div
                        style={{
                            direction: 'ltr',
                            fontFamily: 'sans-serif',
                            touchAction: 'none'
                        }}
                    >
                        <Rating
                            allowFraction
                            onClick={handleRating}
                            initialValue={ratingValue}
                        />
                    </div>
                    <div className="input-field-group d-flex">
                        <input
                            className="input-box"
                            placeholder="Write your review about this Author (optional)"
                        ></input>
                        <button className="btn">Submit</button>
                    </div>
                </div>
            </div>
            <div className="customer-list">
                {reviewsList && reviewsList.slice(0).reverse().map((review, index) => {
                    return (
                        <div key={index} className="customer-list-item d-flex align-items-start flex-wrap">
                            <img
                                src={userprofile}
                                alt="Profile"
                                className="user-profile"
                            ></img>
                            <div className="customer-data">
                                <h3>
                                    {review.readerName}<span>{formatDistance(new Date(review.createdAt), new Date(),)} ago</span>
                                </h3>
                                <div className="customer-rating d-flex align-items-center">
                                    <Rating
                                        allowFraction
                                        readonly
                                        initialValue={review.rating}
                                        size={30}
                                    />
                                </div>
                                <p className="customer-desc">
                                    {review.review}
                                </p>
                                <ul className="like d-flex">
                                    <li>
                                        <AiOutlineLike />
                                        <span>Like</span>
                                    </li>
                                    <li className="selected">
                                        <AiOutlineDislike />
                                        <span>Dislike</span>
                                    </li>
                                </ul>
                                <Dropdown
                                    className="without-background"
                                    align="end"
                                >
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                </Dropdown>
                            </div>
                        </div>)
                })
                }
            </div>
        </div>
    )
}
