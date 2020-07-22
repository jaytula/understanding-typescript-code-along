import axios from 'axios';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

const form = document.querySelector("form")! as HTMLFormElement;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const searchAddressHandler = (event: Event) => {
  event.preventDefault();

  const enteredAddress = addressInput.value;
  console.log({ enteredAddress });
  // send this to Google's API!
  axios.get(`${GEOCODE_ENDPOINT}`, {
    params: {
      key: process.env.APIKEY,
      address: enteredAddress
    }
  }).then(res => {
    console.log(res);
  })
};




form.addEventListener("submit", searchAddressHandler);
