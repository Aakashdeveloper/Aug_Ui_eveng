var city = "london"
undefined
city.toUpperCase()
"LONDON"
var state = "Haryana"
undefined
state.toLowerCase()
"haryana"

var city = "london"
undefined
city[0]
"l"
city[5]
"n"
city.length
6
var a = "i am javascript"
undefined
a.length
15

var username = "  Aakash "
var username = "  Aakash "
undefined
username.trim()
"Aakash"
username.length
9
username.trim().length
6
var b = username.trim()
undefined
b.length
6
username.trim().toUpperCase()
"AAKASH"
username.trim().length.toUpperCase()

username.trim().length.toExponential()
"6e+0"

var username = "Aakash"
undefined
username.charAt(0)
"A"
username.charAt(1)
"a"

var username = "Aakash"
undefined
username.charAt(0)
"A"
username.charAt(1)
"a"
username.slice(1)
"akash"
username.slice(3)
"ash"
username.slice(2,5)
"kas"


var a = "london"
undefined
a.charAt(0).toUpperCase()
"L"
a[0].uppercase
undefined
a[0].toUpperCase()
"L"
a.charAt(0).toUpperCase()+a.slice(1)
"London"