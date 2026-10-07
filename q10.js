
//   10A
 function convertSeconds(totalSeconds){
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor((totalSeconds % 86400) / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60
    return `${days} day,${hours} hours,${minutes} minutes,${seconds} seconds`;
 }
  console.log(convertSeconds(98765));

    // 10B
    let total = 0;
    total += 5000;
    total += 3000;
    total += 2000;
    console.log ('After adding items:' + total);
    total *= 0.9;
    console.log ('After 10% discount' + total);
    total *= 1.075;
    console.log ('After 7.5% VAT:' + total);
    total /= 3
    console.log ('Each person pays:' + total);
    //  TUTOR THIS CODE I STILL USE DEEPSEEK HERE HONESTLY

    //   10C
    let x = 5;
    x++
    console.log (x);
    x **= 2;
    console.log (x);
    x  %= 7;
    console.log(x)
    x -= 1;
    console.log (x);