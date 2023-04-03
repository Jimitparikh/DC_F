import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  AiOutlineLock,
} from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import * as Yup from "yup";

const ManageProfile = () => {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const initialValues = {
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email: user.email || "",
    phone: user.phone || "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required!"),
    lastName: Yup.string().required("This field is required!"),
    phone: Yup.string().required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    country: Yup.string().required("This field is required!"),
    city: Yup.string().required("This field is required!")
  });

  const handleUpdate = (formValue) => {
    // const { firstName, lastName, email, phone, password } = formValue;
    // setLoading(true);
    // dispatch(register({ firstName, lastName, email, phone, password }))
    //   .unwrap()
    //   .then(() => {
    //     navigate("/otp");
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  };

  const handleUpdatePassword = () => {
    
  }

  return (
    <div className="manage-profile-tab-content">
      <h5 className="tab-title">Manage Profile</h5>
      <div className="manage-profile-content">
        <div className="update-info">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleUpdate}
          >
            <Form>
              <h6>Update Personal Info</h6>
              <div className="input-field-group">
                <Field type="text" name="firstName" className='input-box' placeholder='First Name' />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="alert alert-danger"
                />
                <Field type="text" name="lastName" className='input-box' placeholder='Last Name' />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="alert alert-danger"
                />
                <Field type="email" name="email" className='input-box' placeholder='Email' />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="alert alert-danger"
                />
                <Field type="number" name="phone" className='input-box' placeholder='Mobile Number' />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="alert alert-danger"
                />
                {/* <Field
                className="input-box without-background" 
                  component="select"
                  name="gender"
                  value={initialValues.gender}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Field>
                <Field type="date" name="dateOfBirth" value={initialValues.dateOfBirth} className='input-box' placeholder='Email' />
                <ErrorMessage
                  name="dateOfBirth"
                  component="div"
                  className="alert alert-danger"
                /> */}
                {/* <Dropdown className="input-box without-background">
                  <Dropdown.Toggle id="dropdown-basic">
                    Country <FaChevronDown />
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
                <Dropdown className="input-box without-background">
                  <Dropdown.Toggle id="dropdown-basic">
                    City <FaChevronDown />
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
                </Dropdown> */}
              </div>
              <div className="btn-wrap">
                <button className="btn btn-primary">
                  Update Now
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className="update-info">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleUpdatePassword}
          >
            <Form>
              <h6>
                <AiOutlineLock />
                Update Password
              </h6>

              <div className="input-field-group">
               <Field type="password" name="phone" className='input-box' placeholder='Old PassWord' />
                <ErrorMessage
                  name="oldPass"
                  component="div"
                  className="alert alert-danger"
                />
                <input
                  type="password"
                  className="input-box"
                  placeholder="Enter new password"
                ></input>
                <input
                  type="password"
                  className="input-box"
                  placeholder="Re-enter new password"
                ></input>
              </div>
              <div className="btn-wrap">
                <button className="btn btn-primary">
                  Update Password Now
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default ManageProfile