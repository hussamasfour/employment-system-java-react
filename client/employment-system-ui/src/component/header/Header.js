import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light  bg-light shadow-md border-bottom border-warning mb-5 text-dark">
      <div className="container-fluid">
        <h5 className="navbar-brand ">Employees Mangement</h5>

        {isLoggedIn ? (
          <span
            className="p-3 text-danger"
            style={{ cursor: "pointer" }}
            onClick={handleLogout}
          >
            Logout
          </span>
        ) : (
          <div>
            <span className="p-3">
              <Link
                to="/signup"
                style={{ textDecoration: "none" }}
                className="text-dark"
              >
                Sign Up
              </Link>
            </span>
            <span className="p-3">
              <Link
                to="/login"
                style={{ textDecoration: "none" }}
                className="text-dark  "
              >
                Log In
              </Link>
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
