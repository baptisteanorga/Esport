/** Set Variables */
let secondsRemaining;
let intervalHandle;
let minutes = 60;
let step =0;
const timeDisplay = document.getElementById("time");

const help_tab = [
	`Utilisez votre ordinateur de poche pour lire les étranges symboles durant votre escape.`,
	`Le code du cadenas est formé par le chemin.`,
	`Les calculs sont faux.`,
	`Sur votre ordinateur, vous trouverez un modèle de tube à essai.`,
	`Trouvez la quantité de Dysprosium en millilitres. Vous pouvez vous aidez de votre ordinateur. `,
	`Aidez-vous des éléments que vous avez trouvé.`,
]

const description = [
	`Trouvez la quantité d’Erbium nécessaire pour le remède.`,
	`Trouvez le code du cadenas`,
	`Trouvez le nom du troisième produit nécessaire à la création du remède.`,
	`Trouvez le nom du produit argenté.`,
	`Trouvez la quantité en mL de Dysprosium nécessaire à la création du remède.`,
	`Trouvez le code du coffre fort`,
	`Bravo vous avez fini !`,
]

const answer =[
	`start`,
	`0,7`,
	`956`,
	`chlore`,
	`osmium`,
	`0,4`,
	`5247`,
]

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
	const red_tear = document.getElementsByClassName('red_tear');

    if (msg==answer[0]&& step==0)
    {
		startCountdown();
		content.style.color='white';

		content.innerHTML=description[0];
		step++;
		stepCount.innerHTML = 'ETAPE ' + step;

		
		
	}
	else if (msg==answer[1]&& step==1){
		content.innerHTML=description[1];
		step++;
		stepCount.innerHTML = 'ETAPE ' + step;

		red_1[0].classList.toggle('active');
		red_dark_1[0].classList.toggle('active');
		
		


	}
	else if (msg==answer[2]&& step==2){
		content.innerHTML=description[2];
		step++;
		stepCount.innerHTML = 'ETAPE ' + step;
		yellow_2[0].classList.toggle('active');

	}
	else if (msg==answer[3]&& step==3){
		content.innerHTML=description[3];
		step++;
		stepCount.innerHTML = 'ETAPE ' + step;
		green_2[0].classList.toggle('active');
		red_2[0].classList.toggle('active');

	}
	else if (msg==answer[4]&& step==4){
		content.innerHTML=description[4];
		step++;
		stepCount.innerHTML = 'ETAPE ' + step;
		yellow_3[0].classList.toggle('active');
		yellow_dark_3[0].classList.toggle('active');

	}
	else if (msg==answer[5]&& step==5){
		content.innerHTML=description[5];
		step++;
		stepCount.innerHTML = 'ETAPE ' + step;
		green_4[0].classList.toggle('active');
		green_dark_4[0].classList.toggle('active');

	}

    else if (msg==answer[6]&& step==6){
		document.getElementById("time").style.color='green';
		content.innerHTML=description[6];
		stepCount.innerHTML = 'ETAPE ' + step;
		clearInterval(intervalHandle);
		red_5[0].classList.toggle('active');
		red_tear[0].classList.toggle('active');

	}
	else if (step!=0||step!=6)
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
