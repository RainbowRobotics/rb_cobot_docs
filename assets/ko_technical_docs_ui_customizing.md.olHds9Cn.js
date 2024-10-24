import{_ as t,c as i,o as l,U as e,D8 as s,D9 as a,Da as o,Db as n,Dc as c,Dd as r,De as d,Df as p}from"./chunks/framework.OMUUQadF.js";const y=JSON.parse('{"title":"사용자 인터페이스 커스터마이징 v1.1","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"ko/technical_docs/ui_customizing.md","filePath":"ko/technical_docs/ui_customizing.md"}'),_={name:"ko/technical_docs/ui_customizing.md"},g=e('<h1 id="사용자-인터페이스-커스터마이징-v1-1" tabindex="-1">사용자 인터페이스 커스터마이징 v1.1 <a class="header-anchor" href="#사용자-인터페이스-커스터마이징-v1-1" aria-label="Permalink to &quot;사용자 인터페이스 커스터마이징 v1.1&quot;">​</a></h1><h3 id="ui-앱-프로그램-사용자-임의-꾸미기" tabindex="-1">UI 앱 프로그램 사용자 임의 꾸미기 <a class="header-anchor" href="#ui-앱-프로그램-사용자-임의-꾸미기" aria-label="Permalink to &quot;UI 앱 프로그램 사용자 임의 꾸미기&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">주의</p><ol><li> 본 절차는 ㈜레인보우 로보틱스의 협동로봇 UI 앱 프로그램을 커스터마이즈 하여 꾸미기 위한 방법 입니다. </li><li> 해당 기능은 2020년 6월 이후 제공되는 공식 업데이트 버전부터 유효합니다. </li></ol></div><ol><li><p>앱을 설치 또는 업데이트 합니다.<br> 설치 / 업데이트 방법은 업데이트 절차서를 별도로 참조 바랍니다.</p></li><li><p>기본 설치 이후, 3D 화면 구성은 아래와 같습니다.</p></li></ol><div class="center-align"><img src="'+s+'"><p style="text-align:center;">[ 로딩 화면 – 기본 ]</p></div><div class="center-align"><img src="'+a+'"><p style="text-align:center;">[ 홈 화면 – 기본 ]</p></div><div class="center-align"><img src="'+o+'"><p style="text-align:center;">[ Make 화면 – 기본 ]</p></div><ol start="3"><li>지금부터 해당 화면을 커스터마이즈 해보겠습니다.</li></ol><ul><li>3가지 파일이 필요합니다.</li><li>파일 이름은 아래에서 정의된 파일 명만 인식됩니다.</li><li>그림 사이즈가 너무 클 경우 UI 로딩 속도가 느려집니다.</li><li>로딩 속도를 위하여 권장 사이즈 이하의 사이즈를 권합니다.</li><li>그림 배경은 투명한 png 타입을 권장합니다.</li></ul><table class="th-align"><tr><th>파일 이름</th><th>목적</th><th>권장 사이즈/형식</th></tr><tr><td>Intro.png</td><td>앱 로딩 시 로고</td><td>png, (세로 120px 예: 450x120 pixel)</td></tr><tr><td>Home.png</td><td>화면 좌측 상단 로고</td><td>png, (세로 70px 예: 70x70 pixel)</td></tr><tr><td>HomeTitle.txt</td><td>홈 화면 멘트</td><td>txt</td></tr></table><ol><li>태블릿을 업무용 PC에 연결하여 아래의 경로에 접근합니다.</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Android/data/com.rainbow.cobot/files/Images</span></span></code></pre></div><ol start="5"><li>현재 해당 경로 안에는 아무 파일도 존재하지 않습니다.</li></ol><ul><li>아무 파일도 존재하지 않을 경우, 레인보우 로보틱스의 기본 값이 적용됩니다.</li></ul><p><img src="'+n+'" alt="missing"></p><ol start="6"><li>이 경로에 3단계에서 준비된 3 가지 파일을 넣어줍니다.</li></ol><p><img src="'+c+'" alt="missing"></p><ol start="7"><li>커스터마이즈가 끝났습니다. 앱을 다시 실행해보면 아래와 같은 화면을 볼 수 있습니다.</li></ol><div class="center-align"><img src="'+r+'"><p style="text-align:center;">[ Intro.png 적용됨 ]</p></div><div class="center-align"><img src="'+d+'"><p style="text-align:center;">[ HomeTitle.txt 안의 내용이 적용됨 ]</p></div><div class="center-align"><img src="'+p+'"><p style="text-align:center;">[ Home.png 적용됨 ]</p></div>',21),m=[g];function h(u,v,x,b,k,f){return l(),i("div",null,m)}const I=t(_,[["render",h]]);export{y as __pageData,I as default};