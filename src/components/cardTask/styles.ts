import styled from "styled-components";

type ContainerProps = {
  check: boolean;
};

export const Container = styled.div(
  ({ check }: ContainerProps) =>
    `
  cursor: pointer;
  color: #172b4d;
  margin-bottom: 10px;
  width: 100%;
  .card-body {
    display: flex;
    align-items: center;
    text-decoration: ${check ? "line-through" : "initial"}
    padding: 0;
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

  .contentCard {
    cursor: pointer;
    width: 100%;
  }

  .changeDate{
    display: flex;
    justify-content: start;
    margin: 10px;

    h2{
      margin: 0;
      margin-left: 45px;
      text-decoration: ${check ? "line-through" : "initial"}
    }
  }
`
);
