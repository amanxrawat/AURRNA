import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Loader from "./components/layout/Loader";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";

const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Profile = lazy(() => import("./pages/Profile"))
const Search = lazy(() => import("./pages/Search"))
const Favourite = lazy(() => import("./pages/Favourite"))
const Cart = lazy(() => import("./pages/Cart"))

const user = false;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search/:filter?&&:searched?" element={<Search />} />
          <Route path="/cart" element={<Cart />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
};

export default App;
