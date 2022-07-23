import React from 'react'
import styled from 'styled-components'
import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { db } from '../Firebase/firebaseV8';
import { collection, query, where, getDocs } from "firebase/firestore";
function Detail() {
    const {id}=useParams();
    const [movieDetails,setMovieDetails]=useState({});

    useEffect(()=>{

        // const q = query(collection(db, "movies"), where("id", "==", id));
        // getDocs(q).then((querySnapshot)=>{
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         console.log(doc.id, " => ", doc.data());
        //     });
        // })
        db.collection("movies").where("title", "==", "A tail of two kitties")
            .get()
            .then((querySnapshot) => {
                console.log(querySnapshot);
                querySnapshot.forEach((doc) => {
                    setMovieDetails(doc.data())
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });



    },[id])
    return (
        <Container>
            <Background>
                <img src={movieDetails.backgroundImg} />
            </Background>
            <ImageTitle>
                <img src={movieDetails.titleImg} />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src='/images/play-icon-black.png' />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src='/images/play-icon-white.png' />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWathch>
                        <div>
                            <img src='/images/group-icon.png'/>
                        </div>
                    </GroupWathch>
                </Controls>
                <SubTitle>
                    {movieDetails.subTitle}
                </SubTitle>
                <Description>
                    {movieDetails.description}
                </Description>
            </ContentMeta>
        </Container>
    )
}
const Container = styled.div`
position:relative;
display:block;
min-hight:calc(100vh+250px);
overflow:hidden;
margin-top:72px;
`
const Background = styled.div`
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
const ImageTitle = styled.div`
display:flex;
margin-top: 85px;
-webkit-box-pack: start;
justify-content: flex-start;
height: 16vw;
width: 100%;
min-height: 170px;
padding-bottom: 24px;
margin-left: 40px;
img{
    max-width:600px;
    max-height:200px;
    width:35vw;
}
@media(max-width:768px){
    margin-top:60px;
    img{
    max-width:600px;
    max-height:200px;
    width:61vw;
}
}
`
const ContentMeta = styled.div`

`
const Controls = styled.div`
display:flex;


`
const Player = styled.div`
display: flex;
margin: 0px 0px 22px 0px;
background-color: white;
color: black;
margin-left:20px;
padding:0px 24px;
align-items: center;
justify-content: center;
letter-spacing: 1.8px;
height: 56px;
border-radius: 4px;
cursor: pointer;
border: none;
font-size: 15px;
&:hover{
    background:rgb(198 198 198);
}
@media(max-width:768px){
    height:45px;
    padding:0 12px;
    font-size:12px;
    margin:0px 10px 0px 0px;
    margin-left:15px;
    img{
        width:25px;
    }
}
`
const Trailer = styled(Player)`
background:rgb(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
`
const AddList = styled.div`
margin-left: 16px;
    height: 53px;
    width: 53px;
    background: rgb(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid white;
    span{
             background-color:rgb(249,249,249);
             display:inline-block;
             &:first-child{
                 height:2px;
                 transform:translate(1px,0px)rotate(0deg);
                 width:16px;
            }
            &:nth-child(2){
                height:16px;
                transform: translatex(-8px) rotate(0deg);
                width:2px;
            }
        }
`
const GroupWathch=styled.div`
margin-left: 16px;
height: 53px;
width: 53px;
background: rgb(0, 0, 0, 1.6);
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
border: 2px solid white;
img{
    width:100%;
}
`
const SubTitle=styled.div`
font-size:15px;
min-hight:20px;
margin-left:15px;

@media(max-width:768px){
    font-size:12px;
}
`
const Description=styled.div`
line-height:1.4;
font-size:20px;
padding:16px 0px;
color:rgb(249,249,249);
margin-left:15px;

@media(max-width:768px){
  font-size:14px;
}
`

export default Detail