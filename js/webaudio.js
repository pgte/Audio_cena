var audioContext = new AudioContext; 

interface AudioNode (
	Void connect (

	); 
	Void disconect (
	
	); 
); 

source.connect (destination)

interface AudioParam (
	/// parameter automation
	void setValueAtTime (float value, float time); 
	void linearRampToVolumeAtTime (float value, float time); 
	void exponentialRampToValueAtTime (float value, float time); 
	); 

interface AudioBuffer(
	float sampleRate;  		// in Hz
	long length; 			// in samples
	float duration; 		// in seconds
	int numberOfChannels; 

	Float32Array getChannelData (unsigned long channel);
	); 