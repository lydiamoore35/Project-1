//console.log('js attached and loaded');

$('.submit').on('click' , (event) => {
    event.preventDefault();
    const zipCode = $('input').val();
    console.log(zipCode);
    
    const promise = $.ajax({
        url:`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=e93b94d22c396d0199209e2c2b28fd6a`,
    });
    
    promise.then(
        (data)=>{
            console.log(data);
            let fahrenheit
            for(let i = 1; i <= 45; i+=9){
                fahrenheit = Math.floor(eval(data.list[i].main.temp*9/5-459.67));
                // let date = data.list[0].dt_txt
                // let asd = date.toString();
                // console.log(asd);
                // console.log(date);
                // date.substring(0, 5);
                // console.log(date);
                $('.weekDay').text(`${data.list[i].dt_txt} Today's temp is ${fahrenheit}ºF`);
                    if(fahrenheit >= 70){
                    $('.hotGames').css('display' , 'inline').appendTo($('.weekDay'));
                    }
                    else{
                        $('.coldGames').css('display' , 'inline').appendTo($('.weekDay'));
                    }
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
