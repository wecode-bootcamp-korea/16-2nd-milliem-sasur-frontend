import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
const MillemMain = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      delay: 400,
    });
  }, []);
  return (
    <>
      <MainNav>
        <Link to='/signin'>로그인</Link>
        <Link to='/main'>메인으로 가기</Link>
      </MainNav>
      <Landing>
        <MainWrap>
          <FirstSection>
            <div className='first' data-aos='fade-left'>
              <p className='f_content'>
                <span>당신의</span>
                <span>소중한</span>
                <span>일상.</span>
              </p>
              <p className='s_content'>
                더 가치있는 것<span>들로</span>
                <span className='d_block'>채워볼까요?</span>
              </p>
            </div>
            <div className='f_img'  data-aos='fade-down'>
              <img
                src='https://www.millie.co.kr/company/assets/headerBgImg.svg'
                alt='당신의 소중한 일상'
              />
              <img
                src='https://www.millie.co.kr/company/assets/headerBgBook1.svg'
                alt='책장 이미지'
                className='s_img'
              />
              <img
                src='https://www.millie.co.kr/company/assets/headerBgBook2.svg'
                alt='책'
                className='t_img'
              />
            </div>
          </FirstSection>
          <SecondSection>
            <img
              src='https://www.millie.co.kr/company/assets/introStart_shelf1.svg'
              alt='이미지'
              data-aos='fade-right'
              className='fri_img'
            />
            <img
              src='https://www.millie.co.kr/company/assets/introStart_shelf1.svg'
              alt='이미지1'
              data-aos='fade-left'
              className='sec_img'
            />
            <img
              src='https://www.millie.co.kr/company/assets/introStart_shelf1.svg'
              alt='이미지1'
              data-aos='fade-right'
              className='thr_img'
            />
            <Title>
              <span data-aos='zoom-in'>독서와</span>
              <span data-aos='zoom-in'>무제한</span>
              <span data-aos='zoom-in'>친해지기</span>
            </Title>
          </SecondSection>
        </MainWrap>
        <ThridSection>
          <ReadTitle>
            <div className='list'>
              <span data-aos='zoom-in'>가끔은</span>
              <span data-aos='zoom-in'>가볍고</span>
              <span data-aos='zoom-in'>재밌는</span>
            </div>
            <p className='perhep' data-aos='fade-down'>
              콘텐츠도 <span>즐기고</span>싶으니까!
            </p>
            <p className='readCategory' data-aos='fade-left'>
              무협,소설,문학 등..30분 동안 읽어 주는 오디오 북!!
            </p>
            <p className='readCategory'  data-aos='fade-left'>
              무협,소설,문학 등..30분 동안 읽어 주는 오디오 북!! 16기 위코드 여러분 오늘 2차 발표 함께 힘내봅시다.
            </p>
            <img
              src='https://d3udu241ivsax2.cloudfront.net/common/images/company/brand/millieBookCard1Bg_20200210.png'
              className='content_link1'data-aos='fade-left'
            />
            <img
              src='https://d3udu241ivsax2.cloudfront.net/common/images/company/brand/millieBookCard1Img.png'
              className='content_link2' data-aos='fade-left'
            />
          </ReadTitle>
        </ThridSection>
      </Landing>
    </>
  );
};

export default MillemMain;

const MainNav = styled.nav`
  position: fixed;
  z-index: 5;
  a {
    display: inline-block;
    margin-top: 30px;
    margin-left: 30px;
    font-size: 14px;
    font-weight: bold;
    margin-right: 20px;
    padding: 8px 12px;
    border: 2px solid purple;
    border-radius: 25px;
    &:nth-child(2) {
      margin-left: 0;
    }
  }
`;
const Landing = styled.div`
  background-color: rgb(249, 235, 96);
`;
const MainWrap = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

const FirstSection = styled.div`
  position: relative;
  height: 100vh;
  .first {
    position: absolute;
    width: 100%;
  }
  .f_img {
    position: absolute;
    left: 50%;
    bottom: 0;
    .s_img {
      position: absolute;
      left: 40%;
      top: 25%;
      transform: translate(-50%, -50%);
    }
    .t_img {
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
    }
  }
  .f_content {
    padding-top: 150px;
    width: 100%;
    font-size: 5rem;
    font-weight: bold;
    line-height: 1.4;

    span {
      display: block;
      letter-spacing: 10px;
      color: #333;
    }
  }
  .s_content {
    padding-top: 50px;
    font-size: 25px;
    .d_block {
      margin-top: 10px;
      display: block;
      color: rgb(164, 81, 247);
    }
  }
`;

const SecondSection = styled.div`
  position: relative;
  height: 120vh;
  background-color: rgb(249, 235, 96);
  .fri_img {
    position: absolute;
    top: 30%;
    left: 2%;
  }
  .sec_img {
    position: absolute;
    top: 50%;
    right: 5%;
  }
  .thr_img {
    position: absolute;
    top: 55%;
    left: 2%;
  }
`;
const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.5;
  span {
    display: block;
    font-style: italic;
    &:nth-child(2) {
      color: rgb(164, 81, 247);
    }
  }
  .content_link1 {
    position: absolute;
    right: 0;
    width: 400px;

  }
`;

const ThridSection = styled.div`
  position: relative;
  height: 130vh;

  background-color: #343434;

  .contents_link {
    position: absolute;
    top: 35%;
    right: 15%;
  }
`;

const ReadTitle = styled.h3`
  position: absolute;
  left: 13%;
  top: 33%;
  z-index: 5;
  width: 1280px;
  font-size: 4rem;
  color: #fff;
  font-weight: bold;
  line-height: 1.5;
  .list {
    span {
      display: block;
    }
  }
  .perhep {
    span {
      color: #a451f7;
    }
  }
  .readCategory {
    font-size: 1rem;
    font-weight: bold;
  }
  .content_link1 {
    position: absolute;
    top: 0;
    right:0;
    z-index: 5;
    width: 400px;
  }
  .content_link2 {
    position: absolute;
    right: 200px;
    top:64%;
    z-index: 5;
    width: 250px;
  }
`;
