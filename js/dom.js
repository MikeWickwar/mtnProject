//tests working then a call
console.log('working js');
//call for brek
var getter = $.ajax({
  url: "http://www.myweather2.com/developer/weather.ashx?uac=E8tRYOl8xe&uref=65ae20fe-d8fd-4fb7-b9cc-8262c85bf223&output=json",
  method: "GET",
  dataType: "json"
});

getter.done(function(response){
  console.log(response);
});


// real dom interaction starts here
var motdBtn = document.getElementById('motdBtn');
  $('#motdBtn').one('click',function(){
    console.log('click');
  $('#mtnB').append("<div class='box info'><h3>This</h3></div>");
  $('#mtnB').append("<div class='box info'><h3>is</h3></div>");
  $('#mtnB').append("<div class='box info'><h3>where</h3></div>");
  $('#mtnB').append("<div class='box info'><h3>To</h3></div>");
  $('#mtnB').append("<div class='box info'><h3>display info</h3></div>");
})
