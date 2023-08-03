module.exports = function toReadable (number) {
    let a = number;
  let numbers = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
"sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
let numbers_2 = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let numbers_3 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let final = "";
    if (a == 30) {return "thirty"};
    if (a == 40) {return "forty"};
    if (a == 50) {return "fifty"};
    if (a == 60) {return "sixty"};
    if (a == 70) {return "seventy"};
    if (a == 80) {return "eighty"};
    if (a == 90) {return "ninety"};
    if (a <= 20) {
    return numbers[a]};
    if (a > 20 && a < 30) {
        let last_char = a % 10;
        final = `twenty ${numbers[last_char]}`;
        return final
    }
    if (a > 30 && a < 40) {
        let last_char = a % 10;
        final = `thirty ${numbers[last_char]}`;
        return final
    }
    if (a > 40 && a < 50) {
        let last_char = a % 10;
        final = `forty ${numbers[last_char]}`;
        return final
    }
    if (a > 50 && a < 60) {
        let last_char = a % 10;
        final = `fifty ${numbers[last_char]}`;
        return final
    }
    if (a > 60 && a < 70) {
        let last_char = a % 10;
        final = `sixty ${numbers[last_char]}`;
        return final
    }
    if (a > 70 && a < 80) {
        let last_char = a % 10;
        final = `seventy ${numbers[last_char]}`;
        return final
    }
    if (a > 80 && a < 90) {
        let last_char = a % 10;
        final = `eighty ${numbers[last_char]}`;
        return final
    }
    if (a > 90 && a < 100) {
        let last_char = a % 10;
        final = `ninety ${numbers[last_char]}`;
        return final
    }
    if (a == 100) {return "one hundred"};
    if (a >= 100 && a <= 999) {
        let first_char = Math.floor(a / 100);
        let middle_char = (Math.floor(a / 10)) % 10;
        let last_char = a % 10;
        let two_numb = String(middle_char) + String(last_char);
        if (Number(two_numb) > 10 && Number(two_numb) < 20) {
        final = `${numbers[first_char]} hundred ${numbers_3[last_char]}`}
        else {
        final = `${numbers[first_char]} hundred ${numbers_2[middle_char]} ${numbers[last_char]}`    
        }
        if (middle_char == 0 && last_char == 0) {
            final = `${numbers[first_char]} hundred`     
            } else {
        if (middle_char == 0) {
        final = `${numbers[first_char]} hundred ${numbers[last_char]}`        
        } else
        if (last_char == 0) {
        final = `${numbers[first_char]} hundred ${numbers_2[middle_char]}`     
        } 
    }
        return final
        }
    
}
