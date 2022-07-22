import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src='/images/viewers-starwars.png' alt='' />
                <video muted={true} autoPlay={true} loop={true} playInline={true}>
                    <source src='/videos/1608229455-star-wars.mp4'></source>
                </video>
            </Wrap>

            <Wrap>
                <img src='/images/viewers-pixar.png' alt='' />
                <video muted={true} autoPlay={true} loop={true} playInline={true}>
                    <source src='/videos/1564676714-pixar.mp4'></source>
                </video>
            </Wrap>

            <Wrap>
                <img src='/images/viewers-national.png' alt='' />
                <video muted={true} autoPlay={true} loop={true} playInline={true}>
                    <source src='/videos/1564676296-national-geographic.mp4'></source>
                </video>
            </Wrap>

            <Wrap>
                <img src='/images/viewers-marvel.png' alt='' />
                <video muted={true} autoPlay={true} loop={true} playInline={true}>
                    <source src='/videos/1564676115-marvel.mp4'></source>
                </video>
            </Wrap>

            <Wrap>
                <img src='/images/viewers-disney.png' alt='' />
                <video muted={true} autoPlay={true} loop={true} playInline={true}>
                    <source src='/videos/1564674844-disney.mp4'></source>
                </video>
            </Wrap>
        </Container>
    )
}
const Container = styled.div`
margin-top:30px;
padding:30px 0px 26px;
display:grid;
grid-gap:25px;
box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/ 73%) 0px 16px 10px -10px;
grid-template-columns:repeat(5,minmax(0,1fr));
@media (max-width:768px){
    grid-template-columns:repeat(1,minmax(0,1fr));
}
`
const Wrap = styled.div`
padding-top:56.25%;
border-radius:10px;
position:relative;
overflow:hidden;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
border:3px solid rgba(249,249,249,0.1);
cursor:pointer;
box-shadow: 2px 6px 10px #000000;
img{
    inset:0;
    height:100%;
    width:100%;
    position:absolute;
    object-fit:cover;
    display:block;
    z-index:1;
    transition:opacity 500ms ease-in-out 0s;
    
}
video{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
    opacity: 0;
    top: 0px;
}
&:hover{
        transform:scale(1.05);
        video{
            opacity:1;
        }
}


`

export default Viewers