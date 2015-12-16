//tests working then a call
console.log('working js');
//call for brekenridge from weather api
var brekGetter = $.ajax({
  url: "http://www.myweather2.com/developer/weather.ashx?uac=E8tRYOl8xe&uref=65ae20fe-d8fd-4fb7-b9cc-8262c85bf223&output=json",
  method: "GET",
  dataType: "json"
});
//bc call and done
var bcGetter = $.ajax({
  url: "http://www.myweather2.com/developer/weather.ashx?uac=E8tRYOl8xe&uref=6060e824-7de4-4b2a-8db3-201b54dc01c3&output=json",
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

  dGetter.done(function(response){
    console.log(response);
    var dTime = response.rows[0].elements[0].duration.text;
    console.log(dTime);
    $(".togglers").hide();
    $("#t6").html("<div class='box info t1'><h3 id='he3'>&#x2744 Average Drive Time: "+response.rows[0].elements[0].duration.text+"</h2>")
    $("#t7").html("<div class='box info t1'><h3 id='he3'>&#x2744 Distance from Denver: "+response.rows[0].elements[0].distance.text+"</h2>")


  });

  bcGetter.done(function(response){
    console.log('click');
    var bcConditions = response.weather.snow_report[0].conditions;
    var bcLstSnow = response.weather.snow_report[0].last_snow_date;
    var bcBase = response.weather.snow_report[0].lower_snow_depth;
    var bcPowder = response.weather.snow_report[0].upper_snow_depth;
    console.log(bcConditions);
    console.log(bcLstSnow);
    console.log(bcBase);
    console.log(bcPowder);
    console.log(response);
    // return response
    // return bcConditions
    // $('.togglers').hide();
    $('#t1').html("<div class='box info t1'><h2 id='he2'>&#x2744 Beaver Creek</h2>")
    $('#t2').html("<div class='box info t1'><h3 id='he3'>&#x2744 Conditions: "+bcConditions+"</h3>")
    $('#t3').html("<div class='box info t1'><h3 id='he3'>&#x2744 Last Snow Date: "+bcLstSnow+"</h3>")
    $('#t4').html("<div class='box info t1'><h3 id='he3'>&#x2744 Snow Base: "+bcBase+"</h3>")
    $('#t5').html("<div class='box info t1'><h3 id='he3'>&#x2744 Powder: "+bcPowder+"</h3>")
    $('.togglers').show();
  });
  // $('#t1').append("<div class='box info t1'><h2 id='he2'>&#x2744 Beaver Creek</h2>")
  // $('#t1').append("<div class='box info t1'><h2 id='he2'>&#x2744 Beaver Creek</h2>")

  // $('.t1').toggle(800,"swing");
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
