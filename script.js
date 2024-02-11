
let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");


const draw = () => {
    console.log("draw");
    msg.innerHTML = "Match Draw!"
    msg.style.backgroundColor = "grey";
}


const genComputerChoice = () => {
    const option = ['Rock' , 'Paper' , 'Scissors'];
    let index = Math.floor(Math.random()*3);
    
    return(option[index])
}

const showWinner = (userWin ,userchoice, compchoice) => {
    if(userWin){
        msg.innerHTML = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        user.innerHTML = userscore;
        user.style.color = "green";
    }
    else{ 
        msg.innerHTML = `You lose, ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        comp.innerHTML = compscore;
        comp.style.color = "red";
    }
}

const playgame = (userchoice) => {
    const compchoice = genComputerChoice();
    if(userchoice === compchoice){
        draw();
    }
    else{
        let userWin = true;
        if(userchoice === 'Rock'){
            userWin = compchoice === 'Paper' ? false : true;
        }
        else if(userchoice === 'Paper'){
            userWin = compchoice === 'Scissors' ? false : true;
        }
        else{
            userWin = compchoice === 'Paper' ? true : false;
        }
        showWinner(userWin ,userchoice, compchoice);
    }
} 

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})
