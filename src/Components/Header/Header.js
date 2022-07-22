import { useEffect } from 'react';
import styled from 'styled-components';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from '../Firebase/firebase';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { setUserLoginDetails, setSignoutState, selectUserEmail, selectUserName, selectUserPhoto } from '../../features/user/userSlice'

function Header(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector(selectUserName);
    const userphoto = useSelector(selectUserPhoto)
    function setUser(user) {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }
    const handleAuth = () => {
        if(!username){
            signInWithPopup(auth, provider)
                .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    setUser(result.user)
                    // ...
                })
        }else{

                const auth = getAuth();
                signOut(auth).then(() => {
                    dispatch(setSignoutState());
                    navigate('/');
                }).catch((error) => {
                    // An error happened.
                });
           
        }
    }
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate('/home')
            }
        })
    }, [username])

    return (
        <Nav>
            <LogoContainer>
                <Logo src='images/logo.svg' />
            </LogoContainer>
            {
                !username ?
                    <></>
                    :
                    <NavMenu>
                        <a className='haaa' href='/home'>
                            <img src="images/home-icon.svg" alt="" />
                            <span>HOME</span>
                        </a>
                        <a href='/home'>
                            <img src="images/search-icon.svg" alt="" />
                            <span>SEARCH</span>
                        </a>
                        <a href='/home'>
                            <img src="images/watchlist-icon.svg" alt="" />
                            <span>WATCHLIST</span>
                        </a>
                        <a href='/home'>
                            <img src="images/original-icon.svg" alt="" />
                            <span>ORIGINALS</span>
                        </a>
                        <a href='/home'>
                            <img src="images/movie-icon.svg" alt="" />
                            <span>MOVIES</span>
                        </a>
                        <a href='/home'>
                            <img src="images/series-icon.svg" alt="" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
            }
            <LoginBtnContainer>
                {!username ?
                    <LoginBtn onClick={handleAuth}>Login</LoginBtn>

                    :
                    <SignOut>
                        <UserImage src={userphoto} />
                        <DropDown onClick={handleAuth} ><span>Sign Out</span></DropDown>
                    </SignOut>
                }

            </LoginBtnContainer>
        </Nav>
    )
}

const DropDown = styled.div`
    top: 48px;
    position: absolute;
    right: 0px;
    background: rgb(19,19,19);
    padding: 10px;
    border: 1px solid rgb(151,151,151,0.34);
    border-radius: 4px;
    letter-spacing: 2px;
    font-size:14px;
    opacity:0;
    width: 100px;

`
const SignOut=styled.div`
position:relative;
display:flex;
height: 48px;
width: 48px;
justify-content: center;
align-items: center;
&:hover{
    ${DropDown}{
        opacity:1;
        transition-duration:1s;
    }
}
`

const UserImage = styled.img`
height: 40px;
width: 40px;
border-radius: 50%;
`

const Nav = styled.div`
display:flex;
right:0;
left:0;
top:0;
background-color:rgb(9 11 19);
height:70px;
align-items: center;
justify-content: space-between;
`
const LogoContainer = styled.a`
padding: 0px;
width: 80px;
margin-top: 4px;
max-height: 70px;
transition: all 0.2s ease 0s;
font-size: 0px;
display: inline-block;
margin-left: 16px;

`

const Logo = styled.img`

`
const LoginBtnContainer = styled.div`
color:white;
button:hover{
    color:rgb(9 11 19);
    background-color:white;
}
`
const LoginBtn = styled.button`
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
const NavMenu = styled.div`
padding:0 20px;
align-items:center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px auto 0px 25px;
position: relative;
a{
    display:flex;
    align-items: center;
    padding: 0px 12px;
}
img{
    max-width: 20px;
    width: 20px;
    z-index: auto;
    height: 20px;
}
span{
        color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    margin-left: 8px;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;

    &:before{
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
    }
}

a:hover{
    span:before{
        visibility: visible;
        transform: scaleX(1);
        opacity: 1 !important;
    }
}
@media (max-width:768px)  {
    display: none;
}
`
export default Header