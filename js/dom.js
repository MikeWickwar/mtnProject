//tests working then a call
console.log('working js');
//call for brekenridge from weather api
var brekGetter = $.ajax({
  url: "http://www.myweather2.com/developer/weather.ashx?uac=E8tRYOl8xe&uref=65ae20fe-d8fd-4fb7-b9cc-8262c85bf223&output=json",
  method: "GET",
  dataType: "json"
});
var bcGetter = $.ajax({
  url: "http://www.myweather2.com/developer/weather.ashx?uac=E8tRYOl8xe&uref=2d6a3032-363d-450c-b1d8-a8dcfa8b8db2&output=json",
  method: "GET",
  dataType: "json"
});
var vGetter = $.ajax({
  url: "http://www.myweather2.com/developer/weather.ashx?uac=E8tRYOl8xe&uref=ab23ef62-4fa9-4497-9f35-6ffe80802e11&output=json",
  method: "GET",
  dataType: "json"
});
var abGetter = $.ajax({
  url: "http://www.myweather2.com/developer/weather.ashx?uac=E8tRYOl8xe&uref=b60d78b2-35e7-4fea-82a1-dd3678586668&output=json",
  method: "GET",
  dataType: "json"
});
var ksGetter = $.ajax({
  url: "http://www.myweather2.com/developer/weather.ashx?uac=E8tRYOl8xe&uref=ac1c3f39-3975-4414-b97b-275069a5ced8&output=json",
  method: "GET",
  dataType: "json"
});


/// api key for google AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4
var dGetter = $.ajax({
    url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Brekenridge&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});


dGetter.done(function(response){
  console.log(response);
});
// real dom interaction starts here

  $('.info').css('display','none')
  // $('.mtn2').css('display','none')
  $('#motdBtn').click(function(){
    console.log('click');
  $('.t1').toggle(800,"swing");
  $('.t2').toggle(1000,"swing");
  $('.t3').toggle(1200,"swing");
  $('.t4').toggle(1400,"swing");
  $('.t5').toggle(1600,"swing");
  $('.t6').toggle(1800,"swing");
  $('.t7').toggle(2000,"swing");
})
$('#motdBtn').on('click',function(){
  $('.info').css('display','block');
})

///page 2 listeners

$('#bc').click(function(){
  bcGetter.done(function(response){
    console.log(response);
    var brekConditions = response.weather.snow_report[0].conditions;
    var brekLstSnow = response.weather.snow_report[0].last_snow_date;
    var brekBase = response.weather.snow_report[0].lower_snow_depth;
    var brekPowder = response.weather.snow_report[0].upper_snow_depth;

    console.log(brekConditions);
    console.log(brekLstSnow);
    console.log(brekBase);
    console.log(brekPowder);
  });


  $('.t1').toggle(800,"swing");
  $('.t2').toggle(1000,"swing");
  $('.t3').toggle(1200,"swing");
  $('.t4').toggle(1400,"swing");
  $('.t5').toggle(1600,"swing");
  $('.t6').toggle(1800,"swing");
  $('.t7').toggle(2000,"swing");
})


$('#vl').on('click',function(){
  $('.t1').toggle(800,"swing");
  $('.t2').toggle(1000,"swing");
  $('.t3').toggle(1200,"swing");
  $('.t4').toggle(1400,"swing");
  $('.t5').toggle(1600,"swing");
  $('.t6').toggle(1800,"swing");
  $('.t7').toggle(2000,"swing");
})
$('#ab').on('click',function(){
  $('.t1').toggle(800,"swing");
  $('.t2').toggle(1000,"swing");
  $('.t3').toggle(1200,"swing");
  $('.t4').toggle(1400,"swing");
  $('.t5').toggle(1600,"swing");
  $('.t6').toggle(1800,"swing");
  $('.t7').toggle(2000,"swing");
})
$('#ks').on('click',function(){
  $('.t1').toggle(800,"swing");
  $('.t2').toggle(1000,"swing");
  $('.t3').toggle(1200,"swing");
  $('.t4').toggle(1400,"swing");
  $('.t5').toggle(1600,"swing");
  $('.t6').toggle(1800,"swing");
  $('.t7').toggle(2000,"swing");
})
$('#br').on('click',function(){
  console.log('here');
})
