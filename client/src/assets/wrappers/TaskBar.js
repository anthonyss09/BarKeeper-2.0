import styled from "styled-components";

const Wrapper = styled.aside`
  .create-link {
    padding: 0.4rem 0.6rem;
    margin: 0.4rem 0;
    background: pink;
    font-size: 0.8rem;
    border-radius: 0.4rem;
  }
  .layout-icons {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: black;
    position: relative;
  }
  .search-input {
    border: 2px solid rgb(120, 120, 120);
    border-radius: 1rem;
    padding: 0.3rem;
    text-align: center;
  }
  .search-line {
    text-align: center;
  }
  .sort-bar-container {
    position: absolute;
    top: 1.2rem;
    left: 3.4rem;
    z-index: 3;
  }
  .task-bar {
    padding: 1.8rem 1rem 0.2rem 1rem;
    background: rgb(248, 248, 248);
  }
  .task-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Wrapper;
