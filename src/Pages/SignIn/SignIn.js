import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Swal from "sweetalert2";
import { MOBILE_SIGN_IN_API, KAKAO_API, KAKAO_KEY } from '../../config';

function SignIn () {
  const history = useHistory();
  const [state, setState] = useState({
    mobile : "",
    password : ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setState ({
      ...state,
      [name] : value
    })
  }

  const goToMain = () => {
    const { mobile, password } = state;
    if (mobile.length === 0) {
      Swal.fire({
        icon: "warning",
        iconColor: "#f27474",
        text: "휴대폰 번호를 바르게 입력해주세요.",
        showConfirmButton: false,
        timer: 1500,
      })
    }
    else if (password.length === 0) {
      Swal.fire({
        icon: "warning",
        iconColor: "#f27474",
        text: "비밀번호를 바르게 입력해주세요.",
        showConfirmButton: false,
        timer: 1500,
      })
    }
    fetch(MOBILE_SIGN_IN_API, {
      method: "POST",
      body:JSON.stringify({
        mobile,
        password
      }),
    })
    .then (res => res.json())
    .then (res => {
      if (res.message === "SIGNIN_SUCCESS" ) {
        localStorage.setItem("Mobile_Auth", res.TOKEN);
        Swal.fire({
          icon: "success",
          iconColor: "#ffeb60",
          text: "밀림의 사서에 오신 것을 환영합니다!",
          showConfirmButton: true
        })
        history.push('/main');
      }
      if (res.message === "INVALID_PHONE_NUMBER") {
        Swal.fire({
          icon: "error",
          iconColor: "#f27474",
          text: "휴대폰번호를 바르게 입력해주세요.",
          showConfirmButton: false,
          timer: 1500,
        })
      }
      if (res.message === "WRONG_PASSWORD") {
        Swal.fire({
          icon: "error",
          iconColor: "#f27474",
          text: "비밀번호를 바르게 입력해주세요.",
          showConfirmButton: false,
          timer: 1500,
        })
      }
    })
  }
  
  const { Kakao } = window;
  const loginFormWithKakao = () => {
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
            history.push('/main');
          }
          if (res.message === "KAKAO_SIGNIN_SUCCESS") {
            localStorage.setItem("Kakao_token", res.TOKEN)
            Swal.fire({
              icon: "success",
              iconColor: "#ffeb60",
              text: "밀림의 사서에 오신 것을 환영합니다!",
              showConfirmButton: true
            })
            history.push('/main');
          }
        })
      },
      fail: function(err) {
        alert(JSON.stringify(err))
      },
    })
  }

  return (
    <SignInWarpper>
      <SignInCenterBox>
        <h1><img src="/images/logo_yellow.png" alt="milliem" /></h1>
        <SignInInput 
          type="text" 
          name="mobile" 
          value={state.mobile} 
          onChange={handleChange}
          placeholder="휴대폰 번호"
        />
        <SignInInput 
          type="password"
          name="password"
          value={state.password} 
          margin="30px"
          onChange={handleChange} 
          placeholder="비밀번호"
        />
        <SignInBtn 
          type="button" 
          onClick={goToMain}>휴대폰 번호 로그인</SignInBtn>
        <img alt="or" src="/images/or.png" width="240px"/>
        <SocialButtons>
          <button 
            type="button" 
            onClick={loginFormWithKakao} ><img alt="kakao" src="/images/kakao-btn.svg" /></button>
          <button><img alt="naver" src="/images/naver-btn.svg" /></button>
          <button><img alt="facebook" src="/images/facebook-btn.svg" /></button>
          <button><img alt="apple" src="/images/apple-btn.svg" /></button>
        </SocialButtons>
        <SignUpLinkWrapper>
          <Link to="/signup"><SignUpLink>회원가입</SignUpLink></Link><span>|</span><SignUpLink>비밀번호 재설정</SignUpLink>
        </SignUpLinkWrapper>
      </SignInCenterBox>
    </SignInWarpper>
  )
}

export default SignIn;


const SignInWarpper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/images/signin_bg.png");
  background-repeat : no-repeat;
  background-size : cover;
  color: white;
`

const SignInCenterBox = styled.div`
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
    height: 500px;

    img {
      width : 120px;
    }
  }
`

const SignInInput = styled.input`
  width:240px;
  height: 40px;
  border-bottom: 1px solid white;
  margin-bottom:  ${props => props.margin || "12px"};
  padding-left:12px;
  color: white;
  font-size: 15px;

  &::-webkit-input-placeholder {
    font-size: 15px;
    color:white;
}
`

const SignInBtn = styled.button`
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

const SignUpLinkWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const SignUpLink = styled.span`
  color:white;
  font-size:14px;
  margin: 0 10px;
`