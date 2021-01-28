import React from 'react';
import styled from 'styled-components';
import theme, { flexBetween } from '../../../Styles/Theme';
import Arrow from './Arrow';
const SearchResultBar = ({ booksLength }) => {
  return (
    <>
        <ResultBar>
          <Result>
            {booksLength > 0
              ? `총 + ${booksLength}건의 검색 결과`
              : '검색결과가 없습니다.'}
          </Result>
          <Sort>
            <option>키워드 일치순</option>
            <option>인기순</option>
            <option>업데이트순</option>
            <option>발간일순</option>
          </Sort>
          <Arrow />
        </ResultBar>
    
    </>
  );
};

export default SearchResultBar;

const ResultBar = styled.div`
  position:relative;
  ${flexBetween};
  height: 45px;
  padding: 0 12px;
  background-color: ${theme.white};
  box-shadow: 0 1px 3px rgb(0 0 0 / 25%);
  border-radius: 5px;
`;
const Result = styled.h2`
  color: ${theme.fontColor};
`;

const Sort = styled.select`
  width:120px;
  height: 100%;
  border: none;
  text-align: center;
  padding-left: 18px;
  border-left: 1px solid #eee;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;
