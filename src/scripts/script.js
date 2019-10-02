/** Set Variables */
let secondsRemaining;
let intervalHandle;
let minutes = 60;
let step =0;
const timeDisplay = document.getElementById("time");

const help_tab = [
	`Je suis l'aide 1`,
	`Je suis l'aide 2`,
	`Je suis l'aide 3`,
	`Je suis l'aide 4`,
	`Je suis l'aide 5`,
]

// console.log(help_tab)

// document.addEventListener('DOMContentLoaded', function() {
// 	const help_1 = document.getElementsByClassName('help_1');
	
// 	help_1[step].addEventListener('click',()=>{
// 		console.log('coucou')
// 	})
	
// 	help_1[0].addEventListener('mouseover',()=>{
// 		const helper = document.getElementsByClassName('helper');
// 		if(step==1)
// 		{
// 			helper[step-1].classList.toggle('active');
// 			helper[step-1].innerHTML='Je suis la description 1';
			
// 		}
// 				help_1[step-1].addEventListener('mouseout',()=>{
// 					helper[step-1].classList.toggle('active')
// 				})
// 	})
	
// }, false);

document.addEventListener('DOMContentLoaded', function() {
	const help = document.getElementsByClassName('help');
	const helper = document.getElementById('helper');
	for(let i = 0; i < help.length; i++) {
		help[i].addEventListener("mouseenter", function() {
			if(step-1==i){

				helper.classList.toggle('active');
				helper.innerHTML=help_tab[i];
			}
			help[i].addEventListener('mouseleave',()=>{
				console.log('parti')
				helper.classList.toggle('active');
			})			
		})
	}
}, false);











 



document.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13)
    {
        getInputValue();
    }
});

/**Function Push Value */
function getInputValue()
{
    let inputVal = document.getElementById("input").value;
    if (inputVal!='')
    {
        console.log(inputVal);
        sendMessage(inputVal);
        clearInputValue()
    }
    else if (inputVal==''){
        console.log('InputVal est vide')
    }
}

function clearInputValue()
{
    document.getElementById('input').value = '';
}

function sendMessage(msg){
	const content = document.getElementById('content');
	const stepCount = document.getElementById("step");
	/** SET VARIABLES IMG */
	const red_1 = document.getElementsByClassName('red_1');
	const red_dark_1 = document.getElementsByClassName('red_dark_1');
	const yellow_2 = document.getElementsByClassName('yellow_2');
	const green_2 = document.getElementsByClassName('green_2');
	const red_2 = document.getElementsByClassName('red_2');
	const yellow_3 = document.getElementsByClassName('yellow_3');
	const yellow_dark_3 = document.getElementsByClassName('yellow_dark_3');
	const green_4 = document.getElementsByClassName('green_4');
	const green_dark_4 = document.getElementsByClassName('green_dark_4');
	const red_5 = document.getElementsByClassName('red_5');

    if (msg=='start'&& step==0)
    {
		startCountdown();
		content.style.color='white';

		content.innerHTML=`Chercher la solution 1`;
		step++;
		stepCount.innerHTML = 'Étape : ' + step;

		
		
	}
	else if (msg=='stage1'&& step==1){
		content.innerHTML='Étape 1 réussie, go step 2';
		step++;
		stepCount.innerHTML = 'Étape : ' + step;

		red_1[0].classList.toggle('active');
		red_dark_1[0].classList.toggle('active');
		
		


	}
	else if (msg=='stage2'&& step==2){
		content.innerHTML=`Bravo vous avez réussi l'étape 2, on passe à la suite`;
		step++;
		stepCount.innerHTML = 'Étape : ' + step;
		yellow_2[0].classList.toggle('active');
		green_2[0].classList.toggle('active');
		red_2[0].classList.toggle('active');

	}
	else if (msg=='stage3'&& step==3){
		content.innerHTML=`Bravo vous avez réussi l'étape 2, on passe à la suite`;
		step++;
		stepCount.innerHTML = 'Étape : ' + step;
		yellow_3[0].classList.toggle('active');
		yellow_dark_3[0].classList.toggle('active');

	}
	else if (msg=='stage4'&& step==4){
		content.innerHTML=`Bravo vous avez réussi l'étape 2, on passe à la suite`;
		step++;
		stepCount.innerHTML = 'Étape : ' + step;
		green_4[0].classList.toggle('active');
		green_dark_4[0].classList.toggle('active');

	}

    else if (msg=='stop'&& step==5){
		document.getElementById("time").style.color='green';
		content.innerHTML='Bravo vous avez réussi !';
		stepCount.innerHTML = 'Étape : ' + step;
		clearInterval(intervalHandle);
		red_5[0].classList.toggle('active');

	}
	else if (step!=0||step!=5)
	{
		content.innerHTML='Ceci ne fera pas avancer le remède';
	}
}

/** COUNT */
function tick(){
	// grab the h1
	const timeDisplay = document.getElementById("time");

	// turn the seconds into mm:ss
	let min = Math.floor(minutes / 60);
	let sec = minutes - (min * 60);

	//add a leading zero (as a string value) if seconds less than 10
	if (sec < 10) {
		sec = "0" + sec;
	}

	// concatenate with colon
	const message = min.toString() + ":" + sec;

	// now change the display
	timeDisplay.innerHTML = message;

	// stop is down to zero
	if (minutes === 0){
		alert("PERDU! Veuillez vous dirigez vers la sortie");
		clearInterval(intervalHandle);
		document.location.reload(true);
	}

	//subtract from seconds remaining
	minutes--;
}

function startCountdown(){
	document.getElementById("time").style.color='red';
	
	minutes = minutes * 60;
	//repeat every second
	intervalHandle = setInterval(tick, 1000);
}
