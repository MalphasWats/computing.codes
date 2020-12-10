/*
	Super Simple touch controls for Jaws
*/

var quint = (function(quint)
{

	controls_touched = {}

	quint.onload = function()
	{
		// set up here
		var q_container = document.createElement("div")
		
		q_container.id = "quint_container"
		
		var d_pad = document.createElement("div")
		d_pad.id = "quint_dpad"
		
		var btn = document.createElement("div")
		btn.id = "quint_dpad_up"
		
		btn.addEventListener("touchstart", function(e) { quint.control_pressed(e, "up") }, false)
		btn.addEventListener("touchend", function(e) { quint.control_released(e, "up") }, false)
		
		btn.addEventListener("mousedown", function(e) { quint.control_pressed(e, "up") }, false)
		btn.addEventListener("mouseup", function(e) { quint.control_released(e, "up") }, false)
		d_pad.appendChild(btn)
		
		
		btn = document.createElement("div")
		btn.id = "quint_dpad_left"
		
		btn.addEventListener("touchstart", function(e) { quint.control_pressed(e, "left") }, false)
		btn.addEventListener("touchend", function(e) { quint.control_released(e, "left") }, false)
		
		btn.addEventListener("mousedown", function(e) { quint.control_pressed(e, "left") }, false)
		btn.addEventListener("mouseup", function(e) { quint.control_released(e, "left") }, false)
		d_pad.appendChild(btn)
		
		
		btn = document.createElement("div")
		btn.id = "quint_dpad_right"
		
		btn.addEventListener("touchstart", function(e) { quint.control_pressed(e, "right") }, false)
		btn.addEventListener("touchend", function(e) { quint.control_released(e, "right") }, false)
		
		btn.addEventListener("mousedown", function(e) { quint.control_pressed(e, "right") }, false)
		btn.addEventListener("mouseup", function(e) { quint.control_released(e, "right") }, false)
		d_pad.appendChild(btn)
		
		
		btn = document.createElement("div")
		btn.id = "quint_dpad_down"
		
		btn.addEventListener("touchstart", function(e) { quint.control_pressed(e, "down") }, false)
		btn.addEventListener("touchend", function(e) { quint.control_released(e, "down") }, false)
		
		btn.addEventListener("mousedown", function(e) { quint.control_pressed(e, "down") }, false)
		btn.addEventListener("mouseup", function(e) { quint.control_released(e, "down") }, false)
		d_pad.appendChild(btn)
		
		
		q_container.appendChild(d_pad)
		
		
		var b_pad = document.createElement("div")
		b_pad.id = "quint_bpad"
		
		var btn = document.createElement("div")
		btn.id = "quint_bpad_a"
		
		btn.addEventListener("touchstart", function(e) { quint.control_pressed(e, "a") }, false)
		btn.addEventListener("touchend", function(e) { quint.control_released(e, "a") }, false)
		
		btn.addEventListener("mousedown", function(e) { quint.control_pressed(e, "a") }, false)
		btn.addEventListener("mouseup", function(e) { quint.control_released(e, "a") }, false)
		b_pad.appendChild(btn)
		
		
		btn = document.createElement("div")
		btn.id = "quint_bpad_b"
		
		btn.addEventListener("touchstart", function(e) { quint.control_pressed(e, "b") }, false)
		btn.addEventListener("touchend", function(e) { quint.control_released(e, "b") }, false)
		
		btn.addEventListener("mousedown", function(e) { quint.control_pressed(e, "b") }, false)
		btn.addEventListener("mouseup", function(e) { quint.control_released(e, "b") }, false)
		b_pad.appendChild(btn)
		
		
		q_container.appendChild(b_pad)
		
		document.getElementsByTagName('body')[0].appendChild(q_container)
	}
	
	quint.control_pressed = function(e, control)
	{
		event = (e) ? e : window.event  
		controls_touched[control] = true
		e.preventDefault()
	}
	
	quint.control_released = function(e, control)
	{
		event = (e) ? e : window.event  
		controls_touched[control] = false
		e.preventDefault()
	}
	
	
	quint.touched = function(control)
	{
		return controls_touched[control]
	}

return quint
})(quint || {});

;window.addEventListener("load", function() { if(quint.onload) quint.onload(); }, false);