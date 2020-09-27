import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  section {
    margin-top: 32px;
    position: relative;

    h1 {
      font-weight: normal;
      font-size: 28px;
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
      font-weight: normal;
      color: #666;

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

  thead th {
    height: 50px;
  }

  th,
  td {
    border: 1px solid #ee8143;
  }

  th {
    background: #ee8143;
  }

  th,
  td {
    padding: 10px;
  }

  td {
    text-align: center;

    svg {
      cursor: pointer;
    }
    svg + svg {
      margin-left: 4px;
    }
  }

  tbody tr:hover {
    background-color: #f5f5f5;
  }
`;
