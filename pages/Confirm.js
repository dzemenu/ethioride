import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { Map } from "./components/Map";
import { useRouter } from "next/router";
import { taxiList } from "./data/taxiList";
function Confirm() {
  const [pCorrdinates, setPcorrdinates] = useState([]);
  const [dCorrdinates, setDcorrdinates] = useState([]);
  const [rideDuration, setRideDuration] = useState(0);
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const pickupCorrdinates = () => {
    const location = pickup;
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZHplbWVudSIsImEiOiJja3lteHlicHAyY3IyMnZwMGJjczlkcWJvIn0.DptAsDX-6_E2EzBXS5RhXw",
          limit: 1,
        })
    ).then((res) =>
      res.json().then((data) => setPcorrdinates(data.features[0].center))
    );
  };
  const dropoffCorrdinates = () => {
    const location = dropoff;
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiZHplbWVudSIsImEiOiJja3lteHlicHAyY3IyMnZwMGJjczlkcWJvIn0.DptAsDX-6_E2EzBXS5RhXw",
          limit: 1,
        })
    ).then((res) =>
      res.json().then((data) => setDcorrdinates(data.features[0].center))
    );
  };
  const ridePrice=()=>{
      fetch( `https://api.mapbox.com/directions/v5/mapbox/driving/${pCorrdinates[0]},${pCorrdinates[1]};
      ${dCorrdinates[0]},${dCorrdinates[1]}?annotations=maxspeed&overview=full&geometries=geojson&access_token=pk.eyJ1IjoiZHplbWVudSIsImEiOiJja3lteHlicHAyY3IyMnZwMGJjczlkcWJvIn0.DptAsDX-6_E2EzBXS5RhXw`)
      .then(res=>res.json())
      .then(data=>setRideDuration(data.routes[0].duration/100))
  }
  useEffect(() => {
    pickupCorrdinates();
    dropoffCorrdinates();
    if(pCorrdinates.length>0 && dCorrdinates.length>0)
    ridePrice();
  }, []);
  return (
    <Wrapper>
      {dCorrdinates.length > 0 ? (
        <Map dropoff={pCorrdinates} pickup={dCorrdinates} />
      ) : null}
      <ListContainer>
     {   taxiList.map((taxi,index)=>
        <ListItem key={index}>
          {" "}
          <Image alt="" src={taxi.img} /> {'$'+(taxi.basePrice +rideDuration).toFixed(2)} birr
        </ListItem>
        )}
        <ConfirmButton>Confirm your ride</ConfirmButton>
      </ListContainer>
    </Wrapper>
  );
}

export default Confirm;
const Wrapper = tw.div`
flex h-screen flex-col justify-between `;
const ListContainer = tw.div`
flex-1 space-y-4`;
const ConfirmButton = tw.button`
rounded-lg bg-black text-white p-2 w-full `;
const ListItem = tw.div`
flex-row   


`;
const Image = tw.img`rounded-xl mx-6 w-20 h-20`;
