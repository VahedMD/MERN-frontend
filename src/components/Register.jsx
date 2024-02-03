import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";
import Spinner from "./Spinner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate("/");
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords are different");
    } else {
      const userData = { name, email, password };
      dispatch(register(userData));
    }
  };
  return isLoading ? (
    <Spinner />
  ) : (
    <Wrapper>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 50px;
  padding: 20px 0px;
  p {
    color: #828282;
  }

  .form {
    width: 30%;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 10px;
  }
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin-bottom: 10px;
    font-family: inherit;
  }

  .form-group label {
    text-align: left;
    display: block;
    margin: 5px 0 0px 3px;
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

  .btn-block {
    width: 100%;
    margin-bottom: 20px;
  }

  .btn:hover {
    transform: scale(0.98);
  }
`;
