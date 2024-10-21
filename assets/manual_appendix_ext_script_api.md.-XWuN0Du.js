import{_ as t,c as e,o as a,U as o}from"./chunks/framework._bMY95IQ.js";const b=JSON.parse('{"title":"EXTERNAL SCRIPT CONTROL API","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"manual/appendix/ext_script_api.md","filePath":"manual/appendix/ext_script_api.md"}'),n={name:"manual/appendix/ext_script_api.md"},r=o(`<h1 id="external-script-control-api" tabindex="-1">EXTERNAL SCRIPT CONTROL API <a class="header-anchor" href="#external-script-control-api" aria-label="Permalink to &quot;EXTERNAL SCRIPT CONTROL API&quot;">​</a></h1><h3 id="_1-concept" tabindex="-1">1. Concept <a class="header-anchor" href="#_1-concept" aria-label="Permalink to &quot;1. Concept&quot;">​</a></h3><p>The cooperative robot RB series can be operated for various environments and purposes. It can be used in conjunction with multiple RB series or other systems.<br> In conjunction with the vision system, movement coordinates can be changed in real time, or used as part of a user&#39;s existing system.</p><p>Users can control the robot with teaching pendant (tablet UI), but it provides a way to control the robot from any external controller for user’s convenience or operation.<br></p><p>The RB series receives script commands by default and executes those commands.<br> The task of writing a motion using the teaching pendant (tablet UI) and executing the script of the file in order is a general operation method. The following method described in this document is an alternative method of receiving a command script from another external device to control a robot of the RB series.</p><p>The control syntax provided in the teaching pendant/tablet UI can be implemented by the user directly from the external control device, and the robot operation commands/IO control commands are sent according to the user’s use case.</p><p>The following document describes an example of driving a robot with the above concepts.</p><h3 id="_2-external-control-script-api" tabindex="-1">2. External Control Script API <a class="header-anchor" href="#_2-external-control-script-api" aria-label="Permalink to &quot;2. External Control Script API&quot;">​</a></h3><p>The description of the scripts provided in this document looks similar to the scripts in the “.wsl” work document, which is written using a tablet as a dedicated script for external control.<br> Work documents contain statements that control flows such as “repeat”, “if-else”, and “break”, so that the completion of a statement is not directly related to the action, and the parent sentence of that statement must be completed.</p><p>For example, suppose there are Point Functions in the Move command Function.</p><p>1 :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>move joint {</span></span>
<span class="line"><span>    point ( ) absolute 0.4, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0</span></span>
<span class="line"><span>    point ( ) absolute 0.4, 0.1, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>2 :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>move joint {</span></span>
<span class="line"><span>    point ( ) absolute 0.4, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0</span></span>
<span class="line"><span>        point ( ) absolute 0.4, 0.1, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0</span></span></code></pre></div><p>The difference between 1 and 2 is the presence or absence of “}” at the end.<br> In both cases, the point statement is complete. However, unlike 1, 2 is a syntax that cannot operate because the move statement, which is the parent of point, is not completed, and the parser will wait for the statement to complete.</p><p>3 :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>folder( ) {</span></span>
<span class="line"><span>    move joint {</span></span>
<span class="line"><span>    point ( ) absolute 0.4, 0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0</span></span>
<span class="line"><span>        point ( ) absolute 0.4, 0.1, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>In the same logic as above, the parser does not run because it waits for the folder statement to complete.</p><p>However, the above method is not suitable for external control method. The user expects the robot to operate by parsing the command the moment it sends it through external control. It does not send multiple commands and complete those lines of text like example 3.</p><p>So external control must be organized so that each command is sent separately as a string.<br> External control does cannot access any features that control the flow.<br> Commands such as &quot;repeat&quot;, &quot;if-else&quot;, &quot;break&quot; or &quot;wait&quot; in the work document will not be available externally and must be replaced by the same structure and logic within the external control.</p><p>First of all, the script I will explain is initialization, termination, and operation mode change.</p><ol><li>mc :</li></ol><table><tr><th>Script</th><td>mc jall init</td></tr><tr><th>Descript.</th><td>This command starts initialization process</td></tr><tr><th>Example</th><td>“mc jall init”</td></tr></table><ol start="2"><li>shutdonw :</li></ol><table><tr><th>Script</th><td>shutdown</td></tr><tr><th>Descript.</th><td>This command terminates the robot operation and turns off the power.</td></tr><tr><th>Example</th><td>“shutdown”</td></tr></table><ol start="3"><li>pgmode :</li></ol><table><tr><th>Script</th><td>pgmode mode_type</td></tr><tr><th>Descript.</th><td>This command changes the mode between real and simulation modes.<br><br> The operation mode is selected through mode_type.<br> There are two operation modes: &#39;real&#39; and &#39;simulation&#39;.<br> In &#39;real&#39;, the robot physically moves when a motion command is issued.<br> In &#39;simulation&#39;, when a motion command is issued,<br> only the internal reference is changed, and the command does not move the robot.<br><br> When the robot is first initialized, the default mode is &#39;simulation&#39; mode. </td></tr><tr><th>Example</th><td> “pgmode real”<br> “pgmode simulation” </td></tr></table><p>The last command explained is the task script.</p><h4 id="task" tabindex="-1">task <a class="header-anchor" href="#task" aria-label="Permalink to &quot;task&quot;">​</a></h4><table><tr><th>Script</th><td>task load work_file_name</td></tr><tr><th>Descript.</th><td>This command loads a work file previously programmed.<br><br> The work_file_name uses the name of the &#39;.wsl&#39; file.<br> At this time, the &#39;.wsl&#39; extension should be omitted,<br> and only the relative path and name of the file should be entered.<br><br> This file is not one that exists on the pendant,<br> but rather a file that has been loaded or saved to the control panel at least once through the pendant.<br> Therefore, it is possible to load the file even if the pendant is not connected. </td></tr><tr><th>Example</th><td> “task load test_file” </td></tr></table><table><tr><th>Script</th><td>task play option</td></tr><tr><th>Descript.</th><td>This command runs the work file loaded.<br><br> The input value for option is blank or “once”.<br> When option leaves empty, it runs the work file repeatably until the number of repeatation is met.<br> When “once” is set, it runs the work file once. </td></tr><tr><th>Example</th><td> “task play”<br> “task play once” </td></tr></table><table><tr><th>Script</th><td>task repeat num</td></tr><tr><th>Descript.</th><td>This command sets the number of repeatation for the work file.<br><br> The input value for num is the number of repeatation. The number should be an integer.<br> -1 can be used to run the work file unlimitedly.<br><br> The number of repeatation set by this command is maintained until power off.<br> After rebooting the robot, this value is set by a number in the pendent. </td></tr><tr><th>Example</th><td> “task repeat 5”<br> “task repeat -1” </td></tr></table><table><tr><th>Script</th><td>task pause</td></tr><tr><th>Descript.</th><td>This command pauses the robot operation that is currently in progress.<br><br> It can be used for all work files that are running due to external control commands and the &quot;task play&quot; command.<br><br> In a paused state, the operation can be resumed using the &quot;task resume_a&quot; command.<br><br> When the robot is in a paused state, it is not considered as finished,<br> so any other operation commands from external control will be ignored. </td></tr><tr><th>Example</th><td> “task pause” </td></tr></table><table><tr><th>Script</th><td>task stop</td></tr><tr><th>Descript.</th><td>This command stops the robot operation that is currently in progress.<br><br> It can be used for all work files that are running due to external control commands and the &quot;task play&quot; command.<br><br> Once the operation is stopped, it will not resume with &quot;task resume_a.&quot;<br> The operation is completely terminated.<br><br> When the stop command is issued, the robot may abruptly halt if it was moving quickly.<br> It is recommended to perform the &quot;task stop&quot; command after &quot;task pause.&quot; </td></tr><tr><th>Example</th><td> “task pause” </td></tr></table><table><tr><th>Script</th><td>task resume_a</td></tr><tr><th>Descript.</th><td>This command resumes the operation of the robot that was paused by the &quot;task pause&quot; command or by an alarm or debug command in the work file. </td></tr><tr><th>Example</th><td> “task resume_a” </td></tr></table><table><tr><th>Script</th><td>task resume_b</td></tr><tr><th>Descript.</th><td>This command resumes the operation of the robot that was paused due to external collision detection.</td></tr><tr><th>Example</th><td> “task resume_b” </td></tr></table><p>In order to use external control, the external computer must be connected to the control box.</p><p>The connection uses TCP / IP communication and the corresponding IP address can be set in the pendant. The result is displayed on the screen on control panel.<br></p><p>Ports 5000 and 5001 open for external control.<br> Port 5000 is a port for receiving commands, and port 5001 is a port for requesting and sending data indicating robot status.<br> For convenience, port 5000 is called the command port and port 5001 is called the data port.</p><p>Users can send the script command described above to the command port.<br> The command port has a filter for the first command, so if it does not start with a previously described script command like &quot;mc&quot; or &quot;pgmode,&quot; it will respond with the message &quot;The command is not allowed.&quot; When a valid command is properly formatted and passed to the parser, the response will be &quot;The command was executed.&quot;</p><p>Additionally, for more diverse script commands, please refer to Documents &gt; UI Script.</p><p>For the data port, sending the command &quot;reqdata&quot; will return information about the current robot status through the data port. Please refer to the Documents &gt; Data Structure manual for more details.</p>`,42),s=[r];function i(l,p,d,h,c,m){return a(),e("div",null,s)}const f=t(n,[["render",i]]);export{b as __pageData,f as default};
