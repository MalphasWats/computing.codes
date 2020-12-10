function Dead()
{
	this.setup = function()
	{
		depth = 0
	}
	
	this.update = function()
	{
		if (jaws.pressed('space'))
		{
			jaws.switchGameState(Lab)
		}
	}
	
	this.draw = function()
	{
		jaws.clear()
		
		jaws.context.save()
      	jaws.context.fillStyle  = "black"
      	jaws.context.fillRect(0, 0, jaws.width, jaws.height);
      	jaws.context.textAlign  = "center"
      	jaws.context.fillStyle  = "white"
      	jaws.context.font       = "bold 18px Arial";
      	jaws.context.fillText("You Died.", jaws.width/2, jaws.height/2);
		jaws.context.fillText("Press SPACE to try again. ", jaws.width/2, jaws.height/2+20);
      	jaws.context.restore()
	}
}

