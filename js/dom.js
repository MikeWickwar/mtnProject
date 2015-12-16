//tests working js
// console.log('working js');
////*********this response is for brekenridge
var brekGetter = $.ajax({
  url: "http://api.powderlin.es/station/937:CO:SNTL",
  method: "GET",
  dataType: "json"
});
////*********this response is for vail
var vailGetter = $.ajax({
  url: "http://api.powderlin.es/station/842:CO:SNTL",
  method: "GET",
  dataType: "json"
});
////*********this response is for bever creek
var bcGetter = $.ajax({
  url: "http://api.powderlin.es/station/1040:CO:SNTL",
  method: "GET",
  dataType: "json"
});
////*********this response is for bever creek
var abGetter = $.ajax({
  url: "http://api.powderlin.es/station/505:CO:SNTL",
  method: "GET",
  dataType: "json"
});
////*********this response is for bever creek
var ksGetter = $.ajax({
  url: "http://api.powderlin.es/station/505:CO:SNTL",
  method: "GET",
  dataType: "json"
});



/// api key for google AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4
var bcDGetter = $.ajax({
    url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Beaver%20Creek&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
var vailDGetter = $.ajax({
  url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Vail&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
var abDGetter = $.ajax({
  url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Arapahoe%20Basin%20CO&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
var ksDGetter = $.ajax({
  url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Keystone%20CO&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
var brekDGetter = $.ajax({
  url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Brekenridge%20CO&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
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

///page 2 listeners *********************************

$('#bc').on('click', function(){
  bcDGetter.done(function(response){
    console.log(response);
    var dTime = response.rows[0].elements[0].duration.text;
    console.log(dTime);
    $(".togglers").hide();
    $("#t6").html("<div class='box info t1'><h3 id='t6'>&#x2744 Average Drive Time: "+response.rows[0].elements[0].duration.text+"</h3>")
    $("#t7").html("<div class='box info t1'><h3 id='t7'>&#x2744 Distance from Denver: "+response.rows[0].elements[0].distance.text+"</h3>")
  });
  bcGetter.done(function(response){
    var csDepth = response["data"][4]["Change In Snow Depth (in)"]
    var sDepth = response["data"][4]["Snow Depth (in)"]
    var elevation = response["station_information"]["elevation"]
    var namey = response["station_information"]["name"]
    console.log(response);
    console.log(response["data"][4]["Change In Snow Depth (in)"]);
    console.log(response["data"][4]["Snow Depth (in)"]);
    console.log(response["station_information"]["elevation"]);
    console.log(response["station_information"]["name"]);
    $('#t1').html("<div class='box info t1'><h2 id='he2'>&#x2744 Beaver Creek</h2>")
    $('#t2').html("<div class='box info t1'><h3 id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
    $('#t3').html("<div class='box info t1'><h3 id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
    $('#t5').html("<div class='box info t1'><h3 id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
    $('#t4').html("<div class='box info t1'><h3 id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
    $('#t1').toggle(800,"swing");
    $('#t2').toggle(1000,"swing");
    $('#t3').toggle(1200,"swing");
    $('#t4').toggle(1400,"swing");
    $('#t5').toggle(1600,"swing");
    $('#t6').toggle(1800,"swing");
    $('#t7').toggle(2000,"swing");
  });
})
$('#vl').on('click', function(){
  vailDGetter.done(function(response){
    console.log(response);
    var dTime = response.rows[0].elements[0].duration.text;
    console.log(dTime);
    $(".togglers").hide();
    $("#t6").html("<div class='box info t1'><h3 id='t6'>&#x2744 Average Drive Time: "+response.rows[0].elements[0].duration.text+"</h3>")
    $("#t7").html("<div class='box info t1'><h3 id='t7'>&#x2744 Distance from Denver: "+response.rows[0].elements[0].distance.text+"</h3>")
  });
  vailGetter.done(function(response){
    var csDepth = response["data"][4]["Change In Snow Depth (in)"]
    var sDepth = response["data"][4]["Snow Depth (in)"]
    var elevation = response["station_information"]["elevation"]
    var namey = response["station_information"]["name"]
    console.log(response);
    console.log(response["data"][4]["Change In Snow Depth (in)"]);
    console.log(response["data"][4]["Snow Depth (in)"]);
    console.log(response["station_information"]["elevation"]);
    console.log(response["station_information"]["name"]);
    $('#t1').html("<div class='box info t1'><h2 id='he2'>&#x2744 Vail</h2>")
    $('#t2').html("<div class='box info t1'><h3 id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
    $('#t3').html("<div class='box info t1'><h3 id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
    $('#t5').html("<div class='box info t1'><h3 id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
    $('#t4').html("<div class='box info t1'><h3 id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
    $('#t1').toggle(800,"swing");
    $('#t2').toggle(1000,"swing");
    $('#t3').toggle(1200,"swing");
    $('#t4').toggle(1400,"swing");
    $('#t5').toggle(1600,"swing");
    $('#t6').toggle(1800,"swing");
    $('#t7').toggle(2000,"swing");
  });
})
$('#ab').on('click', function(){
  abDGetter.done(function(response){
    console.log(response);
    var dTime = response.rows[0].elements[0].duration.text;
    console.log(dTime);
    $(".togglers").hide();
    $("#t6").html("<div class='box info t1'><h3 id='t6'>&#x2744 Average Drive Time: 1hr 15mins</h3>")
    $("#t7").html("<div class='box info t1'><h3 id='t7'>&#x2744 Distance from Denver: "+response.rows[0].elements[0].distance.text+"</h3>")
  });
  abGetter.done(function(response){
    var csDepth = response["data"][4]["Change In Snow Depth (in)"]
    var sDepth = response["data"][4]["Snow Depth (in)"]
    var elevation = response["station_information"]["elevation"]
    var namey = response["station_information"]["name"]
    console.log(response);
    console.log(response["data"][4]["Change In Snow Depth (in)"]);
    console.log(response["data"][4]["Snow Depth (in)"]);
    console.log(response["station_information"]["elevation"]);
    console.log(response["station_information"]["name"]);
    $('#t1').html("<div class='box info t1'><h2 id='he2'>&#x2744 Arapahoe Basin</h2>")
    $('#t2').html("<div class='box info t1'><h3 id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
    $('#t3').html("<div class='box info t1'><h3 id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
    $('#t5').html("<div class='box info t1'><h3 id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
    $('#t4').html("<div class='box info t1'><h3 id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
    $('#t1').toggle(800,"swing");
    $('#t2').toggle(1000,"swing");
    $('#t3').toggle(1200,"swing");
    $('#t4').toggle(1400,"swing");
    $('#t5').toggle(1600,"swing");
    $('#t6').toggle(1800,"swing");
    $('#t7').toggle(2000,"swing");
  });
})
$('#ks').on('click', function(){
  ksDGetter.done(function(response){
    console.log(response);
    var dTime = response.rows[0].elements[0].duration.text;
    console.log(dTime);
    $(".togglers").hide();
    $("#t6").html("<div class='box info t1'><h3 id='t6'>&#x2744 Average Drive Time: "+dTime+"</h3>")
    $("#t7").html("<div class='box info t1'><h3 id='t7'>&#x2744 Distance from Denver: "+response.rows[0].elements[0].distance.text+"</h3>")
  });
  ksGetter.done(function(response){
    var csDepth = response["data"][4]["Change In Snow Depth (in)"]
    var sDepth = response["data"][4]["Snow Depth (in)"]
    var elevation = response["station_information"]["elevation"]
    var namey = response["station_information"]["name"]
    console.log(response);
    console.log(response["data"][4]["Change In Snow Depth (in)"]);
    console.log(response["data"][4]["Snow Depth (in)"]);
    console.log(response["station_information"]["elevation"]);
    console.log(response["station_information"]["name"]);
    $('#t1').html("<div class='box info t1'><h2 id='he2'>&#x2744 Keystone</h2>")
    $('#t2').html("<div class='box info t1'><h3 id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
    $('#t3').html("<div class='box info t1'><h3 id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
    $('#t5').html("<div class='box info t1'><h3 id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
    $('#t4').html("<div class='box info t1'><h3 id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
    $('#t1').toggle(800,"swing");
    $('#t2').toggle(1000,"swing");
    $('#t3').toggle(1200,"swing");
    $('#t4').toggle(1400,"swing");
    $('#t5').toggle(1600,"swing");
    $('#t6').toggle(1800,"swing");
    $('#t7').toggle(2000,"swing");
  });
});
$('#br').on('click', function(){
  brekDGetter.done(function(response){
    console.log(response);
    var dTime = response.rows[0].elements[0].duration.text;
    console.log(dTime);
    $(".togglers").hide();
    $("#t6").html("<div class='box info t1'><h3 id='t6'>&#x2744 Average Drive Time: "+dTime+"</h3>")
    $("#t7").html("<div class='box info t1'><h3 id='t7'>&#x2744 Distance from Denver: "+response.rows[0].elements[0].distance.text+"</h3>")
  });
  brekGetter.done(function(response){
    var csDepth = response["data"][4]["Change In Snow Depth (in)"]
    var sDepth = response["data"][4]["Snow Depth (in)"]
    var elevation = response["station_information"]["elevation"]
    var namey = response["station_information"]["name"]
    console.log(response);
    console.log(response["data"][4]["Change In Snow Depth (in)"]);
    console.log(response["data"][4]["Snow Depth (in)"]);
    console.log(response["station_information"]["elevation"]);
    console.log(response["station_information"]["name"]);
    $('#t1').html("<div class='box info t1'><h2 id='he2'>&#x2744 Brekenridge</h2>")
    $('#t2').html("<div class='box info t1'><h3 id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
    $('#t3').html("<div class='box info t1'><h3 id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
    $('#t5').html("<div class='box info t1'><h3 id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
    $('#t4').html("<div class='box info t1'><h3 id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
    $('#t1').toggle(800,"swing");
    $('#t2').toggle(1000,"swing");
    $('#t3').toggle(1200,"swing");
    $('#t4').toggle(1400,"swing");
    $('#t5').toggle(1600,"swing");
    $('#t6').toggle(1800,"swing");
    $('#t7').toggle(2000,"swing");
  });
});
