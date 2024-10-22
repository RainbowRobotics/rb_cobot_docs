import{_ as t,c as a,o,U as i,rB as e,rC as r,rD as s,rE as n,rF as p}from"./chunks/framework._bMY95IQ.js";const w=JSON.parse('{"title":"System Update","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"manual/appendix/system_update.md","filePath":"manual/appendix/system_update.md"}'),l={name:"manual/appendix/system_update.md"},d=i('<h1 id="system-update" tabindex="-1">System Update <a class="header-anchor" href="#system-update" aria-label="Permalink to &quot;System Update&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li> It is recommended to back up the program files (.wsl) inside the tablet UI before the system update. </li></ul></div><h3 id="_1-overview" tabindex="-1">1. Overview <a class="header-anchor" href="#_1-overview" aria-label="Permalink to &quot;1. Overview&quot;">​</a></h3><p>Rainbow Robotics&#39; system update is a two-step process.</p><div style="padding:8px 8px 8px 16px;background-color:rgba(0, 0, 255, 0.1);border-radius:8px;"><p>UI update through APK install &gt; S ystem software (control box) update</p></div><h3 id="_2-backup-program-file" tabindex="-1">2. Backup Program file <a class="header-anchor" href="#_2-backup-program-file" aria-label="Permalink to &quot;2. Backup Program file&quot;">​</a></h3><p>Connect the tablet and personal/business PC and obtain the program file (.wsl) from the path below and back it up.<br></p><ul><li>It is recommended that you back up the acquired files before proceeding to the next step.</li></ul><div style="padding:8px 8px 8px 16px;background-color:rgba(0, 0, 255, 0.1);border-radius:8px;"><p>Tablet &gt; Android &gt; data &gt; com.rainbow.cobot &gt; files &gt; work &gt; GET .wsl files</p></div><h3 id="_3-ui-update" tabindex="-1">3. UI Update <a class="header-anchor" href="#_3-ui-update" aria-label="Permalink to &quot;3. UI Update&quot;">​</a></h3><p>Rainbow Robotics&#39; tablet UI program is distributed in the form of APK.</p><p>This is the same installation file as a regular Android application.<br> Therefore, UI program is updated by moving the installation APK file to the tablet and installing it.</p><ul><li>Rainbow Robotics recommends installing after deleting an existing application.</li><li>When deleting an existing application, the program file (.wsl) is deleted together. Back up the program file in step 1 and proceed with this process.</li></ul><div style="padding:8px 8px 8px 16px;background-color:rgba(0, 0, 255, 0.1);border-radius:8px;"><p>Copy the distributed APK file into Table &gt; APK install</p></div><h3 id="_4-connection-between-tablet-pc-and-control-box" tabindex="-1">4. Connection between Tablet PC and Control Box <a class="header-anchor" href="#_4-connection-between-tablet-pc-and-control-box" aria-label="Permalink to &quot;4. Connection between Tablet PC and Control Box&quot;">​</a></h3><p>Connect the tablet to the control box and access the UI program. After connecting, connect the control box communication with the tablet.</p><ul><li>If the communication between the tablet and the control box is normal, the first box will be lit blue. For safety reasons, it is recommended not to initialize the robot.</li></ul><div style="padding:8px 8px 8px 16px;background-color:rgba(0, 0, 255, 0.1);border-radius:8px;"><p style="display:flex;align-items:center;white-space:pre;"> UI Home &gt; Make &gt; Click &#39;State&#39; <img src="'+e+'"> button &gt; Connect</p></div><h3 id="_5-go-to-and-activate-the-system-software-update" tabindex="-1">5. Go to and activate the system software update <a class="header-anchor" href="#_5-go-to-and-activate-the-system-software-update" aria-label="Permalink to &quot;5. Go to and activate the system software update&quot;">​</a></h3><p>Navigate to the system software update path as shown below.</p><div style="padding:8px 8px 8px 16px;background-color:rgba(0, 0, 255, 0.1);border-radius:8px;"><p>UI Home &gt; Setup &gt; System Tab</p></div><p><img src="'+r+'" alt="missing"></p><p>In the “Software Update” section on the right, click the Activate checkbox.</p><p><img src="'+s+'" alt="missing"></p><h3 id="_6-progress-system-software-update" tabindex="-1">6. Progress System Software Update <a class="header-anchor" href="#_6-progress-system-software-update" aria-label="Permalink to &quot;6. Progress System Software Update&quot;">​</a></h3><p>The Update button will appear, and click this button to open a popup window.</p><p><img src="'+n+'" alt="missing"></p><p>Press “OK” button to update the software.</p><p>If the update is completed normally after clicking the OK button, the PC of the control box (controller) will automatically restart within 5~15 seconds.</p><p>During the restart process, “Please Wait…” is displayed on the LCD of the control box. Is displayed temporarily. This indicates that the control box is rebooting.<br> After the reboot is completed, “Normal Operation” is displayed on the LCD of the control box.</p><h3 id="_7-check-the-update" tabindex="-1">7. Check the Update <a class="header-anchor" href="#_7-check-the-update" aria-label="Permalink to &quot;7. Check the Update&quot;">​</a></h3><p>Reconnect the UI tablet and control box.</p><div style="padding:8px 8px 8px 16px;background-color:rgba(0, 0, 255, 0.1);border-radius:8px;"><p style="display:flex;align-items:center;white-space:pre;"> UI Home &gt; Make &gt; Click &#39;State&#39; <img src="'+e+'"> button &gt; Connect</p></div><p>When you go back to the home screen of the UI, the software version is displayed on the upper left.<br> In this context, &quot;System Version&quot; refers to the software version of the control box, while &quot;UI Version&quot; refers to the software version of the tablet PC.</p><p><img src="'+p+'" alt="missing"></p>',35),c=[d];function h(b,u,m,g,f,x){return o(),a("div",null,c)}const y=t(l,[["render",h]]);export{w as __pageData,y as default};
