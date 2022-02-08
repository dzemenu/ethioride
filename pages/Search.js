import Link from "next/link";
import React ,{useState}from "react";
import tw from "tailwind-styled-components/dist/tailwind";
function Search() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  return (
    <InputBox>
      <Input placeholder="Enter pickup location" value={pickup} onChange={(e)=>setPickup(e.target.value)}/>
      <Input placeholder="Where to?" value={dropoff} onChange={(e)=>setDropoff(e.target.value)}/>
      <Link href={{pathname:'/Confirm',query:{pickup:pickup,dropoff:dropoff}}}>
        <ConfirmButton>Confirm</ConfirmButton>
      </Link>
    </InputBox>
  );
}

export default Search;
const InputBox = tw.div`
flex flex-col flex-1`;
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-lg p-2`;
const ConfirmButton = tw.button`
rounded-lg bg-black text-white p-2`;
