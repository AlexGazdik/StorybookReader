let next = document.querySelector(".next")
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let reset = document.querySelector(".reset")

next.addEventListener('click', () => console.log('Hello') )

// const creatStop = function(){
//   typed6.stop()
// }

let typed6 = new Typed('#typed6', {
    strings: ["When i was little, my father was famous. He was the greatest samurai in the empire, and he was the shoguns decapitator. He cut off the heads of a hundred and thirty one lords. It was a bad time for the empire. The shogun justn stayed inside his castle and he never came out. People said his brain was infected by devils"],
    typeSpeed: 100, 
    backSpeed: false,
    loop: false,
    cursorChar: '...<strong class="blue">Ⓐ</strong>',
    autoInsertCss: true,
  });


  //make start stop reset and speed control buttons. thats it .push to main!!! and move!!!