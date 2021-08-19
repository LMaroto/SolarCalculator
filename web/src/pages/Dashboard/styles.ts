import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: calc(100vh - 1rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 2rem;
  align-items: center;
  background: #ff7518;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  margin-top: 0.5rem;
  background: none;
`;

export const Option = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.2rem;
  width: 11rem;
  height: 11rem;
  margin: 0.5rem;
  padding: 0.3rem;

  background: ${props => (props.color ? props.color : 'white')};
  color: ${props => (props.color ? '#fff' : '#ff7518')};
  transition: transform 0.2s;

  svg {
    margin-bottom: 1.2rem;
  }
  &:hover {
    transform: scale(1.03);
  }
`;
