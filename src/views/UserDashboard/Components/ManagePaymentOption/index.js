import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import Modal from "react-bootstrap/Modal";
import {
  MdDateRange,
  MdOutlineAccountBalanceWallet,
  MdOutlineCardGiftcard,
  MdOutlineDeleteOutline,
  MdOutlineMail,
  MdOutlineManageAccounts,
  MdOutlineModeEditOutline,
} from "react-icons/md";
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
import { Formik, Field, Form, ErrorMessage } from "formik";
import Dropdown from "react-bootstrap/Dropdown";
import visalogo from "../../../../images/visa-logo.png";
import mastercardlogo from "../../../../images/mastercard-logo.png";
import citibanklogo from "../../../../images/citibank-logo.png";
import sbilogo from "../../../../images/sbi-logo.png";
import axislogo from "../../../../images/axis-logo.png";
import ruppies from "../../../../images/ruppies.png";
import Loader from "../../../../components/Loader";
import { add_Card, get_Cards, delete_Cards } from "./store/dataSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { injectReducer } from '../../../../store/index'
import reducer from './store'
injectReducer('card', reducer)

const ManagePaymentOption = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useSelector((state) => state.auth);
  const data = useSelector((state) => state.card.data.cardList)
  const loading = useSelector((state) => state.card.data.loading)
  const cards = data
  console.log(data);

  
  const [addnewaccount, setaddnewaccount] = useState(false);
  const setaddnewaccountclose = () => setaddnewaccount(false);
  const setaddnewaccountshow = () => setaddnewaccount(true);

  const [addnewcard, setaddnewcard] = useState(false);
  const setaddnewcardclose = () => setaddnewcard(false);
  const setaddnewcardshow = () => setaddnewcard(true);

  useEffect(() => {
    dispatch(get_Cards({ readerID: user._id }))
  }, [dispatch])

  const cardDeleteHandler = (data) => {
    dispatch(delete_Cards({ cardID: data._id })).then((response)=>{
      if(response.payload.success){
        toast.success("Your Card Deleted Successfully!!!!", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      else{
        toast.danger("Something went Wrong :( ", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    })
    dispatch(get_Cards({ readerID: user._id }))

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);
    if (elements == null) {
      return;
    }
    const paymentMethod = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    const token = await stripe.createToken(cardElement);
    dispatch(add_Card({ token: token.token, paymentMethod: paymentMethod.paymentMethod, readerID: user._id })).then((response) => {
      console.log(response);
      if(response.payload.success === true) {
        toast.success("Your Card Added Successfully!!!!", {
          position: toast.POSITION.TOP_CENTER
        });
      }
      else {
        toast.danger("Something went Wrong :( ", {
          position: toast.POSITION.TOP_CENTER
        });
      }
    })
    dispatch(get_Cards({ readerID: user._id }))
    setaddnewcardclose()
  };

  return (
    <>
      <ToastContainer
        autoClose={5000} />
      <div className="my-wallet-tab-content manage-account-tab-content">
        <h5 className="tab-title">Manage Account</h5>
        <div className="my-wallet-content">
          <div className="credit-debit-card-list">
            <div className="heading d-flex flex-wrap justify-content-between align-items-center">
              <h6>Your Credit & Debit Cards</h6>
              <div className="btn-wrap">
                <button
                  className="btn btn-green"
                  onClick={setaddnewcardshow}
                >
                  <AiOutlinePlus />
                  Add New Card
                </button>
                <Modal show={addnewcard} onHide={setaddnewcard}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add new card</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="add-new-account-content add-new-card-content">
                      <form onSubmit={handleSubmit}>
                        <div className="tab-content-data">
                          <div className="input-field-group">
                            {/* <div className="input-field-item w-100">
                            <label>Name On Card</label>
                            <input
                              type="text"
                              className="input-box"
                              placeholder="Enter full name as per your card"
                            ></input>
                          </div> */}
                            <div className="input-field-item w-100">
                              <CardElement />
                            </div>
                          </div>
                          {/* <div className="checkbox-group">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="defaultCheck1"
                            ></input>
                            <label
                              className="form-check-label light-grey"
                              for="defaultCheck1"
                            >
                              Securely save this card for a faster
                              checkout next time
                            </label>
                          </div>
                        </div> */}
                          <div className="btn-wrap">
                            <button className="btn btn-primary" type="submit" disabled={!stripe || !elements}>
                              Add Card
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            <div className="transcation-summary">
              <div className="table-responsive">
                {cards &&
                  <table className="transcation-summary-table">
                    <tr>
                      <th>Type</th>
                      <th>Card Number</th>
                      <th>Expires on</th>
                      <th>Action</th>
                    </tr>
                    {cards.map((card, i) => {
                      return <tr key={i}>
                        <td>
                          {card.cardType}
                        </td>
                        <td>{"*************" + card.lastFour}</td>
                        <td>{card.cardExpiryDate}</td>
                        <td>
                          <div className="action">
                            <a
                              onClick={() => { cardDeleteHandler(card) }}
                              title="Delete"
                              className="delete"
                            >
                              <MdOutlineDeleteOutline />
                            </a>
                          </div>
                        </td>
                      </tr>
                    })
                    }
                  </table>}
              </div>
            </div>
          </div>
          <div className="bank-account-list">
            <div className="heading d-flex flex-wrap justify-content-between align-items-center">
              <h6>Your Credit & Debit Cards</h6>
              <div className="btn-wrap">
                <button
                  className="btn btn-green"
                  onClick={setaddnewaccountshow}
                >
                  <AiOutlinePlus />
                  Add New Bank Account
                </button>
                <Modal
                  show={addnewaccount}
                  onHide={setaddnewaccount}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Add new bank account
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="add-new-account-content">
                      <div className="input-field-group">
                        <div className="input-field-item">
                          <label>
                            Bank Code <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="input-box"
                            placeholder="Enter bank code"
                          ></input>
                        </div>
                        <div className="input-field-item">
                          <label>
                            Bank Name <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="input-box"
                            placeholder="Enter your bank name"
                          ></input>
                        </div>
                        <div className="input-field-item">
                          <label>
                            Your Full Name <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="input-box"
                            placeholder="Enter name as per account"
                          ></input>
                        </div>
                        <div className="input-field-item">
                          <label>
                            Person Type <span>*</span>
                          </label>
                          <Dropdown className="input-box without-background">
                            <Dropdown.Toggle id="dropdown-basic">
                              Business <FaChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Male
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Female
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Other
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="input-field-item">
                          <label>
                            Branch Code <span>*</span>
                          </label>
                          <Dropdown className="input-box without-background">
                            <Dropdown.Toggle id="dropdown-basic">
                              Enter branch code{" "}
                              <FaChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Male
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Female
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Other
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="input-field-item">
                          <label>
                            Account Type <span>*</span>
                          </label>
                          <Dropdown className="input-box without-background">
                            <Dropdown.Toggle id="dropdown-basic">
                              Saving
                              <FaChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Male
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Female
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Other
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="input-field-item">
                          <label>
                            Account Number <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="input-box"
                            placeholder="Enter account number"
                          ></input>
                        </div>
                        <div className="input-field-item">
                          <label>
                            Confirm Account Number{" "}
                            <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="input-box"
                            placeholder="Enter confirm account number"
                          ></input>
                        </div>
                        <div className="input-field-item label-input w-100">
                          <label>
                            CPF/CNJ <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="input-box"
                            placeholder="Enter account number"
                          ></input>
                          <a href="#" className="label">
                            Find
                          </a>
                        </div>
                      </div>
                      <div className="checkbox-group">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          ></input>
                          <label
                            className="form-check-label light-grey"
                            for="defaultCheck1"
                          >
                            Save this account for future
                            transactions
                          </label>
                        </div>
                      </div>
                      <div className="btn-wrap">
                        <button className="btn btn-primary">
                          Add this Bank Account
                        </button>
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
            </div>
            <div className="transcation-summary">
              <div className="table-responsive">
                <table className="transcation-summary-table">
                  <tr>
                    <th>Type</th>
                    <th>Card Number</th>
                    <th>Name on card</th>
                    <th>Expires on</th>
                    <th>Action</th>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={citibanklogo}
                        alt="Citibank logo"
                      ></img>
                    </td>
                    <td>344******234</td>
                    <td>Luke Paul</td>
                    <td>06/26</td>
                    <td>
                      <div className="action">
                        <a
                          href="#"
                          title="Edit"
                          className="edit"
                        >
                          <MdOutlineModeEditOutline />
                        </a>
                        <a
                          href="#"
                          title="Delete"
                          className="delete"
                        >
                          <MdOutlineDeleteOutline />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={sbilogo} alt="SBI Logo"></img>
                    </td>
                    <td>344******234</td>
                    <td>Luke Paul</td>
                    <td>06/26</td>
                    <td>
                      <div className="action">
                        <a
                          href="#"
                          title="Edit"
                          className="edit"
                        >
                          <MdOutlineModeEditOutline />
                        </a>
                        <a
                          href="#"
                          title="Delete"
                          className="delete"
                        >
                          <MdOutlineDeleteOutline />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={axislogo} alt="Axis Logo"></img>
                    </td>
                    <td>344******234</td>
                    <td>Luke Paul</td>
                    <td>
                      <p className="danger-color">Expired</p>
                    </td>
                    <td>
                      <div className="action">
                        <a
                          href="#"
                          title="Edit"
                          className="edit"
                        >
                          <MdOutlineModeEditOutline />
                        </a>
                        <a
                          href="#"
                          title="Delete"
                          className="delete"
                        >
                          <MdOutlineDeleteOutline />
                        </a>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManagePaymentOption