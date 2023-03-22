const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input-2884.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input.forEach(time => {
    if(!time) return;
    
    let [hour, minute] = time.split(" ").map(Number);
    if(!validAlarmTime(hour, minute)) return;
    
    if(hour == 0 && minute < 45) hour = 24;

    let alarm = 60 * hour + minute;
    alarm -= 45;

    console.log("%d %d", Math.floor(alarm / 60), alarm % 60);
    
});



function validAlarmTime(hour, minute) {
    if(!(hour >=0 && hour <= 23
       && minute >=0 && minute <= 59)) 
    {
        return false;
    }
    return true;
}