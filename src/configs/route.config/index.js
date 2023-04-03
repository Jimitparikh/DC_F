import { createBrowserRouter } from 'react-router-dom'

import Layout from "../../components/Layout";
import Home from '../../views/Home'
import Login from '../../views/Login';
import BookList from '../../views/BookList';
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
import MyBooks from '../../views/UserDashboard/Components/MyBooks';
import MyFollowing from '../../views/UserDashboard/Components/MyFollowing';
import ManageProfile from '../../views/UserDashboard/Components/ManageProfile';
import MyWallet from '../../views/UserDashboard/Components/MyWallet';
import ManagePaymentOption from '../../views/UserDashboard/Components/ManagePaymentOption';
import ReferandEarn from '../../views/UserDashboard/Components/ReferandEarn';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout header={true} footer={true} />,
    children: [
      { path: "/", element: <Home />, },
      { path: "/BookList", element: <BookList />, },
      { path: "/authors", element: <AuthorList />, },
      { path: "/book-detail", element: <BookDetailPage />, },
      { path: "/author-detail", element: <AuthorDetailPage />, },
      { path: "/wishlist", element: <Wishlist />, },
      { path: "/cart", element: <Cart />, },
      { path: "/contact-us", element: <Contactus />, },
      { path: "/about-us", element: <AboutUs />, },
      {
        path: "/user-dashboard", element: <UserDashboard />,
        children: [
          {path: "/user-dashboard/", element:<MyBooks/> },
          {path: "/user-dashboard/MyFollowing", element:<MyFollowing/> },
          {path: "/user-dashboard/ManageProfile", element:<ManageProfile/> },
          {path: "/user-dashboard/MyWallet", element:<MyWallet/> },
          {path: "/user-dashboard/ManagePaymentOption", element:<ManagePaymentOption/> },
          {path: "/user-dashboard/ReferandEarn", element:<ReferandEarn/> },
        ]
      },
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
