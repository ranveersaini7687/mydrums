for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click", call);
}

function call(){
  makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key){
  var audio = new Audio("sounds/" + key + ".mp3");
  audio.play();
}

function buttonAnimation(key){
  var buttonAnimation1=document.querySelector("."+key);
  buttonAnimation1.classList.add("pressed");
  setTimeout(function(){
    buttonAnimation1.classList.remove("pressed");
  },100);
}