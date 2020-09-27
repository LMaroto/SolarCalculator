import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

import { FiChevronLeft } from 'react-icons/fi';
import { Container, Content } from './styles';
import Logo from '../../assets/logo-colorida.png';

function Header({ showBackButton, large, title }) {
  const history = useHistory();
  return (
    <Container>
      <Content large={large}>
        <div>
          {showBackButton && (
            <button type="button" onClick={() => history.goBack()}>
              <FiChevronLeft size={20} color={'#ff7518'} />
            </button>
          )}
          <Link to="/">
            <strong>{title}</strong>
          </Link>
        </div>

        <aside>
          <div>
            <a href="/">
              <img src={Logo} alt="SolarCalculator" />
            </a>
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
