import{_ as a,c as t,o as c,U as o,qz as d,qA as e,qB as i,qC as s,qD as n,qE as l,qF as r,qG as f,qH as b}from"./chunks/framework.fHC5UfPI.js";const I=JSON.parse('{"title":"GENERAL PURPOSE ANALOG I/O CONFIGURATION","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"manual/installation/config_general_aio.md","filePath":"manual/installation/config_general_aio.md"}'),v={name:"manual/installation/config_general_aio.md"},p=o('<h1 id="general-purpose-analog-i-o-configuration" tabindex="-1" data-v-4c9c37bf>GENERAL PURPOSE ANALOG I/O CONFIGURATION <a class="header-anchor" href="#general-purpose-analog-i-o-configuration" aria-label="Permalink to &quot;GENERAL PURPOSE ANALOG I/O CONFIGURATION&quot;" data-v-4c9c37bf>​</a></h1><p data-v-4c9c37bf>The following methods are recommended for high reliability.</p><ul data-v-4c9c37bf><li data-v-4c9c37bf>Use analog GND closest to I/O.</li><li data-v-4c9c37bf>Equipment and control box use the same GND. Analog I/O is not isolated from the robot control box.</li><li data-v-4c9c37bf>Use shielded or twisted-pair cable. Connect to the GND shield on the Power (J12) terminal.</li></ul><div class="center-align" data-v-4c9c37bf><table data-v-4c9c37bf><tr data-v-4c9c37bf><th data-v-4c9c37bf>Terminal</th><th data-v-4c9c37bf>Parameter</th><th data-v-4c9c37bf>Min</th><th data-v-4c9c37bf>Type</th><th data-v-4c9c37bf>Max</th><th data-v-4c9c37bf>Unit</th></tr><tr data-v-4c9c37bf><th colspan="6" data-v-4c9c37bf>Voltage mode Input</th></tr><tr data-v-4c9c37bf><td data-v-4c9c37bf>AIx - AG</td><td data-v-4c9c37bf>Voltage</td><td data-v-4c9c37bf>0</td><td data-v-4c9c37bf>-</td><td data-v-4c9c37bf>10</td><td data-v-4c9c37bf>V</td></tr><tr data-v-4c9c37bf><td data-v-4c9c37bf>AIx - AG</td><td data-v-4c9c37bf>Resolution</td><td data-v-4c9c37bf>-</td><td data-v-4c9c37bf>16</td><td data-v-4c9c37bf>-</td><td data-v-4c9c37bf>Bit</td></tr><tr data-v-4c9c37bf><th colspan="6" data-v-4c9c37bf>Voltage mode Output</th></tr><tr data-v-4c9c37bf><td data-v-4c9c37bf>AOx – AG</td><td data-v-4c9c37bf>Voltage</td><td data-v-4c9c37bf>0</td><td data-v-4c9c37bf>-</td><td data-v-4c9c37bf>10</td><td data-v-4c9c37bf>V</td></tr><tr data-v-4c9c37bf><td data-v-4c9c37bf>AOx – AG</td><td data-v-4c9c37bf>Resolution</td><td data-v-4c9c37bf>-</td><td data-v-4c9c37bf>16</td><td data-v-4c9c37bf>-</td><td data-v-4c9c37bf>Bit</td></tr></table></div><h3 id="_1-analog-output" tabindex="-1" data-v-4c9c37bf>1. Analog output <a class="header-anchor" href="#_1-analog-output" aria-label="Permalink to &quot;1. Analog output&quot;" data-v-4c9c37bf>​</a></h3><p data-v-4c9c37bf>The analog output can be used to control speed of conveyor. The figure below illustrates a simple demonstration.</p><p data-v-4c9c37bf><img src="'+d+'" alt="missing" data-v-4c9c37bf></p><h3 id="_2-analog-input" tabindex="-1" data-v-4c9c37bf>2. Analog input <a class="header-anchor" href="#_2-analog-input" aria-label="Permalink to &quot;2. Analog input&quot;" data-v-4c9c37bf>​</a></h3><p data-v-4c9c37bf>The output value of the analog sensor can be used by the control box as analog input. The figure shown below illustrates a simple connection to an analog sensor.</p><p data-v-4c9c37bf><img src="'+e+'" alt="missing" data-v-4c9c37bf></p><h3 id="_3-lcd-status-display" tabindex="-1" data-v-4c9c37bf>3. LCD Status Display <a class="header-anchor" href="#_3-lcd-status-display" aria-label="Permalink to &quot;3. LCD Status Display&quot;" data-v-4c9c37bf>​</a></h3><p data-v-4c9c37bf><img src="'+i+'" alt="missing" data-v-4c9c37bf></p><ol data-v-4c9c37bf><li data-v-4c9c37bf>Display Box(1): Displays information about system status.<br data-v-4c9c37bf><ul data-v-4c9c37bf><li data-v-4c9c37bf>Please Wait: The main PC in the control box is booting up.<br data-v-4c9c37bf></li><li data-v-4c9c37bf>default: The main PC in the control box is ready.</li></ul></li><li data-v-4c9c37bf>Display Box(2): Displays information about robot operation and status.</li><li data-v-4c9c37bf><span style="display:flex;align-items:center;white-space:pre;" data-v-4c9c37bf>Action Icon: Definition lock(<img src="'+s+'" data-v-4c9c37bf>) or release(<img src="'+n+'" data-v-4c9c37bf>) state, play(<img src="'+l+'" data-v-4c9c37bf>) or stop(<img src="'+r+'" data-v-4c9c37bf>) state, crash(<img src="'+f+'" data-v-4c9c37bf>) or safe(<img src="'+b+'" data-v-4c9c37bf>)</span><br data-v-4c9c37bf> state.</li><li data-v-4c9c37bf>Power Consumption: Indicates the total power consumption in watts (W).</li><li data-v-4c9c37bf>System Version Information: System version information.</li></ol>',13),u=[p];function h(m,_,g,A,O,x){return c(),t("div",null,u)}const P=a(v,[["render",h],["__scopeId","data-v-4c9c37bf"]]);export{I as __pageData,P as default};
