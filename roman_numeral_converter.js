function convertToRoman(num) {
	//Converts num into a string (strNum)
  const strNum = num.toString();
	//Splits strNum into an array consisting of a string of each digit, then converts each string into an integer
  const arrNum = strNum
                  .split("")
                  .map(x => parseInt(x));

	//Checks the length of arrNum and multiplies each index according to its place in num (e.g. the '1' in 1234 has a value of 1000)
  if (arrNum.length == 4) {
    arrNum.splice(0, 1, arrNum[0] * 1000)
    arrNum.splice(1, 1, arrNum[1] * 100)
    arrNum.splice(2, 1, arrNum[2] * 10);
  } else if (arrNum.length == 3) {
    arrNum.splice(0, 1, arrNum[0] * 100)
    arrNum.splice(1, 1, arrNum[1] * 10);
  } else if (arrNum.length == 2) {
    arrNum.splice(0, 1, arrNum[0] * 10);
  }

	//Converts the newly multiplied integers back into strings
  const arrStr = arrNum.map(x => x.toString());

	//Lays out matches according to Roman Numeral rules
  const numeral = {
    3000: "MMM",
    2000: "MM",
    1000: "M",
    900: "CM",
    800: "DCCC",
    700: "DCC",
    600: "DC",
    500: "D",
    400: "CD",
    300: "CCC",
    200: "CC",
    100: "C",
    90: "XC",
    80: "LXXX",
    70: "LXX",
    60: "LX",
    50: "L",
    40: "XL",
    30: "XXX",
    20: "XX",
    10: "X",
    9: "IX",
    8: "VIII",
    7: "VII",
    6: "VI",
    5: "V",
    4: "IV",
    3: "III",
    2: "II",
    1: "I"
  };

	//Filters out 0s (since they aren't represented in Roman Numerals), then replaces each index with its match as laid out in the numeral variable
 let numeralArr = arrStr
                    .filter(y => y != 0)
                    .map(x => x.replace(/\d+/, match => numeral[match]));

	//Joins the array into a single string
 let result = numeralArr.join("");

 return result;
}

console.log(convertToRoman(3999));