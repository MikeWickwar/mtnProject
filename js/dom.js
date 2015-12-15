//tests working then a call
console.log('working js');
//call for brekenridge from weather api
var getter = $.ajax({
  url: "http://www.myweather2.com/developer/weather.ashx?uac=E8tRYOl8xe&uref=65ae20fe-d8fd-4fb7-b9cc-8262c85bf223&output=json",
  method: "GET",
  dataType: "json"
});
/// api key for google AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4
var dGetter = $.ajax({
  url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Brekenridge&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});


getter.done(function(response){
  console.log(response);
});
dGetter.done(function(response){
  console.log(response);
});
// real dom interaction starts here
  $('.info').css('display','none')
  $('#motdBtn').click(function(){
    console.log('click');
  $('.togglers1').toggle(800,"swing");
  $('.togglers2').toggle(1000,"swing");
  $('.togglers3').toggle(1200,"swing");
  $('.togglers4').toggle(1400,"swing");
  $('.togglers5').toggle(1600,"swing");
  $('.togglers6').toggle(1800,"swing");
  $('.togglers7').toggle(2000,"swing");

})
$('#motdBtn').on('click',function(){
  $('.info').css('display','block');

})
