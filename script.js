console.log("It's working!");


const button = document.getElementById('dNote');
button.addEventListener('click', function() {
    const audio = new Audio ('d.wav');
    audio.play();
  });


const button1 = document.getElementById('eNote');
button1.addEventListener('click', function() {
    const audio = new Audio ('e.wav');
    audio.play();
  });


const button2 = document.getElementById('fNote');
button2.addEventListener('click', function() {
    const audio = new Audio ('f.wav');
    audio.play();
  });


const button3 = document.getElementById('gNote');
button3.addEventListener('click', function() {
    const audio = new Audio ('g.wav');
    audio.play();
  });


const button4 = document.getElementById('aNote');
button4.addEventListener('click', function() {
  const audio = new Audio ('a.wav');
  audio.play();
});


const button5 = document.getElementById('a#Note');
button5.addEventListener('click', function() {
  const audio = new Audio ('asharp.wav');
  audio.play();
});


const button6 = document.getElementById('bNote');
button6.addEventListener('click', function() {
  const audio = new Audio ('b.wav');
  audio.play();
});


const button7 = document.getElementById('cNote');
button7.addEventListener('click', function() {
  const audio = new Audio ('c.wav');
  audio.play();
});


const button8 = document.getElementById('highDNote');
button8.addEventListener('click', function() {
  const audio = new Audio ('dHigh.wav');
  audio.play();
});


const button9 = document.getElementById('highENote');
button9.addEventListener('click', function() {
  const audio = new Audio ('eHigh.wav');
  audio.play();
});


const button10 = document.getElementById('highFNote');
button10.addEventListener('click', function() {
  const audio = new Audio ('fHigh.wav');
  audio.play();
});