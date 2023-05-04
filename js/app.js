
/* ************ Scroll Animation ************ */

window.addEventListener('scroll', animation__services);

function animation__services(){
  var animation__services1 = document.querySelectorAll('.animation__service');

  for (var i = 0; i < animation__services1.length; i++) {

    var windowheight = window.innerHeight;
    var animation__servicestop = animation__services1[i].getBoundingClientRect().top;
    var animation__servicespoint = 150;

    if(animation__servicestop < windowheight - animation__servicespoint){
      animation__services1[i].classList.add('active'); 
    }
    else{
      animation__services1[i].classList.remove('active'); 
    }
  }
}
