const speak_button = document.getElementById('speakButton');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var heart = new Image();
var hat = new Image();
var bar = new Image();
var rip = new Image();
var mouse = new Image();

heart.src = './heart.jpg';
hat.src = './hat.png';
bar.src = './bar.jpg';
rip.src = './rip.jpg';
mouse.src = './mouse.jpg';


function draw() {

    ctx.save();


    drawText();

    speak_button.onclick = function(){

      if(speak_button.innerText === 'Speak')
      {
        drawText();
        speak_button.innerText = 'Stop';
        recognition.start();}
        else if(speak_button.innerText === 'Stop')
      {
        speak_button.innerText = 'Speak';
        recognition.stop();
        drawText();
      }
    };

    ctx.restore();
}

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log("We are listening.");
};

recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
    speak_button.innerText = 'Speak';
    drawText();
}

// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    findObject(ctx,transcript);
};


function drawText(){
  ctx.clearRect(0, 0, canvas.width, canvas.width);
  ctx.font = "20px Arial";
  ctx.fillText('say a name that is listed below to show image', 40, 20);
  ctx.fillText('say "help" to hear the instructions.', 120, 200);
  ctx.fillText('say "about" to hear my day.', 120, 230);
  ctx.font = "25px Arial";
  ctx.fillText('"heart"', 230, 50);
  ctx.fillText('"hat"', 230, 80);
  ctx.fillText('"bar"', 230, 110);
  ctx.fillText('"rip"', 230, 140);
  ctx.fillText('"mouse"', 230, 170);
}


function speak(text) {
  var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = 'en-US';

  speechSynthesis.speak(msg);
}


function findObject(ctx, text)
{
  if(text.includes('heart'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.drawImage(heart, 25, 50);
  }
  else if(text.includes('hat'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.drawImage(hat, 55, 50);
  }
  else if(text.includes('bar'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.drawImage(bar, 55, 50);
  }
  else if(text.includes('rip'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.drawImage(rip, 55, 50);
  }
  else if(text.includes('mouse'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.drawImage(mouse, 55, 50);
  }
  else if(text.includes('help'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.font = "30px Arial";
    ctx.fillText('Help', 100, 150);
    speak('Say a word in the list. or say about, to hear about my day');
  }

  else if(text.includes('about'))
  {
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.font = "30px Arial";
    ctx.fillText('About', 100, 150);
    speak('This project is done by Haolin Chen, just finished my 4900 project, exhausted.');
  }
  else
  {
  speak('Cannot identify');
    ctx.clearRect(0, 0, canvas.width, canvas.width);
    ctx.font = "30px Arial";
    ctx.fillText('Unknown', 100, 150);
  }
}
