let colors = ["Red", "Blue", "Green", "Yellow"];
let playBtn = document.querySelector("#play");
const score = document.querySelector("#score");


playBtn.addEventListener("click", e => {
    //e.preventDefault()
  console.log('submitting form')
  //let x = setInterval(timer, 1000);
  reset();
})


let checkmark = document.querySelector("#checkmark");
let wrong = document.querySelector("#wrong");
let correct = document.querySelector("#correct");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let blue = document.querySelector("#Blue");
let red = document.querySelector("#Red");
let green = document.querySelector("#Green");
let yellow = document.querySelector("#Yellow");
let correctInt = 0

function checkColour(color, correctAns){
    if(color === correctAns){
        correctInt++
        checkmark.classList.add("fadeAway");
    }
    else{
        wrong.classList.add("fadeAway");
    }
    setTimeout(function(){
        checkmark.classList.remove("fadeAway");
        wrong.classList.remove("fadeAway")
    },500);
    reset();
    correct.innerHTML = correctInt;
}

playBtn.addEventListener("click", e => {
    //e.preventDefault()
  console.log('submitting form')
  //let x = setInterval(timer, 1000);
  reset();
})

function setAgain(){
    let random1 = Math.floor(Math.random() * 4);
	color1.style.display = "block";
	color1.innerHTML = colors[random1];
    counter = 0;
    //document.querySelector(".set").style.display = "none";
    documnet.querySelector("color1").classList.add(".clear");
    correctAns = colors[random1].toLowerCase();
}


function reset(){
    let random1 = Math.floor(Math.random() * 4);
	color1.style.display = "block";
	color1.innerHTML = colors[random1];
    counter = 0;
    //document.querySelector(".set").style.display = "none";
    correctAns = colors[random1].toLowerCase();
    
  //  color1.innerHTML = correctAns;
  //  color2.style.color = correctAns;

   /* if(random+1 == 4){
        color2.innerHTML = colors[random-3];
    }
    else{
        color2.innerHTML= colors[random+1]
    }
    if(random-1==-1){
        color1.style.color = colors[random+3];
    }
    else{
        color1.style.color = colors[random-1];
    }
    color1.style.display = "block";
    color2.style.display = "block";
    addClick("Blue", correctAns);
    addClick("Red", correctAns);
    addClick("Green", correctAns);
    addClick("Yellow", correctAns);*/
}


const testbtn = (evt) => {
	 let element = evt.currentTarget;
	 let answer = element.getAttribute("id").toLowerCase();
	 counter++
     score.innerHTML = counter;
	 console.log(counter)
	  if (correctAns === answer) {
		  color2.innerHTML = "Correct";
		  color2.style.display = "block";
	  } else {
		   color2.innerHTML = "Incorrect";
		  color2.style.display = "block";
	  }
}

blue.addEventListener('click', testbtn)
red.addEventListener('click', testbtn)
green.addEventListener('click', testbtn)
yellow.addEventListener('click', testbtn)
		  

/**function addClick(color, correctAns){
    let ranColor = document.querySelector(color);
    let checker = "checkColor('" .concat(color, "','", correctAns, "')");
    ranColor.setAttribute("checker", checker);
}*/


let countDown = 30;
function timer(){
    document.querySelector("#time").innerHTML = countDown;
    if(countDown == 0){
        clearInterval(timer);
        alert("Game Over. Score: " + correctInt);
        location.reload();
    }
    countDown--;
}

document.querySelector('#nextG').addEventListener('click', function(){
        //e.preventDefault()
  console.log('submitting form')
  //let x = setInterval(timer, 1000);
  reset();
  });

document.querySelector('#reset').addEventListener('click', function(){
    window.location.reload();
    return false;
  });


  let player;
  player = prompt("Enter your name", "");
  

Players = [`${player}`];

    function displayLeaderboard() {
      let theExport = ""; 
      
      Players.sort((aPlayer, bPlayer) => aPlayer.score - bPlayer.score);
       
Players.forEach((player) => theExport += '<tr><td>' + `${player}` + '</td><td>'  + '</td></tr>');
     
        document.querySelector("#player").innerHTML = theExport;
    }

    displayLeaderboard();

 // document.querySelector("#player").innerHTML = player;