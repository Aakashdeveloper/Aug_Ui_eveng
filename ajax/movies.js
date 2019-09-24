const MovieUrl = "https://ngmovies.herokuapp.com/api/getMovies";

function showMovies(){
    $.ajax({
        url:MovieUrl,
        type:'GET',
        dataType:'json',
        success:function(data){
            for(i=0;i<data.length;i++){
                $('#moviesList').append("<p>"+data[i].name+"</p><br/>")
            }
        }

    })
}