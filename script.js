var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var res = JSON.parse(request.response)
console.log(res);
var pop = res.filter((ele)=>ele.population >=100000)
console.log(pop);
var local = res.filter((ele)=>ele.region == "Europe")
var country_name=local.map((ele)=>ele.name.common)
console.log(country_name);
var sump = res.filter((ele)=>ele.region == "Asia")
var cpopu = sump.reduce((acc,cv)=>acc+cv.population,0);
console.log(cpopu);
}

