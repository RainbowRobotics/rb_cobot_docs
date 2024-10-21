import{_ as t,c as e,o as c,U as d,yt as i,yu as v,u2 as r,u3 as l,u4 as s,u5 as o,yv as p,yw as n,yx as m,yy as b,yz as h,yA as _,yB as g,tg as u,th as P,yC as a,yD as y,yE as f,yF as k,yG as L,yH as T,yI as q,yJ as S,yK as I,yL as B,yM as x,yN as J,yO as C,yP as R,yQ as M,yR as U,yS as w,yT as z,yU as A,yV as G,yW as D,yX as V,yY as F,yZ as N,y_ as W,y$ as E,z0 as O,z1 as Z,z2 as $,z3 as j,z4 as X,z5 as Y,z6 as H,z7 as K,z8 as Q,z9 as a4,za as t4,zb as e4}from"./chunks/framework._bMY95IQ.js";const b4=JSON.parse('{"title":"티칭 하기(사용자 프로그램 만들기)","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"ko/manual/programming_guide/teaching_programming.md","filePath":"ko/manual/programming_guide/teaching_programming.md"}'),c4={name:"ko/manual/programming_guide/teaching_programming.md"},d4=d('<h1 id="티칭-하기-사용자-프로그램-만들기" tabindex="-1" data-v-e492441c>티칭 하기(사용자 프로그램 만들기) <a class="header-anchor" href="#티칭-하기-사용자-프로그램-만들기" aria-label="Permalink to &quot;티칭 하기(사용자 프로그램 만들기)&quot;" data-v-e492441c>​</a></h1><h3 id="_1-로봇-움직이기" tabindex="-1" data-v-e492441c>1. 로봇 움직이기 <a class="header-anchor" href="#_1-로봇-움직이기" aria-label="Permalink to &quot;1. 로봇 움직이기&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c>제공하는 로봇 구동 방식은 다음의 2가지입니다.</p><ul data-v-e492441c><li data-v-e492441c>직접 교시: 로봇 팔에 있는 버튼을 눌러서 사용하는 직접 교시 기능.</li><li data-v-e492441c>조그 사용: UI 상의 조그를 사용하여 로봇 구동.</li></ul><h3 id="_2-직접-교시-direct-teaching-gravity-compensation" tabindex="-1" data-v-e492441c>2. 직접 교시(Direct-teaching / gravity compensation) <a class="header-anchor" href="#_2-직접-교시-direct-teaching-gravity-compensation" aria-label="Permalink to &quot;2. 직접 교시(Direct-teaching / gravity compensation)&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c><img src="'+i+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>로봇의 말단 툴 플랜지에는 직접 교시를 위한 실리콘 버튼이 있습니다. 직접 교시를 누르고 있는 동안, 사용자는 로봇의 자세를 자유롭게 변형할 수 있습니다.</p><div class="warning custom-block" data-v-e492441c><p class="custom-block-title" data-v-e492441c>주의</p><ol data-v-e492441c><li data-v-e492441c> 직접 교시 기능은 로봇이 활성화되어 있을 때만 사용 가능합니다. </li><li data-v-e492441c> 툴 플랜지에 부하(load)가 장착되어 있을 경우, 부하 세팅을 사전에 하지 않는다면, 직접 교시 기능이 오작동 할 수 있습니다. 부하 세팅은 Setup-Tool 화면에서 합니다. </li><li data-v-e492441c> 직접 교시 기능의 관절 별 감도 설정은 Setup-Interface에서 조절 가능합니다. </li><li data-v-e492441c> 로봇이 완전히 정지되어 있는지 확인 후 직접 교시 기능을 사용하십시오. </li></ol></div><h3 id="_3-조그-사용" tabindex="-1" data-v-e492441c>3. 조그 사용 <a class="header-anchor" href="#_3-조그-사용" aria-label="Permalink to &quot;3. 조그 사용&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c><img src="'+v+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>조그는 위의 그림과 같이 4가지 모드가 있습니다.</p><div class="center-align" data-v-e492441c><table data-v-e492441c><tr data-v-e492441c><th style="display:flex;align-items:center;white-space:pre;" data-v-e492441c> Mode 1 <img src="'+r+'" data-v-e492441c></th><td data-v-e492441c> 직교 좌표계 움직임 (베이스 좌표계 기준) </td></tr><tr data-v-e492441c><th style="display:flex;align-items:center;white-space:pre;" data-v-e492441c> Mode 2 <img src="'+l+'" data-v-e492441c></th><td data-v-e492441c> 직교 좌표계 움직임 (로컬 툴 좌표계 기준) </td></tr><tr data-v-e492441c><th style="display:flex;align-items:center;white-space:pre;" data-v-e492441c> Mode 3 <img src="'+s+'" data-v-e492441c></th><td data-v-e492441c> 직교 좌표계 움직임(사용자 지정 좌표계 기준) </td></tr><tr data-v-e492441c><th style="display:flex;align-items:center;white-space:pre;" data-v-e492441c> Mode 4 <img src="'+o+'" data-v-e492441c></th><td data-v-e492441c> 개별 관절 움직임 </td></tr></table></div><p data-v-e492441c><img src="'+p+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>조그의 운영 방식은 2가지입니다.</p><ul data-v-e492441c><li data-v-e492441c>Smooth: + - 버튼을 누르는 동안 연속적으로 움직입니다.</li><li data-v-e492441c>Tick: 지정된 거리나 각 만큼 단계별로 움직입니다.</li></ul><div class="tip custom-block" data-v-e492441c><p class="custom-block-title" data-v-e492441c>TIP</p><ul data-v-e492441c><li data-v-e492441c>위의 두 가지 운영 방식에 대한 선택은 Make 화면 우측 상단의 토글 버튼을 사용하여 선택 가능합니다.<br data-v-e492441c></li><li data-v-e492441c>Tick을 선택하고 조그 사용시, 움직이는 거리나 각도는 Setup-Interface에서 설정 가능합니다.<br data-v-e492441c> 또는 아래와 같이 실시간 팝업 창에서 값을 지정 가능합니다.</li></ul><p data-v-e492441c><img src="'+n+'" alt="missing" data-v-e492441c></p></div><div class="warning custom-block" data-v-e492441c><p class="custom-block-title" data-v-e492441c>WARNING</p><ol data-v-e492441c><li data-v-e492441c>로봇을 조그를 사용해 움직일 때는 주변에 장애물이나 사람이 없는지 확인 후 작동하시기 바랍니다.</li><li data-v-e492441c>Setup-Interface에서 안전 슬라이더 기능을 활용하여 좀 더 안전한 환경에서 조그를 운영하는 것을 추천합니다(공장 출하 시 안전 슬라이더 기능은 활성화되어 있습니다).</li></ol></div><div class="center-align" data-v-e492441c><img src="'+m+'" data-v-e492441c><br data-v-e492441c><label data-v-e492441c>[ 조그 타입 1: 베이스 좌표계 기준 TCP 조그 ]</label><br data-v-e492441c><img src="'+b+'" data-v-e492441c><br data-v-e492441c><label data-v-e492441c>[ 조그 타입 2: 로컬/툴 좌표계 기준 TCP 조그 ]</label><br data-v-e492441c><img src="'+h+'" data-v-e492441c><br data-v-e492441c><label data-v-e492441c>[ 조그 타입 3: 사용자 좌표계 기준 TCP 조그 ]</label><br data-v-e492441c><img src="'+_+'" data-v-e492441c><br data-v-e492441c><label data-v-e492441c>[ 조그 타입 4: 개별 관절 좌표계 기준 조그 ]</label></div><h3 id="_4-리얼-로봇-모드와-시뮬레이션-모드" tabindex="-1" data-v-e492441c>4. 리얼 로봇 모드와 시뮬레이션 모드 <a class="header-anchor" href="#_4-리얼-로봇-모드와-시뮬레이션-모드" aria-label="Permalink to &quot;4. 리얼 로봇 모드와 시뮬레이션 모드&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c>로봇 움직임을 테스트 또는 구동할 때, 2가지의 모드가 제공됩니다.</p><p data-v-e492441c><img src="'+g+'" alt="missing" data-v-e492441c></p><ul data-v-e492441c><li data-v-e492441c>시뮬레이션 (Simulation) 모드:<br data-v-e492441c> 실제 로봇을 움직이지 않고, UI 화면 상에서 가상으로 로봇 팔을 구동 시켜보는 모드입니다.<br data-v-e492441c> 새로운 동작을 티칭 하였을 때는 안전상, 시뮬레이션 모드를 먼저 실행해보는 것을 권장합니다.</li><li data-v-e492441c>리얼 로봇 (Real Robot) 모드:<br data-v-e492441c> UI 화면 상의 로봇은 물론, 실제 로봇을 움직이는 모드입니다</li></ul><div class="warning custom-block" data-v-e492441c><p class="custom-block-title" data-v-e492441c>주의</p><ol data-v-e492441c><li data-v-e492441c> 리얼 모드로 로봇 구동은, 로봇이 활성화되어 있을 때만 사용 가능합니다. </li><li data-v-e492441c> 시뮬레이션 모드는 로봇을 활성화하지 않고도, 컨트롤 박스와 태블릿 UI가 연결만 되어 있다면 사용 가능합니다. </li><li data-v-e492441c> 리얼 모드로 로봇 구동 시, 실제 로봇이 움직입니다. 따라서 주변 환경이 안전한지 확인하는 과정을 거친 후 사용하세요. </li></ol></div><h3 id="_5-로봇-동작-티칭하기" tabindex="-1" data-v-e492441c>5. 로봇 동작 티칭하기 <a class="header-anchor" href="#_5-로봇-동작-티칭하기" aria-label="Permalink to &quot;5. 로봇 동작 티칭하기&quot;" data-v-e492441c>​</a></h3><p style="display:flex;align-items:center;white-space:pre;" data-v-e492441c> 가장 기본적인 로봇 동작 티칭은 <img src="'+u+'" width="50" data-v-e492441c> <b data-v-e492441c> 동작</b> 기능과 <img src="'+P+'" width="50" data-v-e492441c> <b data-v-e492441c> 포인트</b> 기능이 담당합니다.</p><p data-v-e492441c>두 아이콘 모두 <strong data-v-e492441c>Make</strong> 화면 상단 바에 위치합니다.</p><ul data-v-e492441c><li data-v-e492441c><strong data-v-e492441c>동작</strong> 기능: 로봇 팔의 동작 속성을 정의합니다.</li><li data-v-e492441c><strong data-v-e492441c>포인트</strong> 기능: <strong data-v-e492441c>동작</strong>의 하위 항목으로써, 움직임을 통해 도착할 자세 또는 위치를 설정하는 부분입니다.</li></ul><p data-v-e492441c>이 두 기능을 사용하여 프로그램을 구성하면 전체적인 구성은 아래와 같이 됩니다.</p><p data-v-e492441c><img src="'+a+'" alt="missing" data-v-e492441c></p><h3 id="_6-동작-기능" tabindex="-1" data-v-e492441c>6. 동작 기능 <a class="header-anchor" href="#_6-동작-기능" aria-label="Permalink to &quot;6. 동작 기능&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c><img src="'+y+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>동작 기능은 로봇 팔을 동작 속성, 동작 옵션을 정하는 기능입니다.<br data-v-e492441c> 동작 기능은 하위에 <strong data-v-e492441c>조인트 움직임</strong> 계열과 <strong data-v-e492441c>리니어 움직임</strong> 계열로 구성됩니다.</p><h4 id="_6-1-조인트-움직임-계열-joint-movement-type" tabindex="-1" data-v-e492441c>6.1 조인트 움직임 계열(Joint Movement Type) <a class="header-anchor" href="#_6-1-조인트-움직임-계열-joint-movement-type" aria-label="Permalink to &quot;6.1 조인트 움직임 계열(Joint Movement Type)&quot;" data-v-e492441c>​</a></h4><p data-v-e492441c>조인트 움직임 계열은, 로봇의 말단 (TCP) 움직임과는 별개로 각 관절의 각도를 목표 값으로 움직이는 동작 속성입니다. 하위 요소로 동작J와 동작JB가 있습니다.</p><ul data-v-e492441c><li data-v-e492441c><p data-v-e492441c>동작J (Move Joint):<br data-v-e492441c> 각 관절의 각도를 목표 포인트의 값으로 변경시킵니다.<br data-v-e492441c> 구동시간이 가장 많이 소요되는 관절에 맞추어 다른 관절의 구동속도가 조정됩니다.</p></li><li data-v-e492441c><p data-v-e492441c>동작JB (Move Joint Blend):<br data-v-e492441c> 시작 포인트를 출발하여 각 포인트 사이를 정지없이 동작 J 방식으로 부드럽게 이동합니다.<br data-v-e492441c> 동작JB에는 시간 기반 블랜드와 방향 기반 블랜드, 총 2가지 모드가 있습니다.</p></li></ul><h4 id="_6-2-리니어-움직임-계열-linear-movement-type" tabindex="-1" data-v-e492441c>6.2 리니어 움직임 계열(Linear Movement Type) <a class="header-anchor" href="#_6-2-리니어-움직임-계열-linear-movement-type" aria-label="Permalink to &quot;6.2 리니어 움직임 계열(Linear Movement Type)&quot;" data-v-e492441c>​</a></h4><p data-v-e492441c>리니어 움직임 계열은, 로봇 팔의 말단 (TCP)을 직교 좌표계 기준으로 움직이는 동작 속성입니다.<br data-v-e492441c> 따라서 움직임의 목표 값으로 직교 좌표계 값을 사용합니다.<br data-v-e492441c> 하위 요소로 동작L, 동작PB(구 동작 LB), 동작JL, 동작ITPL 그리고 동작 Pro가 있습니다.</p><ul data-v-e492441c><li data-v-e492441c><p data-v-e492441c>동작L (Move Linear):<br data-v-e492441c> TCP가 시작 포인트(현재위치)로부터 목표 포인트(설정위치)까지 직선으로 이동하는 방식입니다.<br data-v-e492441c> 툴의 orientation은 가장 적은 이동각도를 가지도록 회전합니다.<br data-v-e492441c> TCP의 이동과 orientation의 변화 중 많은 시간이 소요되는 작업에 맞추어 다른 작업의 구동속도가 조정됩니다.</p></li><li data-v-e492441c><p data-v-e492441c>동작PB (Move Point Blend, 구 동작 LB):<br data-v-e492441c> 시작 포인트(현재위치)를 출발하여 각 포인트 사이를 정지없이 동작 L 방식으로 부드럽게 이동합니다.<br data-v-e492441c> 각 포인트마다 블랜드 거리를 지정하여 전후경로를 해당 거리만큼 잘라내고 원호로 이은 경로를 따라 이동합니다.<br data-v-e492441c> 지정된 거리 값이 전후경로의 길이의 절반보다 클 경우 두 경로 중 짧은 경로길이의 절반길이로 자동으로 수정됩니다.<br data-v-e492441c> 각 중간 점 (via point)마다, 블랜드 정도를 거리 단위로 설정할 수도 있고, 백분율 단위(%)로도 설정할 수 있습니다. 더불어, 각 중간 점 마다 속도를 별도로 설정할 수 있습니다.</p><p data-v-e492441c>동작 PB에는 세가지 모드가 있습니다.<br data-v-e492441c> Constant 모드는 툴의 orientation을 시작 포인트(현재위치)의 값을 유지하며 이동하는 모드이고, Intended모드는 각 포인트에 저장된 orientation을 따라 변화하는 모드입니다.<br data-v-e492441c> 목표 지점 이동시 X, Y, Z값과 orientation의 위치 변화율이 일정한 Intended모드와 다르게 smooth 모드는 시작과 끝지점에 가까울수록 orientation의 위치 변화율이 낮습니다.</p></li><li data-v-e492441c><p data-v-e492441c>동작JL (Move J with Linear Input):<br data-v-e492441c> 동작L과 같이 목표 지점의 직교 좌표계 값을 입력으로 사용합니다. 다만, 해당 지점까지 직선으로 가지 않고, 동작J의 방식을 활용하여 갑니다.<br data-v-e492441c> 직교 좌표계 입력이 들어오면, 이를 역기구학을 통하여 목표 관절 각도로 변환시키고, 이를 다시 동작J에 입력하는 방식을 사용합니다.</p></li><li data-v-e492441c><p data-v-e492441c>동작ITPL (Move Interpolation):<br data-v-e492441c> 시작포인트(현재위치)를 출발하여 각 포인트 사이를 정지없이 동작 L 방식으로 부드럽게 이동합니다.<br data-v-e492441c> 동작PB는 각 경유지를 지나지 않고 블랜드되어 이동하지만, MoveITPL은 각 경유지를 정확히 지나는 궤적으로 움직입니다. 따라서 별도의 블랜드 세팅이 존재하지 않습니다.<br data-v-e492441c></p><p data-v-e492441c>동작ITPL에는 6 가지 모드가 있습니다.<br data-v-e492441c> Constant 모드는 툴의 orientation을 시작포인트(현재위치)의 값을 유지하며 이동하는 모드이고, Intended모드는 각 포인트에 저장된 orientation을 따라 변화하는 모드입니다.<br data-v-e492441c> 목표 지점 이동 시 X, Y, Z 값과 orientation의 위치 변화율이 일정한 Intended모드와 다르게 smooth모드는 시작과 끝지점에 가까울수록 orientation의 위치 변화율이 낮습니다.<br data-v-e492441c> 각 중간 경유점 마다 속도를 별도로 설정할 수 있습니다.</p></li><li data-v-e492441c><p data-v-e492441c>동작Pro (Move Process):<br data-v-e492441c> 시작 포인트(현재위치)를 출발하여 각 포인트 사이를 정지없이 동작 L 방식으로 부드럽게 이동합니다.<br data-v-e492441c> 입력 값으로 직교 좌표계 값(X,Y,Z,etc)를 사용하며, 중간 경유지의 블랜드 반경 또는 블랜드율 설정이 가능합니다. 중간 경유점 마다 속도를 별도로 설정 가능합니다.<br data-v-e492441c> 일반 포인트와 코너 포인트를 사용하여 각 경유지를 정확히 지나는 궤적으로 부드럽게 움직입니다.<br data-v-e492441c> 동작 Pro 에도 동작 PB와 마찬가지로 Constant, Intended 그리고 Smooth 세 가지 모드가 있습니다.</p></li></ul><h3 id="_7-동작j와-동작l의-차이" tabindex="-1" data-v-e492441c>7. 동작J와 동작L의 차이 <a class="header-anchor" href="#_7-동작j와-동작l의-차이" aria-label="Permalink to &quot;7. 동작J와 동작L의 차이&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c><img src="'+f+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>동작J는 말단(TCP)의 움직임 궤적은 고려하지 않고, 출발 지점의 관절 각도와 목표 지점의 관절 각도 정보만을 이용한 동작 모드입니다.<br data-v-e492441c> 구동시간이 가장 많이 소요되는 관절에 맞추어 다른 관절의 구동속도가 조정됩니다. 따라서 목표 지점 값으로 6개 관절의 관절 각도를 입력 받습니다.</p><p data-v-e492441c>동작L은 말단(TCP)의 궤적을 출발 지점에서부터 목표지점까지 선형으로 움직이도록 역기구학(inverse kinematics)을 이용하여 움직이는 동작 모드입니다.<br data-v-e492441c> 따라서 목표 지점 값으로 직교 좌표계 값 6개(x, y, z, Rx, Ry, Rz)를 입력 받습니다.</p><h3 id="_8-동작l-동작pb-동작itpl의-차이" tabindex="-1" data-v-e492441c>8. 동작L, 동작PB, 동작ITPL의 차이 <a class="header-anchor" href="#_8-동작l-동작pb-동작itpl의-차이" aria-label="Permalink to &quot;8. 동작L, 동작PB, 동작ITPL의 차이&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c><img src="'+k+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>동작L의 경우 시작점과 도착점 사이를 일직선으로 선형적인 경로로 이동합니다.<br data-v-e492441c> 도착점을 정확하게 도달하지만 도착점에서는 일시적으로 움직임 속도가 0이 됩니다.</p><p data-v-e492441c>동작PB의 경우 도착점을 제외한 나머지 점들은 경유지로 이용하며, 지정된 왜곡률(blend rate)나 왜곡거리(blend distance)에 따라 경유지를 정확히 지나지는 않지만, 멈추지 않고 지나갑니다.</p><p data-v-e492441c>동작ITPL의 경우 도착점을 제외한 나머지 점들은 경유지로 이동하며, 경유지를 정확히 통과하는 궤적을 생성합니다.<br data-v-e492441c> 생성된 궤적을 멈추지 않고 지나가며, 경유지 마다 별도의 속도 세팅이 가능합니다.</p><div class="warning custom-block" data-v-e492441c><p class="custom-block-title" data-v-e492441c>주의</p><ol data-v-e492441c><li data-v-e492441c> 동작L, 동작PB(구 동작 LB), 동작JL, 동작ITPL, 동작Pro 다섯가지 동작 모드는 역기구학 연산을 통해 로봇을 움직입니다.<br data-v-e492441c> 따라서, 역기구학 연산이 불가능한 특이점 영역 (Singular position)에서는 움직임이 제한될 수 있습니다. </li><li data-v-e492441c> 로봇의 데드존 영역(Dead-Zone) 또는 그 근처에서는 특정 관절이 예상보다 빠르게 움직이거나 움직임이 제한될 수 있습니다.<br data-v-e492441c> 데드존 영역에 관한 정보는 1.7장에 서술되어 있습니다. </li></ol></div><h3 id="_9-동작의-동작-속성-변경" tabindex="-1" data-v-e492441c>9. 동작의 동작 속성 변경 <a class="header-anchor" href="#_9-동작의-동작-속성-변경" aria-label="Permalink to &quot;9. 동작의 동작 속성 변경&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c>최초로 동작 기능을 프로그램에 넣게 되면 아래의 그림과 같이 동작 기능이 프로그램 tree 안에 생성이 됩니다. 최초 생성시 기본으로 동작J 옵션으로 생성됩니다.</p><p data-v-e492441c><img src="'+L+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>위에서 설명된 동작의 다른 옵션으로 선택하기 위해서는, 생성된 동작J 부분을 더블 클릭하면 아래와 같은 팝업창이 뜹니다.</p><p data-v-e492441c><img src="'+T+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>원하는 동작 속성/옵션을 선택하고, 설정을 하면 동작의 동작 속성이 변경됩니다.<br data-v-e492441c> 위의 기능들을 활용하여 동작을 티칭 시 프로그램 예시는 아래와 같습니다.</p><p data-v-e492441c><img src="'+q+'" alt="missing" data-v-e492441c></p><table data-v-e492441c><tr data-v-e492441c><th data-v-e492441c>동작J, 동작JB</th></tr><tr data-v-e492441c><td data-v-e492441c> 관절을 기준으로 움직이는 동작 속성이기 때문에 하위 항목인 Point에는 이동하고자 하는 목표 자세의 관절 각도 값이 설정됩니다.<br data-v-e492441c> ※ 로봇 암은 6개의 관절로 구성되어 있기 때문에, 동작J, JB의 하위 Point 에는 6개 관절 값에 관한 정보가 설정됩니다. </td></tr><tr data-v-e492441c><th data-v-e492441c>동작L, 동작PB(구 동작 LB), 동작JL, 동작ITPL, 동작 Pro</th></tr><tr data-v-e492441c><td data-v-e492441c> 직교 좌표계 값을 기준으로 또는 목표로 움직이기 때문에 하위 항목인 Point에는 이동하고자, 또는 지나가고자 하는 목표 지점의 직교 좌표계 값이 설정됩니다.<br data-v-e492441c> ※ 직교좌표계는 6개의 값(x, y, z, Rx, Ry, Rz)로 구성되어 있기 때문에, 동작L, PB, JL, ITPL, Pro의 하위 포인트에는 6개의 직교 좌표계 값에 관한 정보가 설정됩니다. </td></tr></table><h3 id="_10-포인트-기능" tabindex="-1" data-v-e492441c>10. 포인트 기능 <a class="header-anchor" href="#_10-포인트-기능" aria-label="Permalink to &quot;10. 포인트 기능&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c><img src="'+a+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>앞서 동작 기능에서 설명하였듯, 포인트 기능은 동작 기능의 하위 기능입니다.<br data-v-e492441c> 동작 기능이 동작의 속성을 지정하고, 포인트 기능은 각 속성에 따라 로봇 팔을 움직일 목표 지점 정보를 설정하는 기능을 담당합니다.</p><p data-v-e492441c>포인트 기능에서는 동작 기능에서 설정한 동작 속성에 따라 설정하는 목표 값이 달라지게 됩니다.</p><ul data-v-e492441c><li data-v-e492441c><p data-v-e492441c>조인트 동작 계열(동작J, 동작JB)의 하위 포인트:<br data-v-e492441c> 이동하고자 하는 목표 자세의 6개 관절 각도 값이 설정</p></li><li data-v-e492441c><p data-v-e492441c>리니어 동작 계열(동작L, 동작PB(구 동작 LB), 동작JL, 동작ITPL, 동작Pro)의 하위 포인트:<br data-v-e492441c> 이동하고자, 또는 지나가고자 하는 목표 지점의 직교 좌표계 값이 설정</p></li></ul><p data-v-e492441c>포인트 기능의 설정 팝업 창의 기본 구성은 아래와 같습니다.</p><p data-v-e492441c><img src="'+S+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>각 영역에 대한 설명은 아래의 표와 같습니다.</p><table data-v-e492441c><tr data-v-e492441c><th data-v-e492441c></th><th data-v-e492441c>설명</th></tr><tr data-v-e492441c><th data-v-e492441c>①</th><td data-v-e492441c> 포인트의 이름을 설정할 수 있습니다.<br data-v-e492441c> 이름 설정은 필수 입력은 아닙니다.<br data-v-e492441c> 이름을 설정하면, 이후에 해당 포인트의 위치 정보를 변수처럼 사용 가능합니다. </td></tr><tr data-v-e492441c><th data-v-e492441c>②</th><td data-v-e492441c> 포인트의 설정 타입을 고를 수 있는 옵션입니다.<br data-v-e492441c> 동작 J속성의 하위 포인트는 세가지 설정 옵션이 있고,<br data-v-e492441c> 동작 L속성의 하위 포인트는 네가지 설정 옵션이 존재합니다.<br data-v-e492441c> 포인트 최초 생성시 기본 타입은 ‘Absolute’ 입니다. </td></tr><tr data-v-e492441c><th data-v-e492441c>③</th><td data-v-e492441c>목표 지점까지 움직일 속도와 가속도를 설정합니다.</td></tr><tr data-v-e492441c><th data-v-e492441c>④</th><td data-v-e492441c> 현재 로봇 자세/각도에 관한 정보를 획득하여, 정보로 가져옵니다.<br data-v-e492441c> 조그 또는 직접 교시를 통해 로봇을 윈하는 지점/자세로 이동 후, 가져오기(Get)을 누르면 해당 지점의 정보가 포인트 정보에 반영됩니다.<br data-v-e492441c> 새롭게 반영된 정보를 저장하려면 적용(Set) 버튼 (8번)을 눌러야 합니다.<br data-v-e492441c> 포인트 타입(2번)에 따라 이 버튼이 지원되는 타입이 있고, 지원되지 않는 타입도 존재합니다. </td></tr><tr data-v-e492441c><th data-v-e492441c>⑤</th><td data-v-e492441c> 지정된 자세로 이동하는 기능입니다.<br data-v-e492441c> 버튼을 누르고 있는 동안, 저장된 자세로 이동합니다.<br data-v-e492441c> 이동은 Joint movement 타입으로 이동합니다. 이동이 완료되면, 이동이 완료되었음을 알려주는 팝업 메시지가 뜹니다.<br data-v-e492441c> 포인트 타입(2번)에 따라 이 버튼이 지원되는 타입이 있고, 지원되지 않는 타입도 존재합니다. </td></tr><tr data-v-e492441c><th data-v-e492441c>⑥</th><td data-v-e492441c> 지정된 자세로 이동하는 기능입니다.<br data-v-e492441c> 버튼을 누르고 있는 동안, 저장된 자세로 이동합니다.<br data-v-e492441c> 이동은 Linear Movement 타입으로 이동합니다. 이동이 완료되면, 이동이 완료되었음을 알려주는 팝업 메시지가 뜹니다.<br data-v-e492441c> 포인트 타입(2번)에 따라 이 버튼이 지원되는 타입이 있고, 지원되지 않는 타입도 존재합니다. </td></tr><tr data-v-e492441c><th data-v-e492441c>⑦</th><td data-v-e492441c> 동작의 탈출 조건(Finish at에 입력)과 탈출 시간(Stopping time에 입력)을 지정합니다. 필수 입력 항목이 아닙니다.<br data-v-e492441c> 이 항목을 입력을 하지 않을 경우, 동작은 정상적으로 목표 지점/자세에 도달 후 종료됩니다.<br data-v-e492441c> 이 항목에 특정 조건과 탈출 시간을 설정할 경우, 목표 지점/자세에 도달하기 전이라도,<br data-v-e492441c> 탈출 조건을 만족하게 되면 탈출 시간에 맞추어 동작을 멈추게 되고 다음 동작을 이어갑니다.<br data-v-e492441c> 탈출 시간의 최소값은 0초입니다. </td></tr><tr data-v-e492441c><th data-v-e492441c>⑧</th><td data-v-e492441c>변경된 설정을 저장합니다.</td></tr><tr data-v-e492441c><th data-v-e492441c>⑨</th><td data-v-e492441c>설정 창을 닫습니다. 변경된 설정이 있다면 Set 버튼(8번)을 눌러야 합니다.</td></tr></table><p data-v-e492441c>※ 위의 표 4번 항목 가져오기(Get)에서 제공되는 기능을 도식화 하면 아래와 같습니다.</p><ol data-v-e492441c><li data-v-e492441c><p data-v-e492441c>조그 / 직접 교시 기능을 활용해 원하는 자세/위치로 이동</p><p data-v-e492441c><img src="'+I+'" alt="missing" data-v-e492441c></p></li><li data-v-e492441c><p data-v-e492441c>가져오기(Get) 버튼을 눌러서 현재 자세/위치 정보 가져오기</p><p data-v-e492441c><img src="'+B+'" alt="missing" data-v-e492441c></p></li><li data-v-e492441c><p data-v-e492441c>반영 확인 후 저장</p><p data-v-e492441c><img src="'+x+'" alt="missing" data-v-e492441c></p></li></ol><p data-v-e492441c>※ 위의 표 7번 항목 Finish at/Stopping time에서 제공되는 기능을 도식화 하면 아래와 같습니다.</p><ol data-v-e492441c><li data-v-e492441c><p data-v-e492441c>Finish at 기능을 사용하지 않을 경우(빈 칸으로 남겨둘 경우)<br data-v-e492441c> 원래 설정된 목표 지점까지 도착 후 동작 종료, 다음 명령 실행</p><p data-v-e492441c><img src="'+J+'" alt="missing" data-v-e492441c></p></li><li data-v-e492441c><p data-v-e492441c>Finish at 기능을 사용할 경우(특정 조건식을 기입할 경우)<br data-v-e492441c> 목표점까지 도착하지 못해도, Finish at조건 발생시 동작종료, 다음 명령 실행<br data-v-e492441c> 동작 중 조건이 발생하지 않는다면, 정상적으로 목표점 도착 후 다음 명령 실행</p><p data-v-e492441c><img src="'+C+'" alt="missing" data-v-e492441c></p></li></ol><h4 id="_10-1-동작-타입별-설정-옵션" tabindex="-1" data-v-e492441c>10.1 동작 타입별 설정 옵션 <a class="header-anchor" href="#_10-1-동작-타입별-설정-옵션" aria-label="Permalink to &quot;10.1 동작 타입별 설정 옵션&quot;" data-v-e492441c>​</a></h4><p data-v-e492441c>동작의 각 타입에 따라 아래와 같은 설정 옵션이 존재합니다.</p><table data-v-e492441c><tr data-v-e492441c><th colspan="3" data-v-e492441c>조인트 동작 계열 하위 포인트</th></tr><tr data-v-e492441c><th rowspan="3" data-v-e492441c>옵션</th><th data-v-e492441c>Absolute</th><td data-v-e492441c> 목표 관절 각도 값으로, 고정된 값을 사용합니다.<br data-v-e492441c> 조그/직접 교시로 로봇을 원하는 자세로 만들고, Get (가져오기) 기능을 통해<br data-v-e492441c> 관절 각도 값을 설정할 수 있습니다. </td></tr><tr data-v-e492441c><th data-v-e492441c>Variable</th><td data-v-e492441c> 사용자가 자유롭게 목표 관절 각도를 입력할 수 있습니다.<br data-v-e492441c> 조그/직접 교시로 로봇을 원하는 자세로 만들고, Get (가져오기) 기능을 통해<br data-v-e492441c> 관절 각도 값을 설정할 수 있습니다.<br data-v-e492441c> 변수 및 수학 연산을 활용하여 입력 가능합니다. </td></tr><tr data-v-e492441c><th data-v-e492441c>Relative</th><td data-v-e492441c> 이전 각도 자세에서 변화를 주고 싶은 각도 변화량을 설정합니다.<br data-v-e492441c> 모든 관절 변화량에 0을 넣는다면, 이전 자세와 동일한 각도 자세로 움직이라는<br data-v-e492441c> 명령이 됩니다.<br data-v-e492441c> 변수 및 수학 연산을 활용하여 입력 가능합니다. </td></tr></table><table data-v-e492441c><tr data-v-e492441c><th colspan="3" data-v-e492441c>리니어 동작 계열 하위 포인트</th></tr><tr data-v-e492441c><th rowspan="4" data-v-e492441c>옵션</th><th data-v-e492441c>Absolute</th><td data-v-e492441c> 목표 직교 좌표 값으로, 고정된 값을 사용합니다.<br data-v-e492441c> 조그/직접 교시로 로봇의 TCP를 이동 후, Get(가져오기) 기능을 통해<br data-v-e492441c> 직교 좌표 값을 설정할 수 있습니다.<br data-v-e492441c> 설정한 직교 좌표 값의 기준 좌표계는 로봇 팔의 Base 좌표계 입니다<br data-v-e492441c>(제조사 설정 기본 좌표계). </td></tr><tr data-v-e492441c><th data-v-e492441c>Variable</th><td data-v-e492441c> 사용자가 자유롭게 목표 직교 좌표 값을 입력할 수 있습니다.<br data-v-e492441c> 설정한 직교 좌표 값의 기준 좌표계는 로봇 팔의 Base 좌표계 입니다<br data-v-e492441c> (제조사 설정 기본 좌표계).<br data-v-e492441c> 조그/직접 교시로 로봇의 TCP를 이동 후, Get(가져오기) 기능을 통해<br data-v-e492441c> 직교 좌표 값을 설정할 수 있습니다.<br data-v-e492441c> 변수 및 수학 연산을 활용하여 입력 가능합니다. </td></tr><tr data-v-e492441c><th data-v-e492441c>Relative</th><td data-v-e492441c> 이전 지점 또는 특정 포인트로부터 상대적인 거리/각도 (offset)를 설정하여<br data-v-e492441c> 목표지점을 지정할 수 있습니다.<br data-v-e492441c> Reference 포인트 (기준점)에서는 상대적으로 이동할 지점을 고르는 기능입니다.<br data-v-e492441c> 기본 값은 PT_LAST_TCP로써 직전 도착 지점을 나타냅니다.<br data-v-e492441c> 이외에도 임의의 point를 기준으로 할 수도 있습니다.<br data-v-e492441c> Reference Frame(기준좌표계)에서는 어떤 좌표계를 기준으로 상대이동을<br data-v-e492441c> 지정할 것인지를 정할 수 있습니다.<br data-v-e492441c> 기본 값은 Frame_Base로써 로봇 팔의 Base 좌표계를 나타냅니다.<br data-v-e492441c> 유저 좌표계나, 툴의 local 좌표계로 변경 가능합니다.<br data-v-e492441c> 변수 및 수학 연산을 활용하여 입력 가능합니다. </td></tr><tr data-v-e492441c><th data-v-e492441c>User<br data-v-e492441c>Coordinate</th><td data-v-e492441c> Variable과 비슷하지만, 유저 설정 좌표계를 기준으로 목표 지점을 설정하는<br data-v-e492441c> 기능입니다.<br data-v-e492441c> Reference Frame (기준좌표계) 설정을 통해, 기준으로 사용하고 싶은<br data-v-e492441c> 유저좌표계를 선택 가능합니다.<br data-v-e492441c> 원하는 기준 좌표계를 선택하고, Get (가져오기) 기능을 활용하면,<br data-v-e492441c> 현재 로봇의 자세/위치 정보가 선택된 좌표계 기준으로 자동 입력할 수 있습니다.<br data-v-e492441c> 예를 들어 유저좌표계 0번을 선택하고, 모든 직교 좌표 값에 0을 입력 시,<br data-v-e492441c> 유저 좌표계 원점으로 TCP가 이동합니다.<br data-v-e492441c> 변수 및 수학 연산을 활용하여 입력 가능합니다. </td></tr></table><p data-v-e492441c>각 포인트 타입에 따른 UI 구성은 아래와 같습니다.</p><h4 id="_10-2-조인트-동작-계열-ui-구성" tabindex="-1" data-v-e492441c>10.2 조인트 동작 계열 UI 구성 <a class="header-anchor" href="#_10-2-조인트-동작-계열-ui-구성" aria-label="Permalink to &quot;10.2 조인트 동작 계열 UI 구성&quot;" data-v-e492441c>​</a></h4><ul data-v-e492441c><li data-v-e492441c><p data-v-e492441c>조인트 동작 계열 - Absolute</p><p data-v-e492441c><img src="'+R+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>① Absolute 옵션입니다.<br data-v-e492441c> ② 가져오기(Get) 버튼을 통해 로봇의 자세/각도 값이 저장됩니다.</p></li><li data-v-e492441c><p data-v-e492441c>조인트 동작 계열 - Variable</p><p data-v-e492441c><img src="'+M+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>① Variable 옵션입니다.<br data-v-e492441c> ② 목표 자세에 대한 관절 각도를 사용자가 직접 입력하거나, 변수화 된 정보들을 수식으로 입력할 수 있습니다.</p></li><li data-v-e492441c><p data-v-e492441c>조인트 동작 계열 - Relative</p><p data-v-e492441c><img src="'+U+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>① Relative 옵션입니다.<br data-v-e492441c> ② 이전 관절 각도에서 각 관절을 얼마나 상대적으로 움직일지 각도 단위로 입력합니다. 변수화 된 정보나 수식을 입력할 수 있습니다.</p></li></ul><h4 id="_10-3-리니어-동작-계열-ui-구성" tabindex="-1" data-v-e492441c>10.3 리니어 동작 계열 UI 구성 <a class="header-anchor" href="#_10-3-리니어-동작-계열-ui-구성" aria-label="Permalink to &quot;10.3 리니어 동작 계열 UI 구성&quot;" data-v-e492441c>​</a></h4><ul data-v-e492441c><li data-v-e492441c><p data-v-e492441c>리니어 동작 계열 - Absolute</p><p data-v-e492441c><img src="'+w+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>① Absolute 옵션입니다.<br data-v-e492441c> ② 가져오기(Get) 버튼을 통해 로봇의 자세/위치 값이 저장됩니다. 직교 좌표계 값의 기준 좌표계는 로봇 베이스 좌표계입니다.</p></li><li data-v-e492441c><p data-v-e492441c>리니어 동작 계열 - Variable</p><p data-v-e492441c><img src="'+z+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>① Variable 옵션입니다.<br data-v-e492441c> ② 사용자가 자유롭게 목표 직교 좌표 값을 입력할 수 있습니다. 변수화 된 정보들을 수식으로 입력할 수도 있습니다.<br data-v-e492441c> 설정한 직교 좌표 값의 기준 좌표계는 로봇 팔의 베이스 좌표계입니다.</p></li><li data-v-e492441c><p data-v-e492441c>리니어 동작 계열 - Relative</p><p data-v-e492441c><img src="'+A+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>① Relative 옵션입니다.<br data-v-e492441c> ② 상대적으로 이동할 거리/각도 offset을 입력합니다. 변수화 된 정보들을 활용할 수도 있습니다.<br data-v-e492441c> ③ 상대적으로 이동할 지점을 고르는 기능입니다. 기본 값은 PT_LAST_TCP로써 직전 도착 지점을 나타냅니다. 이외에도 임의의 포인트를 기준으로 할 수도 있습니다.<br data-v-e492441c> ④ 어떤 좌표계를 기준으로 상대이동을 지정할 것인지를 정할 수 있습니다.<br data-v-e492441c> 기본값은 Frame_Base로써 로봇 팔의 Base 좌표계를 나타냅니다. 유저 좌표계나, 툴의 local 좌표계로 변경 가능합니다.</p></li><li data-v-e492441c><p data-v-e492441c>리니어 동작 계열 - User coordinate</p><p data-v-e492441c><img src="'+G+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>① User Coordinate(사용자 좌표계) 옵션입니다.<br data-v-e492441c> ② Variable과 비슷하지만, 유저 설정 좌표계를 기준으로 목표 지점을 설정하는 기능입니다. 변수화 된 정보를 입력할 수도 있습니다.<br data-v-e492441c> ③ 기준으로 사용하고 싶은 유저 좌표계를 선택 가능합니다.<br data-v-e492441c> ④ 원하는 기준 좌표계를 선택하고, 가져오기(Get) 기능을 활용하면, 현재 로봇의 자세/위치 정보가 선택된 좌표계 기준으로 자동 입력할 수 있습니다.</p></li></ul><div class="warning custom-block" data-v-e492441c><p class="custom-block-title" data-v-e492441c>주의</p><ol data-v-e492441c><li data-v-e492441c> 유저 좌표계(User-Coordinate)에 대한 설정은 Setup 화면의 Coordinate 메뉴나, Make 화면의 설정(Setting) 기능을 통해 설정 가능합니다. </li><li data-v-e492441c> 최대 3개의 유저 좌표계를 설정하고 사용 가능합니다. </li><li data-v-e492441c> 공장 출하 시 기본 유저 좌표계는 로봇 베이스 좌표계와 같은 좌표계로 세팅 되어 있습니다. </li></ol></div><h3 id="_11-동작-속성의-전환" tabindex="-1" data-v-e492441c>11. 동작 속성의 전환 <a class="header-anchor" href="#_11-동작-속성의-전환" aria-label="Permalink to &quot;11. 동작 속성의 전환&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c>이미 구성된 동작에서 동작 속성(동작의 종류)을 바꿀 때는 다음과 같은 조건이 적용됩니다.</p><ul data-v-e492441c><li data-v-e492441c>같은 계열에서의 전환은 어떠한 제한없이 전환 가능합니다.</li><li data-v-e492441c>다른 계열 (조인트 동작 계열 -&gt; 리니어 동작 계열 / 리니어 동작 계열 -&gt; 조인트 동작 계열)로 전환 시에는, 하위에서 사용하고 있는 포인트 기능의 타입(옵션)이 Absolute일 경우에만 전환 가능합니다.</li></ul><p data-v-e492441c><img src="'+D+'" alt="missing" data-v-e492441c></p><h3 id="_12-동작-프로그램-티칭하기-만들기-예시" tabindex="-1" data-v-e492441c>12. 동작 프로그램 티칭하기/만들기 예시 <a class="header-anchor" href="#_12-동작-프로그램-티칭하기-만들기-예시" aria-label="Permalink to &quot;12. 동작 프로그램 티칭하기/만들기 예시&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c>아래의 내용은 위의 동작 기능, 포인트 기능을 바탕으로 간단한 프로그램을 만들고 구동하는 예시입니다.</p><ol data-v-e492441c><li data-v-e492441c><p data-v-e492441c><strong data-v-e492441c>[Step 1]</strong> 새로운 프로젝트를 생성합니다.</p><p data-v-e492441c><img src="'+V+'" alt="missing" data-v-e492441c></p></li><li data-v-e492441c><p data-v-e492441c><strong data-v-e492441c>[Step 2]</strong> 프로그램 tree에 동작 기능을 추가합니다.<br data-v-e492441c> Tree에 동작J 라는 속성으로 움직이는 포인트 하나가 아래와 같이 생성됩니다.</p><p data-v-e492441c><img src="'+F+'" alt="missing" data-v-e492441c></p></li><li data-v-e492441c><p data-v-e492441c><strong data-v-e492441c>[Step 3]</strong> 조그를 통해 로봇을 특정 자세로 이동시킵니다.<br data-v-e492441c> 본 예제에서는 로봇의 관절 각도가 [Base:0’, Shoulder:0’, Elbow:90’, Wrist1:-90’, Wrist2:90’, Wrist3:0’]가 되도록 각 축을 움직입니다.<br data-v-e492441c> 프로그램 tree에서 포인트 기능을 클릭하면 아래와 같이 포인트 설정 팝업 창이 나타납니다.</p><p data-v-e492441c><img src="'+N+'" alt="missing" data-v-e492441c></p></li><li data-v-e492441c><p data-v-e492441c><strong data-v-e492441c>[Step 4]</strong> 포인트 팝업 창에서 가져오기(Get) 버튼을 눌러서 현재 로봇의 자세/각도 값을 불러옵니다.<br data-v-e492441c> 마지막에 움직였던 자세 각도가 가져와 집니다. 적용(Set)을 눌러서 이 설정을 포인트에 저장합니다.</p><p data-v-e492441c><img src="'+W+'" alt="missing" data-v-e492441c></p></li><li data-v-e492441c><p data-v-e492441c><strong data-v-e492441c>[Step 5]</strong> 위의 과정을 한 결과는 아래와 같습니다.</p><p data-v-e492441c><img src="'+E+'" alt="missing" data-v-e492441c></p></li><li data-v-e492441c><p data-v-e492441c><strong data-v-e492441c>[Step 6]</strong> 위의 Step 1~4의 과정을 몇차례 반복하여 원하는 로봇 동작을 티칭 합니다.<br data-v-e492441c> 완성된 예시 프로그램의 구조는 아래와 같습니다.</p><p data-v-e492441c><img src="'+O+'" alt="missing" data-v-e492441c></p></li><li data-v-e492441c><p data-v-e492441c><strong data-v-e492441c>[Step 7]</strong> 모든 티칭이 끝나고 나면 작업화면에서 티칭된 프로젝트를 실행하여 실제 로봇 팔을 움직여 볼 수 있습니다.<br data-v-e492441c> 만약 시뮬레이션으로 동작을 해보려면 Simulation 모드를 사용하고, 실제 로봇을 구동하려면 Real Robot모드를 사용하면 됩니다.</p><p data-v-e492441c>작업화면 하단에 있는 플레이 버튼(▷)을 클릭하시면 아래 그림과 같이 로봇 팔을 시작 자세(begin)에서 정의된 자세로 이동시키는 화면이 나타나게 됩니다.</p><p data-v-e492441c><img src="'+Z+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>여기서 접근 버튼을 누르고 있으면 로봇 팔은 시작 자세로 이동합니다. 이동이 끝나면 시작 자세에 도달하였다는 팝업 메시지가 나타납니다.</p><p data-v-e492441c><img src="'+$+'" alt="missing" data-v-e492441c></p></li><li data-v-e492441c><p data-v-e492441c><strong data-v-e492441c>[Step 8]</strong> 로봇이 시작 자세에 도달하였다면, 프로그램이 실행될 준비가 되었습니다.<br data-v-e492441c> 하단의 플레이 버튼을 다시 클릭하면 프로그램이 실행됩니다.</p><p data-v-e492441c><img src="'+j+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>아래는 프로그램이 실행중인 모습입니다.</p><p data-v-e492441c><img src="'+X+'" alt="missing" data-v-e492441c></p></li></ol><div class="warning custom-block" data-v-e492441c><p class="custom-block-title" data-v-e492441c>주의</p><ul data-v-e492441c><li data-v-e492441c> 현재 동작 중인 부분이 UI 상에 노란색으로 표기됩니다. </li></ul></div><h3 id="_13-동작-시작-자세" tabindex="-1" data-v-e492441c>13. 동작 시작 자세 <a class="header-anchor" href="#_13-동작-시작-자세" aria-label="Permalink to &quot;13. 동작 시작 자세&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c>동작 시작 자세는 프로그램의 시작(Begin) 항목에 지정되어 있습니다.<br data-v-e492441c> 태블릿 UI를 활용하여 로봇 구동 시, 프로그램을 최초 시작하기에 앞서 항상 Begin 자세(시작 자세)로 이동합니다.<br data-v-e492441c> 시작 자세는 아래와 같은 방법으로 변경 가능합니다.</p><ol data-v-e492441c><li data-v-e492441c>원하는 시작 자세로 로봇을 움직입니다. 조그나 직접 교시를 사용합니다.</li><li data-v-e492441c>프로그램 트리에서 시작(Begin) 부분을 클릭합니다.</li><li data-v-e492441c>가져오기(Get) 버튼을 클릭하여 현재 로봇 자세 각도를 입력하고 적용(Set) 버튼을 누르면 이 자세가 시작 자세가 됩니다.</li><li data-v-e492441c>오른쪽 하단의 사용 안함 기능을 사용하여 시작(Begin) 자세로 이동하지 않고, 프로그램을 시작할 수도 있습니다.</li></ol><p data-v-e492441c><img src="'+Y+'" alt="missing" data-v-e492441c></p><div class="warning custom-block" data-v-e492441c><p class="custom-block-title" data-v-e492441c>주의</p><ol data-v-e492441c><li data-v-e492441c> 프로그램 최초 생성시 기본 시작 자세(Begin에 설정된 각도 값)은 모든 관절 각도가 0인 자세입니다. </li><li data-v-e492441c> 홈 위치 사용 안함 기능은 어느 자세에서나 프로그램을 시작할 수 있기 때문에 주의하여 사용해야 합니다. </li></ol></div><h3 id="_14-동작-중-충돌-감지-기능" tabindex="-1" data-v-e492441c>14. 동작 중 충돌 감지 기능 <a class="header-anchor" href="#_14-동작-중-충돌-감지-기능" aria-label="Permalink to &quot;14. 동작 중 충돌 감지 기능&quot;" data-v-e492441c>​</a></h3><p data-v-e492441c>본 제품은 두 가지 충돌 감지 기능이 내장되어 있습니다.</p><ul data-v-e492441c><li data-v-e492441c>외부 충돌 감지 기능 (Out-Collision Detection)</li><li data-v-e492441c>자가 충돌 감지 기능 (Self-Collision Detection)</li></ul><p data-v-e492441c><img src="'+H+'" alt="missing" data-v-e492441c></p><figcaption style="text-align:center;" data-v-e492441c>[ (좌) 외부 충돌: External Collision / (우) 자가 충돌: Self Collision ]</figcaption><br data-v-e492441c><h4 id="_14-1-외부-충돌-감지-기능-out-collision-detection" tabindex="-1" data-v-e492441c>14.1 외부 충돌 감지 기능(Out Collision Detection) <a class="header-anchor" href="#_14-1-외부-충돌-감지-기능-out-collision-detection" aria-label="Permalink to &quot;14.1 외부 충돌 감지 기능(Out Collision Detection)&quot;" data-v-e492441c>​</a></h4><ul data-v-e492441c><li data-v-e492441c>사전에 정의되지 않은 외부 충격/충돌을 감지합니다.</li><li data-v-e492441c>사람 또는 외부 환경과의 예상치 못한 충돌을 감지합니다.</li><li data-v-e492441c>충돌 감도는 Setup에서 변경 가능합니다.</li><li data-v-e492441c>프로그램 실행 중 실시간으로 충돌 감도를 Set 기능을 통해 변경 가능합니다.</li><li data-v-e492441c>정확한 충돌 감지 기능을 위해서는 Tool의 부하/무게 중심 등이 정확히 세팅 되어야 합니다.</li><li data-v-e492441c>민감한 충돌 감지 설정으로 운용 시, 급격한 가속/감속을 가진 동작 등에서 충돌로 인지할 수 있습니다.</li></ul><p data-v-e492441c>로봇 팔이 Real 모드로 실제 동작 중 외부 충돌이 감지되면 아래와 같은 팝업이 나타납니다.</p><p data-v-e492441c><img src="'+K+'" alt="missing" data-v-e492441c></p><ul data-v-e492441c><li data-v-e492441c>계속(Resume) 버튼: 상황을 확인하고 동작을 계속합니다.</li><li data-v-e492441c>정지(Halt) 버튼: 프로그램을 종료합니다.</li></ul><p data-v-e492441c>위의 팝업 창에서 로봇의 동작을 계속하려면 계속(Resume) 버튼을, 프로그램을 종료하려면 정지(Halt) 버튼을 누르면 됩니다.</p><p data-v-e492441c>이외에도 로봇을 손으로 ‘톡 톡’ 두 번 쳐주게 되면 계속(Resume) 버튼을 누른 것과 같이 동작이 계속 진행됩니다.</p><p data-v-e492441c><img src="'+Q+'" alt="missing" data-v-e492441c></p><h4 id="_14-2-자가-충돌-감지-기능-self-collision-detection" tabindex="-1" data-v-e492441c>14.2 자가 충돌 감지 기능(Self-Collision Detection) <a class="header-anchor" href="#_14-2-자가-충돌-감지-기능-self-collision-detection" aria-label="Permalink to &quot;14.2 자가 충돌 감지 기능(Self-Collision Detection)&quot;" data-v-e492441c>​</a></h4><ul data-v-e492441c><li data-v-e492441c>사용자가 특정 동작 명령을 주었을 때 로봇이 로봇 자신과 스스로 충돌하는 것을 미리 예측하여 멈춥니다.</li><li data-v-e492441c>로봇 자기 자신뿐만 아니라 미리 설정된 작업 영역(Workspace) 범주를 넘어서게 되면 스스로 멈춥니다. 작업 영역에 대한 설정은 Setup화면에서 진행합니다.</li><li data-v-e492441c>또한 툴에 가상의 충돌 감지 박스를 설정하여 해당 박스가 로봇 자신과 충돌이 예상되거나 주변 환경 영역을 벗어나게 될 것이 예상되면 로봇이 스스로 멈춥니다.<br data-v-e492441c> 툴에 설치된 가상의 박스는 Setup-Tool에서 설정합니다.</li></ul><p data-v-e492441c>아래 그림은 사용자가 조그를 오작동 시켜 로봇을 스스로 충돌하게 만든 상황입니다. 충돌직전 로봇은 스스로 충돌을 예측하여 멈추고, 사용자 UI에 붉은색으로 경고를 나타냅니다.</p><p data-v-e492441c><img src="'+a4+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>아래 그림은 사용자가 로봇 구동/티칭 중 설정된 작업 영역을 벗어나려 한 경우입니다. 로봇은 작업 영역을 벗어나기 직전 스스로 멈추고, 사용자 UI에 붉은색 경고를 보여줍니다.</p><p data-v-e492441c><img src="'+t4+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>아래 그림은 사용자가 툴에 가상의 충돌 방지 영역 박스를 설정하고, 로봇을 구동 중 해당 박스 영역이 로봇과 충돌하려는 경우입니다.<br data-v-e492441c> 로봇은 스스로 충돌을 예측하여 멈추고, 사용자 UI에 붉은색으로 경고를 나타냅니다.</p><p data-v-e492441c><img src="'+e4+'" alt="missing" data-v-e492441c></p><p data-v-e492441c>Real Robot모드로 운용 중 자가 충돌 감지로 멈출 시, 직접 교시 기능을 통해 안전 위치로 로봇 자세를 변경 후 계속 사용하세요.</p>',115),i4=[d4];function v4(r4,l4,s4,o4,p4,n4){return c(),e("div",null,i4)}const h4=t(c4,[["render",v4],["__scopeId","data-v-e492441c"]]);export{b4 as __pageData,h4 as default};
