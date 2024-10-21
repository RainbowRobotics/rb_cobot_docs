import{_ as e,c as t,o as i,U as o,Cu as l,Cv as s,Cw as a,Cx as n,Cy as r}from"./chunks/framework._bMY95IQ.js";const w=JSON.parse('{"title":"Import user Environment-Modeling file v1.1","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"technical_docs/user_base_modeling.md","filePath":"technical_docs/user_base_modeling.md"}'),c={name:"technical_docs/user_base_modeling.md"},m=o('<h1 id="import-user-environment-modeling-file-v1-1" tabindex="-1">Import user Environment-Modeling file v1.1 <a class="header-anchor" href="#import-user-environment-modeling-file-v1-1" aria-label="Permalink to &quot;Import user Environment-Modeling file v1.1&quot;">​</a></h1><h3 id="import-user-environment-3d-modeling-file" tabindex="-1">Import user Environment 3D Modeling file <a class="header-anchor" href="#import-user-environment-3d-modeling-file" aria-label="Permalink to &quot;Import user Environment 3D Modeling file&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">CAUTION</p><ol><li> This procedure is for customizing and decorating Rainbow Robotics&#39; collaborative robot UI app program. </li><li> This feature is effective from the official update version available after Nov. 2021. </li></ol></div><ol><li><p>Install or update the UI app.<br> For installation / update method, please refer to the update procedure manual separately.</p></li><li><p>After installation, the 3D screen view is as follows.</p></li></ol><img src="'+l+'" width="300"><br><ol start="3"><li>Let&#39;s customize the screen from now on.</li></ol><div class="danger custom-block"><p class="custom-block-title">DANGER</p><ul><li><strong><em><span style="color:red;"><u>The file name and the format should be RB_BASE.obj</u></span></em></strong><br> Name : RB_BASE / Format : .obj</li><li><strong><u>If the 3D file size is too large, the UI loading speed will be slow.</u> (recommended: &lt;500KB)</strong></li><li>We recommend <u>a size smaller than the recommended size</u> for loading speed.</li><li>If the 3D file is too large, reduce the number of polygons in the 3D file and convert it to a smaller size before use.</li></ul></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>When making a 3D file, the unit must be mm (milli-meter).</li><li>If you use other incorrect units such as meters or inches, it may be displayed on the 3D screen differently from the actual design drawing.</li><li>When creating a 3D file, the coordinate system and center point of the 3D file must be set as shown below.</li><li>The 3D file must be created according to the direction of the default coordinate system of the base of Rainbow Robotics (Default-Base-Coordinate / Global Coordinate).</li></ul></div><p><img src="'+s+'" alt="missing"></p><ol start="4"><li>Connect your tablet to your work PC to access the path below.</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Android/data/com.rainbow.cobot/files/Images</span></span></code></pre></div><ol start="5"><li>Currently there are no files in that path.</li></ol><p><img src="'+a+'" alt="missing"></p><ol start="6"><li>Put the 3D-object file (RB_BASE.obj) prepared in step 3 in this path.</li></ol><p><img src="'+n+'" alt="missing"></p><ol start="7"><li>Customization is complete. If you run the UI app again, you will see a screen like the one below.</li></ol><p><img src="'+r+'" alt="missing"></p>',18),d=[m];function p(u,h,f,g,_,b){return i(),t("div",null,d)}const I=e(c,[["render",p]]);export{w as __pageData,I as default};
