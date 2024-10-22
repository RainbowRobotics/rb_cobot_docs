import{_ as t,c as o,o as a,U as r,CE as i,CF as e,CG as s,CH as n,CI as l,CJ as p,CK as c,CL as m,CM as u,CN as h,CO as g,CP as d,rB as _,CQ as b,CR as w,CS as x}from"./chunks/framework._bMY95IQ.js";const q=JSON.parse('{"title":"Virtual Control Box Installation v1.5","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"technical_docs/virtual_controlbox.md","filePath":"technical_docs/virtual_controlbox.md"}'),f={name:"technical_docs/virtual_controlbox.md"},v=r('<h1 id="virtual-control-box-installation-v1-5" tabindex="-1">Virtual Control Box Installation v1.5 <a class="header-anchor" href="#virtual-control-box-installation-v1-5" aria-label="Permalink to &quot;Virtual Control Box Installation v1.5&quot;">​</a></h1><h3 id="_1-installing-the-virtual-box-program-on-user-pc" tabindex="-1">1. Installing the Virtual-Box program on user PC <a class="header-anchor" href="#_1-installing-the-virtual-box-program-on-user-pc" aria-label="Permalink to &quot;1. Installing the Virtual-Box program on user PC&quot;">​</a></h3><p>Click the Windows hosts button from the following link (<a href="https://www.virtualbox.org/wiki/Downloads" target="_blank" rel="noreferrer">https://www.virtualbox.org/wiki/Downloads</a>) to download the installation file.<br> In order to operate the virtual robot control box program, a virtual Linux system is required, so the above program is required to install.</p><p><img src="'+i+'" alt="missing"></p><p>Install this program through the Next/Yes button without any additional settings.</p><p><img src="'+e+'" alt="missing"></p><p>When the installation is complete, run the program.</p><h3 id="_2-install-and-run-the-simulator-program-through-virtual-box" tabindex="-1">2. Install and Run the simulator program through Virtual-Box <a class="header-anchor" href="#_2-install-and-run-the-simulator-program-through-virtual-box" aria-label="Permalink to &quot;2. Install and Run the simulator program through Virtual-Box&quot;">​</a></h3><p><strong>Tool → Network</strong></p><p><img src="'+s+'" alt="missing"></p><p>Set the network address as follows.<br> IP address <u><strong><em>should be ‘10.0.2.1’</em></strong></u><br> After writing, ‘Apply’ button should be clicked.</p><p><img src="'+n+'" alt="missing"></p><p><strong>File → Import Virtual System</strong></p><p><img src="'+l+'" alt="missing"></p><p>Decompress (un-zip) the distributed compressed file in advance.<br> Select the attached RBVirtualSimulator.ova and click ‘Next’.</p><p><img src="'+p+'" alt="missing"></p><p>Click ‘Import’ to finalize the setup.</p><p><img src="'+c+'" alt="missing"></p><p>After setting, RBVirtualSimulator is added to the left side of the program.<br> Double-click on it to launch the virtual robot control box.</p><p><img src="'+m+'" alt="missing"></p><p>If the following error occurs during execution, click the <u>Change Network Settings</u> button.</p><p><img src="'+u+'" alt="missing"></p><p>In Adapter 1 tab window, set the connection point to ‘Host-only adapter’ and ‘VirtualBox-Host-Only Ethernet Adapter’ as the name.</p><p><img src="'+h+'" alt="missing"></p><p>After completing the previous settings, if you run RBVirtualSimulator again, you can see that the virtual-robot-control-box boots normally.<br> Wait until the message <strong>* daemon started successfully</strong> appears in the console window as shown in the screen below.</p><p><img src="'+g+'" alt="missing"></p><h3 id="_3-launch-and-connect-the-rainbow-rb-window-ui-program" tabindex="-1">3. Launch and connect the Rainbow-RB Window UI program <a class="header-anchor" href="#_3-launch-and-connect-the-rainbow-rb-window-ui-program" aria-label="Permalink to &quot;3. Launch and connect the Rainbow-RB Window UI program&quot;">​</a></h3><p>Run Rainbow-Robotics Window UI program (Rainbow-RB.exe).</p><p><img src="'+d+'" alt="missing"></p><p>Enter to ‘Make Page’.<br> Click the ‘Network’ button (<img src="'+_+'" alt="missing">).<br> In the tablet connection settings, set the mode to ‘TCP/IP’, and enter 10.0.2.7 as the IP address.</p><p><img src="'+b+'" alt="missing"></p><p>If UI program is connected with virtual box, the network status icon becomes green.</p><p><img src="'+w+'" alt="missing"></p><p>Through the simulation mode, user can simulate the robot.</p><p><img src="'+x+'" alt="missing"></p>',35),C=[v];function I(k,B,P,R,V,S){return a(),o("div",null,C)}const A=t(f,[["render",I]]);export{q as __pageData,A as default};
