import React, { useState, useEffect } from 'react';
import { FiPrinter } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header';

import { Container, UserDetails, PrintButton } from './styles';
import api from '../../../services/api';

const Show = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/customers/${id}`);
      setUser(response.data);
    }

    loadUser();
  }, [id]);

  return (
    <>
      <Header showBackButton />
      <Container>
        {user
          && (
            <UserDetails>
              <div>
                <h3>{user.name}</h3>
              </div>

              <PrintButton to="#">
                <FiPrinter size={20} color="#fff" />
                Imprimir
              </PrintButton>
            </UserDetails>
          )}
      </Container>
    </>
  );
};

export default Show;
