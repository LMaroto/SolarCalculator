import React, { useState, useEffect } from 'react';
import { FiPrinter } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import {
  FaHouseDamage, FaLocationArrow, FaCheckDouble, FaUserCheck,
} from 'react-icons/fa';
import Header from '../../../components/Header';

import {
  Container, Actions, PrintButton, UserAside, UserAnalytics, UserInfo, UserStats,
} from './styles';
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
      <Header showBackButton large />

      <Container>
        <Actions>
          <PrintButton to="#">
            <FiPrinter size={20} color="#fff" />
            Imprimir
          </PrintButton>
        </Actions>
        <section>
          <UserAside>
            <FaHouseDamage size={150} color="#ccc" />
            <UserInfo>
              <span>Código: 5</span>
              <strong>Leonardo Henrique de Braz</strong>
            </UserInfo>
            <UserStats>
              <li>
                <FaLocationArrow size={16} />
                <span>Rua Cristiano de Souza, 14, Centro, Lavras, MG</span>
              </li>
              <li>
                <FaCheckDouble size={16} />
                <span>Produção esperada: 200kWp</span>
              </li>
              <li>
                <FaUserCheck size={16} />
                <span>Possui credenciais</span>
              </li>
            </UserStats>
          </UserAside>
          <UserAnalytics>asdf</UserAnalytics>
        </section>
      </Container>
    </>
  );
};

export default Show;
