import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import { FiChevronLeft } from 'react-icons/fi';
import { Container, Content } from './styles';
import Logo from '../../assets/logo.webp';

function Header({ showBackButton, large }) {
  const history = useHistory();
  return (
    <Container>
      <Content large={large}>
        <div>
          {showBackButton && (
            <button type="button" onClick={() => history.goBack()}>
              <FiChevronLeft size={20} color="#fff" />
            </button>
          )}
          <Link to="/">
            <strong>Dashboard</strong>
          </Link>
        </div>

        <aside>
          <div>
            <img src={Logo} alt="SolarCalculator" />
          </div>
        </aside>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  showBackButton: PropTypes.bool,
  large: PropTypes.bool,
};

Header.defaultProps = {
  showBackButton: false,
  large: false,
};

export default Header;
