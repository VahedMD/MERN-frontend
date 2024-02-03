import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, reset } from "../features/tasks/taskSlice";
import TaskItem from "./TaskItem";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const TaskList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  );
  useEffect(() => {
    if (isError) console.log(message);
    dispatch(getTasks());
    // return () => dispatch(reset());
  }, [navigate, isError, message, dispatch]);
  return isLoading ? (
    <Spinner />
  ) : (
    <Wrapper>
      <section className="content">
        {tasks.length > 0 && (
          <div className="tasks">
            {tasks.map((task) => (
              <TaskItem key={task._id} task={task} />
            ))}
          </div>
        )}
      </section>
    </Wrapper>
  );
};

export default TaskList;

const Wrapper = styled.div`
  .content {
    width: 70%;
    margin: 0 auto;
  }

  .tasks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;
