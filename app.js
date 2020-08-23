//console.log('js attached and loaded');

$('#submit').on('click' , (event) => {
    event.preventDefault();
    const zipCode = $('input').val();
    console.log(zipCode);
    
    const promise = $.ajax({
        url:`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&appid=e93b94d22c396d0199209e2c2b28fd6a`,
    });
    
    promise.then(
        (data)=>{
            //console.log(data);
            for(let i = 1; i <= 45; i+=9){
                $('<div>').text(`${data.list[i].dt_txt} Today's temp is ${data.list[i].main.temp}`).appendTo('.weekDay');
            } 
            
            
        },
        ()=>{
            console.log('bad request');
        }
    );
})
