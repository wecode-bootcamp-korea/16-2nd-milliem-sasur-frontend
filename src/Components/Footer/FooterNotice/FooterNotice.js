import React from 'react';
import styled from 'styled-components';
import theme from '../../../Styles/Theme';

const FooterNotice = () => {
  return (
    <NoticeWrap>
      <NoticeTitle>
        <i class='fas fa-bullhorn' />
        <span>[공지] 결제수단 변경 기능 점검 안내</span>
      </NoticeTitle>
    </NoticeWrap>
  
  );
};

export default FooterNotice;

const NoticeWrap = styled.div`
  background-color: ${theme.white};
  border-top: 1px solid ${theme.thinGray};
  border-bottom: 1px solid ${theme.thinGray};
`;

const NoticeTitle = styled.div`
  max-width: ${theme.mainWrapWidth};
  margin: ${theme.marginCenter};
  padding:28px 0;
  
  span{
    padding-left:10px;
    font-size:14px;
    color:${theme.mainFontColor};
  }
`;
