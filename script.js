alert ("Hello It's me Dawa Tenji Sherpa")
let name = prompt("What is your name?", "Guest");
let know = confirm("Do you know me?");
if(know){
alert("Wel Come.....");
}
else
alert("GoodBye......");

let p = fetch("https://goweather.herokuapp.com/weather/Ny");
p.then((response) => {
  console.log(response.status);
  console.log(response.ok);
  return response.json();
}).then((value2) => {
  console.log(value2);
});


const form = document.querySelector('form');
const input = document.querySelector('#location');
const weatherDiv = document.querySelector('#weather');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = input.value;
  const url = `https://goweather.herokuapp.com/weather/${location}`;
  
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const { temperature, wind, description } = data;
      weatherDiv.innerHTML = `
        <h2>${location}</h2>
        <p>Temperature: ${temperature}</p>
        <p>Wind: ${wind}</p>
        <p>Description: ${description}</p>
      `;
    })
    .catch((error) => {
      console.error('There was an error fetching the weather data:', error);
      weatherDiv.innerHTML = '<p>There was an error fetching the weather data. Please try again later.</p>';
    });
});

