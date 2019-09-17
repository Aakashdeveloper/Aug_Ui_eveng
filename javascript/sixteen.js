literal 
var country = {
    name:'India',
    capital:'Delhi',
    population:87687678775
}

var country = {
    name:'India',
    capital:'Delhi',
    population:87687678775
}
undefined
typeof(country)
"object"
country.name
"India"
country.capital
"Delhi"
country.language="hindi"
"hindi"
country
{name: "India", capital: "Delhi", population: 87687678775, language: "hindi"}
country.capital="Mumbai"
"Mumbai"
country
{name: "India", capital: "Mumbai", population: 87687678775, language: "hindi"}
delete country.capital
true
country
{name: "India", population: 87687678775, language: "hindi"}
country['language']
"hindi"
country['name']
"India"
country['capital']="Delhi"
"Delhi"
country
{name: "India", population: 87687678775, language: "hindi", capital: "Delhi"}

constructor

var car = new Object();

var car = new Object();
undefined
typeof(car)
"object"
car.color="red"
"red"
car.brand="Audi"
"Audi"
car.price= 350000
350000
car
{color: "red", brand: "Audi", price: 350000}


var country = {
    name:'India',
    capital:'Delhi',
    population:87687678775
}
var out = []
for(a in country){
    out.push(country[a])
}

 ["India", "Delhi", 87687678775]

var city = [
    {name:'Delhi', country:'India', pincode: 110006},
    {name:'London', country:'England', pincode: 'EVxw1'},
    {name:'Davos', country:'Switzerland',pincode:'4xvdst'}
]

var city = [
    {name:'Delhi', country:'India', pincode: 110006},
    {name:'London', country:'England', pincode: 'EVxw1'},
    {name:'Davos', country:'Switzerland',pincode:'4xvdst'}
]
undefined
city
(3) [{…}, {…}, {…}]
city[0].name
"Delhi"