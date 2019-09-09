var a = [1,2,3,4,5,6];
var b = ["a","b","c","d"];
var c = [true, false, true]

var d = [1,2,3,4,"q","f",21,4,true,"e"]

var d = [1,2,3,4,"q","f",21,4,true,"e"]
undefined
d.length
10
d[0]
1
d[1]
2
d[5]
"f"
// last value of the array
d[d.length-1]
"e"

push always push at the end 
pop always pop from the end
unshift always add in thr begining
shift remove the value from the begining


var city = ["london","newyork","delhi","helsinki"]
undefined
city.push('amsterdam')
5
city
(5) ["london", "newyork", "delhi", "helsinki", "amsterdam"]
city.pop(1)
"amsterdam"
city.pop(100)
"helsinki"
city
(3) ["london", "newyork", "delhi"]
city.pop()
"delhi"

var city = ["london","newyork","delhi","helsinki"]
undefined
city.unshift('amsterdam')
5
city
(5) ["amsterdam", "london", "newyork", "delhi", "helsinki"]
city.shift()
"amsterdam"

var city = ["london","newyork","delhi","helsinki","amsterdam"]

var city = ["london","newyork","delhi","helsinki","amsterdam"]
undefined
city.slice(2,4)
(2) ["delhi", "helsinki"]
city.slice(2,5)
(3) ["delhi", "helsinki", "amsterdam"]
city.slice(2,6)
(3) ["delhi", "helsinki", "amsterdam"]


var city = ["london","newyork","delhi","helsinki","amsterdam"]
undefined
city.splice(2,0,"Venic","insburg","mumbai")
[]
city
(8) ["london", "newyork", "Venic", "insburg", "mumbai", "delhi", "helsinki", "amsterdam"]0: "london"1: "newyork"2: "Venic"3: "insburg"4: "mumbai"5: "delhi"6: "helsinki"7: "amsterdam"length: 8__proto__: Array(0)
city.splice(4,1,"Sydeny")
["mumbai"]
city
(8) ["london", "newyork", "Venic", "insburg", "Sydeny", "delhi", "helsinki", "amsterdam"]
city.splice(4,2,"Perth")
(2) ["Sydeny", "delhi"]
city
(7) ["london", "newyork", "Venic", "insburg", "Perth", "helsinki", "amsterdam"]
city.splice(2,1,"Pune", "Birstol")
["Venic"]
city
(8) ["london", "newyork", "Pune", "Birstol", "insburg", "Perth", "helsinki", "amsterdam"]

var city = ["london","newyork","delhi","helsinki","amsterdam"]
undefined
city.indexOf('newyork')
1
city.indexOf('zurich')
-1
city.indexOf('davos')
-1
city.indexOf('amsterdam')
4


[a,b,c] = [1,2,3,4]
[[1,2,3],["a","b","c"]]

var a  = [[1,2,3],["a","b","c"]]
undefined
a[0][0]
1
a[1][1]
"b"
a[1][2]
"c"


var a = ["a","b","c"]
var b = [1,2,3]

var a = ["a","b","c"]
var b = [1,2,3]
undefined
a+b
"a,b,c1,2,3"
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]
b.concat(a)
(6) [1, 2, 3, "a", "b", "c"]
var c = [true, true,false]
undefined
a.concat(b,c)
(9) ["a", "b", "c", 1, 2, 3, true, true, false]
a.concat(c,b)
(9) ["a", "b", "c", true, true, false, 1, 2, 3]

var city = ["london","newyork","delhi","helsinki","amsterdam"]
undefined
city.sort()
(5) ["amsterdam", "delhi", "helsinki", "london", "newyork"]
var city = ["london","newyork","delhi","helsinki","amsterdam",1,2,5]
undefined
var city = ["london","newyork","delhi","helsinki","amsterdam",1,2,5,3]
undefined
city.sort()
(9) [1, 2, 3, 5, "amsterdam", "delhi", "helsinki", "london", "newyork"]
var city = ["london","newyork","delhi","helsinki","amsterdam",1,2,5,3,false, true,false]
undefined
city.sort()
(12) [1, 2, 3, 5, "amsterdam", "delhi", false, false, "helsinki", "london", "newyork", true]

[1, 2, 3, 5, "adela", "amsterdam", "delhi", false, false, "helsinki", "london", "newyork", true]