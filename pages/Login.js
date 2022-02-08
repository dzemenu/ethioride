import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import {signInWithPopup,onAuthStateChanged} from 'firebase/auth'
import {auth,provider} from '../firebase'
import { useRouter } from 'next/router';
const Login = () => {
    const router=useRouter()
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user)
             router.push('/')
        })
    },[])
  return <Wrapper>  
          <Logo>ETHIORIDE</Logo>
          <Title>login to access your account</Title>
      <SignButton onClick={()=>signInWithPopup(auth,provider)}>sign in with google</SignButton>
  </Wrapper>
};

export default Login;

const SignButton=tw.button`
bg-black text-white mt-8 w-full py-4 self-center rounded-3xl text-center
`
const Wrapper=tw.div` flex flex-col h-screen w-screen  bg-lime-50 p-4`
const Logo = tw.div`
text-2xl py-5 px-2	font-bold`;
const Title = tw.div`
text-4xl pt-4 pb-2 text-center text-gray-500`;