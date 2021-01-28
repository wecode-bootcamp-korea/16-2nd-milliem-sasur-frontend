import React from 'react';
import styled from 'styled-components';
import Navbar from '../../Components/Navbar/Navbar';
import SearchInput from './SearchInput/SearchInput';
import { RECOMMEND_BOOKS } from '../Search/data/SearchData';
import theme from '../../Styles/Theme';

const BookSearch = () => {
  return (
    <>
      <Navbar />
      <BookSearchWrap>
        <SearchInput />
        <BookRecommend>
          <SearchWord>밀리 추천 검색어</SearchWord>
          <WordWrap>
            {RECOMMEND_BOOKS.map((wordList) => {
              return (
                <WordList key={wordList.id}>
                  <span>
                    <i className={wordList.icon} />
                  </span>
                  {wordList.title} <strong>{wordList.subtitle}</strong>
                </WordList>
              );
            })}
          </WordWrap>
        </BookRecommend>
      </BookSearchWrap>
      <Addjust>
        <img
          src='https://d2j6uvfek9vas1.cloudfront.net/millie_logo/601903b56f33c.jpg'
          alt='밀리'
        />
      </Addjust>
    </>
  );
};

export default BookSearch;

const BookSearchWrap = styled.div`
  max-width: ${theme.mainWrapWidth};
  margin: ${theme.marginCenter};
`;
const BookRecommend = styled.div`
  margin-top: 30px;
`;

const SearchWord = styled.h2`
  font-size: ${theme.largeFontSize};
  font-weight: bold;
  color: ${theme.fontColor};
`;

const WordWrap = styled.ul`
  margin-top: 20px;
  line-height: 2;
`;
const WordList = styled.li`
  font-size: ${theme.largeFontSize};
  color: ${theme.mainFontColor};
  cursor: pointer;

  span {
    padding-right: 10px;

    svg {
      color: ${theme.mainFontColor};
    }
  }
  strong {
    color: #000;
  }
`;

const Addjust = styled.div`
  margin-top:150px;
  background-color: rgb(217, 246, 255);
  text-align: center;
`;
