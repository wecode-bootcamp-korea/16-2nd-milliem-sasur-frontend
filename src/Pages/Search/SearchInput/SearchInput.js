import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { SEARCH_TYPE } from '../data/SearchData';
import theme from '../../../Styles/Theme';
import Arrow from '../SearchResultBar/Arrow';

const SearchInput = ({ types, setBooks }) => {
  const [type, setType] = useState('q');
  const [inputValue, setInputValue] = useState('');
  const history = useHistory();

  const typeChange = (e) => {
    setType(e.target.value);
  };

  const updateInputValue = (e) => {
    setInputValue(e.target.value);
    // e.target.value.length === 0 && setBooks([]);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    history.push({
      pathname: '/search_result',
      search: `${type}=${inputValue}`,
      state: { type, inputValue },
    });
  };

  const onKeyPressEvent = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    onSubmitSearch(e);
  };

  return (
    <>
      <SelectWrap>
        <SelectBox>
          <Select onChange={typeChange}>
            {SEARCH_TYPE.map((select) => {
              return (
                <option
                  key={select.id}
                  value={select.value}
                  selected={types === select.value ? true : false}>
                  {select.type}
                </option>
              );
            })}
          </Select>
          <Arrow />
        </SelectBox>
      </SelectWrap>
      <SearchWrap>
        <div className='submit'>
          <button type='button' onClick={onSubmitSearch}>
            <i className='fas fa-search' />
          </button>
          <input
            type='text'
            placeholder={
              type === 'all'
                ? '검색어를 입력하세요.'
                : type === 'title'
                ? '제목 검색'
                : type === 'author'
                ? '저자명 검색'
                : type === 'publisher'
                ? '출판사명 검색'
                : '검색어를 입력하세요'
            }
            onChange={updateInputValue}
            onKeyPress={onKeyPressEvent}
          />
        </div>
      </SearchWrap>
    </>
  );
};

export default SearchInput;

const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`;
const SelectBox = styled.div`
  position: relative;
  display: inline-block;
`;

const Select = styled.select`
  display: inline-block;
  width: 80px;
  padding: 10px 8px;
  font-size: 13px;
  border-radius: 5px;
  border-color: #eee;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const SearchWrap = styled.div`
  position: relative;
  .submit {
    display: flex;
    align-items: center;
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: ${theme.mainFontColor};
  }

  input {
    width: 100%;
    border-bottom: 1px solid #d2d2d2;
    font-size: 18px;
    padding: 12px 35px;
  }
`;
