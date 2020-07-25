import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;

  span {
    font-size: 14px;
    color: #535353;
    margin-bottom: 2px;
  }

  input {
    padding: 10px;
    border: 1px solid #e5e5e5;
    background: #e5e5e5;

    border-radius: 5px;

    ${(props) => (props.focused) && css`
      border: 1px solid #ee8143;
    `}
    ${(props) => (props.filled) && css`
      border: 1px solid #ee8143;
    `}
  }

  &:disabled {
    display: none;
    visibility: hidden;
  }
`;

export const CheckBoxContainer = styled.div`
  margin-top: 10px;

  span {
    margin-left: 10px;
  }
`;
