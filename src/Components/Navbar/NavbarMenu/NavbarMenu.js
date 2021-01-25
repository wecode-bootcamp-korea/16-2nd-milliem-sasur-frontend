import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NAVBAR_DATA } from '../data/NavbarData';
import theme, { flexDefault } from '../../../Styles/Theme';

const NavbarMenu = () => {
  return (
    <List>
      {NAVBAR_DATA.map((data) => {
        return (
          <li>
            <Link to='/'>{data}</Link>
          </li>
        );
      })}
    </List>
  );
};

export default NavbarMenu;

const List = styled.ul`
  ${flexDefault};
  li {
    margin: 0 25px;

    a {
      font-size: ${theme.largeFontSize};
      color: ${theme.mainFontColor};
    }
  }
`;
