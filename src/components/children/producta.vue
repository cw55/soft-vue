<template>
  <div id="producta">
    <div class="top_tit">
      <span class="span1">产品介绍{{id}}</span>
    </div>
    <div class="my_content" id="my_content" v-html="shuju">
      
    </div>
  </div>
</template>

<script>
import {append} from '../../assets/js/common.js';
export default {
  name: "producta",
  data() {
    return {
      shuju: "",
      id:""
    };
  },
  mounted: function() {
    var shuju = [
      {
        title: "规范管理，精细理财",
        name: "T3",
        content:
          "面向小微企业财务、业务一体化管理的财务软件，帮助企业管好财务、理清业务，方便易用，是财务人员的好帮手。产品支持2013《小企业会计准则》。",
        content_ul: [],
        image: "../../../static/img/t3_1.jpg",
        main: ""
      },
      {
        title: "财务核算自动化",
        name: "T3",
        content: "",
        content_ul: [
          "变“手工账”为“电脑账”：预置工业、商业等行业的标准会计科目模板，帮您规范建账",
          "提供“常用凭证”：下账科目不用背，业务处理很顺手；全仿真凭证，让您看着顺眼",
          "轻点鼠标：总账、明细、日记账自动登，让您感觉贴心",
          "记完账后出报表：资产负债表、损益表、现金流量表等基础报表全都有",
          "及时、迅速、准确地获取信息，对会计数据进行再加工，为企业管理者",
          "支持2013《小企业会计准则》及营改增政策：预置符合政策的会计科目及报表模板、常用科目、常用凭证",
          "帮您算工资：一次性录入职工工资数，软件自动帮您算工资",
          "帮您管资产：一次性录入资产卡片，软件自动帮您提折旧",
          "帮您做分析：提供会计报表分析、财务指标分析，协助您做决策"
        ],
        image: "../../../static/img/t3_2.jpg",
        main: ""
      },
      {
        title: "主要功能",
        name: "T3",
        content: "",
        content_ul: [],
        image: "",
        main:
          "账务处理、出纳管理、税务管家、报表、工资管理、固定资产、财务分析、核算管理等。（以最终购买版本为准）"
      }
    ];
    var a = append(shuju);
    this.shuju = a;
  },
  methods: {
    
  }
};
</script>

<style>
#producta {
  background: #fff;
}
.top_tit {
  text-align: center;
  margin: 0 auto;
}
.top_tit span {
  display: inline-block;
}
.top_tit .span1 {
  font-size: 30px;
  font-family: "微软雅黑";
  color: #81a849;
  font-weight: bold;
}
@media (max-width: 480px) {
  .top_tit {
    margin: 30px auto;
  }
}
.my_content {
  background: #fff;
  width: 84%;
  margin: 0 auto;
}
.my_content .my_title {
  text-align: center;
  font-size: 20px;
  color: #81a849;
  font-weight: bold;
  margin: 20px;
}
.my_content .my_box p {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding: 10px 0;
}
.my_content .my_box p span:nth-child(1) {
  font-size: 18px;
  font-weight: bold;
  color: red;
}
.my_content .my_box p span:nth-child(2) {
  font-size: 14px;
  color: #666;
}
.my_content .my_box img {
  display: block;
  width: 60%;
  margin: 0 auto;
  padding: 10px 0;
}
.my_content .my_box ul {
  margin: 10px;
}
.my_content .my_box ul li {
  list-style: none;
  margin: 10px 0;
}
.my_content .my_box ul li span {
  color: #8d8888;
  font-size: 14px;
}
@media (max-width: 480px) {
  .my_content .my_box p,
  .my_content .my_box img {
    width: 94%;
  }
  .my_content .my_box ul li {
    margin: 2px 0;
  }
}
.my_content .my_main {
  padding: 10px 0;
}
.my_content .my_main p span {
  font-size: 16px;
  color: #666;
}
.my_content .my_main p:nth-child(1) span {
  color: red;
  font-weight: bold;
}
</style>

