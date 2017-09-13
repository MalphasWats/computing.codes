---
layout: simple
title: Binary
---


## Learning Objectives

* Understand that computers use binary to represent data
* Be able to convert between binary and denary.

## Success Criteria

| Level | Criteria
|-------|---------
| EA | Identify a number expressed in binary
| 1B | Convert an 8-bit binary number to denary
| 1A | Convert a denary number to binary
| 2C | Identify key features of binary numbers (ending in 1 is odd etc.)
| 2A | Recognise key binary numbers (11111111, 00000001 and so on.)

Binary *adjective*

1. relating to, composed of or involving two things.
2. relating to, using, or denoting a system of numerical notation that has 2 rather than 10 as a base.

<p>Our standard method of counting involves counting ten digits. We use the symbols 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9 to represent these digits in order. This is called "<strong>Base-10</strong>" or "<strong>Denary</strong>"</p>
<p>Using a system called "<strong>Place Value</strong>" we can use these symbols to represent any number we need. You probably learnt this in Primary School as "Units", "Tens", "Hundreds" and so on. The number 127 can be looked at as one "hundred", two "tens" and seven "units".</p>
<p>Computers use a different system that consists of just two symbols: <strong>0 and 1</strong>. This is called "<strong>Base-2</strong>" or "<strong>Binary</strong>".</p>
<p>Computers use Binary rather than Denary because it is much easier to represent 2 states - a wire can either have electricity flowing through it or not, "on" or "off", rather than 10 different levels of 'on-ness', which would be difficult to measure. Each digit in a binary number is called a "<strong>bit</strong>" (<strong>B</strong>inary dig<strong>IT</strong>).</p>

<iframe width="560" height="315" src="//www.youtube.com/embed/TD6lcIIOeic" frameborder="0" allowfullscreen="" style="margin:0 auto; display: block;"></iframe>

<h2>Representing numbers</h2>
<p>It was mentioned above that in Primary school you learnt about "Units", "Tens" and "Hundreds". You might have used a table that looked something like this:</p>
<style type="text/css">
.number_system
{
  border-collapse: collapse;
  border: none;
}
.number_system th:first-child
{
  border-left:none;
}

.number_system th
{
  border-left:1px solid black;
  border-bottom:1px solid black;
  padding:5px;
  text-align:center;
}

.number_system.denary th
{
  width:90px;
}
.number_system.binary th
{
  width:30px;
} 
.number_system td:first-child
{
  border-left:none;
}

.number_system td
{
  border-left:1px solid black;
  text-align:center;
}

#bin td:hover
{
    background-color:#ccc;
    cursor:pointer;
}

#bin {font-size:200%; margin:0 auto;}
#bin th {width: 60px;}
</style>
<table class="number_system denary">
<tbody><tr><th>Hundreds</th><th>Tens</th><th>Units</th></tr>
<tr><td>0</td><td>9</td><td>6</td></tr>
</tbody></table><p>which would represent the number 96. We're pretty comfortable with numbers like this.</p>
<p>To represent the same number in Binary, we can use a similar table, but instead of "Hundreds", "Tens" and "Units", we use "Ones", "Twos", "Fours" and so on:</p>
<table class="number_system binary">
<tbody>
<tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr>
<tr><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
</tbody></table><p>which also represents the number 96, but in binary: 01100000</p>
<p>In the table above we are using 8 bits together to represent a number. 8 bits is also called a "<strong>byte</strong>". (Half a byte, or 4 bits, also has a name - can you think what it might be?)</p>
<h2>Try it out</h2>
<p>You can use the interactive table below to help (click the bottom cells to toggle between 0 and 1).</p>
<table class="number_system binary" id="bin">
<tbody>
<tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr>
<tr><td class="zero">0</td><td class="zero">0</td><td class="zero">0</td><td class="zero">0</td><td class="zero">0</td><td class="zero">0</td><td class="zero">0</td><td class="zero">0</td></tr>
</tbody></table>

<script type="text/javascript">

(function()
{
	var t = document.getElementById('bin')
	td = t.getElementsByTagName('td')
	for (var i=0; i<td.length; i++)
	{
		td[i].onclick = function(e)
		{
			if (this.innerHTML == '1') { this.innerHTML = '0'; this.className='zero'; }
			else { this.innerHTML = '1'; this.className='one'; }
		}.bind(td[i])
	}
})()

</script><ul><li>Convert 01100101 from binary into denary</li>
<li>Convert 23 from denary into binary</li>
</ul>

[Start off with the Worksheet](resources/Binary Worksheet 1.docx)

[Download the workbook to continue.](../GCSE/resources/Binary_arithmetic.xlsx)

## Addition

Computers are *really* good at adding numbers together but they have to do it in a very particular way.

Think about how you learnt to add two numbers together:

| hundreds | tens | units |
|==========|======|=======|
|          |  5   |   9   |
|          |  2   |   3   |

We start off adding 3 and 9, which gives us 12. You can't have 12 units in our denary system, so the 1 gets *carried* into the *tens* column. Next we add 5, 2 and the carried 1, which gives us 8. The answer is 82.

When we add binary, we do something similar, but because we only have the symbols 1 and 0, we have to do a *lot* more carrying.

We can break things down into 3 rules:

1. `0 + 1`, or `1 + 0` = 1
2. `1 + 1` = 0, *carry 1*
3. `1 + 1 + 1` = 1, *carry 1*

armed with these 3 rules, we can add any two binary numbers together.

Use the *Addition* tab in the [excel workbook](../GCSE/resources/Binary_arithmetic.xlsx) to try this out.