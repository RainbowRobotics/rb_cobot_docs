import{_ as a,c as t,o as e,U as d}from"./chunks/framework._bMY95IQ.js";const S=JSON.parse('{"title":"PLC/HMI 통신 연결 가이드 v3.2","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"ko/technical_docs/plc_connectivity.md","filePath":"ko/technical_docs/plc_connectivity.md"}'),c={name:"ko/technical_docs/plc_connectivity.md"},r=d('<h1 id="plc-hmi-통신-연결-가이드-v3-2" tabindex="-1" data-v-1efac781>PLC/HMI 통신 연결 가이드 v3.2 <a class="header-anchor" href="#plc-hmi-통신-연결-가이드-v3-2" aria-label="Permalink to &quot;PLC/HMI 통신 연결 가이드 v3.2&quot;" data-v-1efac781>​</a></h1><h3 id="plc-통신-연결-가이드" tabindex="-1" data-v-1efac781>PLC 통신 연결 가이드 <a class="header-anchor" href="#plc-통신-연결-가이드" aria-label="Permalink to &quot;PLC 통신 연결 가이드&quot;" data-v-1efac781>​</a></h3><p data-v-1efac781>Rainbow Robotics 의 제품과 PLC/HMI 제품 연동 시, 다음과 같은 통신 방식들을 사용할 수 있습니다.<br data-v-1efac781> 지원 가능한 통신은 시스템 업데이트에 따라서 늘어날 수 있습니다.</p><table data-v-1efac781><tr data-v-1efac781><th data-v-1efac781>Manufacturer</th><th data-v-1efac781>Communication</th><th data-v-1efac781>Feature</th></tr><tr data-v-1efac781><td class="sub-title" rowspan="5" data-v-1efac781>SIEMENS</td><td data-v-1efac781>S7 Protocol</td><td data-v-1efac781>Server = PLC, Client = Robot</td></tr><tr data-v-1efac781><td data-v-1efac781>Modbus TCP Master</td><td data-v-1efac781>Client(Master) = Robot, Server(Slave) = PLC</td></tr><tr data-v-1efac781><td data-v-1efac781>Modbus TCP Slave</td><td data-v-1efac781>Client(Master) = PLC, Server(Slave) = Robot</td></tr><tr data-v-1efac781><td data-v-1efac781>RS232/485</td><td data-v-1efac781>General Serial communication</td></tr><tr data-v-1efac781><td data-v-1efac781>TCP/IP</td><td data-v-1efac781>General TCP/IP communication</td></tr><tr data-v-1efac781><td class="sub-title" rowspan="5" data-v-1efac781>OMRON</td><td data-v-1efac781>FINS</td><td data-v-1efac781>Server = PLC, Client = Robot</td></tr><tr data-v-1efac781><td data-v-1efac781>Modbus TCP Master</td><td data-v-1efac781>Client(Master) = Robot, Server(Slave) = PLC</td></tr><tr data-v-1efac781><td data-v-1efac781>Modbus TCP Slave</td><td data-v-1efac781>Client(Master) = PLC, Server(Slave) = Robot</td></tr><tr data-v-1efac781><td data-v-1efac781>RS232/485</td><td data-v-1efac781>General Serial communication</td></tr><tr data-v-1efac781><td data-v-1efac781>TCP/IP</td><td data-v-1efac781>General TCP/IP communication</td></tr><tr data-v-1efac781><td class="sub-title" rowspan="6" data-v-1efac781>MITSUBISHI</td><td data-v-1efac781>MC Protocol 1E-Binary</td><td data-v-1efac781>Server = PLC, Client = Robot</td></tr><tr data-v-1efac781><td data-v-1efac781>MC Protocol 3E-Binary</td><td data-v-1efac781>Server = PLC, Client = Robot</td></tr><tr data-v-1efac781><td data-v-1efac781>Modbus TCP Master</td><td data-v-1efac781>Client(Master) = Robot, Server(Slave) = PLC</td></tr><tr data-v-1efac781><td data-v-1efac781>Modbus TCP Slave</td><td data-v-1efac781>Client(Master) = PLC, Server(Slave) = Robot</td></tr><tr data-v-1efac781><td data-v-1efac781>RS232/485</td><td data-v-1efac781>General Serial communication</td></tr><tr data-v-1efac781><td data-v-1efac781>TCP/IP</td><td data-v-1efac781>General TCP/IP communication</td></tr><tr data-v-1efac781><td class="sub-title" rowspan="5" data-v-1efac781>LS ELEC.</td><td data-v-1efac781>XGT Protocol</td><td data-v-1efac781>Server = PLC, Client = Robot</td></tr><tr data-v-1efac781><td data-v-1efac781>Modbus TCP Master</td><td data-v-1efac781>Client(Master) = Robot, Server(Slave) = PLC</td></tr><tr data-v-1efac781><td data-v-1efac781>Modbus TCP Slave</td><td data-v-1efac781>Client(Master) = PLC, Server(Slave) = Robot</td></tr><tr data-v-1efac781><td data-v-1efac781>RS232/485</td><td data-v-1efac781>General Serial communication</td></tr><tr data-v-1efac781><td data-v-1efac781>TCP/IP</td><td data-v-1efac781>General TCP/IP communication</td></tr><tr data-v-1efac781><td class="sub-title" data-v-1efac781>PROFACE</td><td data-v-1efac781>Memory Link</td><td data-v-1efac781>Server = HMI, Client = Robot</td></tr><tr data-v-1efac781><td class="sub-title" data-v-1efac781>M2I-TOP</td><td data-v-1efac781>Memory Link</td><td data-v-1efac781>Server = HMI, Client = Robot</td></tr></table>',4),v=[r];function o(f,l,n,i,s,C){return e(),t("div",null,v)}const b=a(c,[["render",o],["__scopeId","data-v-1efac781"]]);export{S as __pageData,b as default};