(function(){

//Define the function that will get the file in the buffer
	var ac = new AudioContext(); 
	var binj; 
	var getbinj = new XMLHttpRequest(); 
	getbinj.open("GET", "aud_samp/01_Big_in_Japan.mp3", true); 
	getbinj.responseType = "arraybuffer"; 
	getbinj.onload = function () {
		ac.decodeAudioData(getbinj.response, function(buffer){
			binj = buffer; 	
		}); 
	}; 
// Call the function to load the file into buffer
	getbinj.send();

//Call the function that will play the buffer 
	$(document).ready(function(){
		$(".bolas").click(function(){
			var playSound = ac.createBufferSource(); 
			playSound.buffer = binj; 
			playSound.connect(ac.destination); 
			playSound.start(0); 
		}); 
	}); 
});