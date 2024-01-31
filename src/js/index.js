import "../style/style.css";
import { createSearchBar, createWeatherInfoUI } from "./uiService";
import { WeatherInfo } from "./fetchService";

document.body.insertBefore(createSearchBar(), document.body.firstElementChild)

window.onload = async () => {
    const response = await new WeatherInfo().getWeather();
    if (response)
        createWeatherInfoUI("current", response);
}

document.getElementById("search-btn").addEventListener('click', async () => {
    const response = await new WeatherInfo().getWeather(
        document.getElementById("search-bar").value
    );
    if (response)
        createWeatherInfoUI("current", response);
})