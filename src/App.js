import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./scss/varibles.scss";
import "./scss/style.scss";
import "./scss/common.scss";
import "./scss/modal.scss";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Category from "./pages/Category";
import AuthorList from "./pages/AuthorList";
import BookDetailPage from "./pages/BookDetailPage";
import AuthorDetailPage from "./pages/AuthorDetailPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ReaderOnboardScreen from "./pages/ReaderOnboardScreen";
import ForgotPassword from "./pages/ForgotPassword";
import RegisterAsAuthor from "./pages/RegisterAsAuthor";
import AffiliateAccountInfo from "./pages/AffiliateAccountInfo";
import Error from "./pages/Error";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Contactus from "./pages/Contactus";
import Tearms from "./pages/Terms";
import AboutUs from "./pages/AboutUs";
import Notification from "./pages/Notification";
import UserDashboard from "./pages/UserDashboard";
import AuthorsDashboard from "./pages/AuthorsDashboard";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout  header={true} footer={true} />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/author" element={<AuthorList />} />
          <Route path="/book-detail" element={<BookDetailPage />} />
          <Route path="/author-detail" element={<AuthorDetailPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Route>
        <Route element={<Layout header={false} footer={false}/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/terms" element={<Tearms />} />
          <Route path="/register" element={<Register />} />
          <Route path="/readerOnboardScreen" element={<ReaderOnboardScreen />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/registerAsAuthor" element={<RegisterAsAuthor />} />
          <Route path="/affiliateAccountInfo" element={<AffiliateAccountInfo />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/authors-dashboard" element={<AuthorsDashboard />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
