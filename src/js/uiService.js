export function createSearchBar() {
    const searchWrapper = document.createElement("div");
    searchWrapper.setAttribute("id", "search-wrapper");

    const searchElement = document.createElement("input");
    searchElement.type = "search";
    searchElement.setAttribute("id", "search-bar");
    
    const searchButton = document.createElement("button");
    searchButton.appendChild(document.createTextNode("Search"));
    searchButton.setAttribute("id", "search-btn");

    searchWrapper.appendChild(searchElement);
    searchWrapper.appendChild(searchButton);

    return searchWrapper;
}

export function createWeatherInfoUI(label="...", weatherInfo) {
    const current = weatherInfo.current;
    const location = weatherInfo.location;

    const mainContainer = document.getElementById("main-weather-info-wrapper");
    clearElement(mainContainer)

    let container = document.createElement('div');
    container.setAttribute('class', 'weather-info-container');

    let titleTime = document.createElement('div');
    titleTime.setAttribute('class', 'weather-title-time');
    let title = document.createElement('p');
    title.setAttribute('id', 'title');
    title.textContent = label;
    let currentLocation = document.createElement("p");
    currentLocation.textContent = location.name;
    let time = document.createElement('p');
    time.setAttribute('id', 'time');
    time.textContent = location.localtime.split(' ')[1] + (current.is_day ? " PM" : " AM");
    titleTime.appendChild(title);
    titleTime.appendChild(currentLocation);
    titleTime.appendChild(time);

    container.appendChild(titleTime);

    let weatherInfoDiv = document.createElement('div');
    weatherInfoDiv.setAttribute('class', 'weather-info');

    let tempIconInfo = document.createElement('div');
    tempIconInfo.setAttribute('class', 'temp-icon-info');
    let img = document.createElement('img');
    img.setAttribute('src', 'https:'+current.condition.icon);
    img.setAttribute('alt', 'icon');
    let temp = document.createElement('p');
    temp.textContent = current.temp_c + " \u2103";
    tempIconInfo.appendChild(img);
    tempIconInfo.appendChild(temp);

    weatherInfoDiv.appendChild(tempIconInfo);

    let otherInfo = document.createElement('div');
    otherInfo.setAttribute('class', 'other-info');

    let windInfo = document.createElement('div');
    windInfo.setAttribute('class', 'wind-info');
    let windTitle = document.createElement('p');
    windTitle.textContent = 'Wind';
    let wind = document.createElement('p');
    wind.setAttribute('id', 'wind');
    wind.textContent = current.wind_kph + ' km/hr';
    windInfo.appendChild(windTitle);
    windInfo.appendChild(wind);

    let countryInfo = document.createElement('div');
    let countryTitle = document.createElement('p');
    countryTitle.textContent = 'Country';
    let countryName = document.createElement('p');
    countryName.textContent = location.country;
    countryInfo.appendChild(countryTitle);
    countryInfo.appendChild(countryName);

    otherInfo.appendChild(countryInfo);

    let weatherStatus = document.createElement('div');
    weatherStatus.setAttribute('class', 'weather-status');
    let statusTitle = document.createElement('p');
    statusTitle.textContent = 'Status';
    let weatherType = document.createElement('p');
    weatherType.setAttribute('id', 'weather-type');
    weatherType.textContent = current.condition.text;
    weatherStatus.appendChild(statusTitle);
    weatherStatus.appendChild(weatherType);

    otherInfo.appendChild(weatherStatus);

    otherInfo.appendChild(windInfo);

    weatherInfoDiv.appendChild(otherInfo);

    container.appendChild(weatherInfoDiv);

    mainContainer.appendChild(container);
}

function clearElement(element) {
    while (element && element.firstChild) {
        element.removeChild(element.firstChild)
    }
}