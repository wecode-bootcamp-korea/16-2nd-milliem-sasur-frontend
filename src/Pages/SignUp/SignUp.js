import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {KAKAO_API, KAKAO_KEY} from '../../config';
import styled from 'styled-components';
import Swal from "sweetalert2";

const { Kakao } = window;

class SignUp extends Component {
  loginFormWithKakao = () => {
    Kakao.init(KAKAO_KEY);
    Kakao.Auth.loginForm({
      success: function(authObj) {
        fetch(KAKAO_API, {
          method: "POST",
          headers: {
            Authorization: authObj.access_token
          }
        })
        .then( res => res.json())
        .then( res => {
          if (res.message === "KAKAO_SIGNUP_SUCCESS") {
            localStorage.setItem("Kakao_token", res.TOKEN)
            Swal.fire({
              icon: "success",
              iconColor: "#ffeb60",
              text: "밀림의 사서 회원이 되신 것을 환영합니다!",
              showConfirmButton: true
            })
            this.props.history.push('/main');
          }
          if (res.message === "KAKAO_SIGNIN_SUCCESS") {
            Swal.fire({
              icon: "success",
              iconColor: "#ffeb60",
              text: "밀림의 사서에 오신 것을 환영합니다!",
              showConfirmButton: true
            })
            this.props.history.push('/main');
          }
        })
      },
      fail: function(err) {
        alert(JSON.stringify(err))
      },
    })
  }
 
  render() {
    return (
      <SignUpWarpper>
      <SignUpCenterBox>
        <h1><img src="https://d3udu241ivsax2.cloudfront.net/v3/images/login/join-title.e7af800a6945569604c75840d03c9447.png" alt="milliem" /></h1>
        <Link to="/phone-auth" ><SignUpBtn type="button">휴대폰 번호 시작하기</SignUpBtn></Link>
        <img alt="or" src="/images/or.png" width="240px"/>
        <SocialButtons>
          <button 
            type="button" 
            onClick={this.loginFormWithKakao}><img alt="kakao" src="/images/kakao-btn.svg" /></button>
          <button><img alt="naver" src="/images/naver-btn.svg" /></button>
          <button><img alt="facebook" src="/images/facebook-btn.svg" /></button>
          <button><img alt="apple" src="/images/apple-btn.svg" /></button>
        </SocialButtons>
        <SignInLinkWrapper>
          <Link to="/signin"><SignInLink>이미 회원이신가요? 로그인</SignInLink></Link>
        </SignInLinkWrapper>
      </SignUpCenterBox>
    </SignUpWarpper>
    )
  }
}

export default withRouter(SignUp);

const SignUpWarpper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/images/signup_bg.png");
  background-repeat : no-repeat;
  background-size : cover;
  color: white;
`

const SignUpCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 760px;

  h1 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width:175px;
    height: 624px;

    img {
      width : 120px;
    }
  }
`

const SignUpBtn = styled.button`
  width: 240px;
  height:48px;
  margin-bottom: 25px;
  background: linear-gradient(135deg, #C283c6, #d5a3a6, #e7c288, #edcc7f);
  border-radius: 50px;
  font-size:16px;
  color:white;
  font-weight: 600;
`

const SocialButtons = styled.section`
  display: flex;
  margin: 10px 0;
  padding-left:10px;
  button {
    margin-right: 10px;
  }
`
const SignInLinkWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const SignInLink = styled.span`
  color:white;
  font-size:14px;
  margin-right: 10px;
`