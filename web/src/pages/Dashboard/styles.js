import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`

  margin: 20px auto;
  max-width: 900px;

  section{
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 20px;
    }

    div {
      display: flex;
    }

    a{
      text-decoration: none;
      height: 30px;
      padding: 0 15px;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      font-size: 13px;
      color: #fff;

      display: flex;
      align-items: center;
    }
    .print{
      background: #EE8143;

      &:hover{
        background: ${darken(0.05, '#EE8143')};
      }
    }
    .new-customer{
      background: #138DD2;
      margin: 0 0 0 15px;

      &:hover{
        background: ${darken(0.05, '#138DD2')};
      }
    }
  }
  main{

    margin: 20px auto;

    a {

      background: #f2a378;
      color: #fff;

      margin: 15px 0;
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-radius: 4px;

      strong{
        font-size: 16px;
      }

      &:hover{
        background: ${darken(0.05, '#f2a378')}
      }

      svg {
        margin-right: 10px;
      }
    }
}
`;
