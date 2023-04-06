import styled from "styled-components";

const Wrapper = styled.div`
  .arrow:hover {
    cursor: pointer;
  }
  .light {
    color: rgb(200, 200, 200);
  }
  .lighter {
    color: rgb(140, 140, 140);
  }
  .page-number:hover {
    cursor: pointer;
  }
  .pagination {
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
`;

export default Wrapper;
