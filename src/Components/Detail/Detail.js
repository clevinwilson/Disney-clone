import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
              <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4E9E81584305009D6385F6178D4B6930E97CD6EC4A3B53C818400DEF778FFA9A/scale?width=1440&aspectRatio=1.78&format=jpeg' />
        </Background>
        <Content>
             
        </Content>
    </Container>
      )
}
const Container=styled.div`
position:relative;
display:block;
min-hight:calc(100vh+250px);
overflow:hidden;
margin-top:72px;
`
const Background=styled.div`
position:fixed;
left:0px;
right:0px;
opacity:0.8;
z-index:-1;
width:100%;
height:100%;
img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`
const Content=styled.div`

`

export default Detail