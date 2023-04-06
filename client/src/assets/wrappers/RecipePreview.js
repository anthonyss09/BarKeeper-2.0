import styled from "styled-components";

const Wrapper = styled.aside`
  .container {
    position: relative;
  }
  .dots {
    color: rgb(60, 60, 60);
  }
  .dots:hover {
    cursor: pointer;
  }
  .dots-column-display {
    margin-right: 0.5rem;
  }
  .icon-container {
    padding: 0.4rem 0;
    background: rgb(156, 214, 234);
  }
  .icon-container-column-display {
    width: 8rem;
  }
  .name-column-display {
    height: 100%;
    width: 40%;
    font-size: 0.8rem;
    font-weight: bold;
    color: rgb(60, 60, 60);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.1rem;
  }
  .options-container {
    z-index: 5;
    background; white;
  }
  .recipe {
    height: 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 0.2rem;
    margin-right: 0;
    
  }
  .recipe-column-display {
    margin: 0;
    width: 100%;
    height: 100%;
    display: block;
    background: white;
    display: flex;
  }
  .recipe-card {
    width: 80px;
    font-size: 0.6rem;
    text-align: center;
    border: 2px solid rgb(240, 240, 240);
  }
  .recipe-card-column-display {
    border: none;
    border-bottom: 1px solid rgb(240, 240, 240);
    width: 100%;
    height: 4.6rem;
    display: flex;
  }
  .ingredients {
    display: none;
  }
 
  .ingredients-column-display {
     height: 100%;
    width: 100%;
    display: flex;
    gap: 0.4rem;
    font-size: 0.8rem;
    margin-right: 2rem;
    color: rgb(100, 100, 100);
    display: grid;
    place-items: center;
  }
  
`;

export default Wrapper;
