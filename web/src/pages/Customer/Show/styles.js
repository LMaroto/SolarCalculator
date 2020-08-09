import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.main`
  margin: 20px auto;
  max-width: 1100px;

  section {
    display: flex;
    flex-direction: row;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PrintButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
  height: 50px;
  width: 150px;
  padding: 0 15px;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  font-size: 13px;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #EE8143;

  &:hover{
    background: ${darken(0.05, '#EE8143')};
  }

  svg {
    margin-right: 15px;
  }
`;

const height = css`
  min-height: 700px;
  height: 75vh;

  margin: 10px;
  border-radius: 10px;

  box-shadow: 1px 5px 10px 0px rgba(0,0,0,0.5);
`;

export const UserAside = styled.aside`
  ${height}

  background: #fff;
  width: 25%;

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
      text-align: center;
      flex: 1;
      height: 100%;
      margin: auto 0;
      margin-left: 12px;
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

`;
