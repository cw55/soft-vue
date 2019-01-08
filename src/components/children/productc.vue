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
  name: "productc",
  data() {
    return {
      shuju: "",
      id:""
    };
  },
  mounted: function() {
    // u8
    var shuju = [
      {
        title: "用友U8+成长型企业互联网应用平台架构",
        name: "",
        content: " ",
        content_ul: [],
        image: "../../../static/img/u8_1.jpg",
        main: ""
      },
      {
        title: "",
        name: "",
        content:
          "用友U8+成长型企业互联网应用平台，为成长型企业提供预配置的管理与业务实践，以企业全面精细化管理方案为核心，融入互联网时代的新兴元素：移动技术、网络营销、电子商务、体验营销，帮助企业实现产业链协同，拓展企业社交化应用，推进企业经营管理模式变革，助力企业基业长青。",
        content_ul: [],
        image: "../../../static/img/u8_2.jpg",
        main: ""
      },
      {
        title: "",
        name: "",
        content: " ",
        content_ul: [],
        image: "../../../static/img/u8_3.jpg",
        main: ""
      },
      {
        title: "用友U8+成长型企业十二大互联网应用模式",
        name: "",
        content:
          "用友U8+为成长型企业提供了十二大互联网应用模式，包括营销服务一体化、电子商务、供应链协同、设计制造一体化、精益生产、精细管控、人力资源、办公协同、移动应用、大数据分析、社交化协同和云服务，成长型企业可以按照不同的管理需求，选择合适的模式。",
        content_ul: [],
        image: "../../../static/img/u8_4.jpg",
        main: ""
      },
      {
        title: "U8+企业互联网应用123部署",
        name: "",
        content: " ",
        content_ul: [],
        image: "../../../static/img/u8_5.jpg",
        main: ""
      },
      {
        title: "完整覆盖 行业支撑",
        name: "",
        content:
          "我们向您提供覆盖企业各个经营及管理环节，高颗粒度的应用方案及产品。&我们利用二十余年在多个行业的专业实践，向您提供全面的行业解决方案及服务。",
        content_ul: [],
        image: "../../../static/img/u8_6.gif",
        main: ""
      },
      {
        title: "经营平台 多端应用",
        name: "",
        content:
          "U8+支持企业实现商业软件的多端（PC、手机、平板等多种设备）多系统（windows、iOS、Android等主流系统）应用部署，实现跨屏应用，结合多种业务协作场景与业务处理流程，发挥移动设备便携特性及互联网广域优势，全面提升企业对最前端客户的消费行为、销售经理及团队的营销行为和营销通路的商业数据采集效率、关键营销业务的审批与处理效率，对提升企业整体市场竞争力，快速洞察市场变化，提升市场响应速度有巨大帮助。",
        content_ul: [],
        image: "../../../static/img/u8_7.gif",
        main: ""
      },
      {
        title: "灵活部署 按需配置",
        name: "",
        content:
          "支持各类企业全生命周期的经营与管理，包括单体（含多工厂）产业链协作经营，多渠道经营的工业及商贸企业。",
        content_ul: [],
        image: "../../../static/img/u8_8.gif",
        main: ""
      },
      {
        title: "深度价值创造",
        name: "",
        content:
          "用友深耕中国及亚太市场25年，将中国企业的经营智慧及全球先进管理思想和技术内化于U8+产品及方案，&全面满足您在不同的发展阶段的管理诉求，追求实效，快速应用，通过数据驱动实现深度价值创造。",
        content_ul: [],
        image: "../../../static/img/u8_9.gif",
        main: ""
      },
      {
        title: "快速见效 全面提升",
        name: "",
        content:
          "U8+可以为您提供简单适用、快速见效、低成本的实施工具，全面提升实施效能。&该工具可使实施周期降低16%，实施成本得到有效控制。",
        content_ul: [],
        image: "../../../static/img/u8_11.gif",
        main: ""
      },
      {
        title: "遍布亚洲及中国的支持服务",
        name: "",
        content: "无论您在哪里，我们都可以为您提供专业、迅捷的服务与支持。",
        content_ul: [],
        image: "../../../static/img/u8_10.gif",
        main: ""
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

