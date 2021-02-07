import React, { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../../Components/Navbar/Navbar';
import SearchInput from './SearchInput/SearchInput';
import SearchResultBar from './SearchResultBar/SearchResultBar';
import { SEARCH_CATEGORY } from './data/SearchData';
import { TEST_SERVER } from '../../config/Server';
import theme from '../../Styles/Theme';

const SearchResult = () => {
  const [books, setBooks] = useState([]);
  const [searchActive, setSearchActive] = useState('total');
  const [pageNumber, setPageNumber] = useState(0);
  const [lastData, setlastData] = useState(false);
  const location = useLocation();

  const type = location.state.type;
  const inputValue = location.state.inputValue;
  const target = useRef();

  const API = `${TEST_SERVER}?${type}=${inputValue}&_page=${pageNumber}&_limit=30`;
  const API_CHANGE = `${TEST_SERVER}?${type}=${inputValue}&_page=${pageNumber}&booktype=${searchActive}&_limit=30`;
  const API_URL = searchActive === 'total' ? API : API_CHANGE;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) =>
        !inputValue
          ? setBooks([])
          : setBooks((prevBooks) => [...prevBooks, ...res])                                                                                  
      );
  }, [API_URL, pageNumber]);
  console.log(pageNumber);
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 0 });
    if (target.current) {
      return observer.observe(target.current);
    }
    return () => observer.disconnect(target.current);
  }, [target]);

  const onLoadData = (e) => {
    e.preventDefault();
    setSearchActive(e.target.value);
  };

  const handleObserver = ([refs]) => {
    if (refs.isIntersecting) {
      setTimeout(() => {
        lastData
          ? setPageNumber(1)
          : setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }, 3000);
    }
  };

  return (
    <>
      <Navbar />
      <ResultValue>검색결과</ResultValue>

      <Result>
        <SearchInput setBooks={setBooks} types={type} />
        <Category>
          {SEARCH_CATEGORY.map((list) => {
            return (
              <SearchValue
                key={list.id}
                type={list.type}
                value={list.value}
                active={searchActive}
                onClick={onLoadData}>
                {list.name}
              </SearchValue>
            );
          })}
        </Category>
        <SearchResultBar booksLength={books?.length} />
        <Wrap>
          {books?.map((item, idx) => {
            return (
              <Link key={idx} to={`/bookdetail/${Number(item.id)}`}>
                <Book>
                  <Thumbnail src={item.thumbnail} alt={item.title} />
                  <Title>
                    {item.title}
                    <span>{item.authors}</span>
                  </Title>
                </Book>
              </Link>
            );
          })}
        </Wrap>
        <LodingBar ref={target}>
          <img src='/images/loading.gif' alt='검색결과 로딩중..' />
          <span>
            검색 결과 로딩중 입니다..
            <br />
            잠시만 기다려주십시요.
          </span>
        </LodingBar>
      </Result>
    </>
  );
};

export default SearchResult;

const ResultValue = styled.h2`
  padding: 12px;
  font-size: 18px;
  text-align: center;
  background-color: yellow;
`;
const Result = styled.div`
  max-width: ${theme.mainWrapWidth};
  margin: ${theme.marginCenter};
`;

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px 90px;
  margin-top: 20px;
`;

const Book = styled.div`
  padding: 10px 0;
`;
const Thumbnail = styled.img`
  box-shadow: 2px 2px 3px 5px #dadada;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Title = styled.h3`
  margin: 15px 0;
  font-size: 14px;
  text-align: center;
  color: ${theme.fontColor};

  span {
    display: block;
    margin-top: 5px;
    font-size: 12px;
    color: ${theme.mainFontColor};
  }
`;

const Category = styled.ul`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const SearchValue = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.value === props.active ? '#a451f7' : '#262626')};
  padding-right: 10px;
  &:hover {
    color: #a451f7;
  }
`;

const LodingBar = styled.div`
  min-width: ${theme.mainWrapWidth};
  text-align: center;

  span {
    display: block;
    font-size: 14px;
  }
`;
