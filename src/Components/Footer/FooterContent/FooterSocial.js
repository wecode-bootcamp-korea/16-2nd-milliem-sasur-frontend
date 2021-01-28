import React from 'react';
import { FOOTER_IMG } from '../data/FooterData';
import styled from 'styled-components';
import { flexDefault } from '../../../Styles/Theme';

const FooterSocial = () => {
  return (
    <ListWrap>
      {FOOTER_IMG.map((item) => {
        return (
          <List>
            <img src={item.url} alt={item.altMsg} />
          </List>
        );
      })}
    </ListWrap>
  );
};

export default FooterSocial;

const ListWrap = styled.ul`
  ${flexDefault}
`;

const List = styled.li`
  width: 24px;
  height: 24px;
  margin-left: 8px;

  img {
    width: 100%;
  }
`;
