export interface WeatherCondition {
    main: string;
    description: string;
    icon: string;
  }
  
  export interface WeatherMain {
    temp: number;
    humidity: number;
  }
  
  export interface WeatherWind {
    speed: number;
  }
  
  export interface WeatherData {
    name: string; 
    weather: WeatherCondition[];
    main: WeatherMain;
    wind: WeatherWind;
  }
  