import{_ as d,c,o as r,U as v,q as _,s as o,m as t,a as R}from"./chunks/framework.D1v9chL3.js";const N=JSON.parse('{"title":"How to use Allen-Bradley PLC Ethernet IP","description":"","frontmatter":{"layout":"doc","outline":"deep"},"headers":[],"relativePath":"example_manual/3000/how_to_use_allen_bradley.md","filePath":"example_manual/3000/how_to_use_allen_bradley.md"}'),n={name:"example_manual/3000/how_to_use_allen_bradley.md"},a=e=>(_("data-v-e35ec55e"),e=e(),o(),e),s=a(()=>t("h1",{id:"how-to-use-allen-bradley-plc-ethernet-ip",tabindex:"-1"},[R("How to use Allen-Bradley PLC Ethernet IP "),t("a",{class:"header-anchor",href:"#how-to-use-allen-bradley-plc-ethernet-ip","aria-label":'Permalink to "How to use Allen-Bradley PLC Ethernet IP"'},"​")],-1)),E=a(()=>t("br",null,null,-1)),p=a(()=>t("iframe",{src:"https://rainbowco-my.sharepoint.com/:p:/g/personal/hyoin_rainbow-robotics_com/ES1jynJYxb9IpQ1lEL_bBEYBd23gzMVQC7WEs6z73C7lRA?e=DOi447&action=embedview&wdbipreview=true&wdAr=1.7777777777777777",width:"720px",height:"480px",frameborder:"0"},null,-1)),S=v('<p data-v-e35ec55e># Allen-Bradley PLC Ethernet IP # Allen-Bradley PLC example manual # studio5000 connection # Allen-Bradley PLC IP set # RB address eds # monitor tags data # RB IP address set # RB Ethernet IP set # Allen-Bradley PLC example video</p><h3 id="cf-rb-eds-tags-map-i-data" tabindex="-1" data-v-e35ec55e>cf. RB EDS Tags Map (I.Data) <a class="header-anchor" href="#cf-rb-eds-tags-map-i-data" aria-label="Permalink to &quot;cf. RB EDS Tags Map (I.Data)&quot;" data-v-e35ec55e>​</a></h3><div class="center-align last-child-align th-align td-align" data-v-e35ec55e><table data-v-e35ec55e><tr data-v-e35ec55e><th colspan="4" data-v-e35ec55e>Robot -&gt; PLC(IN) I Data Map</th></tr><tr data-v-e35ec55e><th data-v-e35ec55e>I.Data(Byte)</th><th data-v-e35ec55e>Function</th><th data-v-e35ec55e>EDS NAME</th><th data-v-e35ec55e>Data Type</th></tr><tr data-v-e35ec55e><td data-v-e35ec55e>0</td><td rowspan="2" data-v-e35ec55e>BOX_DIGITAL_IN_0~15</td><td rowspan="40" data-v-e35ec55e>UINT</td><td rowspan="40" data-v-e35ec55e>Unsigned INT</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>1</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>2</td><td rowspan="2" data-v-e35ec55e>BOX_DIGITAL_OUT_0~15</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>3</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>4</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_IN_0 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>5</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>6</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_IN_1 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>7</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>8</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_IN_2 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>9</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>10</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_IN_3 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>11</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>12</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_OUT_0 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>13</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>14</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_OUT_1 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>15</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>16</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_OUT_2 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>17</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>18</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_OUT_3 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>19</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>20</td><td rowspan="2" data-v-e35ec55e>EX_DIGITAL_IN_0~15</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>21</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>22</td><td rowspan="2" data-v-e35ec55e>EX_DIGITAL_OUT_0~15</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>23</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>24</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_IN_0 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>25</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>26</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_IN_1 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>27</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>28</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_IN_2 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>29</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>30</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_IN_3 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>31</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>32</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_OUT_0 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>33</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>34</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_OUT_1 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>35</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>36</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_OUT_2 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>37</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>38</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_OUT_3 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>39</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>40</td><td data-v-e35ec55e>TOOL_VOLTAGE</td><td rowspan="16" data-v-e35ec55e>USINT</td><td rowspan="16" data-v-e35ec55e>Unsigned Small INT</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>41</td><td data-v-e35ec55e>TOOL_DIGITAL_IN_0~5</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>42</td><td data-v-e35ec55e>TOOL_DIGITAL_OUT_0~1</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>43</td><td data-v-e35ec55e>STATE_IS_ROBOT_ACTIVATED</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>44</td><td data-v-e35ec55e>STATE_IS_REAL_MODE</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>45</td><td data-v-e35ec55e>STATE_IS_COLL_DETECTED</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>46</td><td data-v-e35ec55e>STATE_IS_ARM_POWER_ENGAGED</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>47</td><td data-v-e35ec55e>STATE_IS_DIRECT_TEACHING_MODE</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>48</td><td data-v-e35ec55e>STATE_IS_ROBOT_MOVING</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>49</td><td data-v-e35ec55e>STATE_IS_PAUSE_STATE</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>50</td><td data-v-e35ec55e>STATE_IS_TP_CONNECTED</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>51</td><td data-v-e35ec55e>STATE_IS_PROGRAM_RUN</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>52</td><td data-v-e35ec55e>STATE_IS_NOARC_ON</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>53</td><td data-v-e35ec55e>STATE_IS_EMG_BTN_RELEASED</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>54</td><td data-v-e35ec55e>STATE_IS_FIRST_PROG_RUN</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>55</td><td data-v-e35ec55e>Robot_Speed_Bar</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>56</td><td rowspan="2" data-v-e35ec55e>Robot_J0_CUR * 100</td><td rowspan="64" data-v-e35ec55e>SINT</td><td rowspan="64" data-v-e35ec55e>Signed INT</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>57</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>58</td><td rowspan="2" data-v-e35ec55e>Robot_J1_CUR * 100</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>59</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>60</td><td rowspan="2" data-v-e35ec55e>Robot_J2_CUR * 100</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>61</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>62</td><td rowspan="2" data-v-e35ec55e>Robot_J3_CUR * 100</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>63</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>64</td><td rowspan="2" data-v-e35ec55e>Robot_J4_CUR * 100</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>65</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>66</td><td rowspan="2" data-v-e35ec55e>Robot_J5_CUR * 100</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>67</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>68</td><td rowspan="2" data-v-e35ec55e>Robot_J0_TEMP * 100</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>69</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>70</td><td rowspan="2" data-v-e35ec55e>Robot_J1_TEMP * 100</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>71</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>72</td><td rowspan="2" data-v-e35ec55e>Robot_J2_TEMP * 100</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>73</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>74</td><td rowspan="2" data-v-e35ec55e>Robot_J3_TEMP * 100</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>75</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>76</td><td rowspan="2" data-v-e35ec55e>Robot_J4_TEMP * 100</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>77</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>78</td><td rowspan="2" data-v-e35ec55e>Robot_J5_TEMP * 100</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>79</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>80</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_0</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>81</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>82</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_1</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>83</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>84</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_2</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>85</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>86</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_3</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>87</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>88</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_4</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>89</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>90</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_5</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>91</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>92</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_6</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>93</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>94</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_7</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>95</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>96</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_8</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>97</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>98</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_9</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>99</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>100</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_10</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>101</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>102</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_11</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>103</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>104</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_12</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>105</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>106</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_13</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>107</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>108</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_14</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>109</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>110</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_15</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>111</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>112</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_16</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>113</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>114</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_17</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>115</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>116</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_18</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>117</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>118</td><td rowspan="2" data-v-e35ec55e>USER_SINT_R2P_19</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>119</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>120</td><td rowspan="4" data-v-e35ec55e>CB_SOFT_VERSION</td><td rowspan="8" data-v-e35ec55e>DINT</td><td rowspan="8" data-v-e35ec55e>Double Signed INT</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>121</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>122</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>123</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>124</td><td rowspan="4" data-v-e35ec55e>CB_ROBOT_TYPE_CODE</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>125</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>126</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>127</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>128</td><td rowspan="4" data-v-e35ec55e>Robot_X_REF</td><td rowspan="132" data-v-e35ec55e>REAL</td><td rowspan="132" data-v-e35ec55e>Float</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>129</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>130</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>131</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>132</td><td rowspan="4" data-v-e35ec55e>Robot_Y_REF</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>133</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>134</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>135</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>136</td><td rowspan="4" data-v-e35ec55e>Robot_Z_REF</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>137</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>138</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>139</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>140</td><td rowspan="4" data-v-e35ec55e>Robot_RX_REF</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>141</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>142</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>143</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>144</td><td rowspan="4" data-v-e35ec55e>Robot_RY_REF</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>145</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>146</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>147</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>148</td><td rowspan="4" data-v-e35ec55e>Robot_RZ_REF</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>149</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>150</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>151</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>152</td><td rowspan="4" data-v-e35ec55e>Robot_J0_REF</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>153</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>154</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>155</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>156</td><td rowspan="4" data-v-e35ec55e>Robot_J1_REF</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>157</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>158</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>159</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>160</td><td rowspan="4" data-v-e35ec55e>Robot_J2_REF</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>161</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>162</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>163</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>164</td><td rowspan="4" data-v-e35ec55e>Robot_J3_REF</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>165</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>166</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>167</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>168</td><td rowspan="4" data-v-e35ec55e>Robot_J4_REF</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>169</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>170</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>171</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>172</td><td rowspan="4" data-v-e35ec55e>Robot_J5_REF</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>173</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>174</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>175</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>176</td><td rowspan="4" data-v-e35ec55e>Robot_TCP_VEL</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>177</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>178</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>179</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>180</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_0</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>181</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>182</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>183</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>184</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_1</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>185</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>186</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>187</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>188</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_2</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>189</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>190</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>191</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>192</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_3</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>193</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>194</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>195</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>196</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_4</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>197</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>198</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>199</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>200</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_5</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>201</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>202</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>203</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>204</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_6</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>205</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>206</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>207</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>208</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_7</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>209</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>210</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>211</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>212</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_8</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>213</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>214</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>215</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>216</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_9</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>217</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>218</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>219</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>220</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_10</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>221</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>222</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>223</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>224</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_11</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>225</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>226</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>227</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>228</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_12</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>229</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>230</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>231</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>232</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_13</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>233</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>234</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>235</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>236</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_14</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>237</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>238</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>239</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>240</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_15</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>241</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>242</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>243</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>244</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_16</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>245</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>246</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>247</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>248</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_17</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>249</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>250</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>251</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>252</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_18</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>253</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>254</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>255</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>256</td><td rowspan="4" data-v-e35ec55e>USER_REAL_R2P_19</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>257</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>258</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>259</td></tr></table></div><h3 id="cf-rb-eds-tags-map-o-data" tabindex="-1" data-v-e35ec55e>cf. RB EDS Tags Map (O.Data) <a class="header-anchor" href="#cf-rb-eds-tags-map-o-data" aria-label="Permalink to &quot;cf. RB EDS Tags Map (O.Data)&quot;" data-v-e35ec55e>​</a></h3><div class="center-align last-child-align th-align td-align" data-v-e35ec55e><table data-v-e35ec55e><tr data-v-e35ec55e><th colspan="4" data-v-e35ec55e>PLC -&gt; Robot(OUT) O Data Map</th></tr><tr data-v-e35ec55e><th data-v-e35ec55e>O.Data(Byte)</th><th data-v-e35ec55e>Function</th><th data-v-e35ec55e>EDS NAME</th><th data-v-e35ec55e>Data Type</th></tr><tr data-v-e35ec55e><td data-v-e35ec55e>0</td><td rowspan="2" data-v-e35ec55e>BOX_DIGITAL_OUT_MASK_0~15</td><td rowspan="40" data-v-e35ec55e>UINT</td><td rowspan="40" data-v-e35ec55e>Unsigned INT</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>1</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>2</td><td rowspan="2" data-v-e35ec55e>BOX_DIGITAL_OUT_0~15</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>3</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>4</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_OUT_0_MASK</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>5</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>6</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_OUT_1_MASK</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>7</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>8</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_OUT_2_MASK</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>9</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>10</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_OUT_3_MASK</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>11</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>12</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_OUT_0 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>13</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>14</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_OUT_1 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>15</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>16</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_OUT_2 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>17</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>18</td><td rowspan="2" data-v-e35ec55e>BOX_ANALOG_OUT_3 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>19</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>20</td><td rowspan="2" data-v-e35ec55e>EX_DIGITAL_OUT_MASK_0~15</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>21</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>22</td><td rowspan="2" data-v-e35ec55e>EX_DIGITAL_OUT_0~15</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>23</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>24</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_OUT_0_MASK</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>25</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>26</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_OUT_1_MASK</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>27</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>28</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_OUT_2_MASK</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>29</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>30</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_OUT_3_MASK</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>31</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>32</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_OUT_0 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>33</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>34</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_OUT_1 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>35</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>36</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_OUT_2 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>37</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>38</td><td rowspan="2" data-v-e35ec55e>EX_ANALOG_OUT_3 * 1000</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>39</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>40</td><td data-v-e35ec55e>CTRL_START_PROG_ONCE</td><td rowspan="12" data-v-e35ec55e>USINT</td><td rowspan="12" data-v-e35ec55e>Unsigned Small INT</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>41</td><td data-v-e35ec55e>CTRL_START_PROG_REPEAT</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>42</td><td data-v-e35ec55e>CTRL_PAUSE_PROG</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>43</td><td data-v-e35ec55e>CTRL_STOP_PROG</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>44</td><td data-v-e35ec55e>CTRL_RESUME_PAUSE</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>45</td><td data-v-e35ec55e>CTRL_RESUME_COLLISION</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>46</td><td data-v-e35ec55e>CTRL_LOAD_DEFAULT_PROG</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>47</td><td data-v-e35ec55e>CTRL_ARM_ACTIVATION</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>48</td><td data-v-e35ec55e>CTRL_CHANGE_TO_REAL</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>49</td><td data-v-e35ec55e>CTRL_ARM_POWER_OFF</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>50</td><td data-v-e35ec55e>CTRL_DUMMY_1</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>51</td><td data-v-e35ec55e>CTRL_DUMMY_2</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>52</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_0</td><td rowspan="40" data-v-e35ec55e>SINT</td><td rowspan="40" data-v-e35ec55e>Signed INT</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>53</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>54</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_1</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>55</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>56</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_2</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>57</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>58</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_3</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>59</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>60</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_4</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>61</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>62</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_5</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>63</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>64</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_6</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>65</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>66</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_7</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>67</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>68</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_8</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>69</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>70</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_9</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>71</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>72</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_10</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>73</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>74</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_11</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>75</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>76</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_12</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>77</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>78</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_13</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>79</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>80</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_14</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>81</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>82</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_15</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>83</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>84</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_16</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>85</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>86</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_17</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>87</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>88</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_18</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>89</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>90</td><td rowspan="2" data-v-e35ec55e>USER_SINT_P2R_19</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>91</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>92</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_0</td><td rowspan="80" data-v-e35ec55e>REAL</td><td rowspan="80" data-v-e35ec55e>Float</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>93</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>94</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>95</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>96</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_1</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>97</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>98</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>99</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>100</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_2</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>101</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>102</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>103</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>104</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_3</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>105</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>106</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>107</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>108</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_4</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>109</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>110</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>111</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>112</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_5</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>113</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>114</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>115</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>116</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_6</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>117</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>118</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>119</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>120</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_7</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>121</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>122</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>123</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>124</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_8</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>125</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>126</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>127</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>128</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_9</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>129</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>130</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>131</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>132</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_10</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>133</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>134</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>135</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>136</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_11</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>137</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>138</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>139</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>140</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_12</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>141</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>142</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>143</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>144</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_13</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>145</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>146</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>147</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>148</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_14</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>149</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>150</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>151</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>152</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_15</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>153</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>154</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>155</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>156</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_16</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>157</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>158</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>159</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>160</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_17</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>161</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>162</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>163</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>164</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_18</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>165</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>166</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>167</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>168</td><td rowspan="4" data-v-e35ec55e>USER_REAL_P2R_19</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>169</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>170</td></tr><tr data-v-e35ec55e><td data-v-e35ec55e>171</td></tr></table></div>',5),T=[s,E,p,S];function w(e,A,U,O,I,P){return r(),c("div",null,T)}const l=d(n,[["render",w],["__scopeId","data-v-e35ec55e"]]);export{N as __pageData,l as default};
