let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-button");
let newbut=document.querySelector("#new-button");
let container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let count=0;

let turnO=true;


const winPattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];


const resetGame= () => {
    turnO=true;
    enableBoxes();
    container.classList.add("hide");
    removeActiveClass();
}

const newGame = () => {
    turnO=true;
    enableBoxes();
    container.classList.add("hide");
    removeActiveClass();
}


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
       if(turnO === true){
        box.innerText="O";
        turnO=false;
       }
       else
       {
        box.innerText="X";
        turnO=true;
       } 
       box.disabled=true;
       count++;
       checkWinner();
       
    
    });
});

const disableBoxes = () =>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
}
const enableBoxes = () =>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
}
const showDraw = () => {
    msg.innerText=`Alas!!! The Game is a Draw`;
    disableBoxes();
    container.classList.remove("hide");

}

const showWinner = (winner) => {
    msg.innerText=`Congratulations!!! Winner is ${winner}`;
    disableBoxes();
    container.classList.remove("hide");
    celebration();
}

const checkWinner= () => {
    for(pattern of winPattern){
        
        
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;
        
        if(pos1 !="" && pos2 != "" && pos3 != ""){
            if((pos1 === pos2)&&( pos2===pos3)){
                showWinner(pos1);

            }
            else if(count === 9 ){
                showDraw();
            }
            

        }

    }
}

newbut.addEventListener("click",newGame);
reset.addEventListener("click",resetGame);

const celebration = () => {
    const fireworks = document.querySelectorAll('.firework');

    fireworks.forEach((firework,index) => {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            firework.style.left = `${x}px`;
            firework.style.top = `${y}px`;
            firework.classList.add('active');
        }, index * 200);
    });
};

const removeActiveClass = () => {
    const fireworks = document.querySelectorAll('.firework');
    
    fireworks.forEach(firework => {
        firework.classList.remove('active');
    });
};

// Add event listeners to each firework to remove the active class after animation ends
// document.querySelectorAll('.firework').forEach(firework => {
//     firework.addEventListener('animationend', removeActiveClass);
// });

// // Example usage: add an event listener to a button to trigger the celebration
// document.getElementById('celebrateButton').addEventListener('click', celebration);
