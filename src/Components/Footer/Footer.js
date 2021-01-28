import React from 'react';
import styled from 'styled-components';
import FooterContent from './FooterContent/FooterContent';
import FooterNotice from './FooterNotice/FooterNotice';
import theme from '../../Styles/Theme';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterNotice />
      <FooterContentWrap>
        <FooterContent />
        <FooterCopyRight>
          Copyright &copy; 2021 밀리의 사서 All Rights Reserverd.
        </FooterCopyRight>
      </FooterContentWrap>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.footer`
  background-color: ${theme.white};
`;

const FooterContentWrap = styled.div`
  max-width: ${theme.mainWrapWidth};
  margin: ${theme.marginCenter};
`;

const FooterCopyRight = styled.p`
  margin-top: 20px;
  font-size: 11px;
  color: ${theme.gray};
`;
