import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => (!props.white ? '#fff' : '#ff7518')};

  padding: 0px;

  @media print {
    display: none;
  }
`;

export const Content = styled.div`
  height: 50px;
  max-width: ${props => (props.large ? 1100 : 900)}px;
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
      color: ${props => (!props.white ? '#ff7518' : '#fff')};
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
    color: ${props => (!props.white ? '#ff7518' : '#fff')};

    img {
      width: 100px;
      height: 80%;
    }
  }
`;
