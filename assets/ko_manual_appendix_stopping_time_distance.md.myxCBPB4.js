import{_ as t,c as a,o as b,U as d}from"./chunks/framework.66XcOYhx.js";const m=JSON.parse('{"title":"정지 시간 및 정지 거리","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"ko/manual/appendix/stopping_time_distance.md","filePath":"ko/manual/appendix/stopping_time_distance.md"}'),v={name:"ko/manual/appendix/stopping_time_distance.md"},s=d('<h1 id="정지-시간-및-정지-거리" tabindex="-1" data-v-6b535b02>정지 시간 및 정지 거리 <a class="header-anchor" href="#정지-시간-및-정지-거리" aria-label="Permalink to &quot;정지 시간 및 정지 거리&quot;" data-v-6b535b02>​</a></h1><p data-v-6b535b02>RB Series 협동 로봇에서는 로봇 정지시간 및 정지 거리가 안전 모니터링 기능에 의해 생성됩니다.</p><p data-v-6b535b02>아래 그래프는 Joint 0(Base 축), Joint 1(Shoulder 축), Joint 2(Elbow 축)에 대한 정지 카테고리 1의 정지 시간과 정지 거리를 나타냅니다.<br data-v-6b535b02> 측정은 각 Joint에 가반하중(Payload)을 장착하여 이루어졌습니다.</p><div class="warning custom-block" data-v-6b535b02><p class="custom-block-title" data-v-6b535b02>주의</p><ul data-v-6b535b02><li data-v-6b535b02> 상황에 따라 실제 정지 움직임은 아래의 결과와는 상이할 수 있습니다. </li><li data-v-6b535b02> Joint 0의 경우 수평 움직임에 대해 측정된 결과이며, Joint 1과 2의 경우는 수직 하강 움직임 상황에서 측정된 결과입니다. </li><li data-v-6b535b02> 팔의 길이의 경우 최대 거리가 적용되었습니다. </li></ul></div><h3 id="_1-rb5-850e-series" tabindex="-1" data-v-6b535b02>1. RB5-850E Series <a class="header-anchor" href="#_1-rb5-850e-series" aria-label="Permalink to &quot;1. RB5-850E Series&quot;" data-v-6b535b02>​</a></h3><div class="center-align th-align td-align" data-v-6b535b02><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Base (Joint 0)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>150.91</td><td data-v-6b535b02>0.3</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>149.68</td><td data-v-6b535b02>0.28</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>148.5</td><td data-v-6b535b02>0.3</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>150.91</td><td data-v-6b535b02>0.3</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>149.7</td><td data-v-6b535b02>0.29</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Horizontal Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Shoulder (Joint 1)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>193.77</td><td data-v-6b535b02>0.28</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>220.46</td><td data-v-6b535b02>0.32</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>198.28</td><td data-v-6b535b02>0.29</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>220.46</td><td data-v-6b535b02>0.32</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>204.17</td><td data-v-6b535b02>0.3</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Elbow (Joint 2)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>168.52</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>165.34</td><td data-v-6b535b02>0.3</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>141.02</td><td data-v-6b535b02>0.23</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>168.52</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>158.29</td><td data-v-6b535b02>0.28</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table></div><h3 id="_2-rb3-1200e-series" tabindex="-1" data-v-6b535b02>2. RB3-1200E Series <a class="header-anchor" href="#_2-rb3-1200e-series" aria-label="Permalink to &quot;2. RB3-1200E Series&quot;" data-v-6b535b02>​</a></h3><div class="center-align th-align td-align" data-v-6b535b02><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Base (Joint 0)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>253.3</td><td data-v-6b535b02>0.33</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>252.63</td><td data-v-6b535b02>0.27</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>249.27</td><td data-v-6b535b02>0.24</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>252.63</td><td data-v-6b535b02>0.33</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>251.73</td><td data-v-6b535b02>0.28</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Horizontal Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Shoulder (Joint 1)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>283.08</td><td data-v-6b535b02>0.3</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>285.88</td><td data-v-6b535b02>0.29</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>303.28</td><td data-v-6b535b02>0.34</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>303.28</td><td data-v-6b535b02>0.34</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>290.75</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Elbow (Joint 2)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>195.68</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>200.94</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>190.95</td><td data-v-6b535b02>0.3</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>200.94</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>195.86</td><td data-v-6b535b02>0.306</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table></div><h3 id="_3-rb10-1300e-series" tabindex="-1" data-v-6b535b02>3. RB10-1300E Series <a class="header-anchor" href="#_3-rb10-1300e-series" aria-label="Permalink to &quot;3. RB10-1300E Series&quot;" data-v-6b535b02>​</a></h3><div class="center-align th-align td-align" data-v-6b535b02><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Base (Joint 0)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>132.97</td><td data-v-6b535b02>0.3</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>136.53</td><td data-v-6b535b02>0.32</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>142.1</td><td data-v-6b535b02>0.34</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>142.1</td><td data-v-6b535b02>0.34</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>137.2</td><td data-v-6b535b02>0.32</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Horizontal Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Shoulder (Joint 1)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>260.51</td><td data-v-6b535b02>0.36</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>246.79</td><td data-v-6b535b02>0.35</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>252.54</td><td data-v-6b535b02>0.35</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>260.51</td><td data-v-6b535b02>0.36</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>253.28</td><td data-v-6b535b02>0.353</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Elbow (Joint 2)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>267.73</td><td data-v-6b535b02>0.32</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>269.61</td><td data-v-6b535b02>0.32</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>252.86</td><td data-v-6b535b02>0.3</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>269.61</td><td data-v-6b535b02>0.32</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>263.4</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table></div><h3 id="_4-rb16-900e-series" tabindex="-1" data-v-6b535b02>4. RB16-900E Series <a class="header-anchor" href="#_4-rb16-900e-series" aria-label="Permalink to &quot;4. RB16-900E Series&quot;" data-v-6b535b02>​</a></h3><div class="center-align th-align td-align" data-v-6b535b02><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Base (Joint 0)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>63.69</td><td data-v-6b535b02>0.27</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>67.113</td><td data-v-6b535b02>0.29</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>60.864</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>67.113</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>63.89</td><td data-v-6b535b02>0.29</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Horizontal Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Shoulder (Joint 1)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>140.06</td><td data-v-6b535b02>0.33</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>135.55</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>143.88</td><td data-v-6b535b02>0.33</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>143.88</td><td data-v-6b535b02>0.33</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>139.83</td><td data-v-6b535b02>0.32</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Elbow (Joint 2)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>270.96</td><td data-v-6b535b02>0.32</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>266.4</td><td data-v-6b535b02>0.32</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>252.93</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>270.96</td><td data-v-6b535b02>0.32</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>263.43</td><td data-v-6b535b02>0.316</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table></div><h3 id="_5-rb3-730es-series" tabindex="-1" data-v-6b535b02>5. RB3-730ES Series <a class="header-anchor" href="#_5-rb3-730es-series" aria-label="Permalink to &quot;5. RB3-730ES Series&quot;" data-v-6b535b02>​</a></h3><div class="center-align th-align td-align" data-v-6b535b02><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Base (Joint 0)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>122.8</td><td data-v-6b535b02>0.28</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>118.11</td><td data-v-6b535b02>0.27</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>125.99</td><td data-v-6b535b02>0.28</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>125.99</td><td data-v-6b535b02>0.28</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>122.3</td><td data-v-6b535b02>0.276</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Horizontal Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Shoulder (Joint 1)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>182.17</td><td data-v-6b535b02>0.3</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>190.41</td><td data-v-6b535b02>0.35</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>182.64</td><td data-v-6b535b02>0.3</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>190.41</td><td data-v-6b535b02>0.35</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>185.07</td><td data-v-6b535b02>0.32</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Elbow (Joint 2)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>151.06</td><td data-v-6b535b02>0.24</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>147.56</td><td data-v-6b535b02>0.23</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>156.75</td><td data-v-6b535b02>0.28</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>156.75</td><td data-v-6b535b02>0.28</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>151.79</td><td data-v-6b535b02>0.25</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table></div><h3 id="_6-rb6-920es-series" tabindex="-1" data-v-6b535b02>6. RB6-920ES Series <a class="header-anchor" href="#_6-rb6-920es-series" aria-label="Permalink to &quot;6. RB6-920ES Series&quot;" data-v-6b535b02>​</a></h3><div class="center-align th-align td-align" data-v-6b535b02><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Base (Joint 0)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>171.72</td><td data-v-6b535b02>0.24</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>160.14</td><td data-v-6b535b02>0.18</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>165.44</td><td data-v-6b535b02>0.18</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>171.72</td><td data-v-6b535b02>0.24</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>165.77</td><td data-v-6b535b02>0.2</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Horizontal Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Shoulder (Joint 1)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>211.4</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>211.6</td><td data-v-6b535b02>0.3</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>196.8</td><td data-v-6b535b02>0.25</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>211.6</td><td data-v-6b535b02>0.31</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>206.6</td><td data-v-6b535b02>0.29</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Elbow (Joint 2)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>217.3</td><td data-v-6b535b02>0.21</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>211.6</td><td data-v-6b535b02>0.21</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>215.6</td><td data-v-6b535b02>0.21</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>217.3</td><td data-v-6b535b02>0.21</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>214.83</td><td data-v-6b535b02>0.21</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table></div><h3 id="_7-rb20-1900es-series" tabindex="-1" data-v-6b535b02>7. RB20-1900ES Series <a class="header-anchor" href="#_7-rb20-1900es-series" aria-label="Permalink to &quot;7. RB20-1900ES Series&quot;" data-v-6b535b02>​</a></h3><div class="center-align th-align td-align" data-v-6b535b02><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Base (Joint 0)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>219.67</td><td data-v-6b535b02>0.21</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>205.5</td><td data-v-6b535b02>0.2</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>217.72</td><td data-v-6b535b02>0.2</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>219.67</td><td data-v-6b535b02>0.21</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>214.3</td><td data-v-6b535b02>0.2</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Horizontal Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Shoulder (Joint 1)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>359.34</td><td data-v-6b535b02>0.28</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>355.6</td><td data-v-6b535b02>0.27</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>363.33</td><td data-v-6b535b02>0.29</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>363.33</td><td data-v-6b535b02>0.29</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>359.42</td><td data-v-6b535b02>0.28</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table><table data-v-6b535b02><tr data-v-6b535b02><th colspan="3" data-v-6b535b02>Elbow (Joint 2)</th></tr><tr data-v-6b535b02><th data-v-6b535b02></th><th data-v-6b535b02>Stop Distance (mm)</th><th data-v-6b535b02>Stop Time (sec)</th></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 1</th><td data-v-6b535b02>205.35</td><td data-v-6b535b02>0.24</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 2</th><td data-v-6b535b02>150.78</td><td data-v-6b535b02>0.2</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Test 3</th><td data-v-6b535b02>210.02</td><td data-v-6b535b02>0.26</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Maximum</th><td data-v-6b535b02>210.02</td><td data-v-6b535b02>0.26</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Average</th><td data-v-6b535b02>188.72</td><td data-v-6b535b02>0.23</td></tr><tr data-v-6b535b02><th class="sub-title" data-v-6b535b02>Condition</th><td colspan="2" data-v-6b535b02>Max. Reach / Max. Velocity / Vertical Downward Motion</td></tr></table></div>',18),e=[s];function r(h,l,i,o,c,n){return b(),a("div",null,e)}const p=t(v,[["render",r],["__scopeId","data-v-6b535b02"]]);export{m as __pageData,p as default};
