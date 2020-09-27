import styled from 'styled-components';

import { Form as Unform } from '@unform/web';
import { shade } from 'polished';

export const Container = styled.div`
  h3 {
    font-size: 20px;
    position: relative;
    margin-bottom: 10px;
  }

  h3::after {
    content: '';
    position: absolute;
    width: 100%;
    margin-top: 5px;
    height: 1px; // suit your need
    background: #ee8143; // suit your need
    top: 100%;
    left: 0;
  }
`;

export const Form = styled(Unform)`
  margin-top: 20px;

  button {
    margin-top: 20px;
    width: 100%;
    padding: 10px;

    border: 0;
    outline: 0;

    background: #ee8143;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;

    &:hover {
      background: ${shade(0.1, '#ee8143')};
    }
  }

  fieldset {
    border: none;
    margin-top: 16px;
    > span {
      color: #535353;
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

export const VerticalInputs = styled.div`
  display: flex;

  > div {
    max-width: calc((550px - 40px - 20px) / 3);
  }

  div + div {
    margin-left: 10px;
  }
`;
