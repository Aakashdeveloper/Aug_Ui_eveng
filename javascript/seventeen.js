var color="red"
var bob = {
    firstname:'bob',
    age:23,
    summary:function(name){
        return "hi from "+name +" my age is "+this.age + color
    }
}

//Function
function add(a,b){
    return a+b
}

//method
var add = function(a,b){
    return a+b 
}


var add = (a,b) => { 
    return a+b 
}


var a = 10
var out ="my age is "+a
var out1 = `my age is ${a}`
my age is 10
backtick


var john = new Object();
john.age = 10
john.color="white"
john.setAge = function(newAge){
    john.age = newAge
}

john.setAge(20)

var tony = new Object();
tony.age = 10
tony.color="white"
tony.setAge = function(newAge){
    tony.age = newAge
}

let createAge = function(newAge){
    this.age = newAge
}

var tony = new Object();
tony.age = 10
tony.color="white"
tony.setAge = createAge

var john = new Object();
john.age = 10
john.color="white"
john.setAge = createAge

//functional object
function calc(){
    this.add= function(a,b){return a+b},
    this.sub= function(a,b){return a-b},
    this.find= function(table,name){
        out = `Select * from ${table} where name is ${name}`
        return out
    }
}

//create object of functional
var mycalc = new calc();
mycalc.add(1,2)
mycalc.find('student','john')


var rbcalc = new calc();
rbcalc.sub(1,2)
rbcalc.find('Emp','Sarah')



