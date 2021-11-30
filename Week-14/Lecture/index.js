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
  document.getElementByID('location').innerHTML=location;
  document.getElementByID('tempf').innerHTML=temp;
})

fetch('forecast.json')
.then((resp)=> resp.json()) //we can reuse response from earlier if we want
.then(function(data){
  let forecast = data;
  console.log(forecast);
  forecastdate = forecast.forecast.forecastday[0].date;
  document.getElementByID('date').innderHTML=forecastdate; //using js to write the date
  document.getElementByID('sunrise').innerHTML=forecast.forecast.forecastday[0].astro.sunrise;
  forecasttime = forecast.forecast.forecastday[0].hour[1].time;
  document.getElementByID('time').innerHTML= forecasttime.slice(forecasttime.length-5, forecasttime.length);
  document.getElementByID('cond').innerHTML=forecast.forecast.forecastday[0].hour[1].condition.text;
  console.log(forecast.forecast.forecastday[0].astro.sunrise);
  console.log(forecast.forecast.forecastday[0].hour[1].time);
  console.log(forecast.forecast.forecastday[0].hour[1].condition.text);
})

//we are treating each data separately, and can't use stuff from other fetches
