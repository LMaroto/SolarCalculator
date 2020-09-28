import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  background: #ff7518;
  max-width: 100vw;
  height: calc(100vh-50px);
  padding-top: 20px;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`;

export const Actions = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }

  div {
    display: flex;
  }
`;

export const NewCustomerBtn = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  height: 30px;
  margin-right: 5px;
  padding: 0 15px;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  font-size: 13px;
  color: #fff;

  background: #138dd2;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${darken(0.05, '#138DD2')};
  }
`;

export const NewReportBtn = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
  height: 30px;
  padding: 0 15px;
  border: 0;
  border-radius: 4px;
  font-weight: bold;
  font-size: 13px;
  color: #ff7518;

  background: #fff;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${darken(0.05, '#fff')};
  }
`;

export const UserContainer = styled.main`
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const UserElement = styled(Link)`
  position: relative;

  display: grid;
  grid-template-rows: 2fr 1fr;

  text-align: center;

  width: 200px;
  height: 200px;
  padding: 8px 16px;

  background: #803a0b;
  color: #fff;
  border-radius: 20px;
  box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    background: ${darken(0.05, '#803A0B')};
  }

  img {
    opacity: 0.15;
    width: 100px;
    height: 100px;

    position: absolute;
    left: 50%;
    margin-left: -50px;

    top: 50%;
    margin-top: -50px;

    color: #fff;
  }

  > span {
    display: inline-block;
    text-align: center;
    margin-top: 10px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  color: #fff;
  margin: auto 0;

  span {
    font-size: 12px;
  }

  strong {
    font-size: 16px;
    text-align: center;
  }
`;

export const Devices = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  span {
    display: inline-block;
    padding: 4px 8px;
    font-size: 11px;
    font-weight: bold;
    background: #ab0aff;

    border-radius: 10px;

    margin: 4px;
  }
`;
