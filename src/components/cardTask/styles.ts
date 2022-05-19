import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  color: #172b4d;
  margin: 5px;
  margin-bottom: 0px;
  .card-body {
    display: flex;
    align-items: center;
  }
  .card-title {
    font-weight: 900;
  }
  .form-check-input {
    cursor: pointer;
    height: 25px;
    width: 25px;
  }
  .form-check-input:focus {
    box-shadow: none;
  }
`;
