import React from 'react';
import styled from 'styled-components';

function Header(props) {
  return (
    <Nav>
       <LogoContainer>
              <Logo src='images/logo.svg' />
       </LogoContainer>
       <LoginBtnContainer>
            <LoginBtn>Login</LoginBtn>
       </LoginBtnContainer>
    </Nav>
  )
}

const Nav=styled.div`
display:flex;
right:0;
left:0;
top:0;
background-color:rgb(9 11 19);
height:70px;
align-items: center;
justify-content: space-between;
`
const LogoContainer=styled.a`
padding: 0px;
width: 80px;
margin-top: 4px;
max-height: 70px;
transition: all 0.2s ease 0s;
font-size: 0px;
display: inline-block;
margin-left: 16px;
`

const Logo=styled.img`

`
const LoginBtnContainer = styled.div`
color:white;
`
const LoginBtn=styled.button`
background-color: rgba(0, 0, 0, 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid rgb(249, 249, 249);
border-radius: 4px;
transition: all 0.2s ease 0s;
color:white;
margin-right:16px;
`
export default Header