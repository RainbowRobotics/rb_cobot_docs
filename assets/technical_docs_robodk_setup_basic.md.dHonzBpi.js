import{_ as o,c as t,o as i,U as e,BB as a,BC as s,BD as r,BE as n,BF as l,BG as d,BH as h,BI as p,BJ as m,BK as c,BL as b,BM as g,BN as _,BO as u,BP as f,BQ as k,BR as w,BS as D,BT as R,BU as B,BV as P,BW as q,BX as v,BY as K,BZ as x}from"./chunks/framework.66XcOYhx.js";const M=JSON.parse('{"title":"How to setup RoboDK basics v1.5","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"technical_docs/robodk_setup_basic.md","filePath":"technical_docs/robodk_setup_basic.md"}'),T={name:"technical_docs/robodk_setup_basic.md"},y=e('<h1 id="how-to-setup-robodk-basics-v1-5" tabindex="-1">How to setup RoboDK basics v1.5 <a class="header-anchor" href="#how-to-setup-robodk-basics-v1-5" aria-label="Permalink to &quot;How to setup RoboDK basics v1.5&quot;">​</a></h1><h3 id="how-to-setup-robodk-olp" tabindex="-1">How to setup RoboDK OLP <a class="header-anchor" href="#how-to-setup-robodk-olp" aria-label="Permalink to &quot;How to setup RoboDK OLP&quot;">​</a></h3><p>RoboDK is a commercial/free robot offline programming tool.</p><h4 id="_1-robodk-download" tabindex="-1">1. RoboDK Download <a class="header-anchor" href="#_1-robodk-download" aria-label="Permalink to &quot;1. RoboDK Download&quot;">​</a></h4><p>Access the RoboDK website. (<a href="https://robodk.com" target="_blank" rel="noreferrer">https://robodk.com</a>)<br> After logging in/registering, download the appropriate version for the operating system of your PC.</p><h4 id="_2-robodk-install-run" tabindex="-1">2. RoboDK Install &amp; Run <a class="header-anchor" href="#_2-robodk-install-run" aria-label="Permalink to &quot;2. RoboDK Install &amp; Run&quot;">​</a></h4><p>Install RoboDK through the downloaded RoboDK installation file and run RoboDK.</p><h4 id="_3-insert-import-background-work-environment-3d-file" tabindex="-1">3. Insert/Import background/work environment 3D file <a class="header-anchor" href="#_3-insert-import-background-work-environment-3d-file" aria-label="Permalink to &quot;3. Insert/Import background/work environment 3D file&quot;">​</a></h4><p><img src="'+a+'" alt="missing"><img src="'+s+'" alt="missing"></p><h4 id="_4-download-and-load-the-robot-model-you-want-to-use" tabindex="-1">4. Download and load the robot model you want to use. <a class="header-anchor" href="#_4-download-and-load-the-robot-model-you-want-to-use" aria-label="Permalink to &quot;4. Download and load the robot model you want to use.&quot;">​</a></h4><p><img src="'+r+'" alt="missing"><br><img src="'+n+'" alt="missing"><br><img src="'+l+'" alt="missing"><br><img src="'+d+'" alt="missing"><img src="'+h+'" alt="missing"></p><h4 id="_5-load-the-tool-gripper-model-you-want-to-use" tabindex="-1">5. Load the tool/gripper model you want to use. <a class="header-anchor" href="#_5-load-the-tool-gripper-model-you-want-to-use" aria-label="Permalink to &quot;5. Load the tool/gripper model you want to use.&quot;">​</a></h4><p>After loading the file, set the tool modeling file as a sub-item of the robot arm in the tree view on the left.</p><p><img src="'+p+'" alt="missing"><img src="'+m+'" alt="missing"></p><h4 id="_6-align-the-position-and-orientation-of-the-background-3d-file" tabindex="-1">6. Align the position and orientation of the background 3D file <a class="header-anchor" href="#_6-align-the-position-and-orientation-of-the-background-3d-file" aria-label="Permalink to &quot;6. Align the position and orientation of the background 3D file&quot;">​</a></h4><p>Double-click the background (frame). Change the X, Y, Z, Rx, Ry, Rz to adjust the position and rotation of the workspace 3D file.</p><p><img src="'+c+'" alt="missing"><img src="'+b+'" alt="missing"><img src="'+g+'" alt="missing"></p><h4 id="_7-positioning-and-orienting-the-robot-arm" tabindex="-1">7. Positioning and Orienting the Robot Arm <a class="header-anchor" href="#_7-positioning-and-orienting-the-robot-arm" aria-label="Permalink to &quot;7. Positioning and Orienting the Robot Arm&quot;">​</a></h4><p>Double-click the robot arm object to set the attachment position of the robot arm to the desired position and rotation.</p><p><img src="'+_+'" alt="missing"><img src="'+u+'" alt="missing"></p><h4 id="_8-position-and-orient-the-tool" tabindex="-1">8. Position and Orient the Tool <a class="header-anchor" href="#_8-position-and-orient-the-tool" aria-label="Permalink to &quot;8. Position and Orient the Tool&quot;">​</a></h4><p>Double-click the 3D file of the inserted tool.</p><p><img src="'+f+'" alt="missing"></p><p>As shown in the figure below, the setting window is displayed on the right, and click [More Options].</p><p><img src="'+k+'" alt="missing"></p><p>In the figure below, in the setting screen on the right, the upper area is the place to set the TCP coordinate system, and the lower area is the column to set the attachment location and direction of the tool.</p><p><img src="'+w+'" alt="missing"></p><p>Adjust the lower area to set the position and orientation of the tool to the desired shape.</p><p><img src="'+D+'" alt="missing"></p><p>Adjust the upper area to set the desired TCP position and direction.</p><p><img src="'+R+'" alt="missing"></p><h4 id="_9-robot-jog" tabindex="-1">9. Robot Jog <a class="header-anchor" href="#_9-robot-jog" aria-label="Permalink to &quot;9. Robot Jog&quot;">​</a></h4><p>After completing steps 1 to 8 above, double-click the robot model.</p><p><img src="'+B+'" alt="missing"></p><p>The jog window is displayed on the right as shown below, and TCP-based or joint-based jogs are possible.</p><p><img src="'+P+'" alt="missing"><img src="'+q+'" alt="missing"></p><h4 id="_10-testing-using-various-functions-of-robodk" tabindex="-1">10. Testing using various functions of RoboDK <a class="header-anchor" href="#_10-testing-using-various-functions-of-robodk" aria-label="Permalink to &quot;10. Testing using various functions of RoboDK&quot;">​</a></h4><p>The basic setting is complete.<br> RoboDK has various built-in functions, such as creating a virtual target point, testing Move J / Move L motions, etc.<br> For detailed instructions on how to use RoboDK, refer to RoboDK&#39;s website.</p><p><img src="'+v+'" alt="missing"><img src="'+K+'" alt="missing"><img src="'+x+'" alt="missing"></p>',39),A=[y];function I(j,O,C,H,L,S){return i(),t("div",null,A)}const N=o(T,[["render",I]]);export{M as __pageData,N as default};
