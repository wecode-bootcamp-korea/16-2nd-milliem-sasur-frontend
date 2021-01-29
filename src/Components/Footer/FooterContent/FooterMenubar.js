import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {FOOTER_MENU} from '../data/FooterData';
import theme from '../../../Styles/Theme';

const FooterMenubar = () => {
  return(
    <MenubarWrap>
      {
        FOOTER_MENU.map((list) => {
          return(
            <Menu>
              <Link to='/'>{list} &gt;</Link>
            </Menu>
          );
        })
      }
    </MenubarWrap>
  );
};

export default FooterMenubar;

const MenubarWrap = styled.ul`
  display:flex;
`;

const Menu = styled.li`
  font-size:12px;
  margin-right:15px;
  
  a{
    color:${theme.mainFontColor};
  }
`