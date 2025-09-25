import { apiKey } from './env.js'
import './style.css'

const meteo = fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apiKey)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  });
const apiMeteo = async () => {
  return await fetch('https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=' + apiKey)
    .then(response => {
      return response.json();
    });
}
  
apiMeteo().then(json => {
  console.log(json.coord.lon);
});