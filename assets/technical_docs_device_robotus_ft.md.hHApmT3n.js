import{_ as e,c as o,o as t,U as s,AS as a,AT as r,AU as i,AV as n}from"./chunks/framework.fHC5UfPI.js";const g=JSON.parse('{"title":"Rainbow x Robotus FT-Sensor","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"technical_docs/device_robotus_ft.md","filePath":"technical_docs/device_robotus_ft.md"}'),c={name:"technical_docs/device_robotus_ft.md"},l=s('<h1 id="rainbow-x-robotus-ft-sensor" tabindex="-1">Rainbow x Robotus FT-Sensor <a class="header-anchor" href="#rainbow-x-robotus-ft-sensor" aria-label="Permalink to &quot;Rainbow x Robotus FT-Sensor&quot;">​</a></h1><h3 id="_1-hardware-connection" tabindex="-1">1. Hardware Connection <a class="header-anchor" href="#_1-hardware-connection" aria-label="Permalink to &quot;1. Hardware Connection&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">CAUTION</p><ul><li> When configuring the wiring, proceed with the system power off. </li><li> For more information about the sensor, refer to the sensor manufacturer&#39;s website. </li><li><a href="http://www.robotous.com/main" target="_blank"> http://www.robotous.com/main </a></li></ul></div><p><img src="'+a+'" alt="missing"></p><ul><li><p>The sensor should be powered by a stable DC 5V power supply.</p></li><li><p>The CAN communication line must use a twisted/shielded cable.</p></li><li><p>Before using with RB product, CAN communication of Robotus should be preset as follows.</p><blockquote><p>CAN baud rate : 1Mbit/s<br> Command CAN ID (Robot &gt; Sensor) : 0xF0 (=240)<br> Data CAN ID (Sensor &gt; Robot) : 0xF1 (=241) &amp; 0xF2 (=242)<br></p></blockquote></li></ul><h3 id="_2-software-usage" tabindex="-1">2. Software Usage <a class="header-anchor" href="#_2-software-usage" aria-label="Permalink to &quot;2. Software Usage&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">CAUTION</p><ul><li> When configuring the wiring, proceed with the system power off. </li></ul></div><p>After connecting the device, set the external F/T sensor to Robotus RFT806A in Setup &gt; Interface through the Ui program.</p><p><img src="'+r+'" alt="missing"></p><p>After completing the setting, reboot the system. If the hardware wiring and software settings are well done, you can check the sensor value at the bottom of the Make page.</p><p><img src="'+i+'" alt="missing"></p><p>The received sensor value can be used for various judgments or used for Force control, etc.<br> The screenshot below is part of the Force Control screen.</p><p><img src="'+n+'" alt="missing"></p>',13),u=[l];function h(p,d,_,b,m,f){return t(),o("div",null,u)}const T=e(c,[["render",h]]);export{g as __pageData,T as default};
