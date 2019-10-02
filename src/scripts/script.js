/** Set Variables */
let secondsRemaining;
let intervalHandle;
let minutes = 60;
let step =0;
const timeDisplay = document.getElementById("time");




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

    if (msg=='start'&& step==0)
    {
		startCountdown();
		content.style.color='white';

		content.innerHTML=`Chercher la solution 1`;
		step++;
		stepCount.innerHTML = 'Étape : ' + step;
		red_1[0].classList.toggle('active');
		red_dark_1[0].classList.toggle('active');
		yellow_2[0].classList.toggle('active');
		green_2[0].classList.toggle('active');
		red_2[0].classList.toggle('active');
		
	}
	else if (msg=='stage'&& step==1){
		content.innerHTML='Étape 1 réussie, go step 2';
		step++;
		stepCount.innerHTML = 'Étape : ' + step;

	}
	

    else if (msg=='stop'&& step==2){
		document.getElementById("time").style.color='green';
		content.innerHTML='Bravo vous avez réussi !';
		stepCount.innerHTML = 'Étape : ' + step;
		clearInterval(intervalHandle);
	}
	else if (step!=0||step!=2)
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
