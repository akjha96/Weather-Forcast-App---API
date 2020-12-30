class Weather{
    constructor(city, region){
        this.apiKey = 'c21f875c651056b75849cafe146188ed';
        this.city = city;
        this.region = region;
    }

    async getWeather(){
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city, region){
        this.city = city;
        this.region = region;
    }
}