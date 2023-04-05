import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Breadcrums from "../../components/Breadcrums";
import Dropdown from 'react-bootstrap/Dropdown';
import authorprofile from '../../images/author-profile.png';
import { FaChevronDown } from 'react-icons/fa';
import { get_authorList } from './store/dataSlice';
import { follow_Author, get_Author, unfollow_Author } from '../UserDashboard/Components/MyFollowing/store/dataSlice';
import { get_Followings } from '../UserDashboard/Components/MyFollowing/store/dataSlice';
import { injectReducer } from '../../store/index'
import reducer from './store'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/Loader';
import { NavLink } from 'react-router-dom';
injectReducer('authorlist', reducer)

const AuthorList = () => {
    const dispatch = useDispatch()
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const data = useSelector((state) => state.following.data.followings)
    // const follow = data.length ? data.following : []
    const { authorList, loading } = useSelector((state) => state.authorlist.data)
    const authors = authorList.authors
    // console.log(data.following, " <><><><><>");

    const handelfollow = (data) => {
        // alert(data)
        dispatch(follow_Author({ readerID: user._id, followID: data.id })).then((response) => {
            console.log(response)
            if (response.payload.success == true) {
                toast.success("Following " + data.name, {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            dispatch(get_Followings({ readerID: user._id }))
            // dispatch(get_authorList())
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
            // dispatch(get_authorList())
        })
    }

    useEffect(() => {
        dispatch(get_authorList())
    }, [])

    return (
        <>
            <Breadcrums path="Authors" />
            <ToastContainer
                autoClose={5000} />
            <section className='author-list-section'>
                <div className='container'>
                    <div className="author-list-header">
                        <h1>Authors</h1>
                        <p className="fa-18 light-grey">Over 100+ Authors are join with us.</p>
                    </div>
                    <div className='author-list-tabbing d-flex justify-content-between'>
                        <div className='author-list-tab-left '>
                            <Tabs
                                defaultActiveKey="Action and Adventur"
                                transition={false}
                                id="fill-tab-example"
                            >
                                <Tab eventKey="Action and Adventur" title="Action and Adventur">
                                    <div className='tab-content-data'>
                                        <section className="top-authors-section">
                                            <div className="top-autors-content">
                                                {!loading && authors &&
                                                    <ul className="authors-list d-flex flex-wrap">
                                                        {authors.map((author, index) => {
                                                            return <li key={index}>
                                                                <div className="background-box"></div>
                                                                <div className="author-detail">
                                                                    <img width="100" height="150" src={author.imageUrl} alt="Author Profile" />
                                                                    <h4 className="title">{author.authorName}</h4>
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
                                                                        <NavLink to={"/author-detail"}  className="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</NavLink>
                                                                        {
                                                                            isLoggedIn ?  
                                                                            data.following.includes(author.authorID) ? <button onClick={() => { handelunfollow({id:author.authorID, name: author.authorName}) }} className="btn btn-primary">Following</button> : <button onClick={() => { handelfollow({id:author.authorID, name: author.authorName}) }} className="btn btn-primary">Follow Now</button>
                                                                            : <></>
                                                                        }
                                                                    </div>
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
                                        </section>
                                    </div>
                                </Tab>
                                <Tab eventKey="Classic" title="Classic">
                                    <div className='tab-content-data'>Classic</div>
                                </Tab>
                                <Tab eventKey="Comic Book or Graphic Novel" title="Comic Book or Graphic Novel">
                                    <div className='tab-content-data'>Comic Book or Graphic Novel</div>
                                </Tab>
                                <Tab eventKey="Detective and Mystery" title="Detective and Mystery">
                                    <div className='tab-content-data'>Detective and Mystery</div>
                                </Tab>
                                <Tab eventKey="Fantasy" title="Fantasy">
                                    <div className='tab-content-data'>Fantasy</div>
                                </Tab>
                                <Tab eventKey="Historical Fiction" title="Historical Fiction">
                                    <div className='tab-content-data'>Historical Fiction</div>
                                </Tab>
                            </Tabs>
                        </div>
                        <div className='author-list-tab-right '>
                            <Dropdown>
                                <Dropdown.Toggle className="btn btn-secondary" id="dropdown-basic">
                                    This week <FaChevronDown />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">This Month</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default AuthorList;