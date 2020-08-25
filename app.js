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
            const temp = Math.floor(eval(data.list[0].main.temp*9/5-459.67));
            //for(let i = 1; i <= 45; i+=9){
                $('<div>').css('background-color', 'black').css('padding','20px').css('margin-top','40px').text(`${data.list[0].dt_txt} Today's temp is ${temp}º`).appendTo('.weekDay');
            //}     
        }),
        ()=>{
            console.log('bad request');
        }
});