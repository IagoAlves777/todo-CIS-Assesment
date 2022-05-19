import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  background-color: #ebecf0;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;

  h2 {
    font-size: 1rem;
    color: #5e6c84;
  }

  .footer {
    display: flex;
    justify-content: start;
    width: 100%;
    padding: 0px 7px;
    padding-top: 15px;
    cursor: pointer;
    transition: opacity 0.7s;
  }

  .footer:hover {
    opacity: 0.5;
  }
`;
