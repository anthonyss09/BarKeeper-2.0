import styled from "styled-components";

const Wrapper = styled.section`
  .arrow:hover {
    cursor: pointer;
  }
  .buttons {
    padding-left: 75%;
  }
  .button-close {
    background: lightBlue;
    color: white;
    font-weight: bold;
    border: none;
  }
  .container-title {
    text-align: center;
    background: rgb(248, 248, 248);
    color: rgb(80, 80, 80);
    padding-bottom: 0.4rem;
    display: none;
  }
  .light {
    color: rgb(200, 200, 200);
  }
  .lighter {
    color: rgb(140, 140, 140);
  }
  .main {
    min-height: 80vh;
    background: white;
  }
  .no-items {
    text-align: center;
    margin-top: 2rem;
  }
  .page-number:hover {
    cursor: pointer;
  }
  .pagination {
    text-align: center;
    width: 100vw;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    color: rgb(80, 80, 80);
    font-size: 1.1rem;
    background: rgb(248, 248, 248);
  }
  .preview-container {
    width: 100%;
  }
  .recipes-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2rem;
    margin-bottom: 0;
    padding: 0 1rem;
    min-height: 66vh;
  }
  .recipes-container-column-display {
    min-height: 70.5vh;
    display: block;
    gap: 0;
    margin: 0;
    padding: 0;
    border-top: 1px solid rgb(240, 240, 240);
  }
`;

export default Wrapper;
