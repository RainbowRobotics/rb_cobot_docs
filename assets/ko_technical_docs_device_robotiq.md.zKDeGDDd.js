import{_ as a,c as o,o as i,U as t,AE as e,AF as r,AG as s,AH as l,AI as c,AJ as n,AK as p,AL as d,AM as _}from"./chunks/framework.fHC5UfPI.js";const F=JSON.parse('{"title":"Rainbow x Robotiq Gripper/Sensor","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"ko/technical_docs/device_robotiq.md","filePath":"ko/technical_docs/device_robotiq.md"}'),h={name:"ko/technical_docs/device_robotiq.md"},b=t('<h1 id="rainbow-x-robotiq-gripper-sensor" tabindex="-1">Rainbow x Robotiq Gripper/Sensor <a class="header-anchor" href="#rainbow-x-robotiq-gripper-sensor" aria-label="Permalink to &quot;Rainbow x Robotiq Gripper/Sensor&quot;">​</a></h1><h3 id="_1-하드웨어-결선" tabindex="-1">1. 하드웨어 결선 <a class="header-anchor" href="#_1-하드웨어-결선" aria-label="Permalink to &quot;1. 하드웨어 결선&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">주의</p><ul><li> 결선 재구성 시, 시스템 전원이 꺼진 상태에서 진행하세요. </li></ul></div><h4 id="_1-1-제어-박스와-연결할-경우" tabindex="-1">1.1 제어 박스와 연결할 경우 <a class="header-anchor" href="#_1-1-제어-박스와-연결할-경우" aria-label="Permalink to &quot;1.1 제어 박스와 연결할 경우&quot;">​</a></h4><p><img src="'+e+'" alt="missing"></p><ul><li>Robotiq 제품의 전원 케이블을 컨트롤 박스 I/O 터미널 블록의 24V에 연결하세요.</li><li>Robotiq 제품의 접지 케이블을 컨트롤 박스 I/O 터미널 블록의 GND에 연결하세요.</li><li>Robotiq 제품의 통신 USB 케이블을 컨트롤 박스의 USB 포트에 연결하세요.</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>지원 장치 유형 : 2F-85 / 2F-140 / Hand-E / FT300 / EPick</p></div><h4 id="_1-2-로봇-툴-플랜지에-연결할-경우" tabindex="-1">1.2 로봇 툴 플랜지에 연결할 경우 <a class="header-anchor" href="#_1-2-로봇-툴-플랜지에-연결할-경우" aria-label="Permalink to &quot;1.2 로봇 툴 플랜지에 연결할 경우&quot;">​</a></h4><p><img src="'+r+'" alt="missing"></p><ul><li>Robotiq 제품의 전원 케이블을 Tool-Flange I/O 단자의 24V에 연결하세요.</li><li>Robotiq 제품의 접지 케이블을 Tool-Flange I/O 단자의 GND에 연결하세요.</li><li>Robotiq 제품의 RS485 D+, D-(A/B) 케이블을 Tool-Flange I/O 단자의 RS485에 연결하세요.</li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>지원 장치 유형 : 2F-85 / 2F-140 / Hand-E / EPick</p></div><h3 id="_2-소프트웨어-사용" tabindex="-1">2. 소프트웨어 사용 <a class="header-anchor" href="#_2-소프트웨어-사용" aria-label="Permalink to &quot;2. 소프트웨어 사용&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">주의</p><ol><li> 결선 재구성 시, 시스템 전원이 꺼진 상태에서 진행하세요. </li><li> 소프트웨어 버전에 따라 UI 화면 구성은 상이할 수 있습니다. </li></ol></div><h4 id="_2-1-robotiq-hand-e" tabindex="-1">2.1 Robotiq Hand-E <a class="header-anchor" href="#_2-1-robotiq-hand-e" aria-label="Permalink to &quot;2.1 Robotiq Hand-E&quot;">​</a></h4><p>Make 페이지 &gt; Command Actions &gt; Gripper</p><p><img src="'+s+'" alt="missing"></p><h4 id="_2-2-robotiq-2f-85" tabindex="-1">2.2 Robotiq 2F-85 <a class="header-anchor" href="#_2-2-robotiq-2f-85" aria-label="Permalink to &quot;2.2 Robotiq 2F-85&quot;">​</a></h4><p>Make 페이지 &gt; Command Actions &gt; Gripper</p><p><img src="'+l+'" alt="missing"></p><h4 id="_2-3-robotiq-2f-140" tabindex="-1">2.3 Robotiq 2F-140 <a class="header-anchor" href="#_2-3-robotiq-2f-140" aria-label="Permalink to &quot;2.3 Robotiq 2F-140&quot;">​</a></h4><p>Make 페이지 &gt; Command Actions &gt; Gripper</p><p><img src="'+c+'" alt="missing"></p><h4 id="_2-4-robotiq-epick" tabindex="-1">2.4 Robotiq EPick <a class="header-anchor" href="#_2-4-robotiq-epick" aria-label="Permalink to &quot;2.4 Robotiq EPick&quot;">​</a></h4><p>Make 페이지 &gt; Command Actions &gt; Gripper</p><p><img src="'+n+'" alt="missing"></p><h4 id="_2-5-ft300-캘리브레이션" tabindex="-1">2.5 FT300 캘리브레이션 <a class="header-anchor" href="#_2-5-ft300-캘리브레이션" aria-label="Permalink to &quot;2.5 FT300 캘리브레이션&quot;">​</a></h4><p>Make 페이지 &gt; 오른쪽 사이드 바 &gt; Setting</p><p><img src="'+p+'" alt="missing"></p><h4 id="_2-6-ft300-을-활용한-자동-com-cog-찾기" tabindex="-1">2.6 FT300 을 활용한 자동 COM (COG) 찾기 <a class="header-anchor" href="#_2-6-ft300-을-활용한-자동-com-cog-찾기" aria-label="Permalink to &quot;2.6 FT300 을 활용한 자동 COM (COG) 찾기&quot;">​</a></h4><p>Make 페이지 &gt; 오른쪽 사이드 바 &gt; Setting</p><p><img src="'+d+'" alt="missing"></p><h4 id="_2-7-ft300-을-활용한-힘-제어" tabindex="-1">2.7 FT300 을 활용한 힘 제어 <a class="header-anchor" href="#_2-7-ft300-을-활용한-힘-제어" aria-label="Permalink to &quot;2.7 FT300 을 활용한 힘 제어&quot;">​</a></h4><p>Make 페이지 &gt; Command Actions &gt; Force</p><p><img src="'+_+'" alt="missing"></p>',34),m=[b];function q(u,g,k,f,R,P){return i(),o("div",null,m)}const A=a(h,[["render",q]]);export{F as __pageData,A as default};
