import { apiKey } from './env'
const blocMeteo = document.querySelector("#bloc_meteo");
const city = document.querySelector("#city");
const charger = document.querySelector("#charger")

const box = document.createElement("div")
box.style.display = "flex";
box.style.flexDirection = "column";
blocMeteo.appendChild(box);


for (let i = 0; i < 3; i++){
    const title = document.createElement("h2");
    title.style.width = "auto";
    title.style.height = "10vh";
    title.style.backgroundColor = "grey";
    title.style.textAlign = "center";
    title.style.alignContent = "center";
    title.style.paddingTop = "20px";
    title.style.paddingBottom = "20px";
    title.textContent = "vide,";
    title.setAttribute("id","title" +(i+1))
    box.appendChild(title)
}
async function getMeteoJSON(ville) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&q=${ville}&appid=${apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {

        throw new Error(`Erreur HTTP: ${response.status}`);
        } 
        return await response.json();

    } catch (error) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lang=fr&units=metric&q=${ville}&appid=${apiKey}`;
        const response = await fetch(url);
        console.log("erreur lors de la récupération des données météo");
        title1.textContent = "Error"
        title2.textContent = `${response.status}`
        throw error;
    }
}
charger.addEventListener("click", function () {
    const po = city.value
    if (po != "") {
        getMeteoJSON(po).then(data => {
            console.log(data);
            title1.textContent = "Ville: " + data.name;
            title2.textContent = `Température: ${Math.round(data.main.temp)}`;
            title3.textContent = `Temps: ${data.weather[0].description}`;
            const iconCode = data.weather[0].icon;
            const image = document.createElement("img");
            image.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            image.alt = data.weather[0].description;
            Object.assign(image.style, {
                width: "90px",
                height: "90px",
                alignSelf: "start",
            });
            box.appendChild(image);
        })
    }
})

