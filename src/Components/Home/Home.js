import React from 'react'
import styled from 'styled-components'
import ImgSlider from '../ImgSlider/ImgSlider'
import NewDisney from '../NewDisney/NewDisney'
import Recommends from '../Recommends/Recommends'
import Viewers from '../Viewers/Viewers';
import { useEffect } from 'react';
import { db } from '../Firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import movieSlice, { setMovies } from '../../features/movie/movieSlice';
import { selectUserName } from '../../features/user/userSlice';
import { collection, getDocs } from "firebase/firestore";
import { async } from '@firebase/util'

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];

  useEffect(() => {
    getDocs(collection(db, "movies")).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            recommends = [...recommends, { id: doc.id, ...doc.data() }]
            break;
          case 'new':
            newDisneys=[...newDisneys,{id:doc.id,...doc.data()}]
            break;
        }
        dispatch(
          setMovies({
            recommend: recommends,
            newDisney:newDisneys
          })
        )
      });
    })



  }, [userName])

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
    </Container>
  )
}

const Container = styled.main`
position:relative;
min-height:calc(100vh - 250px);
overflow-x:hidden;
display:block;
padding:0 calc(3.5vw + 5px);

&:after{
  background:url(/images/home-background.png) center center / cover no-repeat fixed;
  content:"";
  position:absolute;
  inset:0px;
  opacity:1;
  z-index:-1;
}
`
export default Home