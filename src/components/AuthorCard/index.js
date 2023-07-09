import React from 'react'
import authorprofile from '../../images/author-profile.png';
import { useDispatch, useSelector } from 'react-redux';
import { follow_Author, get_Followings, unfollow_Author } from '../../views/UserDashboard/Components/MyFollowing/store/dataSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';


const AuthorCard = (props) => {

    const dispatch = useDispatch()
    const { user, isLoggedIn } = useSelector((state) => state.auth);
    const data = useSelector((state) => state.following.data.followings)
    const followingCheckArray = data.following


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

    const { authorName, followers, imageUrl, ratings, noOfBooksPublished, _id, authorID } = props.author
    return (
        <>
            <ToastContainer />
            <div className="background-box"></div>
            <div className="author-detail">
                <img src="https://dreamcaptcha.s3.amazonaws.com/author_profiles/643c2d020b2ee2912ee73d467yCU.jpg" alt="Author Profile" />
                <h4 className="title">{authorName}</h4>
                <p className="light-grey">Comic & Horror Book Writer</p>
                <ul className="social-network">
                    <li>
                        <h5 className="heading">{followers}</h5>
                        <span>Followers</span>
                    </li>
                    <li>
                        <h5 className="heading">{ratings}</h5>
                        <span>Rating</span>
                    </li>
                    <li>
                        <h5 className="heading">{noOfBooksPublished}</h5>
                        <span>Book Published</span>
                    </li>
                </ul>
                <div className="btn-wrap">
                    <NavLink to={"/author-detail?id=" + _id} className="primary-color fw-semibold" title="View Profile" alt="View Profile">View Profile</NavLink>
                    {
                        isLoggedIn ?
                            followingCheckArray && followingCheckArray.includes(authorID) ? <button onClick={() => { handelunfollow({ id: authorID, name: authorName }) }} className="btn btn-primary">Following</button> : <button onClick={() => { handelfollow({ id: authorID, name: authorName }) }} className="btn btn-primary">Follow Now</button>
                            : <></>
                    }
                </div>
            </div>
            {/* <div className="author-detail">
                <img src={authorprofile} alt="Author Profile" />
                <h4 className="title">{authorName}</h4>
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
            </div> */}
        </>
    )
}

export default AuthorCard