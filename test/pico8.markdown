---
layout: pico8
title: Pico-8
---

## Learning Objectives

* Testing Syntax Highlighting


## Code


<pre><code class="language-lua">
function _init()

 px=64
 py=80

 vx=0
 thrust=0.1

 f=0.95

 frame = 1

end

function _update()
	frame = 1
 if btn(⬅️) then
  vx -= thrust

  frame = 2
 end

 if btn(➡️) then
  vx += thrust
  frame = 3
 end

 px += vx
 vx *= f

 if px < 0 then
  px=0
  vx=0
 end

 if px > 120 then
   px=120
   vx=0
 end

end

function _draw()
  cls()

  spr(frame, px, py)
end
</code></pre>
