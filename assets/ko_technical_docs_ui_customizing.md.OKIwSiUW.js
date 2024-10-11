import{_ as d,c as a,o as t,U as e,Cg as c,Ch as i,Ci as l,Cj as s,Ck as v,Cl as o,Cm as n,Cn as r}from"./chunks/framework.fHC5UfPI.js";const f=JSON.parse('{"title":"UI 커스터마이징","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"ko/technical_docs/ui_customizing.md","filePath":"ko/technical_docs/ui_customizing.md"}'),p={name:"ko/technical_docs/ui_customizing.md"},_=e('<h1 id="ui-커스터마이징" tabindex="-1" data-v-d86c03ed>UI 커스터마이징 <a class="header-anchor" href="#ui-커스터마이징" aria-label="Permalink to &quot;UI 커스터마이징&quot;" data-v-d86c03ed>​</a></h1><h3 id="ui-앱-프로그램-사용자-임의-꾸미기" tabindex="-1" data-v-d86c03ed>UI 앱 프로그램 사용자 임의 꾸미기 <a class="header-anchor" href="#ui-앱-프로그램-사용자-임의-꾸미기" aria-label="Permalink to &quot;UI 앱 프로그램 사용자 임의 꾸미기&quot;" data-v-d86c03ed>​</a></h3><div class="warning custom-block" data-v-d86c03ed><p class="custom-block-title" data-v-d86c03ed>주의</p><ol data-v-d86c03ed><li data-v-d86c03ed> 본 절차는 ㈜레인보우 로보틱스의 협동로봇 UI 앱 프로그램을 커스터마이즈 하여 꾸미기 위한 방법 입니다. </li><li data-v-d86c03ed> 해당 기능은 2020년 6월 이후 제공되는 공식 업데이트 버전부터 유효합니다. </li></ol></div><ol data-v-d86c03ed><li data-v-d86c03ed><p data-v-d86c03ed>앱을 설치 또는 업데이트 합니다.<br data-v-d86c03ed> 설치 / 업데이트 방법은 업데이트 절차서를 별도로 참조 바랍니다.</p></li><li data-v-d86c03ed><p data-v-d86c03ed>기본 설치 이후, 3D 화면 구성은 아래와 같습니다.</p></li></ol><div class="center-align" data-v-d86c03ed><img src="'+c+'" data-v-d86c03ed><p style="text-align:center;" data-v-d86c03ed>[ 로딩 화면 – 기본 ]</p></div><div class="center-align" data-v-d86c03ed><img src="'+i+'" data-v-d86c03ed><p style="text-align:center;" data-v-d86c03ed>[ 홈 화면 – 기본 ]</p></div><div class="center-align" data-v-d86c03ed><img src="'+l+'" data-v-d86c03ed><p style="text-align:center;" data-v-d86c03ed>[ Make 화면 – 기본 ]</p></div><ol start="3" data-v-d86c03ed><li data-v-d86c03ed>지금부터 해당 화면을 커스터마이즈 해보겠습니다.</li></ol><ul data-v-d86c03ed><li data-v-d86c03ed>3가지 파일이 필요합니다.</li><li data-v-d86c03ed>파일 이름은 아래에서 정의된 파일 명만 인식됩니다.</li><li data-v-d86c03ed>그림 사이즈가 너무 클 경우 UI 로딩 속도가 느려집니다.</li><li data-v-d86c03ed>로딩 속도를 위하여 권장 사이즈 이하의 사이즈를 권합니다.</li><li data-v-d86c03ed>그림 배경은 투명한 png 타입을 권장합니다.</li></ul><table data-v-d86c03ed><tr data-v-d86c03ed><th data-v-d86c03ed>파일 이름</th><th data-v-d86c03ed>목적</th><th data-v-d86c03ed>권장 사이즈/형식</th></tr><tr data-v-d86c03ed><td data-v-d86c03ed>Intro.png</td><td data-v-d86c03ed>앱 로딩 시 로고</td><td data-v-d86c03ed>png, (세로 120px 예: 450x120 pixel)</td></tr><tr data-v-d86c03ed><td data-v-d86c03ed>Home.png</td><td data-v-d86c03ed>화면 좌측 상단 로고</td><td data-v-d86c03ed>png, (세로 70px 예: 70x70 pixel)</td></tr><tr data-v-d86c03ed><td data-v-d86c03ed>HomeTitle.txt</td><td data-v-d86c03ed>홈 화면 멘트</td><td data-v-d86c03ed>txt</td></tr></table><ol start="4" data-v-d86c03ed><li data-v-d86c03ed>태블릿을 업무용 PC에 연결하여 아래의 경로에 접근합니다.</li></ol><div class="language- vp-adaptive-theme" data-v-d86c03ed><button title="Copy Code" class="copy" data-v-d86c03ed></button><span class="lang" data-v-d86c03ed></span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-d86c03ed><code data-v-d86c03ed><span class="line" data-v-d86c03ed><span data-v-d86c03ed>Android/data/com.rainbow.cobot/files/Images</span></span></code></pre></div><ol start="5" data-v-d86c03ed><li data-v-d86c03ed>현재 해당 경로 안에는 아무 파일도 존재하지 않습니다.</li></ol><ul data-v-d86c03ed><li data-v-d86c03ed>아무 파일도 존재하지 않을 경우, 레인보우 로보틱스의 기본 값이 적용됩니다.</li></ul><p data-v-d86c03ed><img src="'+s+'" alt="missing" data-v-d86c03ed></p><ol start="6" data-v-d86c03ed><li data-v-d86c03ed>이 경로에 3단계에서 준비된 3 가지 파일을 넣어줍니다.</li></ol><p data-v-d86c03ed><img src="'+v+'" alt="missing" data-v-d86c03ed></p><ol start="7" data-v-d86c03ed><li data-v-d86c03ed>커스터마이즈가 끝났습니다. 앱을 다시 실행해보면 아래와 같은 화면을 볼 수 있습니다.</li></ol><div class="center-align" data-v-d86c03ed><img src="'+o+'" data-v-d86c03ed><p style="text-align:center;" data-v-d86c03ed>[ Intro.png 적용됨 ]</p></div><div class="center-align" data-v-d86c03ed><img src="'+n+'" data-v-d86c03ed><p style="text-align:center;" data-v-d86c03ed>[ HomeTitle.txt 안의 내용이 적용됨 ]</p></div><div class="center-align" data-v-d86c03ed><img src="'+r+'" data-v-d86c03ed><p style="text-align:center;" data-v-d86c03ed>[ Home.png 적용됨 ]</p></div>',21),m=[_];function g(u,h,x,b,k,C){return t(),a("div",null,m)}const y=d(p,[["render",g],["__scopeId","data-v-d86c03ed"]]);export{f as __pageData,y as default};
