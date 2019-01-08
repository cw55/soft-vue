<template>
    <div id="rag">
        <div class="img">
            <img src="../assets/banner_jing.png" alt="">
        </div>
        <div class="content">
            <div class="head_bar">
                <span>位置：</span>
                <a href="/helloworld">首页</a> >
                <span>公司概况</span>
            </div>

            <div class="title">
                <div><span>公司概况</span></div>
                <span>COMPANY OVERVIEW</span>
            </div>

            <div class="paper" v-html="paper"></div>

            <div class="zhanshitu">
                <div v-for="item in items">
                    <img :src="item.message" alt="">
                </div>
            </div>

            <div class="xia">
                <img src="../assets/xia.png" alt="">
            </div>

            <div class="xie_xian"></div>

            <div class="title">
                <div><span>合作伙伴</span></div>
                <span>COOPERATIVE PARTNER</span>
            </div>

            <div class="zhanshitu">
                <div v-for="item in items1">
                    <img :src="item.message" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "rag",
    data(){
        return {
            paper: `<p>南京阅软信息技术有限公司致力于为社会组织及集团型企业提供信息化服务，</p>
                <p>提供办公OA系统、财务管理系统、供应链系统、人力资源系统、企业门户网站、商业运营系统、物业管理系统、预算管理系统、项目投资管理系统、成本管理系统等咨询、实施和开发服务，</p>
                <p>依托世界级的uap、iuap软件平台整合、优化、提高中国用户的流程管理水平。是用友集团认证的十家专业服务伙伴之一。</p>`,
            items: [
                { message: '../../static/jing1.png' },
                { message: '../../static/jing2.png' },
                { message: '../../static/jing3.png' },
            ],
            items1: [
                { message: '../../static/fengdong.png' },
                { message: '../../static/fengsheng.png' },
                { message: '../../static/guolianjituan.png' },
                { message: '../../static/xiandai.png' }
            ]
        }
    }
}
</script>

<style>
.img{
    /* height: 14rem; */
    overflow: hidden;
}
.img img{
    width: 100%;
}
.content{
    max-width: 1240px;
    margin: 0.6rem auto;
}
.head_bar{
    width: 98%;
    text-align: right;
    font-size: 14px;
    color: #999;
    
}
.head_bar a{
    color: #999;
}
.head_bar a:hover{
    color: black;
}
.title{
    text-align: center;
    padding: 1.8rem 0 10px;
}
.title span:nth-child(1){
    font-size: 1.8rem;
    font-family: fixedsys;
    color: #81a849;
    font-weight: bold;
}
.title span:nth-child(2){
    font-family: arial;
    color: #b2b2b2;
    font-size: 0.75rem;
}
.title span:nth-child(1)::before{
    content: url(../assets/quan.png);
    position: relative;
    left: -0.75rem;
    top: -1.25rem;
}
.paper{
    text-align: center;
    margin-top: 2.5rem;
}
.paper p{
    margin: 0.5rem 0;
    color: #666666;
    font-size: 0.875rem;
}
.zhanshitu{
    margin-top: 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
@media (max-width: 992px) {
    .zhanshitu{
        margin-top: 1.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
}
.zhanshitu div{
    /* width: 300px; */
    /* border:1px solid #999; */
    transition: 0.3s;
    overflow: hidden;
    margin: 0.625rem;
    text-align: center;
}

.zhanshitu div:hover{
    /* transform: scale(1.2); */
}
.zhanshitu div img{
    /* padding: 30px; */
    transition: 0.5s;
}
.zhanshitu div:hover img{
    transform: scale(1.2);
}
.xia{
    margin-top: 20px;
    text-align: center;
    position: relative;
    height: 2.5rem;
}
.xia img{
    position: absolute;
    top: 0px;
    animation-name: myfirst;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-play-state: running;
}
@keyframes myfirst {
  0% {
    left: 50%;
    top: 0%;
  }
  25% {
    left: 50%;
    top: 10%;
  }
  50% {
    left: 50%;
    top: 20%;
  }
  75% {
    left: 50%;
    top: 30%;
  }
  100% {
    left: 50%;
    top: 40%;
  }
}
.xie_xian{
    height: 0.4rem;
    line-height: 0.4rem;
    background: url(../assets/xie_xian.png) repeat-x;
}
</style>
