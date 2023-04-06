import styled from "styled-components";

const Wrapper = styled.section`
  .button:hover {
    cursor: pointer;
  }
  .buttons {
    margin-top: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 90%;
  }
  .center-div {
    width: 80vw;
    max-width: 400px;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 1.5rem;
    border: 8px solid rgb(220, 220, 220);
  }
  .main-section {
    height: 100vh;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about {
    height: 25vh;
    width: 90%;
    text-align: center;
    padding: 2rem 0 2rem 0;
    border-radius: 1rem;
    line-height: 1.2rem;
    background: rgb(248, 248, 248);
  }
  .create-button {
    background: pink;
    border: none;
  }
  .demo-button {
    background: rgb(156, 214, 234);
    border: none;
  }
  .text {
    padding: 0 3rem;
    color: rgb(80, 80, 80);
    margin-top: 2rem;
    font-style: italic;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export default Wrapper;
