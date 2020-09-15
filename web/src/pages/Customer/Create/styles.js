import styled from 'styled-components';
import { darken } from 'polished';

import { MdDelete } from 'react-icons/md';

export const Container = styled.div`
  margin: 20px auto;
  max-width: 900px;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
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
      background: #6aaa7c;

      &:hover {
        background: ${darken(0.05, '#6AAA7C')};
      }
    }
  }
`;

export const DeviceInput = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  + div {
    margin-top: 2px;
  }

  > div {
    margin-right: 5px;
  }
`;

export const DevicesContainer = styled.div`
  margin-top: 10px;
  > span {
    font-size: 16px;
    color: #535353;
    margin-bottom: 2px;
    font-weight: bold;
  }

  > div {
    margin-left: 16px;
  }

  button {
    margin-top: 8px;
    padding: 8px 16px;
  }
`;

export const RemoveDeviceIcon = styled(MdDelete)`
  color: #535353;
  margin-top: 22px;
`;
