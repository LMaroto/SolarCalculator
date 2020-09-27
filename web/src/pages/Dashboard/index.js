import React from 'react';

import Header from '../../components/Header';

import { Container, OptionContainer, Option } from './styles';
import { FiUsers, FiFileText, FiSettings, FiLogOut } from 'react-icons/fi';

import Swal from 'sweetalert2';

function Dashboard() {
  const checkLogout = () => {
    Swal.fire({
      title: 'Calma lá!',
      text: 'Deseja realmente sair?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, quero sair.',
    });
  };

  return (
    <>
      <Header white />
      <Container>
        <OptionContainer>
          <Option to="/customers">
            <FiUsers size={50} />
            <h2>Clientes</h2>
          </Option>
          <Option to="/reports" color={'#138dd2'}>
            <FiFileText size={50} />
            <h2>Relatório geral</h2>
          </Option>
        </OptionContainer>
        <OptionContainer>
          <Option color={'#A54AA0'}>
            <FiSettings size={50} />
            <h2>Ajustes</h2>
          </Option>
          <Option onClick={checkLogout}>
            <FiLogOut size={50} />
            <h2>Sair</h2>
          </Option>
        </OptionContainer>
      </Container>
    </>
  );
}

export default Dashboard;
