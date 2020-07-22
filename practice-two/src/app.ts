import axios from "axios";

const googleMapsScript = document.createElement("script") as HTMLScriptElement;
googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.APIKEY}`;
googleMapsScript.defer = true;
googleMapsScript.async = true;

// declare var google: any;

document.head.appendChild(googleMapsScript);

const GEOCODE_ENDPOINT = "https://maps.googleapis.com/maps/api/geocode/json";

const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address")! as HTMLInputElement;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};
const searchAddressHandler = (event: Event) => {
  event.preventDefault();

  const enteredAddress = addressInput.value;
  console.log({ enteredAddress });
  // send this to Google's API!
  axios
    .get<GoogleGeocodingResponse>(`${GEOCODE_ENDPOINT}`, {
      params: {
        key: process.env.APIKEY,
        address: enteredAddress,
      },
    })
    .then(res => {
      if (res.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = res.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById("map")!, {
        center: coordinates,
        zoom: 8,
      });
       new google.maps.Marker({position: coordinates, map: map});

    })
    .catch(err => {
      alert(err.message);
      console.log(err);
    });
};

form.addEventListener("submit", searchAddressHandler);
