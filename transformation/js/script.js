
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const start = document.querySelector(".start");
const redo = document.querySelector(".redo");
const text = document.querySelector(".text");
const container = document.querySelector(".container");
const body = document.querySelector("#body");
// const count = document.querySelector(".count");
const end = document.querySelector(".end");

redo.style.display = "none";

let buttons = [button1, button2, button3];
button1.style.display = "none";
button2.style.display = "none";
button3.style.display = "none";
// count.style.display = "none";

// let count = 0;

start.addEventListener("click", () => {
    button1.style.display = "list-item";
    button2.style.display = "list-item";
    button3.style.display = "list-item";

    start.style.display = "none";
    start.innerText = "";
    text.innerText = "Which is the Correct Button?";
    buttons[Math.floor((Math.random() * 3))].id = "correct"; //does it revert it back after? also idk if need quotations
      
    buttons.forEach(function(elem){
        elem.addEventListener("click", ()=>{
        if (elem.id == "correct"){ //look at calendar project!
            text.innerText = "You got it!";
            container.backgroundColor = "red";
            button1.style.display = "none";
            button2.style.display = "none";
            button3.style.display = "none";
        } 
        if (elem.id != "correct"){
            text.innerText = "Better luck next time!";
            container.style.backgroundColor = "lightgoldenrodyellow";
            button1.style.display = "none";
            button2.style.display = "none";
            button3.style.display = "none";
        }
        redo.style.display = "flex";

    })

});


redo.addEventListener("click", () => {
    button1.id = "btn";
    button2.id = "btn";
    button3.id = "btn";

    start.innerText = "Let's Play";
    start.style.display = "grid";
    redo.style.display = "none";
    container.style.backgroundColor = "lightblue";
    text.innerText = "";
});

})