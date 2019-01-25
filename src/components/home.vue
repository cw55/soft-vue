<template>
    <div id="hello">
        <div id="demo" class="carousel slide" data-ride="carousel">
            <!-- 指示符 -->
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <!-- 轮播图片 -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/feature1.jpg">
                    <!-- <div class="carousel-caption">
                        <h3>第一张图片描述标题</h3>
                        <p>描述文字!</p>
                    </div> -->
                </div>
                <div class="carousel-item">
                    <img src="../assets/feature2.jpg">
                </div>
                <div class="carousel-item">
                    <img src="../assets/feature3.jpg">
                </div>
            </div>

            <!-- 左右切换按钮 -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>

        </div>
        <div class="content">
            <div class="title">
                <div><span>公司概况</span></div>
                <span>COMPANY OVERVIEW</span>
            </div>
            <div class="paper" v-html="paper"></div>
            <div class="xia">
                <img src="../assets/xia.png" alt="">
            </div>
            <div class="xie_xian"></div>
            <div class="title">
                <div><span>产品简介</span></div>
                <span>PRODUCT INTRODUCTION</span>
            </div>
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
                <div><span>成功案例</span></div>
                <span>SUCCESSFUL CASE</span>
            </div>

            <div class="lunbo2 overflow ov_box">
                <div class="left ov_left">
                    <div id="lunbo2" class="carousel slide" data-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="../assets/feature1.jpg">
                            </div>
                            <div class="carousel-item">
                                <img src="../assets/feature2.jpg">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right ov_right">
                    <div class="wenzi">
                        <span>阅</span>
                    </div>
                    <div class="leibei">
                        <span>案 |</span>
                        <span>例 |</span>
                        <span>介 |</span>
                        <span>绍</span>
                    </div>
                    <div class="jieshao">
                        截至2017年12月，已实施开发交付各类集团企业项目近300家，积累了大量经验，且拥有高素质的实施团队，项目交付能力在用友伙伴中实力最强、客户满意度最高。
                    </div>
                    <div class="lunbo_anniu overflow">
                        <span class="left" href="#lunbo2" data-slide="prev">上一个</span>
                        <span class="right" href="#lunbo2" data-slide="next">下一个</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- <router-link to="/jiu" class="links">Go to Bar</router-link>
    <router-link to="/helloworld/a" tag="li" >我的收藏</router-link>
    <router-link to="/helloworld/b" tag="li" >我的足迹</router-link>
    <router-link :to="{name:'zuji',params:{'msg':'you go now'}}" tag="li" >我的足迹</router-link>
    <span @click="ceshi">测试route是什么</span>
    <router-view></router-view> -->
    </div>
    <!-- <lunbo/> -->
</template>

<script>
// import lunbo from './lunbo'
export default {
    name: "hello",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            paper: `<p>南京阅软信息技术有限公司致力于为社会组织及集团型企业提供信息化服务，</p>
                <p>提供办公OA系统、财务管理系统、供应链系统、人力资源系统、企业门户网站、商业运营系统、物业管理系统、预算管理系统、项目投资管理系统、成本管理系统等咨询、实施和开发服务，</p>
                <p>依托世界级的uap、iuap软件平台整合、优化、提高中国用户的流程管理水平。是用友集团认证的十家专业服务伙伴之一。</p>`,
            items: [
                { message: "../../static/jing1.png" },
                { message: "../../static/jing2.png" },
                { message: "../../static/jing3.png" }
            ]
        };
    },
    // ,
    // component: {
    //   lunbo
    // }
    methods: {
        ceshi: function() {
            console.log(this.$route);
        }
    }
};
</script>

<style>
.overflow {
    overflow: hidden;
}
.left {
    float: left;
}
.right {
    float: right;
}
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
#hello li {
    display: inline-block;
}
#hello a {
    color: #42b983;
}
#hello {
    /* background: #999; */
    width: 100%;
}
#demo {
    width: 100%;
    margin: 0 auto;
}
.carousel-caption {
    color: #999;
}
.carousel-indicators .active {
    color: #999;
}
.carousel-item img {
    width: 100%;
    height: 100%;
}
.links {
    color: #fff;
}
.content {
    max-width: 1240px;
    margin: 0.6rem auto;
}
.title {
    text-align: center;
    padding: 1.8rem 0 10px;
}
.title span:nth-child(1) {
    font-size: 1.8rem;
    font-family: fixedsys;
    color: #81a849;
    font-weight: bold;
}
.title span:nth-child(2) {
    font-family: arial;
    color: #b2b2b2;
    font-size: 0.75rem;
}
.title span:nth-child(1)::before {
    content: url(../assets/quan.png);
    position: relative;
    left: -0.75rem;
    top: -1.25rem;
}
.paper {
    text-align: center;
    margin-top: 2.5rem;
}
.paper p {
    margin: 0.5rem 0;
    color: #666666;
    font-size: 0.875rem;
}
.zhanshitu {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.zhanshitu div {
    /* width: 300px; */
    /* border:1px solid #999; */
    transition: 0.3s;
    overflow: hidden;
    margin: 0.625rem;
    text-align: center;
}

.zhanshitu div:hover {
    /* transform: scale(1.2); */
}
.zhanshitu div img {
    /* padding: 30px; */
    transition: 0.5s;
}
.zhanshitu div:hover img {
    transform: scale(1.2);
}
.xia {
    margin-top: 20px;
    text-align: center;
    position: relative;
    height: 2.5rem;
}
.xia img {
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
.xie_xian {
    height: 0.4rem;
    line-height: 0.4rem;
    background: url(../assets/xie_xian.png) repeat-x;
}

.ov_box {
    background: #81a849;
    padding: 0.625rem;
    /* min-height: 18.75rem; */
}
.ov_left {
    width: 70%;
}
.ov_right {
    width: 26%;
    margin-right: 1%;
}
.wenzi{
    font-size: 3rem;
    text-align: center;
}
.wenzi span{
    border:1px solid #fff;
    border-radius:100%;
    padding: 0.5rem 0.7rem;
    color: #fff;
    font-family: 'Courier New', Courier, monospace;
}
.leibei{
    text-align: center;
    color:#FFF;
    margin: 0.4rem;
}
/* .leibei span{
    margin: 0.75rem;
}
.leibei span:not(:last-child)::after{
    content: "|";
    color:#fff;
} */

.jieshao{
    font-size: 0.875rem;
    color: #fff;
    margin: 0.4rem;
    padding: 0.8rem;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
}
.lunbo_anniu{
    font-size: 0.9rem;
    color:#FFF;
    margin: 0.4rem 0.4rem 0 0.4rem;
}
.lunbo_anniu span{
    cursor:pointer;
}
.lunbo_anniu span:hover{
    font-weight: bold;
}
.lunbo_anniu span:first-child::before{
    content: "↑";
    color:#fff;
}
.lunbo_anniu span:last-child::after{
    content: "↓";
    color:#fff;
}
#lunbo2 .carousel-item img{
    max-width: 100%;
    height:auto;
    /* height: 17.5rem; */
}
@media (max-width: 992px) {
    .zhanshitu {
        margin-top: 1.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .ov_left,.ov_right{
        width: 100%;
    }
}
</style>
