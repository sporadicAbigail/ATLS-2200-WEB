console.log('hi');

let boots = {
  'name':'boots',
  'age':7,
  'weight':'25 lbs',
  'color':'brown',
  //isOld is a method - which is like a string with a function
  'isOld':function(){
    if(this.age > 10){
      return 'yes';
    }else{
      return 'no';
    }
  }
}

console.log(boots.weight);
console.log(boots.name);
console.log(boots.isOld());

fetch('weather.json') //this is to get the file
.then((response) => response.json()) //this is to get the file
.then(function(data){ //this is to get the file
  //this is to get the data
  let weather = data;
  console.log(weather);
  let location = weather.location.name;
  let temp = weather.current.temp_f;
  document.getElementById('location').innerHTML = location;
  document.getElementById('tempf').innerHTML=temp;
})

fetch('forecast.json')
.then((resp)=> resp.json()) //we can reuse response from earlier if we want
.then(function(data){
  let forecast = data;
  console.log(forecast);
  forecastdate = forecast.forecast.forecastday[0].date;
  document.getElementById('date').innderHTML=forecastdate; //using js to write the date
  document.getElementById('sunrise').innerHTML=forecast.forecast.forecastday[0].astro.sunrise;
  forecasttime = forecast.forecast.forecastday[0].hour[1].time;
  document.getElementById('time').innerHTML= forecasttime.slice(forecasttime.length-5, forecasttime.length);
  document.getElementById('cond').innerHTML=forecast.forecast.forecastday[0].hour[1].condition.text;
  console.log(forecast.forecast.forecastday[0].astro.sunrise);
  console.log(forecast.forecast.forecastday[0].hour[1].time);
  console.log(forecast.forecast.forecastday[0].hour[1].condition.text);
  document.getElementById('image').innerHTML=forecast.current.icon;
})

//we are treating each data separately, and can't use stuff from other fetches
