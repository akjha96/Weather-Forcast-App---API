class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.detaits = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.visibility = document.getElementById('w-visibility');
        this.wind = document.getElementById('w-wind');
        this.temperature = document.getElementById('w-temperature');
    }

    paint(weather){
        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.weather_descriptions[0];
        this.icon.setAttribute('src', weather.current.weather_icons[0]);
        this.humidity.textContent = `Humidity : ${weather.current.humidity}`;
        this.feelsLike.textContent = `FeelsLike : ${weather.current.feelslike}`;
        this.wind.textContent = `Wind Speed : ${weather.current.wind_speed}`;
        this.visibility.textContent = `Visibility : ${weather.current.visibility}`;
        this.temperature.textContent = `Temperature : ${weather.current.temperature}`
        
        console.log(this.location, this.desc, this.icon, this.humidity, this.feelsLike, this.wind);
        
    }
}