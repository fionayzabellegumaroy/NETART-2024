
const correct = document.querySelector(".correctbtn");
const incorrect1 = document.querySelector(".incorrectbtn1");
const incorrect2 = document.querySelector(".incorrectbtn2");
const text = document.querySelector(".text");
const container = document.querySelector(".container");
const body = document.querySelector("#body");

correct.addEventListener("click", () =>{
    text.innerText = "You got it!";
    correct.style.display = "none";
    incorrect1.style.display = "none";
    incorrect2.style.display = "none";
})

incorrect1.addEventListener("click", () =>{
    text.innerText = "Better luck next time!";
    correct.style.display = "none";
    incorrect1.style.display = "none";
    incorrect2.style.display = "none";
    container.style.backgroundColor = "red";
})

incorrect2.addEventListener("click", () =>{
    text.innerText = "Better luck next time!";
    correct.style.display = "none";
    incorrect1.style.display = "none";
    incorrect2.style.display = "none";
    container.style.backgroundColor = "red";
})