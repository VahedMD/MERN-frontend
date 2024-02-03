import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TaskForm from "./TaskForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  return (
    <Wrapper>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <div className="all-tasks">
          <button className="btn" onClick={() => navigate("/alltasks")}>
            Check Tasks
          </button>
        </div>
      </section>
      <TaskForm />
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  .heading {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 50px;
    padding: 0 20px;
  }

  .heading p {
    color: #828282;
  }

  .all-tasks {
    display: flex;
    justify-content: center;
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
