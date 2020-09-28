import styled from 'styled-components';

import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  color: #fff;

  section {
    margin-top: 32px;
    position: relative;

    h1 {
      font-weight: bold;
      font-size: 28px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      font-weight: normal;
      color: #fff;

      max-width: 80%;

      text-align: justify;
    }

    button {
      position: absolute;
      top: 0;
      right: 0;
      height: 40px;
      padding: 0 20px;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      font-size: 16px;
      color: #fff;
      background: #138dd2;

      &:hover {
        background: ${darken(0.1, '#138dd2')};
      }
    }
  }
`;

export const Table = styled.table`
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
  color: black;
  thead th {
    height: 50px;
  }

  th,
  td {
    border: 1px solid #fff;
  }

  th {
    background: #fff;
  }

  th,
  td {
    padding: 10px;
  }

  td {
    text-align: center;
    background: ${lighten(0.25, '#ff7518')};
    svg {
      cursor: pointer;
    }
    svg + svg {
      margin-left: 4px;
    }
  }

  tbody tr:hover {
    background-color: #fff;
  }
`;
