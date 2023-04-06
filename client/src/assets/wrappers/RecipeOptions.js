import styled from "styled-components";

const Wrapper = styled.aside`
  .options {
    min-width: 2rem;
    background: white;
    border-radius: 0.3rem;
    border: 2px solid rgb(240, 240, 240);
    box-shadow: 1px 1px 2px grey;
    color: rgb(60, 60, 60);
    font-size: 0.8rem;
    padding: 0.2rem 0.8rem;
    position: absolute;
    bottom: 0rem;
    right: 1.25rem;
    display: grid;
    place-items: center;
  }
  .options-column-display {
    min-width: 3rem;
    right: 1.65rem;
    bottom: 1.3rem;
  }
  .options:hover {
    cursor: pointer;
    background: rgb(240, 240, 240);
  }
`;

export default Wrapper;
