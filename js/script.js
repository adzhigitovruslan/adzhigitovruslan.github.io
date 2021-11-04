document.querySelectorAll('.dishes__menu .menu__list').forEach((e) => {
    let tabTabs = e.querySelectorAll('.menu__link');
      for(let i =0;i<tabTabs.length;i++) {
          tabTabs[0].click();
          tabTabs[i].onclick = () => {
          tabTabs.forEach((e)  => { e.classList.remove('_active') }); 
          tabTabs[i].classList.add('_active');
       }
     }
   });
   
// var scrollpos = window.scrollY;
// var header = document.querySelector("header");

// function add_class_on_scroll() {
//     header.classList.add("fade-in");
// }

// function remove_class_on_scroll() {
//     header.classList.remove("fade-in");
// }

// window.addEventListener('scroll', function(){ 
//     //Here you forgot to update the value
//     scrollpos = window.scrollY;

//     if(scrollpos > 10){
//         add_class_on_scroll();
//     }
//     else {
//         remove_class_on_scroll();
//     }
//     console.log(scrollpos);
// });

var scenes = [];
var scenesSelector = document.querySelectorAll('.scene');

for(i=0; i<scenesSelector.length; i++){
  scenes[i] = new Parallax(scenesSelector[i]);
}
function scenesEnable(){
  for(i=0; i<scenes.length; i++){
      scenes[i].enable();
  }
}