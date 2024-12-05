import{_ as e,c as t,o as i,U as a,DF as s,DG as o,DH as l,DI as r,DJ as n,DK as c,DL as p,DM as d}from"./chunks/framework.66XcOYhx.js";const y=JSON.parse('{"title":"User Interface Customizing v1.1","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"technical_docs/ui_customizing.md","filePath":"technical_docs/ui_customizing.md"}'),m={name:"technical_docs/ui_customizing.md"},g=a('<h1 id="user-interface-customizing-v1-1" tabindex="-1">User Interface Customizing v1.1 <a class="header-anchor" href="#user-interface-customizing-v1-1" aria-label="Permalink to &quot;User Interface Customizing v1.1&quot;">​</a></h1><h3 id="ui-app-program-user-customization" tabindex="-1">UI App Program User Customization <a class="header-anchor" href="#ui-app-program-user-customization" aria-label="Permalink to &quot;UI App Program User Customization&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">CAUTION</p><ol><li> This procedure is for customizing and decorating Rainbow Robotics&#39; collaborative robot UI app program. </li><li> This feature is effective from the official update version available after June 2020. </li></ol></div><ol><li><p>Install or update the UI app.<br> For installation / update method, please refer to the update procedure manual separately.</p></li><li><p>After installation, the Loading screen / Home screen / Make screen configuration is as follows.</p></li></ol><div class="center-align"><img src="'+s+'"><p style="text-align:center;">[ Loading screen – Basic ]</p></div><div class="center-align"><img src="'+o+'"><p style="text-align:center;">[ Home screen – Basic ]</p></div><div class="center-align"><img src="'+l+'"><p style="text-align:center;">[ Make screen – Basic ]</p></div><ol start="3"><li>Let&#39;s customize the screen from now on.</li></ol><ul><li>3 Files are required for customization.</li><li>For file names, only the file names defined below can be recognized.</li><li>If the image size is too large, the UI loading speed will be slow..</li><li>We recommend a size smaller than the recommended size for loading speed.</li><li>A ‘png’ type with a transparent background is recommended.</li></ul><table class="th-align"><tr><th>File name</th><th>Purpose</th><th>Format / Recommended Size</th></tr><tr><td>Intro.png</td><td>Loading screen image</td><td>png, (height 120px ex: 450x120 pixel)</td></tr><tr><td>Home.png</td><td>Logo for left-upper corner</td><td>png, (height 70px ex: 70x70 pixel)</td></tr><tr><td>HomeTitle.txt</td><td>Home screen message</td><td>txt</td></tr></table><ol><li>Connect your tablet to your work PC to access the path below.</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Android/data/com.rainbow.cobot/files/Images</span></span></code></pre></div><ol start="5"><li>Currently there are no files in that path.</li></ol><ul><li>If no file exists, the default value (logo and message) of Rainbow Robotics is applied.</li></ul><p><img src="'+r+'" alt="missing"></p><ol start="6"><li>Put the 3 files prepared in step 3 in this path.</li></ol><p><img src="'+n+'" alt="missing"></p><ol start="7"><li>Customization is complete. If you run the UI app again, you will see a screen like the one below.</li></ol><div class="center-align"><img src="'+c+'"><p style="text-align:center;">[ ‘Intro.png’ is applied to Loading screen ]</p></div><div class="center-align"><img src="'+p+'"><p style="text-align:center;">[ ‘HomeTitle.txt’ is applied to Home screen ]</p></div><div class="center-align"><img src="'+d+'"><p style="text-align:center;">[ ‘Home.png’ is applied to Left-Upper icon ]</p></div>',21),u=[g];function h(_,f,v,b,x,z){return i(),t("div",null,u)}const k=e(m,[["render",h]]);export{y as __pageData,k as default};
