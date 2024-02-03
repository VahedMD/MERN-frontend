import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

import styled from "styled-components";
const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div>{new Date(task.createdAt).toLocaleString("en-US")}</div>
      <h2>{task.text}</h2>
      <button onClick={() => dispatch(deleteTask(task._id))} className="close">
        X
      </button>
    </Wrapper>
  );
};

export default TaskItem;

const Wrapper = styled.div`
  background-color: #f4f4f4;
  margin: 10px 0;
  padding: 20px 0 10px;
  position: relative;

  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
    border: none;
    background: none;
  }
`;
