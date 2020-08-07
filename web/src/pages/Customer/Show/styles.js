import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.main`
  margin: 20px auto;
  max-width: 900px;
`;

export const UserDetails = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
