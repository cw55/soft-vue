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
  name: "productd",
  data() {
    return {
      shuju: "",
      id:""
    };
  },
  mounted: function() {
    var shuju1 = [
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

    // 做成单页面，就直接写了
    var shuju2 = [
      {
        title: "规范流程，提升效益",
        name: "T6",
        content: "",
        content_ul: [
          "为成长型企业提供财务、业务、生产一体化管理，帮助企业规范流程，提升企业运营效益",
          "为企业管理者提供多角度的经营数据分析，帮助管理者洞察企业经营变化，做好决策分析 ",
          "产品支持最新《小企业会计准则》、《企业会计信息化工作规范》",
          "产品全面适应WIN10系统"
        ],
        image: "../../../static/img/t6_1.jpg",
        main: ""
      },
      {
        title: "移动看经营",
        name: "T6",
        content:
          "云看板，您贴身的数据分析师 &实时呈现企业经营数据（支持pc端、平板、手机、TV等），提供“盈亏预测“、”销售毛利分析“、”费用分析”，助管理者盯住利润；“资金预测“、”应收款分析“、”库存资金占用分析“、”市场价值分析“、”超期发货分析”帮管理者管好现金",
        content_ul: [],
        image: "../../../static/img/t6_2.jpg",
        main: ""
      },
      {
        title: "订货平台帮您盯生意",
        name: "T6",
        content: "",
        content_ul: [
          "为您的经销商提供专属订货平台，满足企业对经销商管理的需求，帮企业提升订单处理效率",
          "与T6系统完美集成，经销商下达订单后自动同步至T6系统",
          "多种商品展示风格，支持企业经销商24小时自主下单订货"
        ],
        image: "../../../static/img/t6_3.jpg",
        main: ""
      },
      {
        title: "流程式管控，过程化管理",
        name: "T6",
        content:
          "对业务各环节实行流程式管控，对核心业务做到事前计划、事中控制、事后分析&通过建立数据信息共享平台，解决企业部门之间数据分散、信息不集成的问题，实现企业内部的过程化管理&支持企业中不同角色人员轻松实现从业务处理到财务核算，再到多维度的报表分析的全过程管理&在帮助企业管理财务、供应链、生产等业务的同时，兼顾企业人力资源、客户关系、协同办公的管理",
        content_ul: [],
        image: "../../../static/img/t6_4.jpg",
        main: ""
      },
      {
        title: "业务流程全管理，关键流程全控制",
        name: "T6",
        content:
          "财务管理：以业务凭证为核心，完成从财务核算到多维度报表分析的全过程管理。&助您实现&资金流向追溯；业务往来核算；收付款计划；成本核算；工资核算与发放；企业资产动态管理；固定资产折旧与处理；财经报表编制；财务决策分析。",
        content_ul: [],
        image: "../../../static/img/t6_5.jpg",
        main: ""
      },
      {
        title: "",
        name: "T6",
        content: "",
        content_ul: [
          "供应链管理：对采购、销售、仓库业务实行全过程管理，规范业务流程。",
          "助您实现：",
          "供应商管理及采购业务全过程跟踪，降低采购成本；",
          "客户管理及销售订单全过程跟踪，降低赊销风险确保及时交货；",
          "优化库存结构，对企业资源进行有效调配，降低库存积压和业务风险；",
          "准确的存货成本核算，有效监督存货资金占用的动态变化。"
        ],
        image: "../../../static/img/t6_6.jpg",
        main: ""
      },
      {
        title: "会上网就会用的OA",
        name: "T6",
        content: "",
        content_ul: [
          "T-协同办公管理，帮助企业打造简约、实时、便捷的协同办公平台。帮助企业实现：",
          "图形化工作流程审批",
          "制度执行",
          "企业级知识管理",
          "业务协同管理",
          "手机移动办公"
        ],
        image: "../../../static/img/t6_7.jpg",
        main: ""
      },
      {
        title: "",
        name: "T6",
        content: "",
        content_ul: [
          "产品应用特色",
          "与T6-企业管理软件集成应用：统一平台登陆，减少资源浪费；",
          "导航式应用：指引使用者轻松进入网络办公环境，实现协同办公；",
          "实时管理：在任何时候、任何事项都能够快速处理，协同高效；",
          "工作流程图形化：个性化流程随意定，流转更透明；",
          "移动处理：包括新闻、公告、邮件、通讯录查看，流程提醒、查看、审批等；",
          "消息推送：待办消息直接推送至手机消息中心，第一时间提醒；",
          "信息同步：内部通讯录、个人通讯录、日程、计划同步处理，信息及时，快速准确不遗漏；"
        ],
        image: "../../../static/img/t6_8.jpg",
        main: ""
      },
      {
        title: "T6 HR 将企业HR解放出来",
        name: "T6",
        content:
          "聚焦于中小企业人力资源管理业务，实现与T6-企业管理软件的紧密集成和数据对接，更好地满足企业对人力资源管理的需求。",
        content_ul: [],
        image: "",
        main: ""
      },
      {
        title: "",
        name: "T6",
        content: "",
        content_ul: [
          "产品应用特色：",
          "及时了解员工信息，快速甄选优秀人才，加强企业对人力资本的管理；",
          "对人力资源进行重新配置，智能化管理，弥补管理漏洞，以适应不断变化的形势；",
          "人力资源数据分析实现劳动力优化，合理规避用工风险，降低用工成本；",
          "通过培训与绩效考核管理使员工快速适应岗位要求，提升员工整体素质；",
          "集中记录、监测和分析所有劳动力的技能和资格，提供决策分析；",
          "对薪资、考勤、绩效进行全面一体化管理；",
          "提供人力资源事管理常用的报表，也可根据企业实际需要进行自定义报表；",
          "员工及经理角色自助平台，实现企业全员参与到人力资源管理中；"
        ],
        image: "../../../static/img/t6_9.jpg",
        main: ""
      },
      {
        title: "主要功能",
        name: "T6",
        content: "",
        content_ul: [],
        image: "",
        main:
          "总账、UFO报表、应收款管理、应付款管理、出纳管理、网上银行、工资管理、固定资产管理、成本管理、财务分析、税务管理、采购管理、销售管理、委外管理、库存管理、存货核算、生产管理等。（以最终购买版本为准）"
      }
    ];

    // u8
    var shuju3 = [
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
    
    var a = append(shuju1);
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

