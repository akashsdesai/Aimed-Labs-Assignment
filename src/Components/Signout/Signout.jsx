import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Signout() {
  function handleClick(){
    alert('See You Soon!')
  }

  const Container = styled.section`
    display: flex;
    justify-content: center;
    margin: 40px;
    align-items: center;
    height: 89vh;
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
  @media screen and (max-width:1500px) {
    padding:18px 144px;
  }
  @media screen and (max-width:900px) {
    padding:18px 50px;
  }
`

  return (
    <Container>
      <Link to='/' ><Button onClick={handleClick}>Log Out</Button></Link>
    </Container>
  )
}
