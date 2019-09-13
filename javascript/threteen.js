var a = [2,4,5,6]
a.map(Math.sqrt)

a.map((mynum)=> { return mynum*2}) 


var marks = [33,56,72,45]

function passmarks(marks){
    return marks >= 50
}

var marks = [33,56,72,45]
const passmarks = (marks) => { return marks >= 50 }

var marks = [33,56,72,45]
marks.filter((marks) => { return marks >= 50 })

var marks = [33,56,72,45]
marks.map((marks) => { return marks >= 50 })

var a = [0,1,2,3]
a.map((input) => { return input*1 })
a.filter((input) => { return input*1 })

var a = [1,2,3,4]
var b = ["a","b","c",...a,"true"]

var a = [1,2,3,4]
var b = ["a","b","c",...a,"true"]
undefined
b
(8) ["a", "b", "c", 1, 2, 3, 4, "true"]
Math.min(...a)
1
var name= "john"
undefined
...name
VM303:1 Uncaught SyntaxError: Unexpected token ...
var out = [...name]
undefined
out
(4) ["j", "o", "h", "n"]