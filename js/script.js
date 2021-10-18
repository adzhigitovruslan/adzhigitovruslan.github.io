
const picker = new Litepicker({ 
    element: document.getElementById('litepicker'),
	singleMode: false,
	inlineMode: true,
  });
const rangeable = new Rangeable(myRangeInput);

//   const element = document.querySelector('.button-previous-month');
//   const svg_icon_left = document.createElement('img');
//   svg_icon_left.src = '/iconfonts/Vector.svg';
//   svg_icon_left.className = 'img_vector';
//   element.appendChild(svg_icon_left);

//   if (document.body.contains(svg_icon_left)) {
// 	  console.log('true');
//   } else {
// 	  console.log('none');
//   }

let inputL = document.getElementById("inputL");
let inputR = document.getElementById("inputR");

let thumbL = document.querySelector(".sliders > .thumb.leftleft");
let thumbR = document.querySelector(".sliders > .thumb.rightright");

let rangeSelector = document.querySelector(".sliders > .ranges");

function setLValue() {
	
	let _this = inputL,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

		_this.value = Math.min(parseInt(_this.value), parseInt(inputR.value)-1);
		let percent = ((_this.value - min) / (max-min)) * 100;

		thumbL.style.left = percent + "%";
		rangeSelector.style.left = percent + "%";
}
setLValue ();

function setRValue() {
	let _this = inputR,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

		_this.value = Math.max(parseInt(_this.value), parseInt(inputL.value)+1);
		let percent = ((_this.value - min) / (max-min)) * 100;

		thumbR.style.right = (100-percent) + "%";
		rangeSelector.style.right = (100-percent) + "%";
}
setRValue ();

inputL.addEventListener("input", setLValue);
inputR.addEventListener("input", setRValue);




// let inputLeft = document.getElementById("input-left");
// let inputRight = document.getElementById("input-right");

// let thumbLeft = document.querySelector(".slider > .thumb.left");
// let thumbRight = document.querySelector(".slider > .thumb.right");

// let range = document.querySelector(".slider > .range");

// let SelectValueL = document.getElementById("SelectValueL");
// SelectValueL.innerHTML = inputLeft.value;

// let SelectValueR = document.getElementById("SelectValueR");
// SelectValueR.innerHTML = inputRight.value;

// function setLeftValue() {
	
// 	let _this = inputLeft,
// 		min = parseInt(_this.min),
// 		max = parseInt(_this.max);

// 		_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value)-1);
// 		let percent = ((_this.value - min) / (max-min)) * 100;

// 		thumbLeft.style.left = percent + "%";
// 		range.style.left = percent + "%";

// 		SelectValueL.innerHTML = inputLeft.value;
// }
// setLeftValue ();

// function setRightValue() {
// 	let _this = inputRight,
// 		min = parseInt(_this.min),
// 		max = parseInt(_this.max);

// 		_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value)+1);
// 		let percent = ((_this.value - min) / (max-min)) * 100;

// 		thumbRight.style.right = (100-percent) + "%";
// 		range.style.right = (100-percent) + "%";

// 		SelectValueR.innerHTML = inputRight.value;
// }
// setRightValue ();

// inputLeft.addEventListener("input", setLeftValue);
// inputRight.addEventListener("input", setRightValue);



// let inLeft = document.getElementById("in-left");
// let inRight = document.getElementById("in-right");

// let tLeft = document.querySelector(".sliders.one > .thumb.leftleft");
// let tRight = document.querySelector(".sliders.one > .thumb.rightright");

// let ranges = document.querySelector(".sliders.one > .ranges");

// let ValueL = document.getElementById("ValueL");
// ValueL.innerHTML = inLeft.value;

// let ValueR = document.getElementById("ValueR");
// ValueR.innerHTML = inRight.value;

// function setLeftValueL() {
	
// 	let _this = inLeft,
// 		min = parseInt(_this.min),
// 		max = parseInt(_this.max);

// 		_this.value = Math.min(parseInt(_this.value), parseInt(inRight.value)-1);
// 		let percent = ((_this.value - min) / (max-min)) * 100;

// 		tLeft.style.left = percent + "%";
// 		ranges.style.left = percent + "%";

// 		ValueL.innerHTML = inLeft.value;
// }
// setLeftValueL ();

// function setRightValueR() {
// 	let _this = inRight,
// 		min = parseInt(_this.min),
// 		max = parseInt(_this.max);

// 		_this.value = Math.max(parseInt(_this.value), parseInt(inLeft.value)+1);
// 		let percent = ((_this.value - min) / (max-min)) * 100;

// 		tRight.style.right = (100-percent) + "%";
// 		ranges.style.right = (100-percent) + "%";

// 		ValueR.innerHTML = inRight.value;
// }
// setRightValueR ();

// inLeft.addEventListener("input", setLeftValueL);
// inRight.addEventListener("input", setRightValueR);


let thumbO = document.getElementById("one-t");
let rangeo = document.getElementById("rangeo");
let coloro = document.getElementById("coloro");


rangeo.oninput = function () {
	coloro.style.width = rangeo.value +"%";
	thumbO.style.left = rangeo.value * 0.95 + "%";
};


//  TABS 

document.querySelectorAll('.tabs__form').forEach((e) => {
    let tabTabs = e.querySelectorAll('.tabs__line');
      for(let i =0;i<tabTabs.length;i++) {
          tabTabs[0].click();
           tabTabs[i].onclick = () => {
          tabTabs.forEach((e)  => { e.classList.remove('is-active') }); 
          tabTabs[i].classList.add('is-active');
       }
     }
   });
   
   document.querySelectorAll('.buttons__tabs-line').forEach((r) => {
    let tabIcon = r.querySelectorAll('.buttons__tabs-icon');
      for(let i =0;i<tabIcon.length;i++) {
          tabIcon[0].click();
           tabIcon[i].onclick = () => {
          tabIcon.forEach((r)  => { r.classList.remove('is-active') }); 
          tabIcon[i].classList.add('is-active');
       }
     }
   });
   document.querySelectorAll('.buttons__tabs-line').forEach((r) => {
    let tabIcon = r.querySelectorAll('.buttons__tabs-item');
      for(let i =0;i<tabIcon.length;i++) {
          tabIcon[0].click();
           tabIcon[i].onclick = () => {
          tabIcon.forEach((r)  => { r.classList.remove('is-active') }); 
          tabIcon[i].classList.add('is-active');
       }
     }
   });
   document.querySelectorAll('.buttons__tabs-line').forEach((r) => {
    let tabIcon = r.querySelectorAll('.buttons__tabs-size');
      for(let i =0;i<tabIcon.length;i++) {
          tabIcon[0].click();
           tabIcon[i].onclick = () => {
          tabIcon.forEach((r)  => { r.classList.remove('is-active') }); 
          tabIcon[i].classList.add('is-active');
       }
     }
   });

// SELECT 
let select_form = new lc_select(document.querySelector('#select-form'), {
	enable_search  : false,
});
let select_value = new lc_select(document.querySelector('#select-value'), {enable_search  : false,

});
let example_select = new lc_select(document.querySelector('#example-select'), {enable_search  : false,

});

// ====ROUNDED RANGE SLIDER======

function loading() {
	document.querySelectorAll(".sliderbar__done").forEach(function(current) {
	  let startWidth = 0;
	  let elementPerc = document.getElementById("label")
	  const endWidth = current.dataset.size;
	  const interval = setInterval(frame, 20);
	  
	  function frame() {
		if (startWidth >= endWidth) {
		  clearInterval(interval);
		} else {
			startWidth++;
			current.style.width = `${endWidth}%`;
			label.innerText = `${startWidth}%`;
		  }
	   }
	});
  }
  
  setTimeout(loading, 0);


// Round graph

const circle = document.querySelector(".progress-ring__circle");
let precentText = circle.getAttribute("data-percent");
let showData = document.getElementById("showdata");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference}` ;
circle.style.strokeDashoffset = circumference;


function setProgress(percent) {
	const offset = (1 - percent / 100) * circumference;
	circle.style.strokeDashoffset = offset;
	
};
setProgress(precentText);

let startPoint = 0;
const intervalt = setInterval(showPercent, 20);
function showPercent() {
	if (startPoint >= precentText) {
		clearInterval(intervalt);
	} else {
		startPoint++;
		showData.textContent = startPoint + "%";
	}
};

// DRAG DROP

const realfile = document.getElementById("real-file");
const custombutton = document.getElementById("custom-button");

custombutton.addEventListener("click", function() {
	realfile.click();
});

// const slider0 = new Rangeable('#newslider', {
// 	step: '1',
// 	value: 15,
// 	max: 30,
// 	min: 0,
// });
// const slider1 = new Rangeable("#newslider1", {
// 	multiple: true,
// 	step: "1",
// 	max: 50,
// 	min: 0,
// 	value: [15, 34],
// });
// const slider2 = new Rangeable("#newslider2", {
// 	multiple: true,
// 	step: "1",
// 	max: 50,
// 	min: 0,
// 	value: [15, 34],
// });