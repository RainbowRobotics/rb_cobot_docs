import{_ as t,c as a,o as i,U as e,rD as o,rE as l,rF as r,rG as n,rH as d,rI as s,rJ as p}from"./chunks/framework.9IhZvSnu.js";const P=JSON.parse('{"title":"툴 플랜지 디지털 입력","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"ko/manual/appendix/tool_flange_digital_input.md","filePath":"ko/manual/appendix/tool_flange_digital_input.md"}'),_={name:"ko/manual/appendix/tool_flange_digital_input.md"},c=e('<h1 id="툴-플랜지-디지털-입력" tabindex="-1">툴 플랜지 디지털 입력 <a class="header-anchor" href="#툴-플랜지-디지털-입력" aria-label="Permalink to &quot;툴 플랜지 디지털 입력&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">주의</p><ul><li> RB Series Tool Flange I/O 입력 포트 결선 이전에, 전원 차단이 되어야 합니다. </li><li> 하단의 전기 도면은 Non-E 타입에만 해당합니다. </li></ul></div><h3 id="_1-digital-입력-내부-회로도" tabindex="-1">1. Digital 입력 내부 회로도 <a class="header-anchor" href="#_1-digital-입력-내부-회로도" aria-label="Permalink to &quot;1. Digital 입력 내부 회로도&quot;">​</a></h3><p><img src="'+o+'" alt="missing"></p><p>Tool Flange Digital 입력을 하는 소자 구성입니다.</p><div style="display:flex;"><div><img src="'+l+'"><figcaption style="text-align:center;">(1) Non-E Version Robot</figcaption></div><div><img src="'+r+'"><figcaption style="text-align:center;">(2) E Version Robot</figcaption></div></div><p>외부 노출된 커넥터 결선도입니다. 로봇 버전에 따라 결선도가 위와 같이 나뉘게 됩니다.</p><h3 id="_2-digital-입력-특성" tabindex="-1">2. Digital 입력 특성 <a class="header-anchor" href="#_2-digital-입력-특성" aria-label="Permalink to &quot;2. Digital 입력 특성&quot;">​</a></h3><table><tr><th>Terminals</th><th>Parameter</th><th>Min</th><th>Typ</th><th>Max</th><th>Unit</th></tr><tr><th>DIA, ... , DIF</th><td>Voltage</td><td>0</td><td>-</td><td>24</td><td>V</td></tr><tr><th>DIA, ... , DIF</th><td>OFF region</td><td>0</td><td>-</td><td>9</td><td>V</td></tr><tr><th>DIA, ... , DIF</th><td>ON region</td><td>0</td><td>-</td><td>24</td><td>V</td></tr></table><p><u>이는 Tool Flange Digital 입력에만 적용되는 사양입니다(이때, Non-E version Robot은 DIA, DIB만 적용됩니다.)</u></p><h3 id="_3-테스트-환경" tabindex="-1">3. 테스트 환경 <a class="header-anchor" href="#_3-테스트-환경" aria-label="Permalink to &quot;3. 테스트 환경&quot;">​</a></h3><p>Digital 입력 소자 테스트는 파워 서플라이를 사용하여 진행하였으며, 아래와 같은 구성으로 테스트 하였습니다.</p><p><img src="'+n+'" alt="missing"></p><div style="display:flex;"><div><img src="'+d+'"><figcaption style="text-align:center;">Non-E Version</figcaption></div><div><img src="'+s+'"><figcaption style="text-align:center;">E Version</figcaption></div></div><h3 id="_4-pnp-방식-센서-사용-방법" tabindex="-1">4. PNP 방식 센서 사용 방법 <a class="header-anchor" href="#_4-pnp-방식-센서-사용-방법" aria-label="Permalink to &quot;4. PNP 방식 센서 사용 방법&quot;">​</a></h3><p>(출처: <a href="https://blog.naver.com/mjg5080/97380010" target="_blank" rel="noreferrer">https://blog.naver.com/mjg5080/97380010</a>)</p><p><img src="'+p+'" alt="missing"></p><p>PNP 방식 센서의 경우 위 결선과 동일하게 사용 가능합니다.<br><u>이는 Control Box Digital 입력에 동일하게 적용되는 사양입니다.</u></p>',18),g=[c];function h(m,u,f,b,v,x){return i(),a("div",null,g)}const k=t(_,[["render",h]]);export{P as __pageData,k as default};
