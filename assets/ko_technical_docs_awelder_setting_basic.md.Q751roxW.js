import{_ as a,c as i,o as l,U as e,Ar as t,As as r,At as o,Au as s,Av as n,Aw as _,Ax as c,Ay as h}from"./chunks/framework.fHC5UfPI.js";const x=JSON.parse('{"title":"아날로그 용접기 기초 안내","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"ko/technical_docs/awelder_setting_basic.md","filePath":"ko/technical_docs/awelder_setting_basic.md"}'),u={name:"ko/technical_docs/awelder_setting_basic.md"},d=e('<h1 id="아날로그-용접기-기초-안내" tabindex="-1">아날로그 용접기 기초 안내 <a class="header-anchor" href="#아날로그-용접기-기초-안내" aria-label="Permalink to &quot;아날로그 용접기 기초 안내&quot;">​</a></h1><h3 id="_1-연결과-설정" tabindex="-1">1. 연결과 설정 <a class="header-anchor" href="#_1-연결과-설정" aria-label="Permalink to &quot;1. 연결과 설정&quot;">​</a></h3><p>Rainbow Robotics (레인보우 로보틱스) 의 로봇 제품과 아날로그 용접기 연동 시, Setup 페이지의 Devices 항목에서 아래와 같은 항목들이 먼저 설정되어야 합니다.</p><p><img src="'+t+'" alt="missing"></p><h4 id="_1-용접-시작-신호" tabindex="-1">① 용접 시작 신호 <a class="header-anchor" href="#_1-용접-시작-신호" aria-label="Permalink to &quot;① 용접 시작 신호&quot;">​</a></h4><ul><li>로봇 제어박스에서 용접기로 용접 시작/종료 신호를 내보내는 디지털 출력 포트를 설정합니다. 즉, 용접을 On/Off 하기 위한 출력 신호 설정입니다.</li></ul><h4 id="_2-아크-발생-신호-피드백" tabindex="-1">② 아크 발생 신호 피드백 <a class="header-anchor" href="#_2-아크-발생-신호-피드백" aria-label="Permalink to &quot;② 아크 발생 신호 피드백&quot;">​</a></h4><ul><li>용접이 시작되고 정상적으로 아크가 발생하였는지를 용접기로부터 수신하기 위한 입력 포트를 설정합니다.</li><li>설정된 입력 포트로 들어온 신호를 통하여, 로봇은 용접 시작 및 아크 발생이 정상적으로 되었는지 판단이 가능합니다.</li><li>용접기에 따라 해당 신호가 존재하지 않을 수 있습니다. 이 경우 None을 선택합니다.</li></ul><h4 id="_3-와이어-전진-신호" tabindex="-1">③ 와이어 전진 신호 <a class="header-anchor" href="#_3-와이어-전진-신호" aria-label="Permalink to &quot;③ 와이어 전진 신호&quot;">​</a></h4><ul><li>티칭 및 세팅 과정에서 용접 와이어 전진을 위한 기능입니다. 해당 설정이 되어있을 경우, 티칭 과정에서 로봇 UI를 통하여 와이어를 전진 시킬 수 있습니다.</li><li>용접기에 따라 해당 신호가 존재하지 않을 수 있습니다. 이 경우 None을 선택합니다.</li></ul><h4 id="_4-와이어-후진-신호" tabindex="-1">④ 와이어 후진 신호 <a class="header-anchor" href="#_4-와이어-후진-신호" aria-label="Permalink to &quot;④ 와이어 후진 신호&quot;">​</a></h4><ul><li>티칭 및 세팅 과정에서 용접 와이어 후진을 위한 기능입니다. 해당 설정이 되어있을 경우, 티칭 과정에서 로봇 UI를 통하여 와이어를 후진 시킬 수 있습니다.</li><li>용접기에 따라 해당 신호가 존재하지 않을 수 있습니다. 이 경우 None을 선택합니다.</li></ul><h4 id="_5-용접-전류-세팅-포트-설정" tabindex="-1">⑤ 용접 전류 세팅 포트 설정 <a class="header-anchor" href="#_5-용접-전류-세팅-포트-설정" aria-label="Permalink to &quot;⑤ 용접 전류 세팅 포트 설정&quot;">​</a></h4><ul><li>로봇 제어박스에는 4개의 아날로그 출력이 있습니다 (A.Out 0 ~ A.Out 3). 이들 중 용접 전류 설정을 위하여 어떤 포트를 사용할지를 선택합니다.</li><li>용접 조건 (전류 세기) 등을 용접기에서 수동으로 조작할 경우, 이 세팅은 하지 않아도 됩니다.</li></ul><h4 id="_6-용접-전압-세팅-포트-설정" tabindex="-1">⑥ 용접 전압 세팅 포트 설정 <a class="header-anchor" href="#_6-용접-전압-세팅-포트-설정" aria-label="Permalink to &quot;⑥ 용접 전압 세팅 포트 설정&quot;">​</a></h4><ul><li>로봇 제어박스에는 4개의 아날로그 출력이 있습니다 (A.Out 0 ~ A.Out 3). 이들 중 용접 전압 설정을 위하여 어떤 포트를 사용할지를 선택합니다.</li><li>용접 조건 (전류 세기) 등을 용접기에서 수동으로 조작할 경우, 이 세팅은 하지 않아도 됩니다.</li></ul><h4 id="_7-용접-전류-특성-그래프-설정" tabindex="-1">⑦ 용접 전류 특성 그래프 설정 <a class="header-anchor" href="#_7-용접-전류-특성-그래프-설정" aria-label="Permalink to &quot;⑦ 용접 전류 특성 그래프 설정&quot;">​</a></h4><ul><li>로봇 제어박스의 아날로그 출력은 0~ 10V 레벨입니다. 사용자가 원하는 용접 전류를 입력했을 때 이를 아날로그 출력 몇 볼트로 출력할지 매핑하기 위한 기능입니다.</li><li>이곳에 입력되는 값은 용접기의 특성 및 스펙에 따라 다릅니다.</li><li>용접 조건 (전류 세기) 등을 용접기에서 수동으로 조작할 경우, 이 세팅은 하지 않아도 됩니다.</li></ul><h4 id="_8-용접-전압-특성-그래프-설정" tabindex="-1">⑧ 용접 전압 특성 그래프 설정 <a class="header-anchor" href="#_8-용접-전압-특성-그래프-설정" aria-label="Permalink to &quot;⑧ 용접 전압 특성 그래프 설정&quot;">​</a></h4><ul><li>로봇 제어박스의 아날로그 출력은 0~ 10V 레벨입니다. 사용자가 원하는 용접 전압을 입력했을 때 이를 아날로그 출력 몇 볼트로 출력할지 매핑하기 위한 기능입니다.</li><li>이곳에 입력되는 값은 용접기의 특성 및 스펙에 따라 다릅니다.</li><li>용접 조건 (전류 세기) 등을 용접기에서 수동으로 조작할 경우, 이 세팅은 하지 않아도 됩니다.</li></ul><h4 id="_9-사용자-입력-도우미" tabindex="-1">⑨ 사용자 입력 도우미 <a class="header-anchor" href="#_9-사용자-입력-도우미" aria-label="Permalink to &quot;⑨ 사용자 입력 도우미&quot;">​</a></h4><ul><li><p>티칭 중 용접 기능 사용시, 용접 기능 UI에 기본 값을 넣기 위한 설정입니다.<br> 예를 들어, 아래와 같이 로봇과 용접기가 결선되어 있다고 하면, 설정은 아래와 같습니다.</p><p><img src="'+r+'" alt="missing"><img src="'+o+'" alt="missing"></p></li><li><p>위의 예시에서는 용접 전류 350 A에서 10V를 출력한다고 설정하였습니다.</p></li><li><p>예를 들어, 사용자가 용접을 200 A로 설정 시, 로봇의 아날로그 출력에서는 약 5.7V가 나가게 됩니다. (10V x 200 / 350 = 5.7V)</p></li></ul><h3 id="_2-간단-사용-예" tabindex="-1">2. 간단 사용 예 <a class="header-anchor" href="#_2-간단-사용-예" aria-label="Permalink to &quot;2. 간단 사용 예&quot;">​</a></h3><p>용접기에 관한 기본 세팅을 1장과 같이 설정 후, 간단한 직선 용접 예시를 알아보겠습니다. 아래의 그림과 같이 간단한 동작을 작성하였습니다.</p><ul><li>시작 지점에서 {500, 100, 0} 지점까지 Move J를 이용하여 동작</li><li>이후, {500, 400, 0}까지 Move L을 이용하여 직선 동작</li><li>마지막으로 시작 자세로 Move J를 이용하여 회귀</li></ul><p><img src="'+s+'" alt="missing"></p><p>위와 같이 프로그램을 작성하면, 로봇의 TCP 궤적은 아래와 같이 움직일 것 입니다.</p><p><img src="'+n+'" alt="missing"></p><p>위의 프로그램에서 용접 구간 (직선 구간) 앞 뒤에 용접 on/off 명령어를 아래와 같이 넣습니다.</p><p><img src="'+_+'" alt="missing"></p><p>이때, 용접 시작 (Arc On) 명령어 설정은 아래와 같이 설정 하였습니다.</p><p><img src="'+c+'" alt="missing"></p><p>이때, 결과는 아래와 같습니다.</p><p><img src="'+h+'" alt="missing"></p><ol><li>직선 용접 구간 (Move L) 직전에 Arc On 명령이 들어갔기 때문에, 직선 동작 직전에 용접이 시작됩니다.</li><li>직선 용접 구간 (Move L) 직후에 Arc Off 명령이 들어갔기 때문에, 직선 동작 직후에 용접이 종료됩니다.</li><li>따라서 위의 그림 상, 붉은 점선 구간에서 용접이 수행됩니다.</li></ol><ul><li>용접 구간에서, 용접 전류를 100A로 설정하였기 때문에, 아날로그 출력에서는 2.85V (10V * 100 / 350)가 출력 됩니다.</li><li>Arc On 설정에서 로봇 속도를 10mm/s로 설정하였기 때문에, 용접 구간에서 로봇의 TCP는 10mm/s의 속도로 움직입니다.</li></ul>',36),p=[d];function m(b,f,q,A,g,P){return l(),i("div",null,p)}const O=a(u,[["render",m]]);export{x as __pageData,O as default};
