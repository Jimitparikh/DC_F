import React, { useState , useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { IoLocationOutline } from "react-icons/io5";
import {
    MdDateRange,
    MdOutlineAccountBalanceWallet,
    MdOutlineCardGiftcard,
    MdOutlineDeleteOutline,
    MdOutlineMail,
    MdOutlineManageAccounts,
    MdOutlineModeEditOutline,
} from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import {
    AiOutlineBook,
    AiOutlineLock,
    AiOutlinePlus,
    AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FaChevronDown, FaRegFileAudio, FaUniversity } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import {
    BsCameraVideo,
    BsChevronRight,
    BsFileText,
    BsInfoCircle,
    BsPlayCircle,
    BsUpload,
} from "react-icons/bs";
import ProgressBar from "react-bootstrap/ProgressBar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from 'react-redux'
import { get_Author } from "./store/dataSlice";
import userprofile from "../../../../images/user-menu-profile.png";
import { injectReducer } from '../../../../store/index'
import reducer from './store'
injectReducer('following', reducer)

const MyFollowing = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const data = useSelector((state) => state.following.data.followings)
    const following = data.followingss ? data.followingss : []
    const count = data ? following.length : 0
    useEffect(() => {
        dispatch(get_Author({readerID : user._id}))
    },)
    return (
        <div className="my-followings-tab-content">
            <h5 className="tab-title">
                My Followings <span>({count})</span>
            </h5>
            <div className="my-followings-content">
                <ul>
                    {following.length !=0 && following.map((author,i)=>{
                        return <li key={i}>
                        <div className="user-image">
                            <img src={userprofile} alt="Profile"></img>
                        </div>
                        <div className="user-name">
                            <h5>{author.authorName}</h5>
                            <p>Comic & Horror Book Writer</p>
                            <div className="action">
                                <a href="#">View Profile</a>
                                <a href="#">View all Books</a>
                            </div>
                        </div>
                    </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default MyFollowing