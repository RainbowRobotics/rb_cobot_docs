import{_ as t,c as i,o as a,U as e,qJ as n,qK as o,qL as r,qM as d,qN as s,qO as l,qP as c,qQ as p,qR as h,qS as u}from"./chunks/framework._bMY95IQ.js";const v=JSON.parse('{"title":"Conrtol Box Digital Input","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"manual/appendix/cbox_digital_input.md","filePath":"manual/appendix/cbox_digital_input.md"}'),g={name:"manual/appendix/cbox_digital_input.md"},m=e('<h1 id="conrtol-box-digital-input" tabindex="-1">Conrtol Box Digital Input <a class="header-anchor" href="#conrtol-box-digital-input" aria-label="Permalink to &quot;Conrtol Box Digital Input&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">Warning</p><ul><li> Before connecting Control Box Digital input port, the power should be cut off. </li></ul></div><h3 id="_1-internal-circuit-diagram-of-digital-input-di00-di15" tabindex="-1">1. Internal Circuit Diagram of Digital Input [DI00 ~ DI15] <a class="header-anchor" href="#_1-internal-circuit-diagram-of-digital-input-di00-di15" aria-label="Permalink to &quot;1. Internal Circuit Diagram of Digital Input [DI00 ~ DI15]&quot;">​</a></h3><p><img src="'+n+'" alt="missing"></p><p>Device configuration that receives Control Box Digital input (DI00-DI15).<br> There is an internal 24V supply terminal. A malfunction will occur if an external 24V is supplied.</p><h3 id="_2-how-to-use-digital-input-elements-di00-di15" tabindex="-1">2. How to use digital input elements [DI00 ~ DI15] <a class="header-anchor" href="#_2-how-to-use-digital-input-elements-di00-di15" aria-label="Permalink to &quot;2. How to use digital input elements [DI00 ~ DI15]&quot;">​</a></h3><p><img src="'+o+'" alt="missing"></p><p>How to use RB Control Box Digital input device (DI00-DI15).</p><p><img src="'+r+'" alt="missing"></p><p>Voltage / current characteristic curve of digital input signal.</p><h3 id="_3-digital-input-characteristics-di00-di15" tabindex="-1">3. Digital input characteristics [DI00 ~ DI15] <a class="header-anchor" href="#_3-digital-input-characteristics-di00-di15" aria-label="Permalink to &quot;3. Digital input characteristics [DI00 ~ DI15]&quot;">​</a></h3><table><tr><th>Terminals</th><th>Parameter</th><th>Min</th><th>Typ</th><th>Max</th><th>Unit</th></tr><tr><th>DI00 ~ DI15</th><td>Voltage</td><td>-3</td><td>-</td><td>30</td><td>V</td></tr><tr><th>DI00 ~ DI15</th><td>OFF region</td><td>-3</td><td>-</td><td>5</td><td>V</td></tr><tr><th>DI00 ~ DI15</th><td>ON region</td><td>11</td><td>-</td><td>30</td><td>V</td></tr><tr><th>DI00 ~ DI15</th><td>Current (11-30V)</td><td>2</td><td>-</td><td>15</td><td>mA</td></tr><tr><th>DI00 ~ DI15</th><td>Function</td><td>-</td><td>PNP+</td><td>-</td><td>Type</td></tr><tr><th>DI00 ~ DI15</th><td>IEC 61131-2</td><td>-</td><td>1</td><td>-</td><td>Type</td></tr></table><p><u>This specification applies only to digital input 0 to digital input 15.</u></p><h3 id="_4-internal-circuit-diagram-of-digital-input-di16-di17" tabindex="-1">4. Internal Circuit Diagram of Digital Input [DI16 - DI17] <a class="header-anchor" href="#_4-internal-circuit-diagram-of-digital-input-di16-di17" aria-label="Permalink to &quot;4. Internal Circuit Diagram of Digital Input [DI16 - DI17]&quot;">​</a></h3><p><img src="'+d+'" alt="missing"></p><p>Device configuration that receives Control Box Digital input (DI16-DI17).<br> There is an internal 24V supply terminal. A malfunction occurs when an external 24V is supplied.</p><h3 id="_5-digital-input-characteristics-di16-di17" tabindex="-1">5. Digital input characteristics [DI16 - DI17] <a class="header-anchor" href="#_5-digital-input-characteristics-di16-di17" aria-label="Permalink to &quot;5. Digital input characteristics [DI16 - DI17]&quot;">​</a></h3><table><tr><th>Terminals</th><th>Parameter</th><th>Min</th><th>Typ</th><th>Max</th><th>Unit</th></tr><tr><th>DI16 - DI17</th><td>Voltage</td><td>0</td><td>-</td><td>25</td><td>V</td></tr><tr><th>DI16 - DI17</th><td>OFF region</td><td>0</td><td>-</td><td>7</td><td>V</td></tr><tr><th>DI16 - DI17</th><td>ON region</td><td>7</td><td>-</td><td>25</td><td>V</td></tr><tr><th>DI16 - DI17</th><td>Function</td><td>-</td><td>PNP+</td><td>-</td><td>Type</td></tr></table><p><u>This applies only to digital inputs 16 and 17.</u></p><h3 id="_6-testing-environment" tabindex="-1">6. Testing environment <a class="header-anchor" href="#_6-testing-environment" aria-label="Permalink to &quot;6. Testing environment&quot;">​</a></h3><p>Digital input device test was conducted using Toggle switch, and the following configuration was tested.</p><p><img src="'+s+'" alt="missing"></p><h3 id="_7-how-to-use-pnp-sensor" tabindex="-1">7. How to use PNP sensor <a class="header-anchor" href="#_7-how-to-use-pnp-sensor" aria-label="Permalink to &quot;7. How to use PNP sensor&quot;">​</a></h3><p><img src="'+l+'" alt="missing"></p><p>PNP sensor can be used in the same way as above.<br><u>This is a specification that applies to all digital inputs.</u></p><h3 id="_8-how-to-connect-3-position-enabling-device" tabindex="-1">8. How to connect 3-Position Enabling Device <a class="header-anchor" href="#_8-how-to-connect-3-position-enabling-device" aria-label="Permalink to &quot;8. How to connect 3-Position Enabling Device&quot;">​</a></h3><p><img src="'+c+'" alt="missing"></p><p>The initial factory condition is as above, and it is possible to install the operation.<br> (Source: <a href="https://www.motionsolutions.com" target="_blank" rel="noreferrer">https://www.motionsolutions.com</a>)</p><p><img src="'+p+'" alt="missing"><img src="'+h+'" alt="missing"><img src="'+u+'" alt="missing"></p><p><u>This applies to Enabling Device in accordance with ISO 10218, IEC 60204-1.</u></p><h3 id="_9-how-to-connect-safety-equipment" tabindex="-1">9. How to connect safety equipment <a class="header-anchor" href="#_9-how-to-connect-safety-equipment" aria-label="Permalink to &quot;9. How to connect safety equipment&quot;">​</a></h3><p>Safety device wiring using PNP type sensor and Enabling Device such as light curtain and safety door sensor is same as above.</p>',32),D=[m];function _(I,b,f,q,w,x){return a(),i("div",null,D)}const T=t(g,[["render",_]]);export{v as __pageData,T as default};
