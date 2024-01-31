export class WeatherInfo {
    #API_KEY = "3cc93a01996d4195b8f85813231405";
    static current = "https://api.weatherapi.com/v1/current.json";
    static forecast = "https://api.weatherapi.com/v1/forecast.json";
    static weatherObject = null;
    
    constructor() {
        if (!WeatherInfo.weatherObject) {
            WeatherInfo.weatherObject = this;
        }
    }

    async getWeather(city="auto:ip") {
        const url = new URL(WeatherInfo.current);
        url.searchParams.append("key", this.#API_KEY);
        url.searchParams.append("q", city);
        try { 
            const response = await fetch(url, {
                mode: "cors",
            });
            if (!response.ok || response.status !== 200)
                throw Error("Failed to fetch data");
            return response.json();
        } catch(error) {
            console.warn("WARNING :: " + error);
            return null;
        }
    }
}