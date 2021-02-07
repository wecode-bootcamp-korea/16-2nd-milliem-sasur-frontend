import React from 'react';
import styled from 'styled-components';

const BookFeed = (props) => {
  return (
    <FeedContainer>
      <Wrap>
        <ul>
          <Action>
            <span className='cart'>
              <i className='fas fa-cart-plus' />
            </span>
            <button type='button'>내서재에 담기</button>
          </Action>
          <Action>
            <span className='share'>
              <i className='far fa-share-square' />
            </span>
            <button type='button'>공유하기</button>
          </Action>
        </ul>
        <ReadNowBtn>오디오북 열기</ReadNowBtn>
      </Wrap>
    </FeedContainer>
  );
};

export default BookFeed;

const FeedContainer = styled.div`
  position: relative;
  border-left: 1px solid #eee;
`;
const Wrap = styled.div`
  position: fixed;
  top: 65px;
  width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ul {
    width: 100%;
  }
`;
const Action = styled.li`
  padding: 20px;
  border-bottom: 1px solid #eee;
  span {
    padding-right: 10px;
    svg {
      color: #ccc;
    }
  }
  button {
    font-weight: bold;
  }
`;
const ReadNowBtn = styled.button`
  position: absolute;
  bottom: 100px;
  font-size: 15px;
  background-color: #292929;
  padding: 12px;
  border-radius: 5px;
  width: 100%;
  font-weight: bold;
  text-align: center;
  color: #fff; ;
`;
