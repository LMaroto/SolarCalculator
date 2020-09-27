import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;

  span {
    font-size: 14px;
    color: ${props => (props.white ? '#fff' : '#535353')};
    margin-bottom: 2px;
  }

  input {
    padding: 10px;
    border: 1px solid #e5e5e5;
    background: #e5e5e5;

    border-radius: 5px;

    height: 42px;

    ${props =>
      props.focused &&
      css`
        border: 1px solid #ff7518;
      `}
    ${props =>
      props.filled &&
      css`
        border: 1px solid #ff7518;
      `}

    ${props =>
      props.invalid &&
      css`
        border: 2px solid #eb4034;
      `}
  }
  transition: visibility 2s;

  &:disabled {
    visibility: hidden;
  }
`;

export const Error = styled.p`
  color: #eb4034;
`;
