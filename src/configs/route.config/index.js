import {  createBrowserRouter } from 'react-router-dom'

import Layout from "../../components/Layout";
import Home from '../../views/Home'
import Login from '../../views/Login';
import Category from '../../views/Category';
import Register from '../../views/Register';
import ReaderOnboardScreen from '../../views/ReaderOnBoardScreen';
import ForgotPassword from '../../views/ForgotPassword';
import AuthorList from '../../views/AuthorList';
import BookDetailPage from '../../views/BookDetail';
import AuthorDetailPage from '../../views/AuthorDetail';
import Wishlist from '../../views/Wishlist';
import Cart from '../../views/Cart';
import AboutUs from '../../views/AboutUs';
import Contactus from '../../views/Contactus';
import UserDashboard from '../../views/UserDashboard';
import Tearms from '../../views/Terms';
import Error from '../../views/Error';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout header={true} footer={true} />,
    children: [
      { path: "/", element: <Home />, },
      { path: "/category", element: <Category />, },
      { path: "/author", element: <AuthorList />, },
      { path: "/book-detail", element: <BookDetailPage />, },
      { path: "/wishlist", element: <Wishlist />, },
      { path: "/cart", element: <Cart />, },
      { path: "/contact-us", element: <Contactus />, },
      { path: "/about-us", element: <AboutUs />, },
      { path: "/user-dashboard", element: <UserDashboard />, },
    ],
  },
  {
    path: "/", 
    element: <Layout header={false} footer={false} />,
    children: [
      { path: "/login", element: <Login />, },
      { path: "/register", element: <Register />, },
      { path: "/readerOnboardScreen", element: <ReaderOnboardScreen />, },
      { path: "/otp", element: <ForgotPassword />, },
      { path: "/terms", element: <Tearms />, },
      { path: "/*", element: <Error />, },
    ]
  }
]);
