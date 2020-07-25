import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/"><strong>Dashboard</strong></Link>
        </nav>

        <aside>
          <div>
            <strong>SolarCalculator</strong>
          </div>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
