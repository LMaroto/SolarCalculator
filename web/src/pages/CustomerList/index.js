import React, { useState, useEffect } from 'react';

import { FiUserPlus, FiMaximize2 } from 'react-icons/fi';
import Header from '../../components/Header';

import {
  Container,
  Content,
  Actions,
  NewCustomerBtn,
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
      <Header showBackButton title="Dashboard" />
      <Container>
        <Content>
          <Actions>
            <span>Listagem de Clientes</span>
            <div>
              <NewCustomerBtn to="/new-customer">
                <FiUserPlus size={20} />
                Novo Cliente
              </NewCustomerBtn>
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
        </Content>
      </Container>
    </>
  );
}

export default CustomerList;
