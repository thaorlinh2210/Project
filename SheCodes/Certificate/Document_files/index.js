let weather = [
  { city: "paris", temp: 19.7, humidity: 80 },
  { city: "tokyo", temp: 17.3, humidity: 50 },
  { city: "lisbon", temp: 30.2, humidity: 20 },
  { city: "san francisco", temp: 20.9, humidity: 100 },
  { city: "oslo", temp: -5, humidity: 20 },
];

let enterCity = prompt("Enter a city");
for (let i = 0; i < weather.length; i++) {
  if (enterCity === weather[i].city) {
    alert(
      `It is currently ${weather[i].temp.ceil()}° in ${
        weather[i].city
      } with a humidity of ${weather[i].humidity}%`
    );
  } else {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${enterCity}`
    );
  }
}
