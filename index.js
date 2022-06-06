
// Don't use handleClick(), otherwise this function will be called as soon as the webpage loads. When we use handleClick then it waits for the button to be clicked and then runs the function as a response.
// Also we can use anonymous function instead of named function like
// document.querySelector("button").addEventListener("click",function() {
//     alert("I got clicked");
// }); 
// Detecting Button Press
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // console.log(this.innerHTML);
        var buttonInnerHTML = this.innerHTML; 
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }); 
    // this is used to get the button which was clicked to get the sound.
}
// function handleClick(){
//     alert("I got clicked");
// }
// Detecting Keyboard Press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}