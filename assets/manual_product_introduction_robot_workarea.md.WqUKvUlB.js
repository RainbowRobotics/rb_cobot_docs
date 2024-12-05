import{_ as e,c as r,o as a,U as o,tc as t,td as i}from"./chunks/framework.66XcOYhx.js";const g=JSON.parse('{"title":"Robot Work Area","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"manual/product_introduction/robot_workarea.md","filePath":"manual/product_introduction/robot_workarea.md"}'),s={name:"manual/product_introduction/robot_workarea.md"},n=o('<h1 id="robot-work-area" tabindex="-1">Robot Work Area <a class="header-anchor" href="#robot-work-area" aria-label="Permalink to &quot;Robot Work Area&quot;">​</a></h1><p>The maximum reach radius when the robot arm is fully extended is as follows:</p><ul><li>RB5-850E Series: 927.7mm</li><li>RB10-1300E Series: 1300mm</li><li>RB3-1200E Series: 1200mm</li><li>RB16-900E Series: 900mm</li><li>RB3-730ES Series: 730mm</li><li>RB6-920ES Series: 920mm</li><li>RB20-1900ES Series: 1900mm</li></ul><p>The area directly below or above the robot base (the A area and its surroundings in the diagram below) is a restricted work area.<br> There is no issue when using joint coordinate system movements (e.g., Move J), but in movements using the Cartesian coordinate system (e.g., Move L), passing through this area is restricted.<br> This area is a mechanical singularity point, and using the Cartesian coordinate system in this region can generate rapid joint speeds or cause the robot to stop.</p><p><img src="'+t+'" alt="missing"></p><p>A. Singularity point area (a restricted area for movement when using Cartesian coordinates)<br> B. Robot&#39;s operable work area</p><p><img src="'+i+'" alt="missing"></p>',7),m=[n];function l(c,d,_,u,p,h){return a(),r("div",null,m)}const S=e(s,[["render",l]]);export{g as __pageData,S as default};
