const circle = document.querySelector('.progress-ring__circle-line');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress (percent) {
	const offset = circumference - percent / 100 * circumference;
	circle.style.strokeDashoffset = offset;
}

const circleBody = document.querySelector('.progress-ring__circle');

const mediaQuery = window.matchMedia('(max-width: 450px)')

function handleTabletChange(e) {
	if (e.matches) {
	  	circleBody.setAttribute('r', '130');
		circleBody.setAttribute('cx', '145');
		circleBody.setAttribute('cy', '145');
		
		circle.setAttribute('r', '115');
		circle.setAttribute('cx', '145');
		circle.setAttribute('cy', '145');
	}
  }
  mediaQuery.addEventListener('onchange', handleTabletChange);
  handleTabletChange(mediaQuery)

;
const focusTimeInput = document.querySelector("#focusTime");
const shortBreakInput = document.querySelector("#shortBreak");
const longBreakInput = document.querySelector("#longBreak");
const submitForm = document.querySelector('form');
const applyButton = document.querySelector('.settings__apply-btn');
const closeBtn = document.querySelector('#closeBtn');
const fontButtons = document.querySelectorAll('.fonts__item')

//OPEN SETTINGS 

const settingsOpen = document.querySelector('.timer__icon');
const settingsPage = document.querySelector('.page__settings');

// input buttons 

const changeValueDown = (event) => {
	let $input = event.target.closest('.block-control__input').querySelector('.block-control__input-form');
	let val = parseInt($input.value);
	let min = parseInt($input.min);
	let step = parseInt($input.step);

	let temp = val - step;

	function ValueDown() {
		if (temp >= min) {
			$input.value = temp
		}	else {
			$input.value = min;
		}
	}
	ValueDown()
}

const changeValueUp = (event) => {
	let $input = event.target.closest('.block-control__input').querySelector('.block-control__input-form');
	let val = parseInt($input.value);
	let max = parseInt($input.max);
	let step = parseInt($input.step);

	console.log($input);

	let temp = val + step;

	function ValueUp() {
		if (temp <= max) {
			$input.value = temp
		}	else {
			$input.value = max;
		}
	}
	ValueUp()
}

const downButton = document.querySelectorAll('.down');
downButton.forEach(button => {
	button.addEventListener('click', changeValueDown);
})

const upButton = document.querySelectorAll('.up');
upButton.forEach(button => {
	button.addEventListener('click', changeValueUp);
})

//inputs button

settingsOpen.addEventListener('click', function() {
	settingsPage.classList.toggle('_active');
});

submitForm.addEventListener('submit', function(e) {
		e.preventDefault();
		localStorage.getItem('items')
		localStorage.setItem('items', JSON.stringify(TIMER));
		TIMER = makeUser(`${focusTimeInput.value}`, `${shortBreakInput.value}`, `${longBreakInput.value}`)
});

document.addEventListener('click', timeSection);

function timeSection(event) {
	if(event.target.closest('.settings__close')) {
		settingsPage.classList.remove('_active');
	} else 
	if (event.target.closest('.settings__apply-btn')) {
		settingsPage.classList.remove('_active');
		//
		clickOnActive()
	setProgress(0);
    changeClasses();
    document.title = 'Pomodoro timer'
		//
		localStorage.getItem('items')
		saveSelectedFont();
		saveSelectedColor()
		getNewData();
		datasetMode();
		clearTimeout(initial);
	}
};

function getNewData() {
	//SAVE FONT-COLOR IN LOCALSTORAGE
	if (localStorage.getItem('fontColor') === null) 
	{localStorage.setItem('fontColor', JSON.stringify('#F87070'))} else 
	{var dataColor = JSON.parse(localStorage.getItem('fontColor'));
root.style.setProperty('--mainColor', `${dataColor}`)}

	//SAVE FONT-FAMILY IN LOCALSTORAGE
	if (localStorage.getItem('fontFamily') === null){
		localStorage.setItem('fontFamily', JSON.stringify('KumbhSans'))
	} else {
		const dataFont = JSON.parse(localStorage.getItem('fontFamily'));
		document.body.style.fontFamily = dataFont;
	}

	//SAVE FONTS 
	if (localStorage.getItem('selected') === null) {
		fontItem[0].click();
	}
	if (localStorage.getItem('selectedColor') === null) {
		colorItem[0].click();
		colorIcons[0].click();
	}
	JSON.parse(localStorage.getItem('items'));
		
}



//Change Font-Family 

const fontItem = document.querySelectorAll('.fonts__item');
const fontBlock = document.querySelector('.setting__fonts')

let stored = localStorage.getItem('selected') || '[]'
let indexes = JSON.parse(stored)
for(const index of indexes) {
	
	fontItem[index].classList.add('_active');
}

	fontItem.forEach(function(item) {
		item.addEventListener('click', function() {
			fontItem.forEach(function(item) {
				item.classList.remove('_active');
			})
			item.classList.add('_active')
			const indexes = [];
			for(let i = 0; i < fontItem.length; i++){
			if(fontItem[i].classList.contains('_active')){indexes.push(i);}
		}
		})
	})
	
	

	function saveSelectedFont() {
		const indexes = [];
		for(let i = 0; i < fontItem.length; i++){
		  if(fontItem[i].classList.contains('_active')){
			indexes.push(i);
		  }
		}
		localStorage.setItem('selected', JSON.stringify(indexes));
	  }

	fontBlock.addEventListener('click', function (event) {
		if (event.target.closest('[data-family=KumbhSans]')){
			// document.body.style.fontFamily='KumbhSans'
			localStorage.setItem('fontFamily', JSON.stringify('KumbhSans'))
		} else if (event.target.closest('[data-family=RobotoSlab]')){ 
		// document.body.style.fontFamily='RobotoSlab'
		localStorage.setItem('fontFamily', JSON.stringify('RobotoSlab'))
		} else if (event.target.closest('[data-family=SpaceMono]')){
			// document.body.style.fontFamily='SpaceMono';
			localStorage.setItem('fontFamily', JSON.stringify('SpaceMono'))
		}
	})

//


//Change Font-Color

const colorItem = document.querySelectorAll('.color__item');
const colorBlock = document.querySelector('.setting__color');
const colorIcons = document.querySelectorAll('.color-icon');

let storedColor = localStorage.getItem('selectedColor') || '[]'
let indexesColor = JSON.parse(storedColor)
for(const index of indexesColor) {
	colorIcons[index].classList.add('_icon-check-btn');
}

colorItem.forEach(function(item) {
	
	item.addEventListener('click', function() {
		colorIcons.forEach(element => {
			element.addEventListener('click', function() {
				colorIcons.forEach(function(item) {
					item.classList.remove('_icon-check-btn')
				})
				element.classList.add('_icon-check-btn')
				const indexesColor = [];
				for(let i = 0; i < colorIcons.length; i++){
				if(colorIcons[i].classList.contains('_icon-check-btn')){indexesColor.push(i);}
			}
			})
		});
	})
});

function saveSelectedColor() {
	const indexesColor = [];
	for(let i = 0; i < colorIcons.length; i++){
	  if(colorIcons[i].classList.contains('_icon-check-btn')){
		indexesColor.push(i);
	  }
	}
	localStorage.setItem('selectedColor', JSON.stringify(indexesColor));
  }

const root = document.documentElement;
colorBlock.addEventListener('click', function (event) {
	if (event.target.closest('[data-color=pink]')){
		localStorage.setItem('fontColor', JSON.stringify('#F87070'))
	} else if (event.target.closest('[data-color=blue]')){ 
	localStorage.setItem('fontColor', JSON.stringify('#70F3F8'))
	} else if (event.target.closest('[data-color=purple]')){
		localStorage.setItem('fontColor', JSON.stringify('#D881F8'))
	}
})

window.onload = getNewData;;
const modeButtons = document.querySelector('[class=control]');
const timer = document.getElementById('timer');
const pomodorButton = document.getElementById('pomodoroButton');
const shortButton = document.getElementById('shortButton');
const longButton = document.getElementById('longButton');
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector('.pause');
const restartBtn = document.querySelector('.restart');
const bell = document.querySelector('audio');
var interval = null;

let seconds = 0;
let paused, initial;


var TIMER = JSON.parse(localStorage.getItem('items')) ? JSON.parse(localStorage.getItem('items')) : makeUser(`${focusTimeInput.value}`, `${shortBreakInput.value}`, `${longBreakInput.value}`)

function makeUser (POMODORO, SHORTBREAK, LONGBREAK) {
    return {
        POMODORO,
        SHORTBREAK,
        LONGBREAK,
    };
}


function changeMode(e) {
    setProgress(0);
    changeClasses();
    document.title = 'Pomodoro timer'
    clearTimeout(initial);

    for(let i = 0; i < 3; i++) {
        e.path[1].children[i].classList.remove('_active');
    }
    e.target.classList.add('_active');

    let mode = e.target.dataset.mode;
    timer.dataset.mode = mode;

    if(timer.dataset.mode === 'pomodoro') {
        if(TIMER.POMODORO < 10) {
            timer.innerHTML = `0${TIMER.POMODORO}:00`
        } else {
            timer.innerHTML = `${TIMER.POMODORO}:00`
        }
    } else if (timer.dataset.mode === 'short') {
            timer.innerHTML = `0${TIMER.SHORTBREAK}:00`
    } else {
        if(TIMER.LONGBREAK < 10) {
            timer.innerHTML = `0${TIMER.LONGBREAK}:00`
        } else {
            timer.innerHTML = `${TIMER.LONGBREAK}:00`
        }
    };

    setTimer()
}
function datasetMode() {
	if(timer.dataset.mode === 'pomodoro') {
		if(TIMER.POMODORO < 10) {
			timer.innerHTML = `0${TIMER.POMODORO}:00`
		} else {
			timer.innerHTML = `${TIMER.POMODORO}:00`
		}
	} else if (timer.dataset.mode === 'short') {
			timer.innerHTML = `0${TIMER.SHORTBREAK}:00`
	} else {
		if(TIMER.LONGBREAK < 10) {
			timer.innerHTML = `0${TIMER.LONGBREAK}:00`
		} else {
			timer.innerHTML = `${TIMER.LONGBREAK}:00`
		}
	};
}
    function setTimer() {

        if(timer.dataset.mode === 'pomodoro') {
            seconds = TIMER.POMODORO * 60;
            totalsecs = TIMER.POMODORO * 60;
        } else if (timer.dataset.mode === 'short') {
            seconds = TIMER.SHORTBREAK * 60;
            totalsecs = TIMER.SHORTBREAK * 60;
        } else if (timer.dataset.mode === 'long') {
            seconds = TIMER.LONGBREAK * 60;
            totalsecs = TIMER.LONGBREAK * 60;
        }
    }
    
    function pomodoroStart() {
            let timeRemaining = ('0' + Math.floor(seconds / 60)).slice(-2) + ':' + ('0' + (seconds % 60)).slice(-2);
                timer.innerHTML = timeRemaining;
                document.title = `${timeRemaining} - ${timer.dataset.mode === 'pomodoro' ? 'Work' : 'Break'}`;
                if (startBtn.classList.contains('_active')) {
                    startBtn.classList.remove('_active');
                    pauseBtn.classList.add("_active");
                }
                if(seconds > 0) {
                    perc = Math.ceil(((totalsecs - seconds) / totalsecs)* 100)
                    setProgress(perc);
                    seconds--;
                    initial = window.setTimeout('pomodoroStart()', 1000);
                } else {
                    seconds = 0;
                    bell.play();
                    pauseBtn.classList.remove('_active');
                    restartBtn.classList.add('_active');
                }
                
    }
    function changeClasses() {
        if(!startBtn.classList.contains('_active')) {
            const allButtons = document.querySelectorAll('.button');
            for (const allbutton of allButtons) {
                allbutton.classList.remove('_active');
            }
            startBtn.classList.add('_active');
        }
    }
    function pomodoroPause() {
        if (paused === undefined) {
           return;
        } 
        if (paused) {
            paused = false;
            initial = setTimeout((pomodoroStart()), 60);
            pauseBtn.textContent = 'PAUSE'
        }   else {
            clearTimeout(initial);
            pauseBtn.textContent = 'start-t';
            paused = true;
        }
    }

    function pomodoroRestart() {
        paused = false;
        clearTimeout(initial);
        setProgress(0);
        localStorage.clear()
        if (restartBtn.classList.contains('_active')) {
            restartBtn.classList.remove('_active');
            startBtn.classList.add("_active");
        }
    }
    startBtn.addEventListener('click', () => {
        pomodoroStart();
        paused = false;
    });
    pauseBtn.addEventListener('click', () => {
        pomodoroPause();
    });
    restartBtn.addEventListener('click', () => {
        pomodoroRestart();
    });

    modeButtons.addEventListener('click', changeMode);

    const buttonControl = document.querySelectorAll('.control__block');
    function clickOnActive() {
            for(i=0; i<buttonControl.length;i++){
                if(buttonControl[i].classList.contains('_active')){
                    buttonControl[i].click();
                }
            }
    }
    pomodorButton.click();
  
; 
