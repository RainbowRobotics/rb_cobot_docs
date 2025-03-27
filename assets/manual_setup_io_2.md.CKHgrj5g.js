import{_ as t,c as e,o,U as a,w4 as i,w5 as r,w6 as l}from"./chunks/framework.X4dEEzgO.js";const S=JSON.parse('{"title":"Set-up (I/O 2)","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"manual/setup/io_2.md","filePath":"manual/setup/io_2.md"}'),s={name:"manual/setup/io_2.md"},n=a('<h1 id="set-up-i-o-2" tabindex="-1">Set-up (I/O 2) <a class="header-anchor" href="#set-up-i-o-2" aria-label="Permalink to &quot;Set-up (I/O 2)&quot;">​</a></h1><p>Setting I/O Values to Always Execute Before/After Program Start.</p><h3 id="_1-pre-post-program-i-o" tabindex="-1">1. Pre/Post Program I/O <a class="header-anchor" href="#_1-pre-post-program-i-o" aria-label="Permalink to &quot;1. Pre/Post Program I/O&quot;">​</a></h3><p><img src="'+i+'" alt="missing"></p><ol><li>Set I/O Outputs to Execute Before/After Program Start (Playback)<br><ul><li>The ports set here will output the specified values as soon as the program starts.</li><li>The ports set here will output the specified values as soon as the program ends.</li></ul></li><li><strong>Control Box Side An.out</strong> : You can set the voltage for analog output ports 0 to 3. The voltage can be set between 0V to 10V.</li><li><strong>Tool Flange Side Voltage / D.out</strong> : You can configure the digital output of the tool flange.<br> Each port can be set to Bypass/0V/12V/24V.</li><li>Save Settings.</li></ol><h3 id="_2-boot-up-output-action" tabindex="-1">2. Boot-up Output/Action <a class="header-anchor" href="#_2-boot-up-output-action" aria-label="Permalink to &quot;2. Boot-up Output/Action&quot;">​</a></h3><p><img src="'+r+'" alt="missing"></p><ol start="5"><li>After the Control Box is first booted up, select the digital output options for the Control Box.<br> The ports configured here will output the specified values immediately after the program ends.<br></li><li><ul><li>Just after ControlBox Boot-Up: Select the User Script to run immediately after the Control Box boots up.<br></li><li>Just after Activation Done: Select the User Script to run immediately after the robot program ends. <br></li><li>Just after Real-Mode: Select the User Script to run immediately after switching to Real Mode. <br></li></ul></li><li>Save the modified settings.</li></ol><h3 id="_3-tool-i-o-specialfunction" tabindex="-1">3. Tool I/O SpecialFunction <a class="header-anchor" href="#_3-tool-i-o-specialfunction" aria-label="Permalink to &quot;3. Tool I/O SpecialFunction&quot;">​</a></h3><p><img src="'+l+'" alt="missing"></p><ol start="8"><li>Assign the desired functions to Tool Out 0 and 1.</li><li>Assign the desired functions to Tool Inputs 0 through 5.</li></ol>',11),u=[n];function p(c,h,d,m,_,f){return o(),e("div",null,u)}const b=t(s,[["render",p]]);export{S as __pageData,b as default};
