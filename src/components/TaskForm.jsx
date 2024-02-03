import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { createTask } from "../features/tasks/taskSlice";

const TaskForm = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ text }));
    setText("");
    navigate("/alltasks");
  };

  return (
    <Wrapper>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="text" style={{ fontWeight: "bolder" }}>
              Enter Task
            </label>
            <input
              type="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </Wrapper>
  );
};

export default TaskForm;

const Wrapper = styled.div`
  .form,
  .content {
    width: 40%;
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
    margin: 0 0 5px 3px;
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
