import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import eye from '../../assets/eye.svg'
import { Link } from 'react-router-dom'
export default function Login() {
  function handleClick(){
    alert('Welcome!')
  }

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 40px;
  align-items: center;
  height: 89vh;
  @media screen and (max-width:900px) {
    flex-direction: column-reverse;
    height: fit-content;
    gap:40px;
  }

`

const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 0.8;
  justify-content: center;

  img{
    width:70%;
  }
  @media screen and (max-width:1500px) {
    flex: 1;
  }
  @media screen and (max-width:1100px) {
    flex: 1.2;
  }

  

`

const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1.2;
  justify-content: center;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  height: 100%;
  border-radius: 12px;
  padding:0 112px;
  h1{
    font-size:48px;
    margin:40px 0 ;
  }

  h2{
    margin:40px 0;
    font-size:18px;
    font-weight:400;
    span{
      font-weight:700;
      color:#F78719;
      text-decoration:underline;
    }
  }
  @media screen and (max-width:1500px) {
    flex: 1;
  }
  @media screen and (max-width:1100px) {
    flex: 0.8;
  }
  @media screen and (max-width:900px) {
    padding:0 30px;
  }
`
const LoginID= styled.div`
  display: flex;
  flex-direction: column;
  width:100%;

  input{
    border-radius: 8px;
    border: 1px solid rgba(4, 7, 47, 0.40);
    padding:18px 16px;
    font-size:18px;
    font-weight:500;
    &:focus{
      outline: none;
    }
  }

  label{
    font-size:18px;
    margin-bottom:16px;
    font-weight:500;
  }
`

const Password = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  margin-top:32px;

  label{
    font-size:18px;
    margin-bottom:16px;
    font-weight:500;
  }

  .password{
    border-radius: 8px;
    border: 1px solid rgba(4, 7, 47, 0.40);
    padding:18px 16px;
    display:flex;
    align-items:center;
    justify-content: space-between;

    input{
      font-size:18px;
      font-weight:500;
      display:flex;
      flex:1;
      border: none;
      &:focus{
        outline: none;
      }
    }

    img{
      width:24px;
      height:24px;
      cursor:pointer;
    }
  }
`
const Check = styled.div`
  display: flex;
  width:100%;
  justify-content: space-between;
  margin-top:20px;

  .left{
    gap:16px;
    display: flex;
    flex-direction: column;
  }
  .leftTop, .leftBottom{
    display: flex;
    gap:5px;
    align-items: center;

    input{
      border-radius: 4px;
      border: 1px solid #737B86;
      width:16px;
      height:16px;
      cursor:pointer;
    }

    p{
      font-size:18px;
      font-weight: 400;
      color:#737B86;

      span{
        color:#F78719;
        text-decoration:underline;
        cursor:pointer;
      }
    }

    @media screen and (max-width:900px) {
      align-items: center;
    }
  }

  .right{
    font-size:18px;
    font-weight: 400;
    color:#F78719;
    cursor:pointer;
  }

  @media screen and (max-width:900px) {
    flex-direction: column-reverse;
    height: fit-content;
    gap:40px;
    align-items: center;
  }
`

const Button = styled.button`
  font-size:18px;
  padding:18px 244px;
  border-radius:8px;
  border:none;
  margin-top:40px;
  background-color: #1575A7; 
  color:white;
  cursor:pointer;
  transition: all 0.4s;
  &:hover{
    transform: scale(1.02);
    background-color: #3a98c2;
  }
  @media screen and (max-width:1500px) {
    padding:18px 144px;
  }
  @media screen and (max-width:900px) {
    padding:18px 50px;
  }
`

  return (
    <Container>
      <Left>
        <img src={logo} alt='logo' />
      </Left>
      <Right>
        <h1>Login</h1>
        <LoginID>
          <label htmlFor='id'>Login ID</label>
          <input id='id' placeholder='Enter Login ID' type='text' />
        </LoginID>
        <Password>
          <label htmlFor='id'>Password</label>
          <div className='password'>
            <input placeholder='Enter Password' id='id' type='password' />
            <img src={eye} alt='eye' />
          </div>
        </Password>
        <Check>
          <div className='left'>
            <div className='leftTop'>
              <input type='checkbox'/>
              <p>Remember Me</p>
            </div>
            <div className='leftBottom'>
              <input type='checkbox' />
              <p>Agree to <span>Terms & Conditions</span></p>
            </div>
          </div>
          <div className='right'>
              <p>Change Password</p>
          </div>
        </Check>
        <Link to='/login'><Button onClick={handleClick}>Login</Button></Link>
        <h2>Don’t have an account? <span>Register Here</span></h2>
      </Right>
    </Container>
  )
}
