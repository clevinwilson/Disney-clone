import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';


function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };
    return (

        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src='/images/slider-scales.jpg'/>
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src='/images/slider-scale.jpg' />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src='/images/slider-badging.jpg' />
                </a>
            </Wrap>

            <Wrap>
                <a>
                    <img src='/images/slider-badag.jpg' />
                </a>
            </Wrap>

        </Carousel>
    )
}

const Carousel=styled(Slider)`
margin-top:30px;

&>button{
    opacity:0;
    height:100%;
    z-index:1;
    
    &:hover{
        opacity:1;
        transition:opacity 0.2s ease 0s
    }
}
ul li button{
    &:before{
        font-size:10px;
        color:rgb(150,158,171);
    }
}

li.slick-active button:before{
    color:white;
}

.slick-list{
    overflow:initial;
}
`
const Wrap = styled.div`
border-radius:4px;
position:relative;
cursor:pointer;
a{
    border-radius:4px;
    box-shadow:rgb(0 0 0/69%) 0px 26px 30px -10px, rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    cursor:pointer;
    position:relative;
    padding:4px;
    img{
        width:100%;
        height:100%;
        padding:4px;
        border-radius:4px;
        &:hover{
            padding:0px;
            border:4px solid;
            transition-duration:300ms;
        }
    }
   
}
`

export default ImgSlider