var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);


//To get all the countries from the Asia continent /region using the Filter function
var res1 = result.filter((ele) => ele.region === "Asia");
console.log(res1);
var res2 = res1.map((ele) => ele.name); //to print country names only
console.log(res2);


//To get all the countries with a population of less than 2 lakhs using Filter function
var res1 = result.filter((ele) => ele.population < 200000);
console.log(res1);
var res2 = res1.map((ele) => ele.name); //to print country names only
console.log(res2);


//To print the following details name, capital, flag using forEach function
result.forEach(element => {
    console.log(element.name);
    console.log(element.capital);
    console.log(element.flag);
});


//To print the total population of countries using reduce function
var res = result.reduce((acc,ele) => acc + ele.population, 0);
console.log(res)


//To print the country which uses US Dollars as currency.
var res1 = result.filter((ele) => ele.currencies[0].symbol == '$');
console.log(res1);
var res2 = res1.map((ele) => ele.name); //to print country names only
console.log(res2);
}