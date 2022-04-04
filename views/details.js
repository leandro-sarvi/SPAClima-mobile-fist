const api = {
    key:`d88f68d030e95c37bc116889f03ed49b`,
    url:`https://api.openweathermap.org/data/2.5/weather`
}
export async function details(root,query){
    try {
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
        let data = await response.json();
        console.log(data);
        if(data.cod == 404){
        root.innerHTML=`
        <nav class="contenedor nav-bar">
        <a href="#home"><i class="fas fa-angle-left"></i></a>
    </nav>
    <div class="contenedor title-details">
        <h3>${data.cod}</h3>
        <span>Ciudad no encontrada</span>
    </div>
        `;
        }else{
            root.innerHTML=`
            <nav class="contenedor nav-bar">
            <a id="back"><i class="fas fa-angle-left"></i></a>
        </nav>
        <div class="contenedor title-details">
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" class="icon"/>
            <h3>${data.name}</h3>
            <span>${data.weather[0].description}</span>
        </div>
        <div class="contenedor centrar-texto">
            <h1>${celsius(data.main.temp)}°</h1>
        </div>
        <div class="flex">
            <h4>01</h4>
            <h4>Weather datails</h4>
        </div>
        <div class="contenedor weather-datails">
            <div class="hr-center">
                <hr>   
            </div>
                 
           <div class="info-weather">   
                <span>Precipitation</span>
                <span>Humidity</span>
                <span>Wind</span>
            </div>
            <div class="sp-details">
                <span>${data.main.pressure}hPa</span>
                <span>${data.main.humidity}%</span>
                <span>${data.wind.speed} m/s</span>
            </div>
        </div>
            `;
        }
        const back = document.getElementById("back");
        back.addEventListener("click",backs);
    } catch (error) {
        
    }
}
function celsius(kelvin){
    return Math.round(kelvin - 273.15)
    }
function backs(){
    history.back();
}