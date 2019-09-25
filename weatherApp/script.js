const Weatherurl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Helsinki&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

function getWeather(){
    alert('inside')
    $.ajax({
        url:Weatherurl,
        type:'GET',
        dataType:'json',
        success:function(data){
            for(i=0;i<data.list.length;i++){
                $('#weather').append(
                    "<div class='card' style='width:200px'>"+
                        "<div class='card-body'>"+
                            "<h4 class='card-title'>"+
                                data.list[i].temp.day+"°C"+
                            "</h4>"+
                            "<p class='card-text'>"+
                                Date(data.list[i].dt)+
                            "</p>"+
                        "</div>"+
                    "</div>"
                )
            }
            
        }
    })
}