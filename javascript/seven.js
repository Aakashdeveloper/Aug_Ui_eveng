switch(10*10){
    case 100:
        console.log('Correct output')
        break;
    case "1010":
        console.log('concat output')
        break;
    default:
        console.log('not sure')
        break;
}


new Date()
Mon Sep 09 2019 16:50:18 GMT+0100 (British Summer Time)
var out = new Date()
undefined
out
Mon Sep 09 2019 16:50:32 GMT+0100 (British Summer Time)
out.getDay()
1
out.getDate()
9
out.getMonth()
8
out.getFullYear()
2019


switch(new Date().getDay()){
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 7:
        console.log('Sunday')
        break;
    default:
        console.log('You are not on earth')
        break;
}