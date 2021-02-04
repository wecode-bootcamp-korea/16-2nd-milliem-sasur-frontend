import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MOBILE_SIGN_UP_API } from '../../../config';
import styled from 'styled-components';
import Swal from "sweetalert2";

const NUM_REX = /^[0-9\b]+$/;
const PW_REX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

class Register extends Component {
  state = {
    password:'',
    confirmPw:'',
    birth:'',
    gender:'',
    nickname:'',
    disabled: true,
    confirmMessage: "영문, 숫자,특수문자를 포함한 8~16자 조합으로 입력해주세요.",
    birthMessage:'생년월일과 주민번호 뒤 첫번째 숫자를 입력해 주세요.'
  }
  
  goToMain = () => {
    const {password, birth, gender, nickname} = this.state;
    fetch(MOBILE_SIGN_UP_API, {
        method: "POST",
        body: JSON.stringify({
          mobile: this.props.location.state.mobile,         
          password,
          birth,
          gender,
          nickname
        }),
    }) 
        .then(response => response.json())
        .then(result => {
            if(result.message === "SIGNUP_SUCCESS") {
              Swal.fire({
                icon: "success",
                iconColor: "#ffeb60",
                text: "밀림의 사서 회원이 되신 것을 환영합니다!",
                showConfirmButton: true
              })
              this.props.history.push('/main');
            } 
        })
    }

  handleInput = (e) => {
    const { value, name } = e.target;
      this.setState({
        [name]: value
    })
  }

  handleDisabled = (e) => {
    const { disabled } = this.state;
      if (PW_REX.test(e.target.value) === true) {
        this.setState({
          disabled : !disabled
      })
    }
  }

  confirmPassword = (e) => {
    const { password } = this.state;
    this.setState ({
      confirmMessage: (e.target.value === password ? "비밀번호가 일치합니다." :"비밀번호를 다시 확인해주세요.")
    })
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
      <RegisterWrapper>
        <RegisterHeader>
          <RegisterTitle>비밀번호 등록 및 확인</RegisterTitle>
          <RegisterContent>
            <p>로그인 시 사용할 비밀번호 *</p>
            <RegisterInputBox>
              <RegisterInput 
                type="password" 
                name="password"
                value={this.state.password}
                onChange={(e) => this.handleInput(e)}
                onKeyDown={(e) => this.handleDisabled(e)}
                placeholder="비밀번호 입력" 
              />
              <RegisterLabel
                htmlFor="password">영문, 숫자,특수문자를 포함한 8~16자 조합으로 입력해주세요.</RegisterLabel>
              <RegisterInput 
                type="password" 
                name="confirmPw"
                value={this.state.confirmPw}
                disabled={this.state.disabled}
                onChange={(e) => this.handleInput(e)}
                onKeyUp={(e) => this.confirmPassword(e)}
                placeholder="비밀번호 입력" 
              />
              <RegisterLabel
                htmlFor="password">{this.state.confirmMessage}</RegisterLabel>
            </RegisterInputBox>
           </RegisterContent>
           <RegisterContent>
            <p>주민등록번호 앞 7자리 *</p>
            <RegisterInputBox>
              <RegisterInputGroup>
                <RegisterInput 
                  type="text" 
                  name="birth"
                  value={this.state.birth}
                  width="528px"
                  maxLength={6}
                  onChange={(e) => this.handleInputValidation(e)}
                  placeholder="YYMMDD" 
                />
                <span>-</span>
                <RegisterInput 
                  type="text" 
                  name="gender"
                  value={this.state.gender}
                  width="40px"
                  maxLength={1}
                  onChange={(e) => this.handleInputValidation(e)} 
                />
                <span>● ● ● ● ● ●</span>
              </RegisterInputGroup>
              <RegisterLabel
                  htmlFor="birth">{this.state.birthMessage}</RegisterLabel>
              </RegisterInputBox>
           </RegisterContent>
           <RegisterContent>
            <p>필명 *</p>
            <RegisterInputBox>
              <RegisterInput 
                type="text"
                name="nickname"
                value={this.state.nickname}
                onChange={(e) => this.handleInput(e)}
                placeholder="필명"
              />
              <RegisterLabel
                htmlFor="password">필명을 설정한 회원이 독서 습관 갖기에 성공할 확률이 높아요.</RegisterLabel>
              </RegisterInputBox>
           </RegisterContent>
        </RegisterHeader>
        <CompleteButton 
          type="button" onClick={this.goToMain} >가입 완료</CompleteButton>
      </RegisterWrapper>
    )
  }
}

export default withRouter(Register);

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  height: 100vh;
`

const RegisterHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  height: 100vh;
`

const RegisterTitle = styled.div`
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

const RegisterContent = styled.div`
  width: inherit;
  margin-top:10px;
`

const RegisterInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin:5px 0 10px 0;
  width:700px;

  span {
    font-size:12px;
  }
`

const RegisterInput  = styled.input`
  width: ${props => props.width || "700px"};
  height: 40px;
  padding: 11px 12px;
  border: 1px solid rgba(0,0,0,0.2);
  color:grey;
  margin: 5px 0;

    &:disabled {
      background-color: rgba(0,0,0,0.1);
    }
    &:focus {
      border-color:red;
    }
`

const RegisterInputGroup = styled.div`
  display:flex; 
  justify-content:space-between;
  align-items: center;
`

const RegisterLabel= styled.label`
  font-size:12px;
  color: grey;
  margin:5px;

`

const CompleteButton = styled.button`
  width:700px;
  height: 56px;
  background-color: #ffeb60;
  font-size:16px;
  font-weight: 600;
`