import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 20px auto;
  max-width: 900px;

  main {
    margin: 20px auto;
  }
`;

export const Actions = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 20px;
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
  color: #fff;

  background: #ee8143;

  svg {
    margin-right: 5px;
  }

  &:hover {
    background: ${darken(0.05, '#EE8143')};
  }
`;

export const UserElement = styled(Link)`
  background: #f2a378;
  color: #fff;

  margin: 15px 0;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-radius: 4px;

  strong {
    font-size: 16px;
  }

  svg {
    margin-right: 10px;
  }

  &:hover {
    background: ${darken(0.05, '#F2A378')};
  }
`;
