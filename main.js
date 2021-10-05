let arrFunc = (answer1, answer2, answer3) => {
  let now = new Date();
  let before = new Date(`${(answer1, answer2, answer3)}`);
  let differ = now.getTime() - before.getTime();
  let age = Math.round(differ / 1000 / 60 / 60 / 24 / 365);
  result.innerHTML = `Date: ${answer1}   Month: ${answer2}   Year: ${answer3},  Your age is ${
    age - 1 }`;
};

let addForm = document.querySelector(".signupForm");
let result = document.querySelector(".result");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let answer1 = addForm.date.value.trim();
  let answer2 = addForm.month.value.trim();
  let answer3 = addForm.year.value.trim();

  arrFunc(answer1, answer2, answer3);
});
