import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 17px;
  background-color: #ebecf0;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  width: 40vh;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 1rem;
    color: #5e6c84;
  }

  h1 {
    margin-bottom: 15px;
  }

  .footer {
    display: flex;
    justify-content: start;
    width: 100%;
    margin-top: 200px;
    cursor: pointer;
    transition: opacity 0.7s;
  }

  .footer:hover {
    opacity: 0.5;
  }
`;
