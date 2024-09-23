// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u)
// на певний символ, наприклад *.

function replaceVowels(str) {
  let result = "";
  const vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char.toLowerCase())) {
      result += "*";
    } else {
      result += char;
    }
  }
  return result;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript")); // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;
