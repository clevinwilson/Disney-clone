import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NewDisney() {
    return (
        <Container>
            <h4>New Disney +</h4>
            <Content>
                <Wrap>
                    <Link to=''>
                        <img src='/images/5ffca0edab07e72e30c8e3c7.jpg' />
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to=''>
                        <img src='/images/5ffca0edab07e72e30c8e3c7.jpg' />
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to=''>
                        <img src='/images/5ffca0edab07e72e30c8e3c7.jpg' />
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to=''>
                        <img src='/images/5ffca0edab07e72e30c8e3c7.jpg' />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}
const Container = styled.div`
padding:0 0 26px;
`
const Content = styled.div`
display:grid;
grid-gap:25px;
gap:25px;
grid-template-columns:repeat(4,minmax(0,1fr))
`
const Wrap = styled.div`
top-padding:56px;
overflow:hidden;
border-radius:10px;
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
opacity:1;
border: 3px solid rgba(249, 249, 249, 0.1);
position:relative;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img{
    inset:0;
    height:100%;
    width:100%;
    object-fit:cover;
    opacity:1;
    z-index:1;
    ransition:opacity 500ms ease-in-out 0s;
}
&:hover{
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`
export default NewDisney