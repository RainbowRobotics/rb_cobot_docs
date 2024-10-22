import{_ as a,c as t,o as e,U as d,BJ as c}from"./chunks/framework._bMY95IQ.js";const b=JSON.parse('{"title":"통신 포트 보안에 관한 기본 안내서 v2.0","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"ko/technical_docs/socket_security.md","filePath":"ko/technical_docs/socket_security.md"}'),r={name:"ko/technical_docs/socket_security.md"},v=d('<h1 id="통신-포트-보안에-관한-기본-안내서-v2-0" tabindex="-1" data-v-7ac4fe33>통신 포트 보안에 관한 기본 안내서 v2.0 <a class="header-anchor" href="#통신-포트-보안에-관한-기본-안내서-v2-0" aria-label="Permalink to &quot;통신 포트 보안에 관한 기본 안내서 v2.0&quot;" data-v-7ac4fe33>​</a></h1><h3 id="_1-통신-포트-개요" tabindex="-1" data-v-7ac4fe33>1. 통신 포트 개요 <a class="header-anchor" href="#_1-통신-포트-개요" aria-label="Permalink to &quot;1. 통신 포트 개요&quot;" data-v-7ac4fe33>​</a></h3><p data-v-7ac4fe33>Rainbow Robotics (레인보우 로보틱스) 의 로봇 제어 박스 (Robot-Control Box)에서는 아래와 같은 네트워크 통신이 제공됩니다.</p><ol data-v-7ac4fe33><li data-v-7ac4fe33><span style="font-weight:bold;" data-v-7ac4fe33> 로봇 제어 및 데이터 수집 등을 위한 네트워크 </span><ul data-v-7ac4fe33><li data-v-7ac4fe33> 로봇 제어: 5000 번 포트 </li><li data-v-7ac4fe33> 로봇 데이터 수집: 5001 번 포트 </li></ul></li><li data-v-7ac4fe33><span style="font-weight:bold;" data-v-7ac4fe33> 산업용 통신 및 일반 데이더 송수신 용 네트워크 </span><ul data-v-7ac4fe33><li data-v-7ac4fe33> Modbus TCP: 502 번 포트 </li><li data-v-7ac4fe33> Misubishi MC 통신: 사용자 지정 포트 </li><li data-v-7ac4fe33> LS Elec. XGT 통신: 2004 번 포트 </li><li data-v-7ac4fe33> OMRON FINS 통신: 사용자 지정 포트 </li><li data-v-7ac4fe33> SIEMENS S7 통신: 102 번 포트 </li><li data-v-7ac4fe33> HMI MemLink 통신: 사용자 지정 포트 </li><li data-v-7ac4fe33> 일반 소켓 통신: 사용자 지정 포트 </li></ul></li></ol><p data-v-7ac4fe33>위와 같이 5000, 5001 포트는 <em data-v-7ac4fe33>항상</em> 열려있으며, 나머지 데이터 네트워크 포트는 사용자의 명시적인 사용여부 설정/프로그램이 있어야만 사용 가능합니다.</p><h3 id="_2-통신-보안" tabindex="-1" data-v-7ac4fe33>2. 통신 보안 <a class="header-anchor" href="#_2-통신-보안" aria-label="Permalink to &quot;2. 통신 보안&quot;" data-v-7ac4fe33>​</a></h3><p data-v-7ac4fe33>앞선 1장에서, <em data-v-7ac4fe33>보안이 요구되는 포트는 <strong data-v-7ac4fe33>5000번과 5001번</strong> 포트</em> 입니다.<br data-v-7ac4fe33> 나머지 데이터 포트는 사용자가 명시적으로 해당 기능을 사용 해야지만 사용되는 포트이기 때문입니다.<br data-v-7ac4fe33></p><p data-v-7ac4fe33>5000번 5001번 포트는 항상 열려있는 (open) 포트이기 때문에, 아래와 같은 두 가지 방법으로 네트워크 보안 구성을 할 수 있습니다.</p><h4 id="_2-1-라우터-허브-단계에서-로봇-시스템으로-가는-5000-5001번-포트-차단" tabindex="-1" data-v-7ac4fe33>2.1 라우터/허브 단계에서 로봇 시스템으로 가는 5000/5001번 포트 차단 <a class="header-anchor" href="#_2-1-라우터-허브-단계에서-로봇-시스템으로-가는-5000-5001번-포트-차단" aria-label="Permalink to &quot;2.1 라우터/허브 단계에서 로봇 시스템으로 가는 5000/5001번 포트 차단&quot;" data-v-7ac4fe33>​</a></h4><ul data-v-7ac4fe33><li data-v-7ac4fe33>가장 간단하고, 확실한 방법입니다.</li><li data-v-7ac4fe33>자동화 시스템 내부 네트워크와 외부 네트워크를 중계하는 라우터 (Router) 단계에서 포트를 막는 방법입니다. (포트 포워딩 차단)</li><li data-v-7ac4fe33>외부에서 들어오는 5000/5001번 포트를 내부로 접근 못하도록 막는 방식입니다.</li></ul><p data-v-7ac4fe33><img src="'+c+'" alt="missing" data-v-7ac4fe33></p><h4 id="_2-2-소프트웨어적인-키-문법을-통한-엑세스-차단" tabindex="-1" data-v-7ac4fe33>2.2 소프트웨어적인 키/문법을 통한 엑세스 차단 <a class="header-anchor" href="#_2-2-소프트웨어적인-키-문법을-통한-엑세스-차단" aria-label="Permalink to &quot;2.2 소프트웨어적인 키/문법을 통한 엑세스 차단&quot;" data-v-7ac4fe33>​</a></h4><ul data-v-7ac4fe33><li data-v-7ac4fe33>위의 2.1과 같은 방식으로 포트가 차단되어 있지 않더라도, 5000/5001 포트를 통해 제어/데이터 수신을 하기 위해서는 규정된 키와 문법이 필요합니다.</li><li data-v-7ac4fe33>이를 통해서, 허가되지 않은 키 또는 규정되지 않은 문법으로 외부에서 엑세스 할 경우, 로봇은 동작을 멈추고, 해당 통신은 시스템에 영향을 미치지 않습니다.</li></ul><h3 id="_3-참고-자료" tabindex="-1" data-v-7ac4fe33>3. 참고 자료 <a class="header-anchor" href="#_3-참고-자료" aria-label="Permalink to &quot;3. 참고 자료&quot;" data-v-7ac4fe33>​</a></h3><p data-v-7ac4fe33>아래의 표는 데이터 송/수신용 기능/네트워크의 사용 범주를 나타냅니다.</p><table data-v-7ac4fe33><tr data-v-7ac4fe33><th data-v-7ac4fe33>Manufacturer</th><th data-v-7ac4fe33>Communication</th><th data-v-7ac4fe33>Feature</th></tr><tr data-v-7ac4fe33><td class="sub-title" rowspan="5" data-v-7ac4fe33>SIEMENS</td><td data-v-7ac4fe33>S7 Protocol</td><td data-v-7ac4fe33>Server = PLC, Client = Robot</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>Modbus TCP Master</td><td data-v-7ac4fe33>Client(Master) = Robot, Server(Slave) = PLC</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>Modbus TCP Slave</td><td data-v-7ac4fe33>Client(Master) = PLC, Server(Slave) = Robot</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>RS232/485</td><td data-v-7ac4fe33>General Serial communication</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>TCP/IP</td><td data-v-7ac4fe33>General TCP/IP communication</td></tr><tr data-v-7ac4fe33><td class="sub-title" rowspan="5" data-v-7ac4fe33>OMRON</td><td data-v-7ac4fe33>FINS</td><td data-v-7ac4fe33>Server = PLC, Client = Robot</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>Modbus TCP Master</td><td data-v-7ac4fe33>Client(Master) = Robot, Server(Slave) = PLC</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>Modbus TCP Slave</td><td data-v-7ac4fe33>Client(Master) = PLC, Server(Slave) = Robot</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>RS232/485</td><td data-v-7ac4fe33>General Serial communication</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>TCP/IP</td><td data-v-7ac4fe33>General TCP/IP communication</td></tr><tr data-v-7ac4fe33><td class="sub-title" rowspan="6" data-v-7ac4fe33>MITSUBISHI</td><td data-v-7ac4fe33>MC Protocol 1E-Binary</td><td data-v-7ac4fe33>Server = PLC, Client = Robot</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>MC Protocol 3E-Binary</td><td data-v-7ac4fe33>Server = PLC, Client = Robot</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>Modbus TCP Master</td><td data-v-7ac4fe33>Client(Master) = Robot, Server(Slave) = PLC</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>Modbus TCP Slave</td><td data-v-7ac4fe33>Client(Master) = PLC, Server(Slave) = Robot</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>RS232/485</td><td data-v-7ac4fe33>General Serial communication</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>TCP/IP</td><td data-v-7ac4fe33>General TCP/IP communication</td></tr><tr data-v-7ac4fe33><td class="sub-title" rowspan="5" data-v-7ac4fe33>LS ELEC.</td><td data-v-7ac4fe33>XGT Protocol</td><td data-v-7ac4fe33>Server = PLC, Client = Robot</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>Modbus TCP Master</td><td data-v-7ac4fe33>Client(Master) = Robot, Server(Slave) = PLC</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>Modbus TCP Slave</td><td data-v-7ac4fe33>Client(Master) = PLC, Server(Slave) = Robot</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>RS232/485</td><td data-v-7ac4fe33>General Serial communication</td></tr><tr data-v-7ac4fe33><td data-v-7ac4fe33>TCP/IP</td><td data-v-7ac4fe33>General TCP/IP communication</td></tr><tr data-v-7ac4fe33><td class="sub-title" data-v-7ac4fe33>PROFACE</td><td data-v-7ac4fe33>Memory Link</td><td data-v-7ac4fe33>Server = HMI, Client = Robot</td></tr><tr data-v-7ac4fe33><td class="sub-title" data-v-7ac4fe33>M2I-TOP</td><td data-v-7ac4fe33>Memory Link</td><td data-v-7ac4fe33>Server = HMI, Client = Robot</td></tr></table>',16),o=[v];function f(l,i,s,n,u,C){return e(),t("div",null,o)}const S=a(r,[["render",f],["__scopeId","data-v-7ac4fe33"]]);export{b as __pageData,S as default};
