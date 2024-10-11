import{_ as e,c as t,o,U as r,AN as i,AO as a,AP as s,AQ as n,AR as c}from"./chunks/framework.fHC5UfPI.js";const q=JSON.parse('{"title":"Rainbow x Robotiq FT-Sensor","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"technical_docs/device_robotiq_ft.md","filePath":"technical_docs/device_robotiq_ft.md"}'),l={name:"technical_docs/device_robotiq_ft.md"},h=r('<h1 id="rainbow-x-robotiq-ft-sensor" tabindex="-1">Rainbow x Robotiq FT-Sensor <a class="header-anchor" href="#rainbow-x-robotiq-ft-sensor" aria-label="Permalink to &quot;Rainbow x Robotiq FT-Sensor&quot;">​</a></h1><h3 id="_1-hardware-connection" tabindex="-1">1. Hardware Connection <a class="header-anchor" href="#_1-hardware-connection" aria-label="Permalink to &quot;1. Hardware Connection&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">CAUTION</p><ul><li> When configuring the wiring, proceed with the system power off. </li><li> For more information about the sensor, refer to the sensor manufacturer&#39;s website. </li><li><a href="https://robotiq.com/products/ft-300-force-torque-sensor" target="_blank"> https://robotiq.com/products/ft-300-force-torque-sensor </a></li></ul></div><p><img src="'+i+'" alt="missing"></p><ul><li>Plug the Robotiq product&#39;s power cable into 24V on the Control-box I/O terminal block.</li><li>Plug the Robotiq product&#39;s ground cable into GND on the Control-box I/O terminal block.</li><li>Plug the Robotiq product&#39;s communication USB cable into the USB port of the Control-box.</li><li>As shown in the example installation picture below, note the relative mounting-direction between the sensor cable and the robot&#39;s direct-teaching-button.</li></ul><p><img src="'+a+'" alt="missing"></p><h3 id="_2-software-usage" tabindex="-1">2. Software Usage <a class="header-anchor" href="#_2-software-usage" aria-label="Permalink to &quot;2. Software Usage&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">CAUTION</p><ul><li> When configuring the wiring, proceed with the system power off. </li></ul></div><p>After connecting the device, set the external F/T sensor to Robotiq F/T300 in Setup &gt; Interface through the Ui program.</p><p><img src="'+s+'" alt="missing"></p><p>After completing the setting, reboot the system. If the hardware wiring and software settings are well done, you can check the sensor value at the bottom of the Make page.</p><p><img src="'+n+'" alt="missing"></p><p>The received sensor value can be used for various judgments or used for Force control, etc.<br> The screenshot below is part of the Force Control screen.</p><p><img src="'+c+'" alt="missing"></p>',14),d=[h];function p(u,_,b,m,f,g){return o(),t("div",null,d)}const v=e(l,[["render",p]]);export{q as __pageData,v as default};
