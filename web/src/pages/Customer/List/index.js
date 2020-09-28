import React, { useState, useEffect } from 'react';

import { FiUserPlus } from 'react-icons/fi';
import Header from '../../../components/Header';

import {
  Container,
  Content,
  Actions,
  NewCustomerBtn,
  UserContainer,
  UserElement,
  UserInfo,
  Devices,
} from './styles';

import energyIcon from '../../../assets/energy.png';

import api from '../../../services/api';

function CustomerList() {
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setLoading(true);
    api.get('customers').then(response => {
      console.log(response.data);
      setCustomers(response.data);
      setLoading(false);
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
          {loading ? (
            <span>Carregando...</span>
          ) : (
            <UserContainer>
              {customers.map(customer => (
                <UserElement to={`/customer/${customer.id}`} key={customer.id}>
                  <UserInfo>
                    <span>{customer.registration_number}</span>
                    <strong>{customer.name}</strong>
                  </UserInfo>
                  <div>
                    <span>
                      {customer.city} - {customer.uf}
                    </span>

                    <img src={energyIcon} />

                    <Devices>
                      {customer.devices.map(device => (
                        <span key={device.id}>{device.name}</span>
                      ))}
                    </Devices>
                  </div>
                </UserElement>
              ))}
            </UserContainer>
          )}
        </Content>
      </Container>
    </>
  );
}

export default CustomerList;
