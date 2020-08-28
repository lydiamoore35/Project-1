////// PROJECT 1 WEATHERWIZE //////

let enlargeDiv = () => {
    $('.day1').css('margin' ,'5%');
    $('.day2').css('margin' ,'5%');
    $('.day3').css('margin' ,'5%');
    $('.day4').css('margin' ,'5%');
    $('.day5').css('margin' ,'5%');
}
$('.submit').on('click' , (event) => {
    enlargeDiv();
    event.preventDefault();
    const zipCode = $('input').val();
    console.log(zipCode);
    
    const promise = $.ajax({
        url:`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=e93b94d22c396d0199209e2c2b28fd6a`,
    });

    promise.then(
        (data)=>{
            console.log(data);
            let fahrenheit
            let feelsLike
                fahrenheit = Math.floor(eval(data.list[0].main.temp*9/5-459.67));
                let date = data.list[0].dt_txt;
                console.log(date);
                let newDate = date.substring(5, date.length -9);
                console.log(newDate);
                console.log((newDate =`${newDate}-${new Date().getFullYear()}`));
                    feelsLike = Math.floor(eval(data.list[0].main.feels_like*9/5-459.67));
                        $('.day1').css('display' , 'inline');
                        $('<div>').text(`The temperature feels like ${feelsLike}ºF`).prependTo('.day1');
                        $('<div>').text(`${newDate} Today's temperature is ${fahrenheit}ºF`).prependTo($('.day1'));
                            if(fahrenheit >= 70){
                            $('#hotGames1').css('display' , 'inline');
                            }
                            else{
                                $('#coldGames1').css('display' , 'inline');
                            }
            
                let fahrenheit2 
                let feelsLike2
                fahrenheit2 = Math.floor(eval(data.list[9].main.temp*9/5-459.67));
                date = data.list[9].dt_txt;
                console.log(date);
                newDate = date.substring(5, date.length -9);
                console.log(newDate);
                console.log((newDate =`${newDate}-${new Date().getFullYear()}`));
                    feelsLike2 = Math.floor(eval(data.list[9].main.feels_like*9/5-459.67));
                        $('.day2').css('display' , 'inline');
                        $('<div>').text(`The temperature feels like ${feelsLike2}ºF`).prependTo('.day2');
                        $('<div>').text(`${newDate} Today's temperature is ${fahrenheit2}ºF`).prependTo($('.day2'));
                            if(fahrenheit2 >= 70){
                            $('#hotGames2').css('display' , 'inline');
                            }
                            else{
                                $('#coldGames2').css('display' , 'inline');
                            }

                let fahrenheit3 
                let feelsLike3
                fahrenheit3 = Math.floor(eval(data.list[18].main.temp*9/5-459.67));
                date = data.list[18].dt_txt;
                console.log(date);
                newDate = date.substring(5, date.length -9);
                console.log(newDate);
                console.log((newDate =`${newDate}-${new Date().getFullYear()}`));          
                    feelsLike3 = Math.floor(eval(data.list[18].main.feels_like*9/5-459.67));
                        $('.day3').css('display' , 'inline');
                        $('<div>').text(`The temperature feels like ${feelsLike3}ºF`).prependTo('.day3');
                        $('<div>').text(`${newDate} Today's temperature is ${fahrenheit3}ºF`).prependTo($('.day3'));
                            if(fahrenheit3 >= 70){
                            $('#hotGames3').css('display' , 'inline');
                            }
                            else{
                                $('#coldGames3').css('display' , 'inline');
                            }

                let fahrenheit4 
                let feelsLike4
                fahrenheit4 = Math.floor(eval(data.list[27].main.temp*9/5-459.67));
                date = data.list[27].dt_txt;
                console.log(date);
                newDate = date.substring(5, date.length -9);
                console.log(newDate);
                console.log((newDate =`${newDate}-${new Date().getFullYear()}`));
                    feelsLike4 = Math.floor(eval(data.list[27].main.feels_like*9/5-459.67));
                        $('.day4').css('display' , 'inline');
                        $('<div>').text(`The temperature feels like ${feelsLike4}ºF`).prependTo('.day4');
                        $('<div>').text(`${newDate} Today's temperature is ${fahrenheit4}ºF`).prependTo($('.day4'));
                            if(fahrenheit4 >= 70){
                            $('#hotGames4').css('display' , 'inline');
                            }
                            else{
                                $('#coldGames4').css('display' , 'inline');
                            }

                let fahrenheit5 
                let feelsLike5
                fahrenheit5 = Math.floor(eval(data.list[36].main.temp*9/5-459.67));
                date = data.list[36].dt_txt;
                console.log(date);
                newDate = date.substring(5, date.length -9);
                console.log(newDate);
                console.log((newDate =`${newDate}-${new Date().getFullYear()}`));
                    feelsLike5 = Math.floor(eval(data.list[36].main.feels_like*9/5-459.67));
                        $('.day5').css('display' , 'inline');
                        $('<div>').text(`The temperature feels like ${feelsLike5}ºF`).prependTo('.day5');
                        $('<div>').text(`${newDate} Today's temperature is ${fahrenheit5}ºF`).prependTo($('.day5'));
                            if(fahrenheit5 >= 70){
                            $('#hotGames5').css('display' , 'inline');
                            }
                            else{
                                $('#coldGames5').css('display' , 'inline');
                            }
                        
                }),

            ()=>{
                console.log('bad request');
            }
});

/////////Pseudo coding//////////

//i need to push the date to an array and then split the array 
//shift or unshift the first 5 elements and then join
//slice off a part of the array we don't want 
//day 1 day 2 day 3 
//code block index and app.jss code cblick last icon on slack 
