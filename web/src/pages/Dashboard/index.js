import React from 'react';

import { Link } from 'react-router-dom';

import { FiMaximize2 } from 'react-icons/fi';
import Header from '../../components/Header';

import { Container } from './styles';

function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <section>
          <span>Clientes</span>
          <div>
            <button type="submit" className="print">Gerar relatório</button>
            <button type="submit" className="new-customer">Novo cliente</button>
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
