import React from 'react';

import { FiUsers, FiFileText, FiSettings, FiLogOut } from 'react-icons/fi';

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
            <h3>Clientes</h3>
          </Option>
          <Option to="/" color="#138DD2">
            <FiFileText size={50} />
            <h3>Relatório Geral</h3>
          </Option>
        </OptionContainer>
        <OptionContainer>
          <Option to="/" color="#7159c1">
            <FiSettings size={50} />
            <h3>Ajustes</h3>
          </Option>
          <Option to="/">
            <FiLogOut size={50} />
            <h3>Sair</h3>
          </Option>
        </OptionContainer>
      </Container>
    </>
  );
};

export default Dashboard;
