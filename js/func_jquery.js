(function(){
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

	getbinj.send();

	$(document).ready(function(){
		$(".bolas").click(function(){
			var playSound = ac.createBufferSource(); 
			playSound.buffer = binj; 
			playSound.connect(ac.destination); 
			playSound.noteOn(0); 
		}); 
	}); 
}());