import styled from 'styled-components';

export const Container = styled.div`

  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2000;
  display: flex;
  justify-content: center;

`;

export const Content = styled.div`

  background: white;
  width: 60%;
  min-width: 300px;
  padding: 40px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 0 0 10px;

`;
