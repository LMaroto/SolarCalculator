import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;

  @media print {
    display: none;
  }
`;

export const Content = styled.div`
  height: 50px;
  max-width: 1100px;
  margin: 0 8rem;
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
    justify-content: space-between;
    color: #ff7518;

    a {
      display: flex;
      align-items: center;
    }

    img {
      width: 2.5rem;
      height: 80%;
    }

    strong {
      font-size: 0.9rem;
      margin-left: 0.5rem;
    }
  }
`;
