//console.log('js attached and loaded');

$('.submit').on('click' , (event) => {
    event.preventDefault();
    const zipCode = $('input').val();
    console.log(zipCode);
    
    const promise = $.ajax({
        url:`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=e93b94d22c396d0199209e2c2b28fd6a`,
    });

    let dateArr = [];
    let hotGames = ['game1', 'game2'];
    let coldGames = ['game1', 'game2'];

    promise.then(
        (data)=>{
            console.log(data);
            let fahrenheit
            let feelsLike
            //for(let i = 1; i <= 45; i+=9){
                fahrenheit = Math.floor(eval(data.list[0].main.temp*9/5-459.67));
                let date = data.list[0].dt_txt;
                // console.log(typeofdate);
                // console.log(date);
                // let newDate = date.substring(5, date.length -9);
                // console.log(newDate);
                // console.log((newDate = `${newDate}-${newDate().getFullYear()}`));
                //     $('.day1').text(`${data.list[0].dt_txt} Today's temperature is ${fahrenheit}ºF`);
                feelsLike = Math.floor(eval(data.list[0].main.feels_like*9/5-459.67));
                //dateArr.push(date);
                //console.log(dateArr);
                //let dateString = date.toString('');
                //console.log(dateString);
                // console.log(date);
                // date.substring(0, 5);
                // console.log(date);
                $('.day1').css('display' , 'inline');
                $('<div>').text(`The temperature feels like ${feelsLike}ºF`).prependTo('.day1');
                $('<div>').text(`${data.list[0].dt_txt} Today's temperature is ${fahrenheit}ºF`).prependTo($('.day1'));
                    if(fahrenheit >= 70){
                        //for(let i = 0; i <= hotGames.length; i++)
                        //$('<li>').appendTo($('<'))
                    $('#hotGames1').css('display' , 'inline');
                    }
                    else{
                        $('#coldGames1').css('display' , 'inline');
                    }
            
                let fahrenheit2 
                let feelsLike2
                fahrenheit2 = Math.floor(eval(data.list[9].main.temp*9/5-459.67));
                date = data.list[9].dt_txt;
                feelsLike2 = Math.floor(eval(data.list[9].main.feels_like*9/5-459.67));
                $('.day2').css('display' , 'inline');
                $('<div>').text(`The temperature feels like ${feelsLike2}ºF`).prependTo('.day2');
                $('<div>').text(`${data.list[9].dt_txt} Today's temperature is ${fahrenheit2}ºF`).prependTo($('.day2'));
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
                feelsLike3 = Math.floor(eval(data.list[18].main.feels_like*9/5-459.67));
                $('.day3').css('display' , 'inline');
                $('<div>').text(`The temperature feels like ${feelsLike3}ºF`).prependTo('.day3');
                $('<div>').text(`${data.list[18].dt_txt} Today's temperature is ${fahrenheit3}ºF`).prependTo($('.day3'));
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
                feelsLike4 = Math.floor(eval(data.list[27].main.feels_like*9/5-459.67));
                $('.day4').css('display' , 'inline');
                $('<div>').text(`The temperature feels like ${feelsLike4}ºF`).prependTo('.day4');
                $('<div>').text(`${data.list[27].dt_txt} Today's temperature is ${fahrenheit4}ºF`).prependTo($('.day4'));
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
                feelsLike5 = Math.floor(eval(data.list[36].main.feels_like*9/5-459.67));
                $('.day5').css('display' , 'inline');
                $('<div>').text(`The temperature feels like ${feelsLike5}ºF`).prependTo('.day5');
                $('<div>').text(`${data.list[36].dt_txt} Today's temperature is ${fahrenheit5}ºF`).prependTo($('.day5'));
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


//hotGames
//<a href="https://www.parents.com/fun/activities/outdoor/great-outdoor-games/?slide=slide_93e4a86f-40fc-4527-9c18-5c0db32c870f#slide_93e4a86f-40fc-4527-9c18-5c0db32c870f"game link

//coldGames
{/* <a href="https://kidactivities.net/winter-time-inside-games/" */}

//i need to push the date to an array and then split the array 
//shift or unshift the first 5 elements and then join
//slice off a part of the array we don't want 
//day 1 day 2 day 3 
//code block index and app.jss code cblick last icon on slack 
