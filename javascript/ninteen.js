function robot(name){
    this.name = name;
    this.legs = 2;
    this.color= 'White'
}

function human(name){
    this.name = name;
    this.hands = 2
}

human.prototype = new robot()


var person = new human('john')
robot {name: undefined, legs: 2, color: "White"}
person
human {name: "john", hands: 2}
person.color
"White"




//es5
function language(name,country){
    this.name = name;
    this.country = country
}


var hindi = new language('Hindi','India')


//es6
class language {
    constructor(name,country){
        this.name = name;
        this.country = country
    }
}

var hindi = new language('Hindi','India')
