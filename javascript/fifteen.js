function calc(logic){
    var a = document.getElementById('first').value
    var b = document.getElementById('second').value
    var out;
    if( (isNaN(a) != true && isNaN(b) != true) ||

        ((a !== null) && (b !==null))
    ){
        console.log(">>>a "+a)
        console.log(">>>b "+b)
        if(logic == 'add'){
            
            out = parseInt(a) + parseInt(b)
        }
        if( logic == 'sub'){
            out = parseInt(a) + parseInt(b)
        }
        document.getElementById('error').innerText=""
        document.getElementById('output').innerText="Result is "+out
    }else{
        console.log(">>>a else"+a)
        console.log(">>>b  else"+b)
        document.getElementById('error').innerText="Please enter valid value";
        document.getElementById('output').innerText=""
    }
    
    
   
}

/*function sub(){
    var a = document.getElementById('first').value
    var b = document.getElementById('second').value
    var out =  a - b
    document.getElementById('output').innerText="Result is "+out
}

function add(){
    var a = document.getElementById('first').value
    var b = document.getElementById('second').value
    var out =  parseInt(a) + parseInt(b)
    document.getElementById('output').innerText="Result is "+out
}*/