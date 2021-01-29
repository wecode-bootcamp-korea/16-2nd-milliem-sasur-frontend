import React from 'react';
import styled from 'styled-components';
import FooterCompany from './FooterCompany';
import FooterMenubar from './FooterMenubar';
import FooterSocial from './FooterSocial';
import theme, { flexBetween } from '../../../Styles/Theme';

const FooterContent = () => {
  return (
    <FooterContentWrap>
      <Wrap>
        <Title>(주) 밀림의 사서</Title>
        <FooterSocial />
      </Wrap>
      <FooterCompany />
      <FooterMenubar />
    </FooterContentWrap>
  );
};

export default FooterContent;

const FooterContentWrap = styled.div`
  padding: 8px 0;
`;

const Wrap = styled.div`
  ${flexBetween}
  padding: 25px 0;
`;

const Title = styled.h5`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.subColor};
`;
