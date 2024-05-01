var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var res = JSON.parse(request.response)
//Get all the countries from Asia continent /region using Filter method
var all_asia = res.filter((ele)=>ele.region == "Asia")
console.log(all_asia);
//Get all the countries with a population of less than 2 lakhs using Filter method
var pop = res.filter((ele)=>ele.population >=200000)
console.log(pop);
//Print the following details name, capital, flag, using forEach method
    res.forEach((country) => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital[0]);
      console.log("Flag:", country.flags.png);
    });
//Print the country that uses US dollars as currency.
var currency = res.filter((ele)=>ele.currencies == "USD")
console.log(currency);
//Print the total population of countries using reduce method
var cpopu = res.reduce((acc,cv)=>acc+cv.population,0);
console.log(cpopu);
}
