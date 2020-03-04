
module.exports = function toReadable (number) {
    const numberList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
     "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const numberListTwo = ['ad', 'da',"twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    if (number < 20) {
        return numberList[number];
    }
    let arr = String(number).split('');
    if (20 <= number && number < 100 && arr.length === 2){
        if(arr[1] === '0'){
            return numberListTwo[arr[0]];
        } else {
            return numberListTwo[arr[0]] + ' ' + numberList[arr[1]];
        }                  
    }
    if (120 <= number && number < 200 ||
        220 <= number && number < 300 ||
        320 <= number && number < 400 ||
        420 <= number && number < 500 ||
        520 <= number && number < 600 ||
        620 <= number && number < 700 ||
        720 <= number && number < 800 ||
        820 <= number && number < 900 ||
        920 <= number && number < 1000 ){ 
        if (arr[2] === '0'){
            return numberList[arr[0]] + ' ' + 'hundred'+ ' ' + numberListTwo[arr[1]];
        }
        if (arr[2] !== '0'){
            return numberList[arr[0]] + ' ' + 'hundred'+ ' ' + numberListTwo[arr[1]] + ' ' + numberList[arr[2]];
        }
    }
    arrTwo = [arr[0],arr[1] + arr[2]];
    console.log(arrTwo);
    if (100 <= number && number < 120 ||
        200 <= number && number < 220 ||
        300 <= number && number < 320 ||
        400 <= number && number < 420 ||
        500 <= number && number < 520 ||
        600 <= number && number < 620 ||
        700 <= number && number < 720 ||
        800 <= number && number < 820 ||
        900 <= number && number < 920 ){ 
        if (arr[2] === '0' && arr[1] === '0'){
            return numberList[arr[0]] + ' ' + 'hundred';
        }
        else {
            return numberList[arr[0]] + ' ' + 'hundred' + ' ' + numberList[+arrTwo[1]];
        }

    }
    
}

