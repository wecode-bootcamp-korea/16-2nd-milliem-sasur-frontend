import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SEND_SMS_API, SMS_AUTH_API } from '../../../config';
import styled from 'styled-components';
import Swal from "sweetalert2";
import Timer from './Timer';

const NUM_REX = /^[0-9\b]+$/;
const MOBILE_REX = /(01[016789])([1-9]{1}[0-9]{2,3})([0-9]{4})$/;

class PhoneAuth extends Component {
    state = {
      mobile : '',
      code: '',
      isSent: false
    }

  handleRequest = () => {
    const { mobile} = this.state;
    if(mobile.length < 9 ) {
      Swal.fire({
        icon: "warning",
        iconColor: "#f27474",
        text: "번호를 바르게 입력해주세요!",
        showConfirmButton: false,
        timer: 1000,
      })
    }
    if(!MOBILE_REX.test(mobile)) {
      Swal.fire({
        icon: "warning",
        iconColor: "#f27474",
        text: "번호를 바르게 입력해주세요!",
        showConfirmButton: false,
        timer: 1000,
      })
    }
    else {
      this.setState({ isSent: true});
      fetch (SEND_SMS_API, {
        method: "POST", 
        body: JSON.stringify({
          mobile,
        }),
      })
      .then(response => response.json())  
      .then(
        Swal.fire({
          icon: "success",
          iconColor: "#ffeb60",
          text: "인증번호가 발송되었습니다.",
          showConfirmButton: false,
          timer: 1500,
        })
        )
    }
  }

  goToRegister = () => {
    const { mobile, code } = this.state;
    fetch(SMS_AUTH_API, {
      method: "POST",
      body: JSON.stringify({
        mobile,          
        code
      }),
    })
    .then(response => response.json())
    .then(result => {
      if(result.message === "CODE_SUCCESS") {
        Swal.fire({
          icon: "success",
          iconColor: "#ffeb60",
          text: "인증 확인 되었습니다.",
          showConfirmButton: true
        })
        this.props.history.push(
          {
            pathname: '/register',
            state: {mobile} }
          );
      } 
      if(result.message === "INVALID_CODE_NUMBER") {
        Swal.fire({
          icon: "error",
          iconColor: "#f27474",
          text: "코드를 다시 입력해주세요.",
          showConfirmButton: false,
          timer: 1500,
        })
      } 
      if(result.message === "EXIST_USER") {
        Swal.fire({
          icon: "error",
          iconColor: "#f27474",
          text: "이미 존재하는 번호입니다.",
          showConfirmButton: false,
          timer: 1500,
        })
      } 
    })
  }
  
  numMaxLength = (e) => {
    const { mobile, code } =this.state;
    if ( mobile.length > 11 ) {
      Swal.fire({
        icon: "warning",
        iconColor: "#f27474",
        text: "최대 11자까지 입력 가능합니다.",
        showConfirmButton: false,
        timer: 1000,
      })
      this.setState ({
        mobile: e.target.value.slice(0, e.target.maxLength-1)
      })
    }
    if ( code.length > 4 ) {
      Swal.fire({
        icon: "warning",
        iconColor: "#f27474",
        text: "최대 4자까지 입력 가능합니다.",
        showConfirmButton: false,
        timer: 1000,
      })
      this.setState ({
        code: e.target.value.slice(0, e.target.maxLength-1)
      })
    }
  }
    
  handleInputValidation = (e) => {
    const { value, name } = e.target;
    if (value === '' || NUM_REX.test(value)) {
      this.setState({
        [name]: value
      })
   }
   else {
    Swal.fire({
      icon: "warning",
      iconColor: "#f27474",
      text: "숫자만 입력 가능합니다",
      showConfirmButton: false,
      timer: 1000,
    })
   }
  }

  render() {
    return (
      <PhoneAuthWrapper>
        <PhoneAuthWrapperHeader>
          <AuthTitle>휴대폰인증</AuthTitle>
          <AuthContent>
            <p>휴대폰 번호 *</p>
            <AuthInputBox>
              <AuthInput 
                type="text" 
                name="mobile"
                value={this.state.mobile} 
                maxLength={12}
                onChange={(e) => this.handleInputValidation(e)}
                onKeyUp={(e) => this.numMaxLength(e)}
                placeholder="휴대폰 번호 입력 ('-'입력 제외)" 
              />
              <RequestButton 
              onClick={() => this.handleRequest()}>{ this.state.isSent ? "재발송" : "인증번호 발송" }</RequestButton> 
            </AuthInputBox>
            {this.state.isSent && 
            <AuthInputBox>
              <AuthInput 
                type="text" 
                name="code"
                value={this.state.code} 
                width="700px"
                maxLength={5}
                onChange={(e) => this.handleInputValidation(e)}
                onKeyUp={(e) => this.numMaxLength(e)}
                placeholder="인증번호 입력"
              />
              <span><Timer /></span>
            </AuthInputBox>}
            <InfoList>
              <il>※ 본인 명의의 휴대폰 정보를 정확히 입력해 주시기 바랍니다.</il>
              <il>※ 휴대폰 로그인의 경우, 해외 번호는 이용이 불가능하니 양해 바랍니다.</il>
              <il>※ 타인의 명의를 도용하여 부정인증을 시도한 경우, 관련 법령에 따라 처벌 (3년 이하의 징역 또는 1천만원 이하의 벌금)을 받을 수 있습니다.</il>
            </InfoList>
          </AuthContent>
        </PhoneAuthWrapperHeader>
        <NextButton 
          type="button" 
          onClick={this.goToRegister} >다음</NextButton>
      </PhoneAuthWrapper>
    )
  }
}

export default withRouter(PhoneAuth);


const PhoneAuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
  height: 100vh;
`

const PhoneAuthWrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  height: 400px;
`

const AuthTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100vw;
  height: 50px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid rgba(0,0,0,0.2);
`

const AuthContent = styled.div`
  width: inherit;
`

const AuthInputBox = styled.div`
  position:relative;
  display: flex;
  align-items: center;
  margin:5px 0 10px 0;
  display: flex;
  align-items: center;

  span {
    position: absolute;
    right:10px;
    font-size:14px;
  }
`

const AuthInput = styled.input`
  width:  ${props => props.width || "590px"};
  height: 40px;
  padding: 11px 12px;
  border: 1px solid rgba(0,0,0,0.2)
`

const RequestButton = styled.button`
  width:100px;
  height: 40px;
  margin-left: 10px;
  background-color: #ffeb60;
`

const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  font-size:12px;
  color: rgba(0,0,0,0.5)
`

const NextButton = styled.button`
  width:700px;
  height: 56px;
  background-color: #ffeb60;
  font-size:16px;
  font-weight: 600;
`