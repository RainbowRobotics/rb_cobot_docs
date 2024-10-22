import{_ as a,c as t,o,U as d,s2 as e,s3 as i,s4 as s,s5 as n,s6 as l,s7 as r,s8 as v,s9 as p,sa as u}from"./chunks/framework._bMY95IQ.js";const T=JSON.parse('{"title":"General Purpose Analog I/O Configuration","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"manual/installation/config_general_aio.md","filePath":"manual/installation/config_general_aio.md"}'),c={name:"manual/installation/config_general_aio.md"},h=d('<h1 id="general-purpose-analog-i-o-configuration" tabindex="-1" data-v-9430a205>General Purpose Analog I/O Configuration <a class="header-anchor" href="#general-purpose-analog-i-o-configuration" aria-label="Permalink to &quot;General Purpose Analog I/O Configuration&quot;" data-v-9430a205>​</a></h1><p data-v-9430a205>The following methods are recommended for high reliability.</p><ul data-v-9430a205><li data-v-9430a205>Use analog GND closest to I/O.</li><li data-v-9430a205>Equipment and control box use the same GND. Analog I/O is not isolated from the robot control box.</li><li data-v-9430a205>Use shielded or twisted-pair cable. Connect to the GND shield on the Power (J12) terminal.</li></ul><div class="center-align" data-v-9430a205><table data-v-9430a205><tr data-v-9430a205><th data-v-9430a205>Terminal</th><th data-v-9430a205>Parameter</th><th data-v-9430a205>Min</th><th data-v-9430a205>Type</th><th data-v-9430a205>Max</th><th data-v-9430a205>Unit</th></tr><tr data-v-9430a205><th colspan="6" data-v-9430a205>Voltage mode Input</th></tr><tr data-v-9430a205><td data-v-9430a205>AIx - AG</td><td data-v-9430a205>Voltage</td><td data-v-9430a205>0</td><td data-v-9430a205>-</td><td data-v-9430a205>10</td><td data-v-9430a205>V</td></tr><tr data-v-9430a205><td data-v-9430a205>AIx - AG</td><td data-v-9430a205>Resolution</td><td data-v-9430a205>-</td><td data-v-9430a205>16</td><td data-v-9430a205>-</td><td data-v-9430a205>Bit</td></tr><tr data-v-9430a205><th colspan="6" data-v-9430a205>Voltage mode Output</th></tr><tr data-v-9430a205><td data-v-9430a205>AOx – AG</td><td data-v-9430a205>Voltage</td><td data-v-9430a205>0</td><td data-v-9430a205>-</td><td data-v-9430a205>10</td><td data-v-9430a205>V</td></tr><tr data-v-9430a205><td data-v-9430a205>AOx – AG</td><td data-v-9430a205>Resolution</td><td data-v-9430a205>-</td><td data-v-9430a205>16</td><td data-v-9430a205>-</td><td data-v-9430a205>Bit</td></tr></table></div><h3 id="_1-analog-output" tabindex="-1" data-v-9430a205>1. Analog output <a class="header-anchor" href="#_1-analog-output" aria-label="Permalink to &quot;1. Analog output&quot;" data-v-9430a205>​</a></h3><p data-v-9430a205>The analog output can be used to control speed of conveyor. The figure below illustrates a simple demonstration.</p><p data-v-9430a205><img src="'+e+'" alt="missing" data-v-9430a205></p><h3 id="_2-analog-input" tabindex="-1" data-v-9430a205>2. Analog input <a class="header-anchor" href="#_2-analog-input" aria-label="Permalink to &quot;2. Analog input&quot;" data-v-9430a205>​</a></h3><p data-v-9430a205>The output value of the analog sensor can be used by the control box as analog input. The figure shown below illustrates a simple connection to an analog sensor.</p><p data-v-9430a205><img src="'+i+'" alt="missing" data-v-9430a205></p><h3 id="_3-lcd-status-display" tabindex="-1" data-v-9430a205>3. LCD Status Display <a class="header-anchor" href="#_3-lcd-status-display" aria-label="Permalink to &quot;3. LCD Status Display&quot;" data-v-9430a205>​</a></h3><p data-v-9430a205><img src="'+s+'" alt="missing" data-v-9430a205></p><ol data-v-9430a205><li data-v-9430a205>Display Box(1): Displays information about system status.<br data-v-9430a205><ul data-v-9430a205><li data-v-9430a205>Please Wait: The main PC in the control box is booting up.<br data-v-9430a205></li><li data-v-9430a205>default: The main PC in the control box is ready.</li></ul></li><li data-v-9430a205>Display Box(2): Displays information about robot operation and status.</li><li data-v-9430a205><span style="display:flex;align-items:center;white-space:pre;" data-v-9430a205>Action Icon: Definition lock(<img src="'+n+'" data-v-9430a205>) or release(<img src="'+l+'" data-v-9430a205>) state, play(<img src="'+r+'" data-v-9430a205>) or stop(<img src="'+v+'" data-v-9430a205>) state, crash(<img src="'+p+'" data-v-9430a205>) or safe(<img src="'+u+'" data-v-9430a205>)</span><br data-v-9430a205> state.</li><li data-v-9430a205>Power Consumption: Indicates the total power consumption in watts (W).</li><li data-v-9430a205>System Version Information: System version information.</li></ol>',13),m=[h];function _(g,f,b,x,y,A){return o(),t("div",null,m)}const D=a(c,[["render",_],["__scopeId","data-v-9430a205"]]);export{T as __pageData,D as default};