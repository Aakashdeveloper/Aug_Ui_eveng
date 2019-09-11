function add(a,b){
    return a*b
}

function add(c,d,b){
    //onsole.log(b)
    return c+d
}


add(5,2)

function isEven(a){
    var out ;
    if(a%2 === 0){
        out = "Number is even"
    }else{
        out = "Number is out"
    }
    return out
}

//Es6

var add = (a,b) => { 
        return a+b 
}


var isEven = (a) => {
    var out;
    if(a%2 === 0){
        out = "Number is even"
    }else{
        out = "Number is out"
    }
    return out
}

const add = () => {
    
}
