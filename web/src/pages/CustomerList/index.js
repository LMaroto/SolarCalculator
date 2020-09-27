import React, { useState, useEffect } from 'react';

import { FiUserPlus, FiFileText, FiMaximize2 } from 'react-icons/fi';
import Header from '../../components/Header';

import {
  Container,
  Actions,
  NewCustomerBtn,
  NewReportBtn,
  UserElement,
} from './styles';

import api from '../../services/api';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api.get('customers').then(response => {
      setCustomers(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Actions>
          <span>Clientes</span>
          <div>
            <NewCustomerBtn to="/new-customer">
              <FiUserPlus size={20} color="#fff" />
              Novo Cliente
            </NewCustomerBtn>
            <NewReportBtn to="/reports">
              <FiFileText size={20} color="#fff" />
              Gerar Relatório
            </NewReportBtn>
          </div>
        </Actions>
        <main>
          {customers.map(customer => (
            <UserElement to={`/customer/${customer.id}`} key={customer.id}>
              <strong>{`${customer.registration_number} - ${customer.name}`}</strong>
              <FiMaximize2 color="#fff" />
            </UserElement>
          ))}
        </main>
      </Container>
    </>
  );
}

export default CustomerList;
