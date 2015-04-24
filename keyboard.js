//##### KEYBOARD #####\\
//##### KEYBOARD #####\\
//##### KEYBOARD #####\\
//##### KEYBOARD #####\\


var Keyboard = function() {
	var self = this;

//##### EVENT LISTENER #####\\

	//Here we are creating an 'eventListener'. The purpose of an eventListener is to make our programme to check 'continuously' for 
	///a particular event to happen. 

	//window.addEventListener('keydown', function(evt) { onKeyDown(evt); }, false);
	///In this case we are want our programme to check if a KEY has been pressed DOWN and if it has it will execute the 'onKeyDown(evt)'.

	//window.addEventListener('keyup', function(evt) { onKeyUp(evt); }, false);
	///In this case we are want our programme to check if a KEY has been released and if it has it will execute the 'onKeyUp(evt)'.

		window.addEventListener('keydown', function(evt) { self.onKeyDown(evt); }, false);
		window.addEventListener('keyup', function(evt) { self.onKeyUp(evt); }, false);

	//This function is set up to execute any of these events if any of these keyCodes are pressed down.
	//The result of every individual keyCode is stated within the braces '{}'.

	//For example: If the up key (KEY_UP)(var this.KEY_UP = 38) has been pressed, the player will move forward 4 pixels on the y axis relative 
	///to the direction the player if facing.

	//If the down key (KEY_DOWN)(var this.KEY_DOWN = 40) has been pressed, the player will move backwards 4 pixels on the y axis relative to 
	///the direction the player if facing.

	







	this.keyListeners = new Array();
	this.keys = new Array();
	
	this.KEY_SPACE = 32;
	this.KEY_LEFT = 37;
	this.KEY_UP = 38;
	this.KEY_RIGHT = 39;
	this.KEY_DOWN = 40;
	
	this.KEY_A = 65;
	this.KEY_D = 68;
	this.KEY_S = 83;
	this.KEY_W = 87;
	this.KEY_SHIFT = 16;

};	

	Keyboard.prototype.onKeyDown = function(evt)
	{
	this.keys[evt.keyCode] = true;
	};
	Keyboard.prototype.onKeyUp = function(evt)
	{
	this.keys[evt.keyCode] = false;
	};
	Keyboard.prototype.isKeyDown = function(keyCode)
	{
	return this.keys[keyCode];
	};
