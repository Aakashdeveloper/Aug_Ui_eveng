var a = "Hi I am doing  JavaScript"
a.split(' ')


var url = "https://github.com/Aakashdeveloper?tab=repositories";
url.split('/')


var city = "london"
city.split('')

(6) ["l", "o", "n", "d", "o", "n"]

var tech="Angular React"

tech.substring(5,10)
"ar Re"
tech.substring(5)
"ar React"

var freetext="ergesPort"
undefined
freetext.repeat(2)
"ergesPortergesPort"


var a = "i am doing javascript"

var pattern = "^([a-zA-Z])$"
var pattern = "^([0-9]{2,10})$"
var pattern = "^([a-zA-Z]+)$"

var mytext = "7886@hjgh"
mytext.match("^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-z]{2,5})$")



mytext.match("^(([a-z])|[a-z]+[0-9])+\.+([a-z])+@+([a-z])+\.+([a-z])")