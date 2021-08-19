import React from 'react';

import { FiUsers, FiFileText } from 'react-icons/fi';

import Header from '../../components/Header';

import { Container, OptionContainer, Option } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <OptionContainer>
          <Option to="/customers">
            <FiUsers size={50} />
            <h2>Clientes</h2>
          </Option>
          <Option to="/" color="#7159c1">
            <FiFileText size={50} />
          </Option>
        </OptionContainer>
      </Container>
    </>
  );
};

export default Dashboard;
