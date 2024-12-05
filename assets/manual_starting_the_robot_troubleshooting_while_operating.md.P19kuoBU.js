import{_ as e,c as t,o,U as r,Mq as i,Mr as a,Ms as n,Mt as s,Mu as l,Mv as h,Mw as c,Mx as p}from"./chunks/framework.66XcOYhx.js";const y=JSON.parse('{"title":"Troubleshooting While Operating","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"manual/starting_the_robot/troubleshooting_while_operating.md","filePath":"manual/starting_the_robot/troubleshooting_while_operating.md"}'),d={name:"manual/starting_the_robot/troubleshooting_while_operating.md"},u=r('<h1 id="troubleshooting-while-operating" tabindex="-1">Troubleshooting While Operating <a class="header-anchor" href="#troubleshooting-while-operating" aria-label="Permalink to &quot;Troubleshooting While Operating&quot;">​</a></h1><p>Various problems can occur while the robot is in operation. Below are some of those problems and ways to troubleshoot.</p><h3 id="_1-out-collision" tabindex="-1">1. Out Collision <a class="header-anchor" href="#_1-out-collision" aria-label="Permalink to &quot;1. Out Collision&quot;">​</a></h3><p><img src="'+i+'" alt="missing"></p><p><img src="'+a+'" alt="missing"></p><p><img src="'+n+'" alt="missing"></p><p>The robot will stop immediately when a collision is detected.<br> Looking at the figures above, there are external collision codes, each meaning the following:</p><ul><li>OUT : When an overcurrent due to a collision is detected by the current sensor in each joint.</li><li>ACC, GYR : When sudden rapid vibrations caused by a collision are detected by the robot.</li></ul><p>First, remove the external collision factors. Then, there are two options:<br> To stop the robot’s task and proceed with maintenance, press the Halt button to end the task.<br> To continue the robot&#39;s task, press the Resume button to resume the task.</p><p><strong>cf) TOK TOK</strong><br> When temporarily paused due to an external collision, lightly tapping the end of the robot arm twice will recover it from the paused state (same effect as pressing the Resume button).</p><h3 id="_2-self-collision" tabindex="-1">2. Self Collision <a class="header-anchor" href="#_2-self-collision" aria-label="Permalink to &quot;2. Self Collision&quot;">​</a></h3><br><div class="flex-center-align"><img src="'+s+'"><img src="'+l+'" style="margin-left:20px;"></div><p>As shown in the first image, when part of the robot moves outside the designated working area, or as shown in the second image, when the robot approaches a motion that poses a collision risk, the robot will stop working.<br> You must use the teaching button to manually adjust the robot&#39;s position to a normal state. Afterward, review the taught motion and the set work range.</p><p>If this occurs in Simulation mode on the Make screen, you can recover using the following methods:</p><ul><li>Use the motion-related buttons to recover the robot from a self-collision situation.</li><li>Temporarily switch to Real mode to receive actual joint information from the robot and recover.</li><li>Press the teaching button to receive actual joint information from the robot and recover.</li></ul><h3 id="_3-alarm-message" tabindex="-1">3. Alarm Message <a class="header-anchor" href="#_3-alarm-message" aria-label="Permalink to &quot;3. Alarm Message&quot;">​</a></h3><p><img src="'+h+'" alt="missing"></p><p>When an ‘Alarm’ is set in the current program, the robot will pause once the ‘Alarm’ command is reached. A dialog will then pop up.<br> Press ‘Resume’ to continue the task or ‘Halt’ to stop.</p><h3 id="_4-tablet-pc-disconnection" tabindex="-1">4. Tablet PC Disconnection <a class="header-anchor" href="#_4-tablet-pc-disconnection" aria-label="Permalink to &quot;4. Tablet PC Disconnection&quot;">​</a></h3><p><img src="'+c+'" alt="missing"></p><p>Occurs when the control box (controller) and the tablet PC are disconnected or forcibly shut off the main power (220V) of the robot control box.<br> If the USB cable is damaged, it needs to be replaced, and if the connection is not consistent, try a different USB port.</p><h3 id="_5-interruption-of-external-power-supply" tabindex="-1">5. Interruption of external power supply <a class="header-anchor" href="#_5-interruption-of-external-power-supply" aria-label="Permalink to &quot;5. Interruption of external power supply&quot;">​</a></h3><p><img src="'+p+'" alt="missing"></p><p>Occurs when the power to the robot arm is interrupted. Appears when the emergency stop switch is pressed.<br> After the emergency stop switch is restored normally, initialize the robot again and use it.</p><h3 id="_6-joint-controller-errors" tabindex="-1">6. Joint Controller Errors <a class="header-anchor" href="#_6-joint-controller-errors" aria-label="Permalink to &quot;6. Joint Controller Errors&quot;">​</a></h3><p>The robot will stop automatically when one of its joint controllers experiences one of the following errors:</p><div class="flex-center-align th-align"><table><tr><th>BIG Error</th><td>The difference between the reference input and encoder value exceeds the factory specified threshold.</td></tr><tr><th>JAM Error</th><td>The encoder value does not change, but a current is supplied that is over the factory specified threshold.</td></tr><tr><th>CUR Error</th><td>The current exceeds the maximum current threshold.</td></tr><tr><th>Temperature Error</th><td>The temperature exceeds the maximum temperature threshold.</td></tr><tr><th>Mode Error</th><td>The version of software in the main controller is different from the version in the joint controller.</td></tr></table></div>',28),m=[u];function b(g,f,_,w,x,T){return o(),t("div",null,m)}const k=e(d,[["render",b]]);export{y as __pageData,k as default};
