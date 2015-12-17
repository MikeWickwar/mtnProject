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
    url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Beaver%20Creek%20CO&units=imperial&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
var vailDGetter = $.ajax({
  url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Vail&units=imperial&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
var abDGetter = $.ajax({
  url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Arapahoe%20Basin%20CO&units=imperial&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
var ksDGetter = $.ajax({
  url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Keystone%20CO&units=imperial&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});
var brekDGetter = $.ajax({
  url: "https://maps.googleapis.com/maps/api/distancematrix/json?origins=Denver&destinations=Brekenridge%20CO&units=imperial&key=AIzaSyBl0CTALhcPRBiyO4IAYGaqdoXq5UjYrK4",
  method: "GET",
  dataType: "json"
});


// real dom interaction starts here

  $('.info').css('display','none')
  // $('.mtn2').css('display','none')

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
    ///snow rate
    getSnowRate(sDepth);

    $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Beaver Creek</h2>")
    $('#t2').html("<div class='box info t1'><h3 class='h3er' id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
    $('#t3').html("<div class='box info t1'><h3 class='h3er' id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
    $('#t5').html("<div class='box info t1'><h3 class='h3er' id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
    $('#t4').html("<div class='box info t1'><h3 class='h3er' id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
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
    getSnowRate(sDepth);
    $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Vail</h2>")
    $('#t2').html("<div class='box info t1'><h3 class='h3er' id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
    $('#t3').html("<div class='box info t1'><h3 class='h3er' id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
    $('#t5').html("<div class='box info t1'><h3 class='h3er' id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
    $('#t4').html("<div class='box info t1'><h3 class='h3er' id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
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
    $("#t7").html("<div class='box info t1'><h3 id='t7'>&#x2744 Distance from Denver: 63.7 mi</h3>")
  });
  abGetter.done(function(response){
    var csDepth = response["data"][4]["Change In Snow Depth (in)"]
    var sDepth = response["data"][4]["Snow Depth (in)"]
    var elevation = response["station_information"]["elevation"]
    var namey = response["station_information"]["name"]
    ///snow rate
    getSnowRate(sDepth);
    $('#t1').html("<div class='box info t1'><h2 class='h3er'id='he2'>&#x2744 Arapahoe Basin</h2>")
    $('#t2').html("<div class='box info t1'><h3 class='h3er'id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
    $('#t3').html("<div class='box info t1'><h3 class='h3er'id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
    $('#t5').html("<div class='box info t1'><h3 class='h3er'id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
    $('#t4').html("<div class='box info t1'><h3 class='h3er'id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
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
    getSnowRate(sDepth);
    $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Keystone</h2>")
    $('#t2').html("<div class='box info t1'><h3 class='h3er' id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
    $('#t3').html("<div class='box info t1'><h3 class='h3er' id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
    $('#t5').html("<div class='box info t1'><h3 class='h3er' id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
    $('#t4').html("<div class='box info t1'><h3 class='h3er' id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
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
    getSnowRate(sDepth);
    $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Brekenridge</h2>")
    $('#t2').html("<div class='box info t1'><h3 class='h3er' id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
    $('#t3').html("<div class='box info t1'><h3 class='h3er' id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
    $('#t5').html("<div class='box info t1'><h3 class='h3er' id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
    $('#t4').html("<div class='box info t1'><h3 class='h3er' id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
    $('#t1').toggle(800,"swing");
    $('#t2').toggle(1000,"swing");
    $('#t3').toggle(1200,"swing");
    $('#t4').toggle(1400,"swing");
    $('#t5').toggle(1600,"swing");
    $('#t6').toggle(1800,"swing");
    $('#t7').toggle(2000,"swing");
  });
});
//************** best mountain***********8
$('#motdBtn').click(function(){
  snI = 0;
  bstSn = 0;
  console.log('click')

    bcGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if(sDepth >= bstSn){
        snI = "bc";
        bstSn = sDepth;
        console.log(snI);
        console.log(bstSn);
      }
    })
    vailGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if(sDepth >= bstSn){
        snI = "v";
        bstSn = sDepth;
        console.log(snI);
        console.log(bstSn);
      }
    })
    ksGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if(sDepth >= bstSn){
        snI = "ks";
        bstSn = sDepth;
        console.log(snI);
        console.log(bstSn);
      }
    })
    brekGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if(sDepth >= bstSn){
        snI = "brek";
        bstSn = sDepth;
        console.log(snI);
        console.log(bstSn);
      }
    })
    abGetter.done(function(response){
      var sDepth = response["data"][4]["Snow Depth (in)"]
      if(sDepth >= bstSn){
        snI = "ab";
        bstSn = sDepth;
        console.log(snI);
        console.log(bstSn);
      }
    })
    if (snI === 'ks') {
      ksGetter.done(function(response){
        var sDepth = response["data"][4]["Snow Depth (in)"];
        var csDepth = response["data"][4]["Change In Snow Depth (in)"];
        var elevation = response["station_information"]["elevation"];
        var namey = response["station_information"]["name"];
        console.log(sDepth);
        $('.t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Keystone</h2>")
        $('.t2').html("<div class='box info t1'><h3 class='h3er' id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
        $('.t3').html("<div class='box info t1'><h3 class='h3er' id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
        $('.t5').html("<div class='box info t1'><h3 class='h3er' id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
        $('.t4').html("<div class='box info t1'><h3 class='h3er' id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
        $('.t1').toggle(800,"swing");
        $('.t2').toggle(1000,"swing");
        $('.t3').toggle(1200,"swing");
        $('.t4').toggle(1400,"swing");
        $('.t5').toggle(1600,"swing");
        $('.t6').toggle(1800,"swing");
        $('.t7').toggle(2000,"swing");
        $(".togglers").show();
    })
  }
    if (snI === 'ab') {
      abGetter.done(function(response){
        $(".togglers").hide();
        var sDepth = response["data"][4]["Snow Depth (in)"];
        var csDepth = response["data"][4]["Change In Snow Depth (in)"];
        var elevation = response["station_information"]["elevation"];
        var namey = response["station_information"]["name"];
        console.log(sDepth);
        $('#t1').html("<div class='box info t1' id='he'><h1>&#x2744 Arapahoe Basin</h2>")
        $('#t2').html("<div class='box info t2' id='t2'><h3>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
        $('#t3').html("<div class='box info t3' id='t3'><h3>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
        $('#t5').html("<div class='box info t4' id='t5'><h3>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
        $('#t4').html("<div class='box info t5' id='t4'><h3>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
        $('#t1').toggle(800,"swing");
        $('#t2').toggle(1100,"swing");
        $('#t3').toggle(1400,"swing");
        $('#t4').toggle(1700,"swing");
        $('#t5').toggle(1900,"swing");
        $('#t6').toggle(2200,"swing");
        $('#t7').toggle(2500,"swing");
    })
  }
    if (snI === 'bc') {
      bcGetter.done(function(response){
        var sDepth = response["data"][4]["Snow Depth (in)"];
        var csDepth = response["data"][4]["Change In Snow Depth (in)"];
        var elevation = response["station_information"]["elevation"];
        var namey = response["station_information"]["name"];
        console.log(sDepth);
        $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Beaver Creek</h2>")
        $('#t2').html("<div class='box info t1'><h3 class='h3er' id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
        $('#t3').html("<div class='box info t1'><h3 class='h3er' id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
        $('#t5').html("<div class='box info t1'><h3 class='h3er' id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
        $('#t4').html("<div class='box info t1'><h3 class='h3er' id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
        $('.t1').toggle(800,"swing");
        $('.t2').toggle(1000,"swing");
        $('.t3').toggle(1200,"swing");
        $('.t4').toggle(1400,"swing");
        $('.t5').toggle(1600,"swing");
        $('.t6').toggle(1800,"swing");
        $('.t7').toggle(2000,"swing");
        $(".info").css('display','block');

    })
  }
    if (snI === 'vail') {
      vailGetter.done(function(response){
        var sDepth = response["data"][4]["Snow Depth (in)"];
        var csDepth = response["data"][4]["Change In Snow Depth (in)"];
        var elevation = response["station_information"]["elevation"];
        var namey = response["station_information"]["name"];
        console.log(sDepth);
        $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Vail</h2>")
        $('#t2').html("<div class='box info t1'><h3 class='h3er' id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
        $('#t3').html("<div class='box info t1'><h3 class='h3er' id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
        $('#t5').html("<div class='box info t1'><h3 class='h3er' id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
        $('#t4').html("<div class='box info t1'><h3 class='h3er' id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
        $('.t1').toggle(800,"swing");
        $('.t2').toggle(1000,"swing");
        $('.t3').toggle(1200,"swing");
        $('.t4').toggle(1400,"swing");
        $('.t5').toggle(1600,"swing");
        $('.t6').toggle(1800,"swing");
        $('.t7').toggle(2000,"swing");
        $(".info").css('display','block');

    })
  }
    if (snI === 'brek') {
      brekGetter.done(function(response){
        var sDepth = response["data"][4]["Snow Depth (in)"];
        var csDepth = response["data"][4]["Change In Snow Depth (in)"];
        var elevation = response["station_information"]["elevation"];
        var namey = response["station_information"]["name"];
        console.log(sDepth);
        $('#t1').html("<div class='box info t1'><h2 class='h3er' id='he2'>&#x2744 Brekenridge</h2>")
        $('#t2').html("<div class='box info t1'><h3 class='h3er' id='t2'>&#x2744 Snow Depth: "+sDepth+" inches</h3>")
        $('#t3').html("<div class='box info t1'><h3 class='h3er' id='t3'>&#x2744 Change in Snow Depth (24hrs): "+csDepth+" inches</h3>")
        $('#t5').html("<div class='box info t1'><h3 class='h3er' id='t5'>&#x2744 SNOTEL Station Name: "+namey+"</h3>")
        $('#t4').html("<div class='box info t1'><h3 class='h3er' id='t4'>&#x2744 SNOTEL Station Elevation: "+elevation+" feet</h3>")
        $('.t1').toggle(800,"swing");
        $('.t2').toggle(1000,"swing");
        $('.t3').toggle(1200,"swing");
        $('.t4').toggle(1400,"swing");
        $('.t5').toggle(1600,"swing");
        $('.t6').toggle(1800,"swing");
        $('.t7').toggle(2000,"swing");
        // $(".info").css('display','block');

    })
  }
})

function getSnowRate(sDepth){
  if (sDepth>50) {
    $("#snow").css("animation", "snow 2s linear infinite")
  }else if(sDepth>30){
    $("#snow").css("animation", "snow 5s linear infinite")
  }else if (sDepth<30) {
    $("#snow").css("animation", "snow 10s linear infinite")
  }else if(sDepth<26) {
    $("#snow").css("animation", "snow 15s linear infinite")
  }else if(sDepth===null){
    $("#snow").hide
  }
}
///////////map starts
jQuery(function($) {
    // Asynchronously Load the map API
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);

    // Multiple Markers
    var markers = [
        ['Brekenridge, CO', 39.481228, -106.066778],
        ['Arapahoe Basin, CO', 39.642485, -105.871664],
        ['Vail, CO', 39.606401, -106.354940],
        ['Beaver Creek, CO', 39.585824, -106.507276],
        ['Keystone, CO', 39.604538, -105.954089]
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    var trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    
    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(8);
        google.maps.event.removeListener(boundsListener);
    });

}
