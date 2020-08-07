import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 20px auto;
  max-width: 900px;

  section{
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
      font-size: 20px;
    }

    button {
      height: 30px;
      padding: 0 15px;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      font-size: 13px;
      color: #fff;
      background: #6AAA7C;

      &:hover{
        background: ${darken(0.05, '#6AAA7C')};
      }
    }
  }
`;
