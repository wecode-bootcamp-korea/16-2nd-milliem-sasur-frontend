import React from 'react';
import styled from 'styled-components';

const BookDeScription = ({ title, imgUrl,author,content,together,posting }) => {
  return (
    <Container>
      <BookImg src={imgUrl} alt={title} />
      <BookDesc>
        <h2>
          {title}
          <span>{author}</span>
          <p>{content}</p>
        </h2>
        <InfoBox>
          <Info>
            <img
              src='https://ofbxchnhqinp910256.cdn.ntruss.com/160/4209fa956bd5469c741c080b81b09fe4.png?type=w&w=160&quality=100'
              alt='함께 읽은 사람'
            />
            <p>함께 읽는 사람</p>
            <span>{parseInt(together,10).toLocaleString()} 명</span>
          </Info>
          <span style={{fontSize:'20px',color:'#ccc'}}>|</span>
          <Info>
            <i className='fas fa-search-location' />
            <p>한 줄 리뷰</p>
            <span>{posting} 명</span>
          </Info>
          <span style={{fontSize:'20px',color:'#ccc'}}>|</span>
          <Info>
            <i className='fas fa-mail-bulk' />
            <p>포스트</p>
            <span>{posting} 명</span>
          </Info>
        </InfoBox>
      </BookDesc>
    </Container>
  );
};

export default BookDeScription;

const Container = styled.section`
  display: flex;
  padding: 20px;
  border-bottom:8px solid #eee;
  h2 {
    padding-left: 30px;
    font-size: 25px;

    span {
      display: block;
      margin-top: 15px;
      font-size: 14px;
      color: #191919;
    }
    p{
      margin-top:15px;
      color:#ccc;
      font-size:14px;
    }
  }
`;
const BookImg = styled.img`
  width: 200px;
  height: 300px;
  box-shadow: 5px 5px 5px rgb(189, 189, 189);
`;

const BookDesc = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding:8px 18px;
  
`;

const InfoBox = styled.div`
  display: flex;
  align-items:center;
  width: 100%;
  background-color: rgb(250, 250, 246);
  padding:12px 0;
  border-radius:15px;
`;

const Info = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 25px;
    height: 25px;
    background-color: transparent;
    border-radius: 50%;
  }
  svg{
    color:#ccc;
  }

  p {
    margin:10px 0;
    font-size: 10px;
    color: rgb(139, 139, 139);

    &:last-child {
      font-size: 14px;
      font-weight: 750;
      color: rgb(85, 85, 85);
    }
  }
`;
