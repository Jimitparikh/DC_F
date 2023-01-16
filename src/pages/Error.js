import React from "react";
import errorimage from "../images/404.svg";
const Error = () => {
  return (
    <>
      <section className="not-found-page">
        <div className="container">
          <div className="page-content">
            <img src={errorimage} alt="404 Error" />
            <h1>Sorry! page not found.</h1>
            <p>Looks, like something went wrong.</p>
            <div className="btn-wrap">
              <button className="btn btn-primary">Go To Home</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Error;
