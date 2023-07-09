import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrums from "../../components/Breadcrums";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import userprofilelarge from "../../images/user-profile-large.png";
import authorprofile from "../../images/author-profile.png";
import { AuthorBooks } from "./components/AuthorBooks";
import { ReviewsTab } from "./components/ReviewsTab";
import { CommunityWallTab } from "./components/CommunityWallTab";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns'
import { injectReducer } from '../../store/index'
import reducer from './store'
import { follow_Author, get_Followings, unfollow_Author } from "../UserDashboard/Components/MyFollowing/store/dataSlice";
import { get_AuthorDetail } from "./store/dataSlice";
import { useSearchParams } from "react-router-dom";
injectReducer('authorDetail', reducer)
const AuthorDetailPage = () => {

    const [searchParams] = useSearchParams();
    const authorID = searchParams.get("id");
    // const authorID = "";
    const dispatch = useDispatch()
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const data = useSelector((state) => state.following.data.followings)
    const {author} = useSelector((state)=> state.authorDetail.data)
    const LoginToster = () => {
        toast.error("Login to Follow a Author! ", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const handelfollow = (data) => {
        dispatch(follow_Author({ readerID: user._id, followID: data.id })).then((response) => {
            console.log(response)
            if (response.payload.success == true) {
                toast.success("Following " + data.name, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            dispatch(get_Followings({ readerID: user._id }))
        })
    }

    const handelunfollow = (data) => {
        dispatch(unfollow_Author({ readerID: user._id, followID: data.id })).then((response) => {
            console.log(response)
            if (response.payload.success == true) {
                toast.success("Unfollowed " + data.name, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            dispatch(get_Followings({ readerID: user._id }))
        })
    }

    useEffect(() => {
        dispatch(get_AuthorDetail({ authorID : authorID }))
    }, [])

    return (
        <>
            <Breadcrums path="Author Detail" />
            <ToastContainer
                autoClose={5000} />
            <section className='author-detail-page-secton'>
                <div className='container'>
                    <div className='author-details-page-content'>
                        <div className='author-background'>
                        </div>
                        <div className='author-details-info d-flex justify-content-betweeen'>
                          { author &&  <div className='left-part'>
                                <div className="top-autors-content">
                                    <ul className="authors-list d-flex flex-wrap">
                                        <li>
                                            <div className="author-detail">
                                                <img src={author.imageUrl} alt="Author Profile" className='author-profile-image' />
                                                <div className='author-details-content'>
                                                    <h4 className="title">{author && author.authorName}</h4>
                                                    <p className="light-grey">Comic & Horror Book Writer</p>
                                                    <ul className="social-network">
                                                        <li>
                                                            <h5 className="heading">{author.followers}</h5>
                                                            <span>Followers</span>
                                                        </li>
                                                        <li>
                                                            <h5 className="heading">{author.ratings}</h5>
                                                            <span>Rating</span>
                                                        </li>
                                                        <li>
                                                            <h5 className="heading">{author.noOfBooksPublished}</h5>
                                                            <span>Book Published</span>
                                                        </li>
                                                    </ul>
                                                    <div className="btn-wrap">
                                                        {/* {
                                                            isLoggedIn ?
                                                                data.following.includes(authorID) ?
                                                                    // <button onClick={() => { handelunfollow({ id: authorID, name: author.authorName }) }} className="btn btn-primary">Following</button> :
                                                                    <button onClick={() => { handelfollow({ id: authorID, name: author.authorName }) }} className="btn btn-primary">Follow Now</button>
                                                                : <></>
                                                        } */}
                                                        {!isLoggedIn && <button onClick={LoginToster} className="btn btn-primary">Follow Now</button>}
                                                    </div>
                                                    <div className='about-author'>
                                                        <h5 className='small-title'>
                                                            About author
                                                        </h5>
                                                        <p className='author-desc light-grey'>
                                                          { author.authorBio}
                                                        </p>
                                                    </div>
                                                    <div className='author-stats'>
                                                        <h5 className='small-title'>
                                                            About author
                                                        </h5>
                                                        <span className='light-grey'>Joined {author.joinedDate && format(new Date(author.joinedDate), "MMMM dd, yyy")}</span>
                                                    </div>
                                                    <div>
                                                        <h5 className='small-title'>
                                                            Details
                                                        </h5>
                                                        <span className='light-grey'>Location:  Canada</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>}
                            <div className='right-part'>
                                <div className='author-detail-page-tabbing'>
                                    <Tabs
                                        defaultActiveKey="All Books"
                                        transition={false}
                                        id="fill-tab-example"
                                    >
                                        <Tab eventKey="All Books" title="All Books">
                                            <AuthorBooks />
                                        </Tab>
                                        <Tab eventKey="Reviews & Rating" title="Reviews & Rating">
                                            <ReviewsTab id={authorID} />
                                        </Tab>
                                        <Tab eventKey="Community Posts" title="Community Posts">
                                            <CommunityWallTab />
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-authors-section">
                        <div className="top-autors-content">
                            <div className="headng d-flex justify-content-between align-items-center">
                                <div className="left-content">
                                    <h4 className="fs-2 fw-bold">Suggested Authors</h4>
                                </div>
                                <div className="left-content d-flex align-items-center">
                                    <a href="#" className="dark-blue fw-500">View All</a>
                                </div>
                            </div>
                            <ul className="authors-list d-flex flex-wrap">
                                <li>
                                    <div className="background-box"></div>
                                    <div className="author-detail">
                                        <img src={authorprofile} alt="Author Profile" />
                                        <h4 className="title">Albert Flores</h4>
                                        <p className="light-grey">Comic & Horror Book Writer</p>
                                        <ul className="social-network">
                                            <li>
                                                <h5 className="heading">200</h5>
                                                <span>Followers</span>
                                            </li>
                                            <li>
                                                <h5 className="heading">4.5</h5>
                                                <span>Rating</span>
                                            </li>
                                            <li>
                                                <h5 className="heading">20+</h5>
                                                <span>Book Published</span>
                                            </li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <button className="btn btn-primary">Write a book</button>
                                            <a href="#" className="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="background-box"></div>
                                    <div className="author-detail">
                                        <img src={authorprofile} alt="Author Profile" />
                                        <h4 className="title">Albert Flores</h4>
                                        <p className="light-grey">Comic & Horror Book Writer</p>
                                        <ul className="social-network">
                                            <li>
                                                <h5 className="heading">200</h5>
                                                <span>Followers</span>
                                            </li>
                                            <li>
                                                <h5 className="heading">4.5</h5>
                                                <span>Rating</span>
                                            </li>
                                            <li>
                                                <h5 className="heading">20+</h5>
                                                <span>Book Published</span>
                                            </li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <button className="btn btn-primary">Write a book</button>
                                            <a href="#" className="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="background-box"></div>
                                    <div className="author-detail">
                                        <img src={authorprofile} alt="Author Profile" />
                                        <h4 className="title">Albert Flores</h4>
                                        <p className="light-grey">Comic & Horror Book Writer</p>
                                        <ul className="social-network">
                                            <li>
                                                <h5 className="heading">200</h5>
                                                <span>Followers</span>
                                            </li>
                                            <li>
                                                <h5 className="heading">4.5</h5>
                                                <span>Rating</span>
                                            </li>
                                            <li>
                                                <h5 className="heading">20+</h5>
                                                <span>Book Published</span>
                                            </li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <button className="btn btn-primary">Write a book</button>
                                            <a href="#" className="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="background-box"></div>
                                    <div className="author-detail">
                                        <img src={authorprofile} alt="Author Profile" />
                                        <h4 className="title">Albert Flores</h4>
                                        <p className="light-grey">Comic & Horror Book Writer</p>
                                        <ul className="social-network">
                                            <li>
                                                <h5 className="heading">200</h5>
                                                <span>Followers</span>
                                            </li>
                                            <li>
                                                <h5 className="heading">4.5</h5>
                                                <span>Rating</span>
                                            </li>
                                            <li>
                                                <h5 className="heading">20+</h5>
                                                <span>Book Published</span>
                                            </li>
                                        </ul>
                                        <div className="btn-wrap">
                                            <button className="btn btn-primary">Write a book</button>
                                            <a href="#" className="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default AuthorDetailPage;