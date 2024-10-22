import{_ as t,c as o,o as e,U as i,zn as n}from"./chunks/framework._bMY95IQ.js";const g=JSON.parse('{"title":"Set-up (Cobot)","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"manual/setup/cobot.md","filePath":"manual/setup/cobot.md"}'),a={name:"manual/setup/cobot.md"},r=i('<h1 id="set-up-cobot" tabindex="-1">Set-up (Cobot) <a class="header-anchor" href="#set-up-cobot" aria-label="Permalink to &quot;Set-up (Cobot)&quot;">​</a></h1><p>You can set the basic environment for the robot arm.</p><p><img src="'+n+'" alt="missing"></p><ol><li>Set collision sensitivity. The lower the sensitivity, the more the robot will stop at weak impacts.<br> The collision detection function can be turned on or off.</li><li>Set robot activity area. When you enable the Work Space, the activity limits will be displayed in 3D.<br> If the robot exceeds the activity area, it will recognize this as a self-collision and stop.<br> This function can also be turned on or off.</li><li><ul><li><strong>Collision Detection Protection Mode</strong>: After detecting a collision, the robot can either stop immediately (General Stop) or move in the opposite direction of the previous motion before stopping (Evasion Stop), which can be set step by step. The robot can also switch to direct teaching mode for a certain period after a collision (Free Drive Stop).</li><li><strong>Pause Deceleration Amount</strong>: If a pause is made during program playback, it will stop after a certain period of playback. This time can be set step by step.</li><li><strong>Droop Compensation</strong>: If an object is attached to the tool flange and the position value droops downwards, this function compensates for the droop.</li><li><strong>Control Box Robot Model</strong>: Displays the currently stored robot model in the control box.</li></ul></li><li><ul><li><strong>Tool Flange Default Output Voltage</strong>: Select the default output voltage for the tool flange (can choose from 0V, 12V, or 24V).</li><li><strong>Tool Flange Direct Teaching Button</strong>: Choose whether to use the direct teaching button on the tool flange.</li><li><strong>Tool Flange Vibration Sensor</strong>: Choose to turn the vibration detection on or off.</li></ul></li><li>Save the Changed Settings.</li></ol>',4),l=[r];function s(c,p,h,d,u,b){return e(),o("div",null,l)}const m=t(a,[["render",s]]);export{g as __pageData,m as default};
