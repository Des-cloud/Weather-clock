// Code for using the latitude and longitude
getLocation();

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
  $('.city').html("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  // console.log(position.coords.latitude);
  const latitude = position.coords.latitude;
  const longitude= position.coords.longitude;

  const url= "https://api.openweathermap.org/data/2.5/weather?lat="+ latitude +"&lon="+ longitude +"&appid=964e08ac9166e6f8a97cb28ad1231b39&units=metric";

  axios.get(url)
  .then(function(data){
    const weatherdata= data.data;
    const temp = weatherdata.main.temp;
    const description = weatherdata.weather[0].description;
    const icon= weatherdata.weather[0].icon;
    const cityName= weatherdata.name;

    const iconurl= "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
    $('.city').html(cityName);
    $(".description").html(description);
    $(".temp").html(temp);
    $("img").attr("src", iconurl);
  })
  .catch(function(err){
    console.log(err)
  })
}


// Work on the clock and the time
var diallines = document.getElementsByClassName('diallines');
var clockE1 = document.getElementsByClassName('clock')[0];

// Draw all 60 clock ticks
for (var i = 1; i < 60; i++) {
  clockE1.innerHTML += "<div class='diallines'></div>";
  diallines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

// Function to update the details in the clock
function clock() {
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

    //Variables for time
    d = new Date;
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();

  //Variables for day
  date = d.getDate();
  month = d.getMonth() + 1;
  year = d.getFullYear();
  day = d.getDay();

  //Variables for degrees
  hrDeg = (hr * 30) + (min * (360 / 720));
  minDeg = (min * 6);
  secDeg = (sec * 6);

  // Variable for the name of the current weekday
  days = weekday[day];

  // Transform the clock hands with respect to current time
  document.querySelector(".hour-hand").style.transform = "rotate(" + hrDeg + "deg)";
  document.querySelector(".min-hand").style.transform = "rotate(" + minDeg + "deg)";
  document.querySelector(".sec-hand").style.transform = "rotate(" + secDeg + "deg)";

  // Update date and day likewise
  document.querySelector(".date").innerHTML = `${get2D(date)}/${get2D(month)}/${year}`;
  document.querySelector(".day").innerHTML = days;

  // Update the digital clock
  document.querySelector(".digital").innerHTML = get2D(hr) + ":" + get2D(min) + ":" + get2D(sec);
}

// Function to add zero before a single digit
function get2D(num) {
  return (num.toString().length < 2 ? "0" + num : num);
}

// function refreshes every 50ms
setInterval(clock, 50);


// / Callback function from returning the geolocation details of user

// // Success Function
// var onSuccess = function(location){
//   // Update html with the cityName
//   const cityName= location.city.names.de;
//   $('.city').html(cityName);

//   // Post to openweathermap for weather details
//   const url= "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=964e08ac9166e6f8a97cb28ad1231b39&units=metric";
//   axios.get(url)
//     .then(function(data){
//       const weatherdata= data.data;
//       const temp = weatherdata.main.temp;
//       const description = weatherdata.weather[0].description;
//       const icon= weatherdata.weather[0].icon;

//       // Use details to get weather icon and update all the necessary html
//       const iconurl= "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
//       $(".description").html(description);
//       $(".temp").html(temp);
//       $("img").attr("src", iconurl);
//     })
// };

// // Error Function
// var onError = function(error){
//   $('.city').html("City not found");
// };

// // Call the geolocation api function
// geoip2.city(onSuccess, onError);

