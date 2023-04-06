import styled from "styled-components";

const Wrapper = styled.section`
  .back-arrow {
    width: min-content;
    top: 4.8rem;
    left: 3rem;
    position: absolute;
    border-radius: 0.5rem;
    color: rgb(60, 60, 60);
  }
  .header {
    text-align: center;
    margin-right: 0.6rem;
    margin-bottom: 1rem;
    font-size: 1.8rem;
    background: rgb(248, 248, 248);
    padding: 2.2rem 0;
    width: 78%;
    border-radius: 1rem;
    // border-top: 10px solid rgb(156, 214, 234);
  }
  .container {
    // margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    padding-top: 3.2rem;
    background: white;
  }
  .create-button {
    margin-top: 2rem;
    width: 80%;
    opacity: 0.7;
    background: pink;
    border: none;
    margin-bottom: 1rem;
  }
  .create-label {
    margin-bottom: 0.4rem;
  }

  .create-text-row {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  .create-form {
    background: white;
    border: 5px solid black;
    border: 8px solid rgb(220, 220, 220);
    border-radius: 1.5rem;
    width: 80vw;
    padding: 1rem 0;
  }
  .icon {
    margin: 0.4rem;
  }
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .register-button {
    margin: 0;
    margin-bottom: 1rem;
    color: black;
  }
  .register-link {
    color: rgb(156, 214, 234);
    font-weight: bold;
  }
  .text-area {
    background: rgb(244, 244, 244);
    width: 98%;
    border: none;
    padding: 0.4rem 0.8rem;
    width: 90.5%;
  }
`;

export default Wrapper;
