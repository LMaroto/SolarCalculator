import styled from 'styled-components';

export const Container = styled.div`
  background: ;

  padding: 0px;

  @media print {
    display: none;
  }
`;

export const Content = styled.div`
  height: 50px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 17px;

  div {
    display: flex;
    align-items: center;

    strong {
      font-weight: bold;
      color: #ff7518;
    }

    button {
      display: flex;
      align-items: center;
      background: transparent;
      border: 0;
      outline: 0;
      padding: 0;
      margin-right: 5px;
    }
  }

  aside {
    display: flex;
    align-items: center;
    color: #ff7518;

    img {
      width: 90px;
      height: 80%;
    }
  }
`;
