import React, { useState } from 'react'
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import { BsFilterLeft } from "react-icons/bs";

const Filter = () => {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <div className={isActive ? 'show filter-section' : "filter-section"}>
            <div className="filter-header d-flex align-items-center justify-content-between flex-wrap">
                <div className="filter-icon" onClick={toggleClass}>
                    <BsFilterLeft />
                </div>
                <div className="filter-header-wrapper d-flex align-items-center justify-content-between flex-wrap w-100">
                    <h1>All Filter</h1>
                    <a href="#">Clear All</a>
                </div>
            </div>
            <Accordion
                defaultActiveKey={["0"]}
                alwaysOpen
                className="category-page-accordian"
            >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Story Type</Accordion.Header>
                    <Accordion.Body>
                        <div className="checkbox-group">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck1"
                                ></input>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Free Story
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck2"
                                ></input>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    Paid Story
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck3"
                                ></input>
                                <label className="form-check-label" htmlFor="defaultCheck3">
                                    Rental Story
                                </label>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Language</Accordion.Header>
                    <Accordion.Body>
                        <div className="checkbox-group">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck4"
                                ></input>
                                <label className="form-check-label" htmlFor="defaultCheck4">
                                    US English
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck5"
                                ></input>
                                <label className="form-check-label" htmlFor="defaultCheck5">
                                    French
                                </label>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Media Type</Accordion.Header>
                    <Accordion.Body>
                        <div className="checkbox-group">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck6"
                                ></input>
                                <label className="form-check-label" htmlFor="defaultCheck6">
                                    Audio Stories
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck7"
                                ></input>
                                <label className="form-check-label" htmlFor="defaultCheck7">
                                    Video Stories
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck8"
                                ></input>
                                <label className="form-check-label" htmlFor="defaultCheck8">
                                    E Stories
                                </label>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Ratings</Accordion.Header>
                    <Accordion.Body>
                        <div className="checkbox-group">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="defaultCheck9"
                                        ></input>
                                        <label
                                            className="form-check-label"
                                            htmlFor="defaultCheck9"
                                        >
                                            1 Star
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="defaultCheck10"
                                        ></input>
                                        <label
                                            className="form-check-label"
                                            htmlFor="defaultCheck10"
                                        >
                                            2 Star
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="defaultCheck11"
                                        ></input>
                                        <label
                                            className="form-check-label"
                                            htmlFor="defaultCheck11"
                                        >
                                            3 Star
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="defaultCheck12"
                                        ></input>
                                        <label
                                            className="form-check-label"
                                            htmlFor="defaultCheck12"
                                        >
                                            4 Star
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="defaultCheck13"
                                        ></input>
                                        <label
                                            className="form-check-label"
                                            htmlFor="defaultCheck13"
                                        >
                                            5 Star
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Price range</Accordion.Header>
                    <Accordion.Body>
                        <div className="input-group">
                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        className="input-box"
                                        placeholder="Min Price"
                                    ></input>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        className="input-box"
                                        placeholder="Max Price"
                                    ></input>
                                </div>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Publish Date</Accordion.Header>
                    <Accordion.Body>
                        <div className="checkbox-group">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck14"
                                ></input>
                                <label
                                    className="form-check-label"
                                    htmlFor="defaultCheck14"
                                >
                                    Last 3 months
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck15"
                                ></input>
                                <label
                                    className="form-check-label"
                                    htmlFor="defaultCheck15"
                                >
                                    Last 6 months
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="defaultCheck16"
                                ></input>
                                <label
                                    className="form-check-label"
                                    htmlFor="defaultCheck16"
                                >
                                    Last Year
                                </label>
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                    <Accordion.Header>Dream capcha’s Choice</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                                label="See our favorits"
                                className="switch-revers"
                            />
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Filter;