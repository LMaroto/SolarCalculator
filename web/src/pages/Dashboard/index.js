import React from 'react';


import { FiMaximize2 } from 'react-icons/fi';
import Header from '../../components/Header';

import { Container } from './styles';

import { Link } from "react-router-dom"

function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <span>Clientes</span>
          <div>
            <Link to="/new-customer" className="print">Gerar Relatório</Link>
            <Link to="/new-customer" className="new-customer">Novo Cliente</Link>
          </div>
        </section>
        <main>
          <div id="customer">
            <strong>1 - Danifer Bunker</strong>
            <Link to="/"><FiMaximize2 color="#138DD2" /></Link>

          </div>
          <div id="customer">
            <strong>1 - Danifer Bunker</strong>
            <Link to="/"><FiMaximize2 color="#138DD2" /></Link>
          </div>
          <div id="customer">
            <strong>1 - Danifer Bunker</strong>
            <Link to="/"><FiMaximize2 color="#138DD2" /></Link>
          </div>
          <div id="customer">
            <strong>1 - Danifer Bunker</strong>
            <Link to="/"><FiMaximize2 color="#138DD2" /></Link>
          </div>
        </main>
      </Container>
    </>
  );
}

export default Dashboard;
