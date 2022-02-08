import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { Map } from "./components/Map";
import Link from "next/link";
import { useRouter } from "next/router";
import {onAuthStateChanged,signOut} from 'firebase/auth'
import { auth } from '../firebase';
export default function Home() {
  const router=useRouter()
  const [user,setUser]=useState(null)
 useEffect(()=>{
   return onAuthStateChanged(auth,user=>{
      if(user)
      {
        setUser({
          name:user.displayName,
          image:user.photoURL
        })
      }
      else
      {
        setUser(null)
        router.push('/Login')
      }
    })
  },[])
  
  return (
    <Wrapper>
 
       
      <Map />
 
    
      <MainDiv>
        <Header>
          <Logo>ETHIORIDE</Logo>
          <UserAccount>
            <UserName>{user && user.name}</UserName>
            <UserImage alt="" src={user && user.image} onClick={()=>signOut(auth)}></UserImage>
          </UserAccount>
        </Header>
        <MainContent>
          <Link href="/Search">
            <Card>
              Standard <img alt="" src="standard.jpg" />
            </Card>
          </Link>
          <Link href="/Search">
            <Card>
              Luxury <img alt="" src="minivan.jpg" />
            </Card>
          </Link>
          <Link href="/Search">
            <Card>
              Family <img alt="" src="standard.jpg" />
            </Card>
          </Link>
        </MainContent>
        <InputWhere>Where to?</InputWhere>
      </MainDiv>
    </Wrapper>
  );
}
const Wrapper = tw.div`
flex flex-col  bg-lime-50 items-center justify-center h-screen w-screen-500 `;

const MainDiv = tw.div`
flex-1 bg-lime-50 w-screen space-y-10	`;
const Header = tw.div`
flex flex-row justify-between items-center px-45`;
const Logo = tw.div`
text-2xl py-5 px-2	font-bold`;
const UserAccount = tw.div`
flex flex-row items-center space-x-1
`;
const UserName = tw.div``;
const UserImage = tw.img`rounded-xl	cursor-pointer h-10 w-10`;
const MainContent = tw.div`
flex justify-between items-center px-4`;
const Card = tw.button` flex flex-col
rounded-lg shadow-2xl p-5 bg-white text-black transform hover:scale-105 transition duration-500 ease-in-out w-20 items-center justify-items-center md:w-40 lg:w-60 `;
const InputWhere = tw.div`
rounded-lg shadow-2xl   p-5 bg-white text-black m-1 transform hover:scale-105 transition duration-500 ease-in-out`;
