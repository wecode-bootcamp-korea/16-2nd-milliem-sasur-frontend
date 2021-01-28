import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../Components/Navbar/Navbar';
import { TEST_SERVER } from '../../config/Server';
import BookCategory from './components/BookCategory';
import BookDeScription from './components/BookDeScription';
import BookFeed from './components/BookFeed';
import BookGraph from './components/BookGraph';

const BookDetail = (props) => {
  console.log('id는??', props.match.params.id);
  const [detailsInfo, setDetailsInfo] = useState([]);

  useEffect(() => {
    fetch(`${TEST_SERVER}/${props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => setDetailsInfo(res));
  }, []);

  return (
    <>
      <Navbar />
      <BooDetailWrap>
        <article>
          <BookDeScription
            title={detailsInfo?.title}
            imgUrl={detailsInfo?.thumbnail}
            author={detailsInfo?.author}
            content={detailsInfo?.contents}
            together={detailsInfo?.together}
            posting={detailsInfo?.posting}
         
          />
          <BestSection>주간 베스트 도서</BestSection>
          <BookGraph />
          <BookInfoMation>
            <h3>저자:{detailsInfo?.authors}</h3>
            <h4>부제:{detailsInfo?.sutitle}</h4>
            <p>내용:{detailsInfo?.contents}</p>
          </BookInfoMation>
          <BookCategory    publisher={detailsInfo?.publisher} />
          <img
            src='https://d2j6uvfek9vas1.cloudfront.net/millie_logo/601770e517706.jpg'
            style={{ maxWidth: '100%' }}
          />
        </article>
        <BookFeed />
      </BooDetailWrap>
    </>
  );
};

export default BookDetail;

const BooDetailWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  border: 1px solid #eee;
  display: flex;

  article {
    width: 995px;
  }
`;

const BestSection = styled.h1`
  position: relative;
  font-size: 16px;
  font-weight: 600;
  color: rgb(36, 36, 37);
  padding: 25px 0 25px 40px;
  border-bottom: 1px solid #eee;
  &::before {
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    content: '';
    display: inline-block;
    background-image: url('https://d3udu241ivsax2.cloudfront.net/v3/images/bookDetail/best-3.ffdb1e24d3583ae83c0cc1888ce6d54f.png');
    background-size: cover;
    width: 25px;
    height: 25px;
  }
`;

const BookInfoMation = styled.div`
  padding: 30px;
  border-top: 1px solid #eee;
  h3 {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
  }
  h4 {
    margin: 20px 0;
    font-weight: bold;
    font-size: 16px;
  }
  p {
    margin-top: 15px;
    font-size: 15px;
  }
`;
