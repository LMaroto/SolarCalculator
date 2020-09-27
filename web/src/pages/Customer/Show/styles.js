import styled, { css, keyframes } from 'styled-components';

import { Link } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.main`
  margin: 0 auto;
  padding: 30px;
  max-width: 100vw;

  background: #ff7518;

  section {
    display: flex;
    flex-direction: row;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const RecordButton = styled.button`
  text-decoration: none;
  height: 30px;
  width: fit-content;
  padding: 0 15px;
  border: 0;
  border-radius: 4px;
  margin-right: 5px;
  font-weight: bold;
  font-size: 13px;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #138dd2;

  &:hover {
    background: ${darken(0.05, '#138DD2')};
  }

  svg {
    margin-right: 5px;
  }
`;
export const PrintButton = styled(Link)`
  text-decoration: none;
  height: 30px;
  width: fit-content;
  padding: 0 15px;

  border: 0;
  border-radius: 4px;
  font-weight: bold;
  font-size: 13px;
  color: #ff7518;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;

  &:hover {
    background: ${darken(0.05, '#fff')};
  }

  svg {
    margin-right: 5px;
  }
`;

const height = css`
  min-height: 700px;
  height: 80vh;

  border-radius: 10px;

  box-shadow: 1px 5px 10px 0px rgba(0, 0, 0, 0.3);
`;

export const UserAside = styled.aside`
  ${height}

  background: #fff;
  width: 25%;
  margin: 15px 10px 20px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    padding: 10px;
    border: 5px solid #eee;
    border-radius: 50%;

    margin-top: 24px;
  }
`;

export const UserInfo = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    margin-top: 8px;
    font-size: 12px;
  }

  strong {
    color: #363636;
    font-size: 24px;

    margin: 4px 24px 0px;
    text-align: center;
  }
`;

export const UserStats = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    margin: 0 16px;

    border: 1px solid #eee;
    padding: 8px 16px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    svg {
      color: #565656;
      margin-left: 2px;
    }

    span {
      flex: 1;
      margin-left: 12px;
      text-align: center;
    }

    & + li {
      margin-top: 5px;
    }
  }
`;

export const UserAnalytics = styled.div`
  ${height}
  background: #fff;
  width: 75%;
  margin: 15px 0 20px 20px;
  padding-top: 15px;

  overflow-y: scroll;

  hr {
    border-top: 1px solid #ff7518;
    width: 70%;
    margin: 10px auto;
  }
  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: relative;
    padding: 0 20px;
    h1 {
      margin: 20px 0 10px 0;
    }
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const animation = keyframes`
  from {
    opacity: 0.5;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContent = styled.div`
  min-width: 380px;
  width: 30%;

  background: #fff;
  padding: 30px;

  border-radius: 4px;
  box-shadow: 2px 10px 10px 3px rgba(0, 0, 0, 0.5);

  animation: ${animation} 400ms;

  position: relative;

  > button.close {
    position: absolute;
    top: -15px;
    right: -15px;

    width: 40px;
    height: 40px;
    border-radius: 50%;

    border: none;
    background: #ff6b6b;
    color: #fff;

    box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.5);

    cursor: pointer;

    &:hover {
      background: ${props => darken(0.3, '#ff6b6b')};
    }
  }

  h3 {
    font-size: 20px;
    position: relative;
    margin-bottom: 10px;
  }

  h3::after {
    content: '';
    position: absolute;
    width: 100%;
    margin-top: 5px;
    height: 1px;
    background: #ff7518;
    top: 100%;
    left: 0;
  }
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;

  div.date {
    display: flex;
    flex-direction: row;

    label {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-top: 15px;

      font-size: 14px;
      font-weight: bold;

      + label {
        margin-left: 10px;
      }
    }
  }
  input,
  select {
    margin-top: 4px;
    padding: 5px 10px;
  }

  > label {
    font-weight: bold;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
  }

  input[type='submit'] {
    margin-top: 15px;
    padding: 10px;
    background: #ff7518;
    border-radius: 4px;
    border: none;
    color: #fff;
    font-weight: bold;

    box-shadow: 0px 2px 5px 0 rgba(0, 0, 0, 0.5);

    &:hover {
      background: ${darken(0.05, '#ff7518')};
    }
  }
`;
