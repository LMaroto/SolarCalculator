import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 40px;
  align-items: center;
  background: #ff7518;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin-top: 10px;
  background: none;
`;

export const Option = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  width: 200px;
  height: 200px;
  margin: 10px 10px;
  padding: 30px;
  background: ${props => (props.color ? props.color : 'white')};
  color: ${props => (props.color ? '#fff' : '#ff7518')};
  transition: transform 0.2s;
  svg {
    margin-bottom: 20px;
  }
  &:hover {
    transform: scale(1.03);
  }
`;
