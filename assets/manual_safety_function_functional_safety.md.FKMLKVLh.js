import{_ as e,c as t,o,U as a}from"./chunks/framework._bMY95IQ.js";const v=JSON.parse('{"title":"Functional Safety","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"manual/safety_function/functional_safety.md","filePath":"manual/safety_function/functional_safety.md"}'),d={name:"manual/safety_function/functional_safety.md"},i=a('<h1 id="functional-safety" tabindex="-1" data-v-d0750e2e>Functional Safety <a class="header-anchor" href="#functional-safety" aria-label="Permalink to &quot;Functional Safety&quot;" data-v-d0750e2e>​</a></h1><p data-v-d0750e2e>The manufacturer recommends the following conditions are met for the installation location. The safety functions of the collaborative robot RB Series are used to reduce the risk of the robot system determined by risk assessment.</p><p data-v-d0750e2e>The parameters of the safety function are set at the factory, and the system integrator can change some items according to the risk assessment. Position and speed items are defined based on the base of the robot.</p><p data-v-d0750e2e>The following is the safety function specifications provided by RB Series.</p><table data-v-d0750e2e><tr data-v-d0750e2e><th data-v-d0750e2e></th><th data-v-d0750e2e>Safety Function</th><th data-v-d0750e2e>PL &amp; Category</th></tr><tr data-v-d0750e2e><th rowspan="3" data-v-d0750e2e>Safety stopping functions</th><td data-v-d0750e2e>SF.1 STO (Safe Torque Off)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.2 SS1 (Safe Stop 1)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.3 SS2 (Safe Stop 2)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><th rowspan="9" data-v-d0750e2e>Safety monitoring functions</th><td data-v-d0750e2e>SF.4 SOS (Safe Operating Stop)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.5 SLP (Safely-Limited Position)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.6 SLS (Safely-Limited Speed)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.7 SLA (Safely-Limited Acceleration)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.8 SLI (Safely-Limited Increment)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.9 SLT (Safely-Limited Torque)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.10 RPL (Robot Position Limit)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.11 TSL (TCP Speed Limit)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.12 CBPL (Control Box Power Limit)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><th rowspan="2" data-v-d0750e2e>Emergency stop</th><td data-v-d0750e2e>SF.13 EMS1 (Emergency Stop1)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.14 EMS2 (Emergency Stop2)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><th rowspan="3" data-v-d0750e2e>Protective stop</th><td data-v-d0750e2e>SF.15 PRS (Protective Stop)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.16 HSS (Hard Safeguard Stop)</td><td data-v-d0750e2e>PL d, Category 3</td></tr><tr data-v-d0750e2e><td data-v-d0750e2e>SF.17 SSS (Soft Safeguard Stop)</td><td data-v-d0750e2e>PL d, Category 3</td></tr></table><ul data-v-d0750e2e><li data-v-d0750e2e><strong data-v-d0750e2e>STO(Safe Torque Off)</strong>: This function prevents force-producing power from being provided to the motor. Power, that can cause rotation, is not applied to the motor. This safety sub-function corresponds to an uncontrolled stop in accordance with stop category 0 of IEC 60204-1.</li><li data-v-d0750e2e><strong data-v-d0750e2e>SS1(Safe Stop 1)</strong>: This function is specified as either<br data-v-d0750e2e> a) SS1-d (Safe-Stop 1 deceleration controlled) initiates and controls the motor deceleration rate within selected limits to stop the motor and performs the STO function when the motor speed is below a specified limit; or b) SS1-r (Safe-Stop 1 ramp monitored) initiates and monitors the motor deceleration rate within selected limits to stop the motor and performs the STO function when the motor speed is below a specified limit; or c) SS1-t (Safe Stop 1 time controlled) initiates the motor deceleration and performs the STO function after an application specific time delay. This safety sub-function corresponds to a controlled stop in accordance with stop category 1 of IEC 60204-1. Above three candidates, our system uses SS1-t.</li><li data-v-d0750e2e><strong data-v-d0750e2e>SS2(Safe Stop 2)</strong>: This function is specified as either SS2-d (Safe Stop 2 deceleration controlled) initiates and controls the motor deceleration rate within selected limits to stop the motor and performs the safe operating stop function when the motor speed is below a specified limit; or b) SS2-r (Safe Stop 2 ramp monitored) initiates and monitors the motor deceleration rate within selected limits to stop the motor and performs the safe operating stop function when the motor speed is below a specified limit; or c) SS2-t (Safe Stop 2 time con-trolled) initiates the motor deceleration and performs the safe operating stop function after an application specific time delay. This safety sub-function SS2 corresponds to a controlled stop in accordance with stop category 2 of IEC 60204-1. Above three candidates, our system uses SS2-t.</li><li data-v-d0750e2e><strong data-v-d0750e2e>SOS(Safe Operating Stop)</strong>: This function prevents the motor from deviating more than a defined amount from the stopped position. The PDS (SR) provides energy to the motor to enable it to resist external forces. This description of an operational stop function is based on implementation by means of a PDS (SR) without external (for example mechanical) brakes.</li><li data-v-d0750e2e><strong data-v-d0750e2e>SLP(Safely-Limited Position)</strong>: This function prevents the motor shaft (or mover, when a linear motor is used) from exceeding the specified position limit(s).</li><li data-v-d0750e2e><strong data-v-d0750e2e>SLS(Safely-Limited Speed)</strong>: This function prevents the motor from exceeding the specified speed limit.</li><li data-v-d0750e2e><strong data-v-d0750e2e>SLA(Safely-Limited Acceleration)</strong>: This function prevents the motor from exceeding the specified acceleration and/or deceleration limit.</li><li data-v-d0750e2e><strong data-v-d0750e2e>SLI(Safely-Limited Increment)</strong>: This function prevents the motor shaft from exceeding the specified limit of position increment within specified time.</li><li data-v-d0750e2e><strong data-v-d0750e2e>SLT(Safely-Limited Torque)</strong>: This function prevents the motor from exceeding the specified torque (or force, when a linear motor is used) limit.</li><li data-v-d0750e2e><strong data-v-d0750e2e>RPL(Robot Position Limit)</strong>: This function prevents the robot arm’s TCP (tool center point) or body frame exceeding the specified spatial region.</li><li data-v-d0750e2e><strong data-v-d0750e2e>TSL(TCP Speed Limit)</strong>: This function prevents the robot arm’s TCP speed exceeding the specified speed.</li><li data-v-d0750e2e><strong data-v-d0750e2e>CBPL(Control Box Power Limit)</strong>: This function prevents the Control Box’s power consumption exceeding the specified limit.</li><li data-v-d0750e2e><strong data-v-d0750e2e>EMS1(Emergency Stop1)</strong>: This function activates the stop mode when the emergency stop switch of the Teaching Pendant Unit is activated. The stop mode is the SF.2.</li><li data-v-d0750e2e><strong data-v-d0750e2e>EMS2(Emergency Stop2)</strong>: This function activates the stop mode when the special I/O ports of the Control Box are activated. Those ports are provided for users to connect their own switch devices. The stop mode is the SF.2.</li><li data-v-d0750e2e><strong data-v-d0750e2e>PRS(Protective Stop)</strong>: This function activates the stop mode when the special I/O ports of the Control Box are activated. Those ports are provided for users to connect their own protective devices. The stop mode is the SF.2.</li><li data-v-d0750e2e><strong data-v-d0750e2e>HSS(Hard Safeguard Stop)</strong>: This function activates the stop mode when the special I/O ports of the Control Box are activated. Those ports are provided for users to connect their own protective devices. The stop mode is the SF.1.</li><li data-v-d0750e2e><strong data-v-d0750e2e>SSS(Soft Safeguard Stop)</strong>: This function activates the stop mode when the special I/O ports of the Control Box are activated. Those ports are provided for users to connect their own protective devices. The stop mode is SF.3.</li></ul>',6),r=[i];function n(s,c,f,p,h,l){return o(),t("div",null,r)}const m=e(d,[["render",n],["__scopeId","data-v-d0750e2e"]]);export{v as __pageData,m as default};