import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Container, Content } from './styles';

import { FiChevronLeft } from "react-icons/fi";

function Header({ showBackButton }) {

  const history = useHistory();
  return (
    <Container>
      <Content>
        <nav>
          {showBackButton && <button onClick={() => history.goBack()}><FiChevronLeft size={20} color="#fff" /></button>}
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

Header.propTypes = {
  showBackButton: PropTypes.bool,
}

Header.defaultValue = {
  showBackButton: false,
}

export default Header;
