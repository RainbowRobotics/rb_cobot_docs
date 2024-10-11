import{_ as a,c as t,o as b,U as d,qO as v,qP as f,qQ as i,qR as r,qS as l,qT as o,qU as n,qV as e,qW as s,qX as h,qY as p,qZ as c,q_ as u}from"./chunks/framework.fHC5UfPI.js";const q=JSON.parse('{"title":"로봇과 툴 연결하기","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"ko/manual/installation/connecting_tool_robot.md","filePath":"ko/manual/installation/connecting_tool_robot.md"}'),_={name:"ko/manual/installation/connecting_tool_robot.md"},m=d('<h1 id="로봇과-툴-연결하기" tabindex="-1" data-v-ba4b22fa>로봇과 툴 연결하기 <a class="header-anchor" href="#로봇과-툴-연결하기" aria-label="Permalink to &quot;로봇과 툴 연결하기&quot;" data-v-ba4b22fa>​</a></h1><p data-v-ba4b22fa>M6 볼트 4 개를 이용하여 툴 플랜지에 툴을 고정합니다(규격: ISO 9409-1-50-4-M6).</p><ul data-v-ba4b22fa><li data-v-ba4b22fa>툴과 고정용 M6 볼트는 제품에 포함되지 않습니다.</li><li data-v-ba4b22fa>툴을 결합하는 방법은 툴마다 다를 수 있습니다. 자세한 방법은 툴 제조사에서 제공하는 사용설명서를 참조하십시오.</li></ul><p data-v-ba4b22fa><img src="'+v+'" alt="missing" data-v-ba4b22fa></p><ul data-v-ba4b22fa><li data-v-ba4b22fa>툴을 고정한 후 툴 I/O 또는 컨트롤 박스에 있는 I/O 포트에 필요한 케이블을 연결하십시오.</li><li data-v-ba4b22fa>툴 플랜지에 위치한 I/O커넥터의 사양은 로봇 모델에 따라 상이합니다.</li></ul><h3 id="_1-non-e-e-version" tabindex="-1" data-v-ba4b22fa>1. Non-E, E Version <a class="header-anchor" href="#_1-non-e-e-version" aria-label="Permalink to &quot;1. Non-E, E Version&quot;" data-v-ba4b22fa>​</a></h3><p data-v-ba4b22fa><img src="'+f+'" alt="missing" data-v-ba4b22fa></p><ul data-v-ba4b22fa><li data-v-ba4b22fa>I/O connector A : Sam Woo Electronics/M12 x P0.5 female circular connector, 12pin/SW-10W-12(P)</li></ul><div class="center-align" data-v-ba4b22fa><table data-v-ba4b22fa><tr data-v-ba4b22fa><th data-v-ba4b22fa>포트</th><th data-v-ba4b22fa>레이아웃<br data-v-ba4b22fa>(로봇 측)</th><th data-v-ba4b22fa>핀번호</th><th data-v-ba4b22fa>시그널<br data-v-ba4b22fa>(Non-E Version)</th><th data-v-ba4b22fa>색상<br data-v-ba4b22fa>(Thickness)</th><th data-v-ba4b22fa>시그널<br data-v-ba4b22fa>(E Version)</th><th data-v-ba4b22fa>색상<br data-v-ba4b22fa>(Thickness)</th></tr><tr data-v-ba4b22fa><td rowspan="12" data-v-ba4b22fa>Tool I/O</td><td rowspan="12" data-v-ba4b22fa><img src="'+i+'" data-v-ba4b22fa></td><td data-v-ba4b22fa>1</td><td data-v-ba4b22fa>Digital Output A</td><td data-v-ba4b22fa>갈색 (AWG22)</td><td data-v-ba4b22fa>Digital Output A</td><td data-v-ba4b22fa>백색 (AWG25)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>2</td><td data-v-ba4b22fa>Digital Output B</td><td data-v-ba4b22fa>청색 (AWG22)</td><td data-v-ba4b22fa>Digital Output B</td><td data-v-ba4b22fa>흑색 (AWG25)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>3</td><td data-v-ba4b22fa>0/12/24 VCC</td><td data-v-ba4b22fa>적색 (AWG22)</td><td data-v-ba4b22fa>0/12/24 VCC</td><td data-v-ba4b22fa>적색 (AWG25)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>4</td><td data-v-ba4b22fa>Ground</td><td data-v-ba4b22fa>흑색 (AWG22)</td><td data-v-ba4b22fa>Ground</td><td data-v-ba4b22fa>녹색 (AWG25)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>5</td><td data-v-ba4b22fa>Digital Input A</td><td data-v-ba4b22fa>백색 (AWG22)</td><td data-v-ba4b22fa>Digital Input A</td><td data-v-ba4b22fa>황색 (AWG25)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>6</td><td data-v-ba4b22fa>Digital Input B</td><td data-v-ba4b22fa>청색 (AWG26)</td><td data-v-ba4b22fa>Digital Input B</td><td data-v-ba4b22fa>갈색 (AWG25)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>7</td><td data-v-ba4b22fa>Analog Input A</td><td data-v-ba4b22fa>황색 (AWG26)</td><td data-v-ba4b22fa>Digital Input C</td><td data-v-ba4b22fa>청색 (AWG25)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>8</td><td data-v-ba4b22fa>Analog Input B</td><td data-v-ba4b22fa>적색 (AWG26)</td><td data-v-ba4b22fa>Digital Input D</td><td data-v-ba4b22fa>회색 (AWG25)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>9</td><td data-v-ba4b22fa>RS485+</td><td data-v-ba4b22fa>회색 (AWG26)</td><td data-v-ba4b22fa>RS485+</td><td data-v-ba4b22fa>주황색 (AWG25)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>10</td><td data-v-ba4b22fa>RS485-</td><td data-v-ba4b22fa>보라색 (AWG26)</td><td data-v-ba4b22fa>RS485-</td><td data-v-ba4b22fa>보라색 (AWG25)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>11</td><td data-v-ba4b22fa>Common Ground</td><td data-v-ba4b22fa>흑색 (AWG26)</td><td data-v-ba4b22fa>Digital Input E</td><td data-v-ba4b22fa>핑크색 (AWG25)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>12</td><td data-v-ba4b22fa>Common Ground</td><td data-v-ba4b22fa>녹색 (AWG26)</td><td data-v-ba4b22fa>Digital Input F</td><td data-v-ba4b22fa>내추럴색 (AWG25)</td></tr></table></div><h3 id="_2-u-version-m8-8pin-x-2ea" tabindex="-1" data-v-ba4b22fa>2. U Version : M8-8Pin x 2EA <a class="header-anchor" href="#_2-u-version-m8-8pin-x-2ea" aria-label="Permalink to &quot;2. U Version : M8-8Pin x 2EA&quot;" data-v-ba4b22fa>​</a></h3><div class="center-align" data-v-ba4b22fa><table data-v-ba4b22fa><tr data-v-ba4b22fa><th data-v-ba4b22fa>포트</th><th data-v-ba4b22fa>레이아웃<br data-v-ba4b22fa>(로봇 측)</th><th data-v-ba4b22fa>핀번호</th><th data-v-ba4b22fa>U Version<br data-v-ba4b22fa>A Port</th><th data-v-ba4b22fa>U Version<br data-v-ba4b22fa>B Port</th><th data-v-ba4b22fa>색상 (A, B 동일)</th></tr><tr data-v-ba4b22fa><td rowspan="8" data-v-ba4b22fa>Tool I/O</td><td rowspan="8" data-v-ba4b22fa><div class="center-align" data-v-ba4b22fa><img src="'+r+'" data-v-ba4b22fa><label data-v-ba4b22fa>A: Robot=Male</label><img src="'+l+'" data-v-ba4b22fa><label data-v-ba4b22fa>B: Robot=Female</label></div></td><td data-v-ba4b22fa>1</td><td data-v-ba4b22fa>D+(RS485+)</td><td data-v-ba4b22fa>NC</td><td data-v-ba4b22fa>흰색 (White)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>2</td><td data-v-ba4b22fa>D-(RS485-)</td><td data-v-ba4b22fa>NC</td><td data-v-ba4b22fa>갈색 (Brown)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>3</td><td data-v-ba4b22fa>Digital Input 1 (PNP)</td><td data-v-ba4b22fa>Digital Input 3 (PNP)</td><td data-v-ba4b22fa>녹색 (Green)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>4</td><td data-v-ba4b22fa>Digital Input 0 (PNP)</td><td data-v-ba4b22fa>Digital Input 2 (PNP)</td><td data-v-ba4b22fa>노란색 (Yellow)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>5</td><td data-v-ba4b22fa>Power(+)</td><td data-v-ba4b22fa>Power(+)</td><td data-v-ba4b22fa>회색 (Grey)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>6</td><td data-v-ba4b22fa>Digital Output 1 (PNP)</td><td data-v-ba4b22fa>Digital Input 5 (PNP)</td><td data-v-ba4b22fa>분홍색 (Pink)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>7</td><td data-v-ba4b22fa>Digital Output 0 (PNP)</td><td data-v-ba4b22fa>Digital Input 4 (PNP)</td><td data-v-ba4b22fa>파랑색 (Blue)</td></tr><tr data-v-ba4b22fa><td data-v-ba4b22fa>8</td><td data-v-ba4b22fa>Ground (-)</td><td data-v-ba4b22fa>Ground (-)</td><td data-v-ba4b22fa>빨강색 (Red)</td></tr></table></div><ul data-v-ba4b22fa><li data-v-ba4b22fa><p data-v-ba4b22fa>Non-E Version 과 E Version, U Version은 서로 툴 플랜지의 사양이 다릅니다.</p></li><li data-v-ba4b22fa><p data-v-ba4b22fa>[공통 내용] 내부 전원 공급은 GUI의 I/O 탭에서 0V, 12V, 24V로 설정할 수 있습니다.</p><div class="center-align" data-v-ba4b22fa><table data-v-ba4b22fa><tr data-v-ba4b22fa><th data-v-ba4b22fa>-</th><th data-v-ba4b22fa>최소</th><th data-v-ba4b22fa>형식</th><th data-v-ba4b22fa>최대</th><th data-v-ba4b22fa>단위</th></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>24V 모드의 공급전압</th><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>24</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>V</td></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>12V 모드의 공급전압</th><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>12</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>V</td></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>두 모드의 공급전류</th><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>2000</td><td data-v-ba4b22fa>mA</td></tr></table></div></li><li data-v-ba4b22fa><p data-v-ba4b22fa>[Non-E Version] 툴 디지털 출력은 NPN 방식으로 적용되어 있습니다. 디지털 출력을 활성화하면, 해당 포트의 연결은 GND(ground)로 이어집니다.<br data-v-ba4b22fa> 비활성화 시, 해당 출력 포트는 개방됩니다(오픈-컬렉터/오픈-드레인). 전기 사양은 다음과 같습니다.</p><div class="center-align" data-v-ba4b22fa><table data-v-ba4b22fa><tr data-v-ba4b22fa><th data-v-ba4b22fa>Non-E Version</th><th data-v-ba4b22fa>최소</th><th data-v-ba4b22fa>형식</th><th data-v-ba4b22fa>최대</th><th data-v-ba4b22fa>단위</th></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>개방 시 전압</th><td data-v-ba4b22fa>0</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>24</td><td data-v-ba4b22fa>V</td></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>GND를 통한 전류</th><td data-v-ba4b22fa>0</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>2000</td><td data-v-ba4b22fa>mA</td></tr></table></div></li><li data-v-ba4b22fa><p data-v-ba4b22fa>[E, U Version] 툴 디지털 출력은 NPN 방식으로 적용되어 있습니다. 디지털 출력을 활성화하면, 해당 포트의 연결은 VCC로 이어집니다.<br data-v-ba4b22fa> 비활성화 시, 해당 출력 포트는 개방됩니다(오픈-컬렉터/오픈-드레인). 전기 사양은 다음과 같습니다.</p><div class="center-align" data-v-ba4b22fa><table data-v-ba4b22fa><tr data-v-ba4b22fa><th data-v-ba4b22fa>E, U Version</th><th data-v-ba4b22fa>최소</th><th data-v-ba4b22fa>형식</th><th data-v-ba4b22fa>최대</th><th data-v-ba4b22fa>단위</th></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>개방 시 전압</th><td data-v-ba4b22fa>0</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>24</td><td data-v-ba4b22fa>V</td></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>VCC를 통한 전류</th><td data-v-ba4b22fa>0</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>50</td><td data-v-ba4b22fa>mA</td></tr></table></div></li></ul><h3 id="_3-non-e-version-사용-예시" tabindex="-1" data-v-ba4b22fa>3. Non-E Version 사용 예시 <a class="header-anchor" href="#_3-non-e-version-사용-예시" aria-label="Permalink to &quot;3. Non-E Version 사용 예시&quot;" data-v-ba4b22fa>​</a></h3><ul data-v-ba4b22fa><li data-v-ba4b22fa>툴 디지털 출력을 사용하기 위해서는 아래 그림과 같이 12V 또는 24V 전원 공급을 사용하여 부하를 켜는 것을 보여줍니다. Tool Out 블록에서 출력 전압을 정의할 수 있습니다.</li></ul><p data-v-ba4b22fa><img src="'+o+'" alt="missing" data-v-ba4b22fa></p><div class="tip custom-block" data-v-ba4b22fa><p class="custom-block-title" data-v-ba4b22fa>TIP</p><p data-v-ba4b22fa>아래 그림에 표시된 대로 유도 부하에 대하여 보호 다이오드를 사용하시길 <u data-v-ba4b22fa>적극 권장</u>합니다.</p></div><p data-v-ba4b22fa><img src="'+n+'" alt="missing" data-v-ba4b22fa></p><ul data-v-ba4b22fa><li data-v-ba4b22fa><p data-v-ba4b22fa>툴 디지털 입력은 PNP 및 풀 다운저항이 적용되어 있습니다. 따라서 입력 단자에 연결이 없을 경우(floating), 해당 입력 포트는 로우(Low, 0)로 읽힙니다. 전기 사양은 다음과 같습니다.</p><div class="center-align" data-v-ba4b22fa><table data-v-ba4b22fa><tr data-v-ba4b22fa><th data-v-ba4b22fa>-</th><th data-v-ba4b22fa>최소</th><th data-v-ba4b22fa>형식</th><th data-v-ba4b22fa>최대</th><th data-v-ba4b22fa>단위</th></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>입력전압</th><td data-v-ba4b22fa>0</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>24</td><td data-v-ba4b22fa>V</td></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>논리적 저 전압</th><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>9</td><td data-v-ba4b22fa>V</td></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>논리적 고 전압</th><td data-v-ba4b22fa>10</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>V</td></tr></table></div></li><li data-v-ba4b22fa><p data-v-ba4b22fa>툴 디지털 입력을 사용하기 위하여 아래의 그림은 간단한 버튼을 연결하는 방법을 보여줍니다.</p><p data-v-ba4b22fa><img src="'+e+'" alt="missing" data-v-ba4b22fa></p></li><li data-v-ba4b22fa><p data-v-ba4b22fa>툴 아날로그 입력은 비차등(non-differential) 방식으로 전압을 측정하며, 측정 범주는 아래와 같습니다.</p><div class="center-align" data-v-ba4b22fa><table data-v-ba4b22fa><tr data-v-ba4b22fa><th data-v-ba4b22fa>-</th><th data-v-ba4b22fa>최소</th><th data-v-ba4b22fa>형식</th><th data-v-ba4b22fa>최대</th><th data-v-ba4b22fa>단위</th></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>전압모드의 입력전압</th><td data-v-ba4b22fa>0</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>10</td><td data-v-ba4b22fa>V</td></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>분해능</th><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>12</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>bit</td></tr></table></div></li><li data-v-ba4b22fa><p data-v-ba4b22fa>아래의 그림은 비차등(non-differential) 전압 출력 특성을 가진 아날로그 센서를 툴 플랜지에 연결하는 방법을 보여줍니다. (비차등 방식)</p><p data-v-ba4b22fa><img src="'+s+'" alt="missing" data-v-ba4b22fa></p></li><li data-v-ba4b22fa><p data-v-ba4b22fa>아래의 그림은 차등(differential) 전압 출력 특성을 가진 아날로그 센서를 툴 플랜지에 연결하는 방법을 보여줍니다.<br data-v-ba4b22fa> 센서의 음출력부(negative output part)를 GND(ground)에 연결하면 비차등 센서와 동일하게 작동됩니다.</p><p data-v-ba4b22fa><img src="'+h+'" alt="missing" data-v-ba4b22fa></p></li></ul><h3 id="_4-e-version-u-version-사용-예시" tabindex="-1" data-v-ba4b22fa>4. E Version, U Version 사용 예시 <a class="header-anchor" href="#_4-e-version-u-version-사용-예시" aria-label="Permalink to &quot;4. E Version, U Version 사용 예시&quot;" data-v-ba4b22fa>​</a></h3><ul data-v-ba4b22fa><li data-v-ba4b22fa><p data-v-ba4b22fa>툴 디지털 출력을 사용하기 위해서는 아래 그림과 같이 12V 또는 24V 전원 공급을 사용하여 부하를 켜는 것을 보여줍니다.<br data-v-ba4b22fa> Tool Out 블록에서 출력 전압을 정의할 수 있습니다.</p><p data-v-ba4b22fa><img src="'+p+'" alt="missing" data-v-ba4b22fa></p></li></ul><div class="tip custom-block" data-v-ba4b22fa><p class="custom-block-title" data-v-ba4b22fa>TIP</p><p data-v-ba4b22fa>아래 그림에 표시된 대로 유도 부하에 대하여 보호 다이오드를 사용하시길 <u data-v-ba4b22fa>적극 권장</u>합니다.</p></div><p data-v-ba4b22fa><img src="'+c+'" alt="missing" data-v-ba4b22fa></p><ul data-v-ba4b22fa><li data-v-ba4b22fa><p data-v-ba4b22fa>툴 디지털 입력은 PNP 방식으로 적용되어 있습니다. 따라서 입력 단자에 연결이 없을 경우(floating) 해당 입력 포트는 로우(Low, 0)로 읽힙니다. 전기 사양은 다음과 같습니다.</p><div class="center-align" data-v-ba4b22fa><table data-v-ba4b22fa><tr data-v-ba4b22fa><th data-v-ba4b22fa>-</th><th data-v-ba4b22fa>최소</th><th data-v-ba4b22fa>형식</th><th data-v-ba4b22fa>최대</th><th data-v-ba4b22fa>단위</th></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>입력전압</th><td data-v-ba4b22fa>0</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>24</td><td data-v-ba4b22fa>V</td></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>논리적 저 전압</th><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>3</td><td data-v-ba4b22fa>V</td></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>논리적 고 전압</th><td data-v-ba4b22fa>4</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>-</td><td data-v-ba4b22fa>V</td></tr></table></div></li><li data-v-ba4b22fa><p data-v-ba4b22fa>툴 디지털 입력을 사용하기 위하여 아래의 그림은 간단한 버튼을 연결하는 방법을 보여줍니다.</p><p data-v-ba4b22fa><img src="'+u+'" alt="missing" data-v-ba4b22fa></p></li><li data-v-ba4b22fa><p data-v-ba4b22fa>E Version, U Version 에서는 툴 아날로그 입력을 지원하지 않습니다.</p></li></ul><div class="warning custom-block" data-v-ba4b22fa><p class="custom-block-title" data-v-ba4b22fa>주의</p><ol data-v-ba4b22fa><li data-v-ba4b22fa>자세한 기술 사양과 결선 예시는 부록 D에 표기되어 있습니다.</li><li data-v-ba4b22fa>툴 플랜지의 단면도에 관한 사항은 부록 C를 참조하시기 바랍니다.</li></ol><p data-v-ba4b22fa>툴 플랜지에서는 RS485 시리얼 통신을 지원하며, 아래와 같은 시리얼 통신 규격을 지원합니다.</p><table data-v-ba4b22fa><tr data-v-ba4b22fa><th data-v-ba4b22fa>전송속도</th><td data-v-ba4b22fa>9600, 19200, 38400, 57600, 115200, 1M</td></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>정지비트</th><td data-v-ba4b22fa>1,2</td></tr><tr data-v-ba4b22fa><th data-v-ba4b22fa>패리티</th><td data-v-ba4b22fa>없음, 홀수, 짝수</td></tr></table></div>',24),g=[m];function V(A,P,G,I,N,D){return b(),t("div",null,g)}const E=a(_,[["render",V],["__scopeId","data-v-ba4b22fa"]]);export{q as __pageData,E as default};
