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
            const fahrenheit = Math.floor(eval(data.list[0].main.temp*9/5-459.67));
            //for(let i = 1; i <= 45; i+=9){
                $('.weekDay').text(`${data.list[0].dt_txt} Today's temp is ${fahrenheit}º`);
                    if(fahrenheit > 70){
                    $('.hotGames').css('display' , 'inline').appendTo($('.weekDay'));
                    }
            //}     
        }),
        ()=>{
            console.log('bad request');
        }
});

//hotGames
//<a href="https://www.parents.com/fun/activities/outdoor/great-outdoor-games/?slide=slide_93e4a86f-40fc-4527-9c18-5c0db32c870f#slide_93e4a86f-40fc-4527-9c18-5c0db32c870f"game link

//coldGames
{/* <a href="https://kidactivities.net/winter-time-inside-games/" */}


