const st = "Good Evening, How are you?";

let vowel = 0,
  conso = 0;
const v = [];
const c = [];
for (let i = 0; i < st.length; i++) {
  if (st[i] == " " || st[i] == "?" || st[i] == "," || st[i] == ":") {
    continue;
  } else if (
    st[i] == "a" ||
    st[i] == "e" ||
    st[i] == "i" ||
    st[i] == "o" ||
    st[i] == "u"
  ) {
    vowel++;
    v.push(st[i]);
  } else {
    conso++;
    c.push(st[i]);
  }
}

console.log("Total Vowels: ", vowel, "\nTotal consonants: ", conso);
// node task.js

// problem:2 check pallindrome

let st1 = "Able was I ere I saw Elba";
st1 = st1.toLowerCase();
let st2 = st1.split("").reverse().join("");
console.log(st2);

if (st1 === st2) {
  console.log("The String is a Pallindrome");
} else {
  console.log("The String is not a Pallindrome");
}

// problem:3
function calculate(num1, num2, callback) {
  const result = num1 + num2;
  callback(result);
}

// Callback function to handle the result
function handleResult(result) {
  console.log("The result is:", result);
}

// Calling the main function and providing the callback function
calculate(5, 10, handleResult);
