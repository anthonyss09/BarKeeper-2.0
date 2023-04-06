import styled from "styled-components";

const Wrapper = styled.nav`
  .logout {
    margin-top: -0.4rem;
    color: rgb(60, 60, 60);
    font-size: 0.9rem;
  }
  .nav-bar {
    height: 3.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgb(240, 240, 240);
    padding: 0 1rem;
    border-bottom: 1px solid rgb(220, 220, 220);
    background: white;
  }
  .nav-menu-bars:hover {
    cursor: pointer;
  }
  .nav-header {
    font-weight: bold;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    color: black;
  }
  .user-circle {
    margin-top: 0.2rem;
  }
  .user-container {
    text-align: center;
  }
  .user-container:hover {
    cursor: pointer;
  }
`;

export default Wrapper;
