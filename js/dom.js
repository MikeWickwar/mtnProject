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
  $('.t1').toggle(800,"swing");
  $('.t2').toggle(1000,"swing");
  $('.t3').toggle(1200,"swing");
  $('.t4').toggle(1400,"swing");
  $('.t5').toggle(1600,"swing");
  $('.t6').toggle(1800,"swing");
  $('.t7').toggle(2000,"swing");
})
