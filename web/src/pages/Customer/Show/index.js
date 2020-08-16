import React, { useState, useEffect } from 'react';
import { FiFileText, FiPlusCircle } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import {
  FaHouseDamage, FaMapMarkerAlt, FaUserCheck, FaSun, FaBolt,
} from 'react-icons/fa';
import Header from '../../../components/Header';
import Table from '../../../components/Table';
import Chart from '../../../components/Chart';


import {
  Container, Actions, RecordButton, PrintButton, UserAside, UserAnalytics, UserInfo, UserStats,
} from './styles';
import api from '../../../services/api';

const Show = () => {
  const [user, setUser] = useState([]);
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
          <RecordButton to="#">
            <FiPlusCircle size={20} color="#fff" />
            Novo registro
          </RecordButton>
          <PrintButton to="#">
            <FiFileText size={20} color="#fff" />
            Gerar relatório
          </PrintButton>

        </Actions>
        <section>
          <UserAside>
            <FaHouseDamage size={150} color="#ccc" />
            <UserInfo>
              <span>
                Código:
                {' '}
                {user.id}
              </span>
              <strong>{user.name}</strong>
            </UserInfo>
            <UserStats>
              <li>
                <FaMapMarkerAlt size={16} />
                <span>{user.address}</span>
              </li>
              <li>
                <FaSun size={16} />
                <span>
                  Potência de usina:
                  {' '}
                  <br />
                  <strong>
                    {user.kWp}
                    {' '}
                    kWp
                  </strong>

                </span>
              </li>
              <li>
                <FaBolt size={16} />
                <span>
                  Produção contratual:
                  {' '}
                  <br />
                  <strong>
                    {user.expected}
                    {' '}
                    kWh
                  </strong>

                </span>
              </li>
              <li>
                <FaUserCheck size={16} />
                <span>Possui credenciais</span>
              </li>
            </UserStats>
          </UserAside>
          <UserAnalytics>
            <h1>Resumo da produção</h1>
            <Table />
            <h1>Produção nos últimos 12 meses</h1>
            <Chart />
          </UserAnalytics>
        </section>
      </Container>
    </>
  );
};

export default Show;
