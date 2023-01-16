import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const isHeader = props.header;
  const isFooter = props.footer;

  return (
    <>
      {(!isHeader)?'':<Header />}
      <Outlet />
      {(!isFooter)?'':<Footer />}
    </>
  );
};
export default Layout;
