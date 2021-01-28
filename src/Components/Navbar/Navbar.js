import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NAVBAR_DATA } from '../Navbar/data/NavbarData';
import theme, { flexDefault, flexBetween } from '../../Styles/Theme';

const Navbar = () => {

  return (
    <>
      <NavbarWrap>
        <Nav>
          <Wrap>
            <Link to='/' className='logo'>
              <img src='/images/logo.png' alt='밀림의사서 로고입니다' />
            </Link>
            <List>
              {NAVBAR_DATA.map((list,) => {
                return (
                  <Menu key={list.id}>
                    <Link
                      to={list.path}>
                      {list.title}
                    </Link>
                  </Menu>
                );
              })}
            </List>
            <UserMenu>
              <Link to='/signup' className='signup'>
                회원가입
              </Link>
              <Link to='/signin' className='signin'>
                로그인
                {}
              </Link>
            </UserMenu>
          </Wrap>
        </Nav>
      </NavbarWrap>
      <NavbarHeight />
    </>
  );
};

export default Navbar;

const NavbarWrap = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 65px;
  background-color: ${theme.white};
  border-bottom: 1px solid #ebebeb;
`;

const Nav = styled.nav`
  max-width: ${theme.mainWrapWidth};
  margin: ${theme.marginCenter};
  height: 100%;

  .logo {
    display: block;
    width: 100px;

    img {
      max-width: 100%;
    }
  }
`;

const Wrap = styled.div`
  ${flexBetween};
  height: 100%;
  padding: 0 20px;
  margin: ${theme.marginCenter};
`;

const UserMenu = styled.div`
  ${flexDefault};
  font-size: ${theme.normalFontSize};

  .signup {
    margin-right: 15px;
    color: ${theme.mainFontColor};
  }

  .signin {
    padding: 8px 25px;
    color: ${theme.white};
    background-color: ${theme.btnColor};
    border: 1px solid ${theme.btnColor};
    border-radius: 5px;
    transition: all 300ms ease-in-out;

    &:hover {
      color: ${theme.mainFontColor};
      background-color: #fff;
      border-color: #ccc;
    }
  }
`;

const NavbarHeight = styled.div`
  height: 65px;
`;

const List = styled.ul`
  ${flexDefault};
`;

const Menu = styled.li`
  margin: 0 25px;
  font-size: ${theme.largeFontSize};
  color: ${theme.mainFontColor};
  cursor: pointer;

  a {
    color: ${theme.fontColor};
    font-weight: ${(props) => (props.actives ? 'bold' : '#262626')};
  }
`;
