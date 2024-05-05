
const sun = document.querySelector("#sun");
const fullsun = document.querySelector("#fullsun");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const start = document.querySelector(".start");
const redo = document.querySelector(".redo");
const text = document.querySelector(".text");
const container = document.querySelector(".container");
const body = document.querySelector(".body");
const count = document.querySelector(".count");
const end = document.querySelector(".end");
const rays = document.querySelector(".rays");
const lbird = document.querySelector("#leftbird");
const rbird = document.querySelector("#rightbird");
const cloud = document.querySelectorAll(".cloud");
const outercloud = document.querySelectorAll(".outercloud");
const rain = document.querySelectorAll(".rains");

body.style.backgroundImage = "url(images/background.png)";

redo.style.display = "none";
rays.style.display = "none";
end.style.display = "none";
container.style.backgroundColor = "unset";
container.style.border = "none";
text.innerText = "";
fullsun.style.display = "none";

rain.forEach(function(rain){
    rain.style.display = "none";
})

cloud.forEach(function(cloud){
    cloud.style.display = "none";
})

outercloud.forEach(function(cloud){
    cloud.style.display = "none";
})

let buttons = [button1, button2, button3];

button1.style.display = "none";
button2.style.display = "none";
button3.style.display = "none";

buttons[Math.floor((Math.random() * 3))].id = "correct"; 

let track = 0;

let birdTrack = 300;




lbird.style.left = `${birdTrack}px`;
rbird.style.right = `${birdTrack}px`;


start.addEventListener("click", () => {
    if (birdTrack === 300) track = 0;
    else if (track === 0) birdTrack = 300;

    //count.innerText = track;


    button1.style.display = "list-item";
    button2.style.display = "list-item";
    button3.style.display = "list-item";

    start.style.display = "none";
    start.innerText = "";
    text.innerText = "Which is the correct button?";

    container.style.backgroundColor = "lightgoldenrodyellow";
    container.style.border = "black solid 1px";
    buttons.forEach(function(elem){

        elem.addEventListener("click", ()=>{
            if (elem.id == "correct"){ 
                text.innerText = "You got it!";
                container.style.backgroundColor = "lightgoldenrodyellow";
                button1.style.display = "none";
                button2.style.display = "none";
                button3.style.display = "none";
                
                track += 1;
                birdTrack -= 5;
                redo.style.display = "flex";

                
            } else if (elem.id != "correct"){
                text.innerText = "You selected incorrectly and have therefore saddened mother nature.";
                container.style.backgroundColor = "lightpink";
                button1.style.display = "none";
                button2.style.display = "none";
                button3.style.display = "none";

                track -= 1;
                birdTrack += 5;
                redo.style.display = "flex";
            }

                if (track === 1){
                    rays.style.display = "flex";
                    body.style.backgroundColor = "lightblue";
                } else if (track === 2){
                    body.style.backgroundColor = "#229dd8";
                    fullsun.style.display = "none";
                    sun.style.display = "flex";
                } else if (track === 3){
                    sun.style.display = "none";
                    fullsun.style.display = "flex";
                } else if (track === -1){
                    body.style.backgroundColor = "lightgray";
                    cloud.forEach(function(cloud){
                        cloud.style.display = "flex";
                    })                
                    outercloud.forEach(function(cloud){
                        cloud.style.display = "none";
                    })
                    sun.style.display = "flex";
                } else if (track === -2){
                    sun.style.display = "none";   
                    rain.forEach(function(rain){
                        rain.style.display = "none";
                    })      
                    outercloud.forEach(function(cloud){
                        cloud.style.display = "flex";
                    })      
                } else if (track === -3){
                    rain.forEach(function(rain){
                        rain.style.display = "flex";
                    })                
                    body.style.backgroundColor = "#A9A9A9";
                } else if (track === -4){
                    body.style.backgroundColor = "#A9A9A9";
                } else if (track === -5){
                    body.style.backgroundColor = "gray"
                } else if (track === -6){

                }

                //could prob add this to the list of other if conditions
                if (track === 4){
                    text.innerText = "Drought has killed the human population after months of no rain."
                } else if (track === -7){
                text.innerText = "After months of rain, the human population drowned because there was no ark to save them."
                body.style.backgroundColor = "black";
                }

            lbird.style.left = `${birdTrack}px`;
            rbird.style.right = `${birdTrack}px`;

            //count.innerText = track;

            button1.id = "btn";
            button2.id = "btn";
            button3.id = "btn";
        })
    });

    redo.addEventListener("click", () => {
        buttons[Math.floor((Math.random() * 3))].id = "correct"; 

        redo.style.display = "none";
        text.innerText = "Which is the Correct Button?";

        button1.style.display = "list-item";
        button2.style.display = "list-item";
        button3.style.display = "list-item";

        if (track === 0){
            rays.style.display = "none";
            sun.style.display = "flex"; 
            body.style.backgroundColor = "lightblue;" 
            cloud.forEach(function(cloud){
                cloud.style.display = "none";
            }) 
        }
        if (track === 4 | track === -7){
            end.style.display = "flex";
            redo.style.display = "none";
            redo.innerText = "";
            redo.style.backgroundColor = "unset";
            redo.style.border = "none";
            container.style.border = "none";
            container.style.backgroundColor = "unset";
            track = 0;
            birdTrack = 300;
            text.innerText = "";
            text.style.backgroundColor = "none";

            button1.style.display = "none";
            button2.style.display = "none";
            button3.style.display = "none";

            button1.id = "btn";
            button2.id = "btn";
            button3.id = "btn";
        }
    });  
})
