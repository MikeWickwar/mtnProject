$('body').append('<div>hello world</div>')
//call for brek
var getter = $.ajax({
  url: "http://www.myweather2.com/developer/weather.ashx?uac=E8tRYOl8xe&uref=65ae20fe-d8fd-4fb7-b9cc-8262c85bf223&output=json",
  method: "GET",
  dataType: "json"
});

getter.done(function(response){
  console.log(response);
});
