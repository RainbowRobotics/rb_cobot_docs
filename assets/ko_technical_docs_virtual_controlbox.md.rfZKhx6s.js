import{_ as s,c as a,o as i,U as t,CE as r,CF as o,CG as p,CH as n,CI as e,CJ as _,CK as l,CL as m,CM as c,CN as g,CO as d,CP as h,rB as u,CQ as b,CR as w,CS as C}from"./chunks/framework._bMY95IQ.js";const V=JSON.parse('{"title":"가상 로봇 제어박스 운용 v1.5","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"ko/technical_docs/virtual_controlbox.md","filePath":"ko/technical_docs/virtual_controlbox.md"}'),x={name:"ko/technical_docs/virtual_controlbox.md"},f=t('<h1 id="가상-로봇-제어박스-운용-v1-5" tabindex="-1">가상 로봇 제어박스 운용 v1.5 <a class="header-anchor" href="#가상-로봇-제어박스-운용-v1-5" aria-label="Permalink to &quot;가상 로봇 제어박스 운용 v1.5&quot;">​</a></h1><h3 id="_1-사용자-pc에-버추얼-박스-프로그램-설치하기" tabindex="-1">1. 사용자 PC에 버추얼 박스 프로그램 설치하기 <a class="header-anchor" href="#_1-사용자-pc에-버추얼-박스-프로그램-설치하기" aria-label="Permalink to &quot;1. 사용자 PC에 버추얼 박스 프로그램 설치하기&quot;">​</a></h3><p>다음 링크(<a href="https://www.virtualbox.org/wiki/Downloads" target="_blank" rel="noreferrer">https://www.virtualbox.org/wiki/Downloads</a>)에서 Windows hosts 버튼을 클릭하여 설치파일을 다운로드 합니다.<br> 가상 로봇 제어박스 프로그램을 운용하기 위해서는 가상 리눅스 시스템이 요구되기 때문에, 위와 같은 프로그램을 설치해야 합니다.</p><p><img src="'+r+'" alt="missing"></p><p>별도의 추가 설정 없이 Next/Yes 버튼을 통해 이 프로그램을 설치합니다.</p><p><img src="'+o+'" alt="missing"></p><p>설치가 완료되면 프로그램을 실행합니다.</p><h3 id="_2-버추얼-박스를-통해-시뮬레이터-프로그램-설치-및-실행하기" tabindex="-1">2. 버추얼 박스를 통해 시뮬레이터 프로그램 설치 및 실행하기 <a class="header-anchor" href="#_2-버추얼-박스를-통해-시뮬레이터-프로그램-설치-및-실행하기" aria-label="Permalink to &quot;2. 버추얼 박스를 통해 시뮬레이터 프로그램 설치 및 실행하기&quot;">​</a></h3><p><strong>도구 → 네트워크</strong> 설정으로 진입합니다.</p><p><img src="'+p+'" alt="missing"></p><p>네트워크 주소를 다음과 같이 설정합니다.<br><strong>반드시</strong> ‘<strong><em>10.0.2.1</em></strong>’을 입력 합니다.<br> 작성 이후 ‘적용’ 버튼을 눌러야 합니다.</p><p><img src="'+n+'" alt="missing"></p><p><strong>파일 → 가상 시스템 가져오기</strong></p><p><img src="'+e+'" alt="missing"></p><p>배포한 압축 파일을 미리 압축 해제해 놓습니다.<br> 첨부된 RBVirtualSimulator.ova 를 선택하고, 다음을 누릅니다.</p><p><img src="'+_+'" alt="missing"></p><p>가져오기를 눌러 설정을 마무리합니다.</p><p><img src="'+l+'" alt="missing"></p><p>설정이 끝나면 프로그램 좌측에 RBVirtualSimulator가 추가됩니다.<br> 이를 더블 클릭하여 가상 로봇 제어박스를 실행합니다.</p><p><img src="'+m+'" alt="missing"></p><p>실행 시 만약 다음과 같은 에러가 발생한다면, 네트워크 설정 변경 버튼을 누릅니다.</p><p><img src="'+c+'" alt="missing"></p><p>어댑터 1에 다음에 연결됨을 ‘호스트 전용 어댑터’, 이름에 ‘VirtualBox-Host-Only Ethernet Adapter’로 설정합니다.</p><p><img src="'+g+'" alt="missing"></p><p>설정 완료 후 다시 RBVirtualSimulator 실행시키면, 정상적으로 가상 제어박스가 부팅되는 것을 확인할 수 있습니다.<br> 다음 화면에서 아래의 <strong>* daemon started successfully</strong> 라는 메시지가 나올 때까지 기다립니다.</p><p><img src="'+d+'" alt="missing"></p><h3 id="_3-rainbow-rb-window-ui-프로그램-실행-및-연결하기" tabindex="-1">3. Rainbow-RB Window UI 프로그램 실행 및 연결하기 <a class="header-anchor" href="#_3-rainbow-rb-window-ui-프로그램-실행-및-연결하기" aria-label="Permalink to &quot;3. Rainbow-RB Window UI 프로그램 실행 및 연결하기&quot;">​</a></h3><p>첨부된 파일 중 RB_window_### 폴더의 Rainbow-RB.exe 를 실행합니다.</p><p><img src="'+h+'" alt="missing"></p><p>Make 페이지로 이동합니다.<br> 상단의 네트워크 버튼을 누릅니다 (<img src="'+u+'" alt="missing">).<br> 태블릿 연결 설정에서 모드는 TCP/IP 연결로 설정하고, IP 주소로는 10.0.2.7을 입력합니다.</p><p><img src="'+b+'" alt="missing"></p><p>정상적으로 연결 되었다면, 다음과 같이 네트워크 연결됨에 초록불이 들어옵니다.</p><p><img src="'+w+'" alt="missing"></p><p>시뮬레이션 모드에서 원하는 로봇 자세를 테스트 할 수 있습니다.</p><p><img src="'+C+'" alt="missing"></p>',35),v=[f];function P(k,R,B,S,q,I){return i(),a("div",null,v)}const N=s(x,[["render",P]]);export{V as __pageData,N as default};
