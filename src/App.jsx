import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/alltasks" element={<TaskList />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
`;
