import{_ as t,c as e,o,U as a}from"./chunks/framework.fHC5UfPI.js";const v=JSON.parse('{"title":"FUNCTIONAL SAFETY","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"manual/safety_function/function_safety.md","filePath":"manual/safety_function/function_safety.md"}'),i={name:"manual/safety_function/function_safety.md"},r=a('<h1 id="functional-safety" tabindex="-1" data-v-13b220f7>FUNCTIONAL SAFETY <a class="header-anchor" href="#functional-safety" aria-label="Permalink to &quot;FUNCTIONAL SAFETY&quot;" data-v-13b220f7>​</a></h1><p data-v-13b220f7>The manufacturer recommends the following conditions are met for the installation location. The safety functions of the collaborative robot RB Series are used to reduce the risk of the robot system determined by risk assessment.</p><p data-v-13b220f7>The parameters of the safety function are set at the factory, and the system integrator can change some items according to the risk assessment. Position and speed items are defined based on the base of the robot.</p><p data-v-13b220f7>The following is the safety function specifications provided by RB Series.</p><table data-v-13b220f7><tr data-v-13b220f7><th data-v-13b220f7></th><th data-v-13b220f7>Safety Function</th><th data-v-13b220f7>PL &amp; Category</th></tr><tr data-v-13b220f7><th rowspan="3" data-v-13b220f7>Safety stopping functions</th><td data-v-13b220f7>SF.1 STO (Safe Torque Off)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.2 SS1 (Safe Stop 1)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.3 SS2 (Safe Stop 2)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><th rowspan="9" data-v-13b220f7>Safety monitoring functions</th><td data-v-13b220f7>SF.4 SOS (Safe Operating Stop)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.5 SLP (Safely-Limited Position)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.6 SLS (Safely-Limited Speed)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.7 SLA (Safely-Limited Acceleration)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.8 SLI (Safely-Limited Increment)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.9 SLT (Safely-Limited Torque)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.10 RPL (Robot Position Limit)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.11 TSL (TCP Speed Limit)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.12 CBPL (Control Box Power Limit)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><th rowspan="2" data-v-13b220f7>Emergency stop</th><td data-v-13b220f7>SF.13 EMS1 (Emergency Stop1)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.14 EMS2 (Emergency Stop2)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><th rowspan="3" data-v-13b220f7>Protective stop</th><td data-v-13b220f7>SF.15 PRS (Protective Stop)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.16 HSS (Hard Safeguard Stop)</td><td data-v-13b220f7>PL d, Category 3</td></tr><tr data-v-13b220f7><td data-v-13b220f7>SF.17 SSS (Soft Safeguard Stop)</td><td data-v-13b220f7>PL d, Category 3</td></tr></table><ul data-v-13b220f7><li data-v-13b220f7><strong data-v-13b220f7>STO(Safe Torque Off)</strong>: This function prevents force-producing power from being provided to the motor. Power, that can cause rotation, is not applied to the motor. This safety sub-function corresponds to an uncontrolled stop in accordance with stop category 0 of IEC 60204-1.</li><li data-v-13b220f7><strong data-v-13b220f7>SS1(Safe Stop 1)</strong>: This function is specified as either<br data-v-13b220f7> a) SS1-d (Safe-Stop 1 deceleration controlled) initiates and controls the motor deceleration rate within selected limits to stop the motor and performs the STO function when the motor speed is below a specified limit; or b) SS1-r (Safe-Stop 1 ramp monitored) initiates and monitors the motor deceleration rate within selected limits to stop the motor and performs the STO function when the motor speed is below a specified limit; or c) SS1-t (Safe Stop 1 time controlled) initiates the motor deceleration and performs the STO function after an application specific time delay. This safety sub-function corresponds to a controlled stop in accordance with stop category 1 of IEC 60204-1. Above three candidates, our system uses SS1-t.</li><li data-v-13b220f7><strong data-v-13b220f7>SS2(Safe Stop 2)</strong>: This function is specified as either SS2-d (Safe Stop 2 deceleration controlled) initiates and controls the motor deceleration rate within selected limits to stop the motor and performs the safe operating stop function when the motor speed is below a specified limit; or b) SS2-r (Safe Stop 2 ramp monitored) initiates and monitors the motor deceleration rate within selected limits to stop the motor and performs the safe operating stop function when the motor speed is below a specified limit; or c) SS2-t (Safe Stop 2 time con-trolled) initiates the motor deceleration and performs the safe operating stop function after an application specific time delay. This safety sub-function SS2 corresponds to a controlled stop in accordance with stop category 2 of IEC 60204-1. Above three candidates, our system uses SS2-t.</li><li data-v-13b220f7><strong data-v-13b220f7>SOS(Safe Operating Stop)</strong>: This function prevents the motor from deviating more than a defined amount from the stopped position. The PDS (SR) provides energy to the motor to enable it to resist external forces. This description of an operational stop function is based on implementation by means of a PDS (SR) without external (for example mechanical) brakes.</li><li data-v-13b220f7><strong data-v-13b220f7>SLP(Safely-Limited Position)</strong>: This function prevents the motor shaft (or mover, when a linear motor is used) from exceeding the specified position limit(s).</li><li data-v-13b220f7><strong data-v-13b220f7>SLS(Safely-Limited Speed)</strong>: This function prevents the motor from exceeding the specified speed limit.</li><li data-v-13b220f7><strong data-v-13b220f7>SLA(Safely-Limited Acceleration)</strong>: This function prevents the motor from exceeding the specified acceleration and/or deceleration limit.</li><li data-v-13b220f7><strong data-v-13b220f7>SLI(Safely-Limited Increment)</strong>: This function prevents the motor shaft from exceeding the specified limit of position increment within specified time.</li><li data-v-13b220f7><strong data-v-13b220f7>SLT(Safely-Limited Torque)</strong>: This function prevents the motor from exceeding the specified torque (or force, when a linear motor is used) limit.</li><li data-v-13b220f7><strong data-v-13b220f7>RPL(Robot Position Limit)</strong>: This function prevents the robot arm’s TCP (tool center point) or body frame exceeding the specified spatial region.</li><li data-v-13b220f7><strong data-v-13b220f7>TSL(TCP Speed Limit)</strong>: This function prevents the robot arm’s TCP speed exceeding the specified speed.</li><li data-v-13b220f7><strong data-v-13b220f7>CBPL(Control Box Power Limit)</strong>: This function prevents the Control Box’s power consumption exceeding the specified limit.</li><li data-v-13b220f7><strong data-v-13b220f7>EMS1(Emergency Stop1)</strong>: This function activates the stop mode when the emergency stop switch of the Teaching Pendant Unit is activated. The stop mode is the SF.2.</li><li data-v-13b220f7><strong data-v-13b220f7>EMS2(Emergency Stop2)</strong>: This function activates the stop mode when the special I/O ports of the Control Box are activated. Those ports are provided for users to connect their own switch devices. The stop mode is the SF.2.</li><li data-v-13b220f7><strong data-v-13b220f7>PRS(Protective Stop)</strong>: This function activates the stop mode when the special I/O ports of the Control Box are activated. Those ports are provided for users to connect their own protective devices. The stop mode is the SF.2.</li><li data-v-13b220f7><strong data-v-13b220f7>HSS(Hard Safeguard Stop)</strong>: This function activates the stop mode when the special I/O ports of the Control Box are activated. Those ports are provided for users to connect their own protective devices. The stop mode is the SF.1.</li><li data-v-13b220f7><strong data-v-13b220f7>SSS(Soft Safeguard Stop)</strong>: This function activates the stop mode when the special I/O ports of the Control Box are activated. Those ports are provided for users to connect their own protective devices. The stop mode is SF.3.</li></ul>',6),d=[r];function n(s,f,c,p,h,S){return o(),e("div",null,d)}const m=t(i,[["render",n],["__scopeId","data-v-13b220f7"]]);export{v as __pageData,m as default};
