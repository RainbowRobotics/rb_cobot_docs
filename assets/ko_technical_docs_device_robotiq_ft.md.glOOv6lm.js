import{_ as o,c as t,o as i,U as a,AR as e,AS as s,AT as r,AU as l,AV as c}from"./chunks/framework.OMUUQadF.js";const v=JSON.parse('{"title":"Rainbow x Robotiq FT-Sensor v1.4","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"ko/technical_docs/device_robotiq_ft.md","filePath":"ko/technical_docs/device_robotiq_ft.md"}'),n={name:"ko/technical_docs/device_robotiq_ft.md"},_=a('<h1 id="rainbow-x-robotiq-ft-sensor-v1-4" tabindex="-1">Rainbow x Robotiq FT-Sensor v1.4 <a class="header-anchor" href="#rainbow-x-robotiq-ft-sensor-v1-4" aria-label="Permalink to &quot;Rainbow x Robotiq FT-Sensor v1.4&quot;">​</a></h1><h3 id="_1-하드웨어-결선" tabindex="-1">1. 하드웨어 결선 <a class="header-anchor" href="#_1-하드웨어-결선" aria-label="Permalink to &quot;1. 하드웨어 결선&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">주의</p><ul><li> 결선 재구성 시, 시스템 전원이 꺼진 상태에서 진행하세요. </li><li> 센서에 관한 자세한 정보는 센서 제조사 홈페이지를 참고하세요. </li><li><a href="https://robotiq.com/products/ft-300-force-torque-sensor" target="_blank"> https://robotiq.com/products/ft-300-force-torque-sensor </a></li></ul></div><p><img src="'+e+'" alt="missing"></p><ul><li>센서의 +전원 케이블을 제어박스 I/O 단자의 +24V 단자에 연결합니다.</li><li>센서의 –전원 (그라운드) 케이블을 제어박스 I/O 단자의 GND 단자에 연결합니다.</li><li>Robotiq 사에서 제공하는 USB-RS485 장치의 USB 를 제어 박스에 연결합니다.</li><li>아래의 예시 사진처럼, Robotiq F/T 센서의 마운팅 방향을 주의해야 합니다. 아래의 사진에서 직접 교시 버튼 (검정 버튼)과 센서 케이블 사이의 상대 방향을 유의하세요.</li></ul><p><img src="'+s+'" alt="missing"></p><h3 id="_2-소프트웨어-사용" tabindex="-1">2. 소프트웨어 사용 <a class="header-anchor" href="#_2-소프트웨어-사용" aria-label="Permalink to &quot;2. 소프트웨어 사용&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">주의</p><ul><li> 결선 재구성 시, 시스템 전원이 꺼진 상태에서 진행하세요. </li></ul></div><p>장치 연결 이후, UI 프로그램을 통하여 Setup &gt; Interface 에서 외부 F/T 센서를 Robotiq F/T 300으로 설정합니다.</p><p><img src="'+r+'" alt="missing"></p><p>설정 완료 후, 시스템을 재부팅 합니다. 하드웨어 결선과 소프트웨어 설정이 잘 되어 있다면, Make 페이지 하단에서 센서 값 확인이 가능합니다.</p><p><img src="'+l+'" alt="missing"></p><p>수신된 센서 값을 이용하여 각종 판단에 사용하거나, 힘 제어 등에서 사용할 수 있습니다. 아래의 스크린샷은 힘 제어 화면의 일부 입니다.</p><p><img src="'+c+'" alt="missing"></p>',14),p=[_];function d(m,b,u,h,f,q){return i(),t("div",null,p)}const k=o(n,[["render",d]]);export{v as __pageData,k as default};