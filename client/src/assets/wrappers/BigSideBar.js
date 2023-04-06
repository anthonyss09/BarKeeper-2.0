import styled from "styled-components";

const Wrapper = styled.aside`
  position: absolute;
  top: 2.8rem;
  left: 1rem;
  z-index: 4;

  .item {
    margin: 0.6rem;
    color: rgb(60, 60, 60);
    background: rgb(240, 240, 240);
    text-align: center;
    padding: 0.6rem;
  }
  .item:hover {
    cursor: pointer;
  }
  .items-container {
    width: 90%;
  }
  .link {
    color: rgb(60, 60, 60);
  }
  .side-bar {
    z-index: 5;
    width: 93vw;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 0.5rem;
    border: 2px solid rgb(220, 220, 220);
    box-shadow: 2px 2px 4px grey;
  }
`;

export default Wrapper;
