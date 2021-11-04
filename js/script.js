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
   
var scenes = [];
var scenesSelector = document.querySelectorAll('.scene');

for(i=0; i<scenesSelector.length; i++){
  scenes[i] = new Parallax(scenesSelector[i]);
}


// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);