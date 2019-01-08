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
  name: "productb",
  data() {
    return {
      shuju: "",
      id:""
    };
  },
  mounted: function() {
    // 做成单页面，就直接写了
    var shuju = [
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

