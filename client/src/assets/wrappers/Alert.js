import styled from "styled-components";

const Wrapper = styled.aside`
  position: absolute;
  .alert {
    min-height: 2rem;
    width: 300px;
    display: grid;
    place-items: center;
    text-align: center;
    color: rgb(80, 80, 80);
    padding: 0.6rem;
    font-weight: bold;
    border-radius: 0.5rem;
    border: 2px solid rgb(240, 240, 240);
    box-shadow: 1px 1px 2px grey;
    background: white;
  }
`;

export default Wrapper;
