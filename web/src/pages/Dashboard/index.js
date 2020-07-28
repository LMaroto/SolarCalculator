import React, { useState, useEffect } from 'react';

import { FiMaximize2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import { Container } from './styles';

import api from '../../services/api';

function Dashboard() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api
      .get('customers')
      .then((response) => {
        setCustomers(response.data);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <section>
          <span>Clientes</span>
          <div>
            <Link to="/" className="print">Gerar Relatório</Link>
            <Link to="/new-customer" className="new-customer">Novo Cliente</Link>
          </div>
        </section>
        <main>
          {customers.map((customer) => (

            <div key={customer.id}>
              <strong>
                {customer.id}
                {' '}
                -
                {' '}
                {customer.name}
              </strong>
              <Link to="/"><FiMaximize2 color="#138DD2" /></Link>

            </div>
          ))}
        </main>
      </Container>
    </>
  );
}

export default Dashboard;
