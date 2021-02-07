import React from 'react';
import styled from 'styled-components';

const BookCategory = ({publisher}) => {
  return (
    <CartegoryWrap>
      <Wrap>
        <dl>
          <dt>카테고리</dt>
          <dd>오디오북</dd>
        </dl>
        <span>|</span>
        <dl>
          <dt>용량</dt>
          <dd>73MB</dd>
        </dl>
        <span>|</span>
        <dl>
          <dt>제작사</dt>
          <dd>{publisher}</dd>
        </dl>
      </Wrap>
    </CartegoryWrap>
  );
};

export default BookCategory;

const CartegoryWrap = styled.div`
  padding: 30px;
  background-color: rgb(250, 250, 246);
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  span{
    color:#ccc;
  }
  dl {
    text-align: center;
    dt {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    dd {
      font-size: 14px;
    }
  }
`;
