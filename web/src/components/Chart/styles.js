import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;

  @media (print) {
    display: unset;
  }
`;
export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
