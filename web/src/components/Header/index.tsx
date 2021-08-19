import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiChevronLeft } from 'react-icons/fi';
import Logo from '../../assets/logo1.png';

import { Container, Content } from './styles';

type HeaderProps = {
  showBackButton?: boolean;
  title?: string;
};

const Header: React.FC<HeaderProps> = ({ showBackButton, title }) => {
  return (
    <Container>
      <Content>
        <div>
          {showBackButton && (
            <button type="button" onClick={() => alert('tum')}>
              <FiChevronLeft size={20} color="#ff7518" />
            </button>
          )}
          {title && (
            <Link to="/">
              <strong>{title}</strong>
            </Link>
          )}
        </div>

        <aside>
          <div>
            <a href="/">
              <img src={Logo} alt="SolarCalculator" />
              <strong>SolarCalculator</strong>
            </a>
          </div>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
