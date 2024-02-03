import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const logoutFn = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <Wrapper>
      <header className="header">
        <div className="logo">
          <Link to="/">Task Creator</Link>
        </div>
        <ul>
          {user ? (
            <li>
              <button className="btn" onClick={logoutFn}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <FaUser /> Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background: #d1d5db;
  margin: 0 260px 60px 260px;
  padding: 0 50px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #e6e6e6;

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    li {
      line-height: 2.2;
      margin-left: 50px;
    }

    a {
      display: flex;
      align-items: center;
    }
    a:hover {
      color: #777;
    }
  }

  .logo {
  }

  .btn {
    padding: 10px 20px;
    border: 1px solid #000;
    border-radius: 5px;
    background: #000;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    appearance: button;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn svg {
    margin-right: 8px;
  }

  .btn-reverse {
    background: #fff;
    color: #000;
  }

  .btn:hover {
    transform: scale(0.98);
  }
`;
