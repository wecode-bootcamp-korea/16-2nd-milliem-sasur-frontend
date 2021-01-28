import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../Styles/Theme';

const FooterCompany = () => {
  const [actived, setActived] = useState(false);
  const icon = actived ? 'fas fa-chevron-up' : 'fas fa-chevron-down';

  return (
    <FooterCompanyWrap>
      <Title>
        사업자 정보 {actived === true ? '닫기' : '펼처보기'}
        <i key={icon} onClick={() => setActived(!actived)}>
          <span className={icon} />
        </i>
        <CompanyInfo actived={actived}>
          <Ceo>대표이사: 밀림의사수어</Ceo>
          <CompanyNumber>사업자 등록번호: 123-88-00370</CompanyNumber>
          <Address>주소: 서울특별시 강남구 삼성동 192(코엑스, 인터컨티네탈 호텔 로얄층 5005호)</Address>
          <CustomerInfo>고객정보보호 책임자: raihyun(wlskrk12@naver.com)</CustomerInfo>
          <MarketingInfo>마케팅 제휴 문의: raihyun(milliem-sasur@naver.com)</MarketingInfo>
        </CompanyInfo>

      </Title>
    </FooterCompanyWrap>
  );
};

export default FooterCompany;

const FooterCompanyWrap = styled.div`
  padding:8px 0;
`;

const Title = styled.h5`
  font-size: ${theme.smallFontSize};
  color: ${theme.mainFontColor};
  margin-bottom: 15px;
  
  i {
    padding-left: 5px;
    cursor: pointer;
  }
`;

const CompanyInfo = styled.div`
  display: ${(props) => (props.actived === false ? 'none' : 'true')};
  margin-bottom: 15px;
  padding: 12px 0;
`;

const Ceo = styled.span`
  color: ${theme.gray};
  padding: 5px 0;
`;

const CompanyNumber = styled.span`
  padding-left: 10px;
`;

const Address = styled.address`
  margin:10px 0;
`

const CustomerInfo = styled.span`
  padding-right:15px;
`

const MarketingInfo = styled.span`
  font-weight:bold;
`
