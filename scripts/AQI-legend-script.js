function legendEventHandling() {
    let legendVisible = false;
    let aqiLegend = document.getElementById("aqi-legend");
    aqiLegend.addEventListener("click",function() {
        if( legendVisible == false ) {
            aqiLegend.src = "../assets/AQI-legend-content.png";
            legendVisible = true
            console.log("legend");
        } else {
            aqiLegend.src = "../assets/AQI-legend.png";
            legendVisible = false;
            console.log("base");
        }
        console.log("click");
    });
}