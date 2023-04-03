import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import userdashboardprofile from "../../../images/user-dashboard-profile.png";
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
import ebookcover from "../../../images/ebook-cover.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import audiobookcover from "../../../images/audio-book-cover.png";
import userprofile from "../../../images/user-menu-profile.png";
import visalogo from "../../../images/visa-logo.png";
import mastercardlogo from "../../../images/mastercard-logo.png";
import citibanklogo from "../../../images/citibank-logo.png";
import sbilogo from "../../../images/sbi-logo.png";
import axislogo from "../../../images/axis-logo.png";
import ruppies from "../../../images/ruppies.png";
import Loader from "../../../components/Loader";

const MyWallet = () => {
  const [addbalance, setaddbalance] = useState(false);
  const setaddbalanceclose = () => setaddbalance(false);
  const setaddbalanceshow = () => setaddbalance(true);
  return (
    <div className="my-wallet-tab-content">
      <h5 className="tab-title">My Wallet</h5>
      <div className="my-wallet-content">
        <div className="heading d-flex flex-wrap justify-content-between align-items-center">
          <h6>Wallet Balance</h6>
          <div className="btn-wrap">
            <button
              className="btn btn-green"
              onClick={setaddbalanceshow}
            >
              <AiOutlinePlus />
              Add Balance
            </button>
            <Modal
              show={addbalance}
              onHide={setaddbalanceclose}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  Add Money To <span>Dreamcapcha Wallet</span>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="add-balance-modal">
                  <input
                    className="input-box"
                    placeholder="$ 100.00"
                  ></input>
                  <ul>
                    <li>
                      <p>+$100</p>
                    </li>
                    <li>
                      <p>+$200</p>
                    </li>
                    <li>
                      <p>+$300</p>
                    </li>
                    <li>
                      <p>+$400</p>
                    </li>
                  </ul>
                  <div className="btn-wrap">
                    <button className="btn btn-primary">
                      Proceed to Add $100.00
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <div className="data-info-list">
          <ul>
            <li>
              <h4 className="green-color">
                Available Balance
              </h4>
              <p>
                $ 250.<span>00</span>
              </p>
            </li>
            <li>
              <h4>Refral Points</h4>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="28"
                  viewBox="0 0 19 28"
                  fill="none"
                >
                  <path
                    d="M13.3343 4.56888L13.3365 4.56981C14.9094 5.22146 16.1475 6.34562 16.9822 7.69906L17.7127 7.40078C17.1176 4.77226 15.3066 2.46384 12.6267 1.34696C8.21262 -0.512459 3.15226 1.54565 1.2913 5.93613C0.149346 8.59332 0.47311 11.5221 1.88702 13.8042L2.61671 13.5032C2.25678 11.951 2.36895 10.3108 3.04427 8.73507L3.04491 8.73356C4.73328 4.74902 9.32564 2.87985 13.3343 4.56888Z"
                    fill="#4D4D4D"
                    stroke="#4D4D4D"
                    stroke-width="0.8"
                  />
                  <path
                    d="M9.41762 15.0624L9.36985 15.0744C8.92783 15.1849 8.49846 15.4033 8.05885 15.7642C7.64226 16.0832 7.21888 16.4565 6.81848 16.932C6.42604 17.398 6.06138 17.9092 5.70101 18.4618L5.69557 18.4701L5.69055 18.4787C5.35546 19.0532 5.04095 19.6333 4.77333 20.2172L4.77328 20.2172L4.77083 20.2228C4.50099 20.836 4.30578 21.4226 4.13658 22.0269C3.96169 22.6515 3.88516 23.232 3.88516 23.7673C3.88516 24.7691 4.17036 25.6142 4.80678 26.2506L4.80671 26.2507L4.81314 26.2568C5.43528 26.8519 6.28146 27.2095 7.36218 27.3352L7.41365 27.3412L7.46495 27.3339C8.0357 27.2523 8.59 27.0103 9.12623 26.6283C9.66105 26.2708 10.159 25.7945 10.6442 25.2365L10.6443 25.2366L10.6507 25.2288C11.1155 24.6662 11.5534 24.0331 11.9651 23.3308L11.9651 23.3308L11.968 23.3257C12.3807 22.5975 12.7197 21.8704 13.0332 21.0747C13.3486 20.274 13.5921 19.4711 13.7627 18.6426L13.7631 18.6404C13.9324 17.7941 14.0311 16.9862 14.0311 16.1959C14.0311 15.4158 13.9582 14.5872 13.788 13.7341C13.6421 12.8605 13.4232 12.0343 13.1316 11.2324C12.841 10.4334 12.5026 9.68412 12.1409 8.98489C11.7708 8.26942 11.3495 7.67358 10.9243 7.19837L10.7846 7.04218L10.5766 7.06818C10.329 7.09913 10.0673 7.1892 9.8168 7.32837L9.80345 7.33579C9.59865 7.44953 9.354 7.58541 9.13248 7.77924C8.93313 7.95367 8.75956 8.12724 8.59603 8.29077L8.5925 8.2943L8.58309 8.30372L8.57432 8.31374C8.39783 8.51544 8.26103 8.70562 8.18829 8.92387L8.12794 9.1049L8.23068 9.26571C8.76778 10.1064 9.18846 10.8542 9.54016 11.5107C9.89077 12.1651 10.1657 12.7394 10.37 13.2841L10.37 13.2841L10.372 13.2894C10.5744 13.8064 10.7111 14.3284 10.8277 14.8412C10.8777 15.0611 10.9233 15.2854 10.9647 15.5162C10.8618 15.4582 10.7552 15.4046 10.6446 15.3562C10.2415 15.1799 9.82865 15.0624 9.46687 15.0624H9.41762ZM10.6869 17.8364C10.8454 17.6878 11.0001 17.5605 11.149 17.4547C11.1464 18.2846 11.0329 19.1377 10.7855 20.015L10.7855 20.015L10.7848 20.0175C10.531 20.9403 10.2091 21.7904 9.81994 22.569C9.40355 23.3784 8.97169 24.0569 8.48041 24.6151C8.01156 25.1479 7.59992 25.4767 7.20931 25.6267C7.00861 25.5832 6.88869 25.501 6.81492 25.4072C6.72767 25.2961 6.66268 25.1147 6.67244 24.8217L6.67266 24.8217V24.8084C6.67266 24.4785 6.73482 24.0717 6.88875 23.6099C7.04823 23.1315 7.2531 22.6307 7.5264 22.1068C7.80613 21.5707 8.10723 21.0383 8.45324 20.5077L8.45341 20.5078L8.45988 20.4972C8.77706 19.9761 9.14188 19.4965 9.53503 19.034C9.92978 18.5696 10.2948 18.1826 10.6779 17.8445L10.6781 17.8446L10.6869 17.8364Z"
                    fill="#4D4D4D"
                    stroke="#4D4D4D"
                    stroke-width="0.8"
                  />
                </svg>{" "}
                10.22<span>pts</span>
              </p>
            </li>
            <li>
              <h4>Total Spend</h4>
              <p>
                $ 300.<span>00</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="transcation-summary">
          <div className="heading d-flex flex-wrap justify-content-between align-items-center">
            <h6>Transaction Summary</h6>
            <Dropdown className="input-box without-background me-0">
              <Dropdown.Toggle id="dropdown-basic">
                This Month <FaChevronDown className="fs-16 m-0" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Today
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  Yesterday
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  Last 30 Days
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Last 1 Week
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Last 1 Year
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Life Time
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Custome Date Range
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="table-responsive">
            <table className="transcation-summary-table">
              <tr>
                <th>Type</th>
                <th>Date & Time</th>
                <th>Payment Detils</th>
                <th>Payment Mehod</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
              <tr>
                <td>
                  <p className="label red-view">Debit</p>
                </td>
                <td>Aug 28,2022 , 2:30PM</td>
                <td>Book Purchased</td>
                <td>Wallet</td>
                <td>
                  <p className="danger-color">-$10</p>
                </td>
                <td>$300</td>
              </tr>
              <tr>
                <td>
                  <p className="label green-view">Cebit</p>
                </td>
                <td>Aug 28,2022 , 2:30PM</td>
                <td>Book Purchased</td>
                <td>Wallet</td>
                <td>
                  <p className="green-color">+$10</p>
                </td>
                <td>$300</td>
              </tr>
            </table>
          </div>
          <p className="text-end">Pagination comes here</p>
        </div>
      </div>
    </div>
  )
}

export default MyWallet
