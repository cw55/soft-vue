<template>
    <div id="product">
        <div class="img">
            <img src="../assets/banner_jing.png" alt="">
        </div>
        <div class="content">
            <div class="head_bar">
                <span>位置：</span>
                <a href="/helloworld">首页</a> >
                <span>产品简介</span>
            </div>
            <div class="travel_con">
                <div class="top_qie" id="top_qie">
                    <!-- <router-link :to="{ path: '/news', query: { id: 'a'}}" tag="a">用友T3标准版</router-link>
                    <router-link :to="{ path: '/news', query: { id: 'b'}}" tag="a">用友T6产品线</router-link>
                    <router-link :to="{ path: '/news', query: { id: 'c'}}" tag="a">U890</router-link>
                    <router-link :to="{ path: '/news', query: { id: 'd'}}" tag="a">用友表单</router-link> -->
                    <!-- <a href="javascript:void(0)" @click="routerqaq('a')">用友T3标准版</a>
                    <a href="javascript:void(0)" @click="routerqaq('b')">用友T6产品线</a>
                    <a href="javascript:void(0)" @click="routerqaq('c')">U890</a>
                    <a href="javascript:void(0)" @click="routerqaq('d')">用友表单</a> -->
                    <!-- <router-link to="/product/a" tag="a" @click.native="oclick">用友T3标准版</router-link>
                    <router-link to="/product/b" tag="a" @click.native="oclick">用友T6产品线</router-link>
                    <router-link to="/product/c" tag="a" @click.native="oclick">U890</router-link>
                    <router-link to="/product/d" tag="a" @click.native="oclick">用友表单</router-link> -->
                    <!-- <router-link to="/product/a" tag="a" >用友T3标准版</router-link>
                    <router-link to="/product/b" tag="a" >用友T6产品线</router-link>
                    <router-link to="/product/c" tag="a" >U890</router-link>
                    <router-link to="/product/d" tag="a" >用友表单</router-link> -->
                    <!-- <router-link to="/product/a" tag="a" ref="oclick">用友T3标准版</router-link>
                    <router-link to="/product/b" tag="a" @click.native="oclick(this)">用友T6产品线</router-link>
                    <router-link to="/product/c" tag="a" @click.native="oclick(this)">U890</router-link>
                    <router-link to="/product/d" tag="a" @click.native="oclick(this)">用友表单</router-link> -->
                    <!-- <a href="/product/a">用友T3标准版</a>
                    <a href="/product/b">用友T6产品线</a>
                    <a href="/product/c">U890</a>
                    <a href="/product/d">用友表单</a> -->
                    <!-- <router-link v-for="(item,index) in aList" :to="item.to" tag="a" :key="index" @click.native="addclass" v-bind:class="{ qactive:index==current}">{{item.msg}}</router-link> -->
                    <router-link v-for="(item,index) in aList" :to="item.to" tag="a" :key="index" @click.native="addClass(index)" v-bind:class="{ qactive:index==current}">{{item.msg}}</router-link>
                </div>
            </div>
            <!-- <producta></producta> -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// import producta from '@/components/producta'
export default {
    name: 'product',
    data(){
        return {
            // log:"",
            current:0,
            aList: [
                {to:'/product/a',msg:'用友T3标准版'},
                {to:'/product/b',msg:'用友T6产品线'},
                {to:'/product/c',msg:'U890'},
                {to:'/product/d',msg:'用友表单'}
            ]
        }
    },
    components:{
        // producta
    },
    mounted: function(){
        // $("#top_qie").find("a").eq(0).addClass("qactive");
        
    },
    methods:{
        // addclass:function(event){
        //     // console.log($(event.currentTarget).html())
        //     // $("#top_qie").find("a").removeClass("qactive");
        //     // $(event.currentTarget).addClass("qactive");
        //     var href = location.href;//http://localhost:8080/product/b
        //     var href_index = href.indexOf("product");
        //     var herf_str = href.slice(href_index);//product/b
        //     // console.log(herf_str);
        //     //截取后面的b
        //     var router_link_arr = herf_str.split("\/");
        //     console.log(router_link_arr)
        //     if(router_link_arr.length>1){
        //         var router_link = router_link_arr[1]; //b
        //         console.log(router_link)
        //         // this.log = router_link;
        //         console.log($(event.currentTarget).html());
        //         if(router_link=="a"){
        //             $(event.currentTarget).addClass("qactive").siblings().removeClass("qactive");
        //         }else if(router_link=="b"){
        //             $(event.currentTarget).addClass("qactive").siblings().removeClass("qactive");
        //         }else if(router_link=="c"){
        //             $(event.currentTarget).addClass("qactive").siblings().removeClass("qactive");
        //         }else if(router_link=="d"){
        //             $(event.currentTarget).addClass("qactive").siblings().removeClass("qactive");
        //         }else{
        //             $(event.currentTarget).addClass("qactive").siblings().removeClass("qactive");
        //         }
        //     }
        // },
        addClass:function(index){
            this.current=index;
        }
    },
    watch: {
        // log(log,oldlog) {
        //     console.log(log,oldlog)
        //     if(log=="a"){
        //         $("#top_qie").find("a").eq(0).addClass("qactive").siblings().removeClass("qactive");
        //     }else if(log=="b"){
        //         $("#top_qie").find("a").eq(1).addClass("qactive").siblings().removeClass("qactive");
        //     }else if(log=="c"){
        //         $("#top_qie").find("a").eq(2).addClass("qactive").siblings().removeClass("qactive");
        //     }else if(log=="d"){
        //         $("#top_qie").find("a").eq(3).addClass("qactive").siblings().removeClass("qactive");
        //     }else{
        //         $("#top_qie").find("a").eq(0).addClass("qactive").siblings().removeClass("qactive");
        //     }
        // }
    }
}
</script>

<style>
@import '../assets/css/stroke.css';
.qactive {
  background: url(../assets/a_active.png);
}
.top_qie {
  height: 70px;
  margin-top: 10px;
  background: url(../assets/xie_xian.png) repeat-x bottom;
  width: 100%;
  text-align: center;
}
.top_qie a {
  display: inline-block;
  font-size: 14px;
  color: #666;
  line-height: 35px;
  margin: auto 25px;
  text-decoration: none;
}
.top_qie a:hover {
  background: url(../assets/a_active.png);
}
@media (max-width: 480px) {
  .top_qie a {
    margin: auto 10px;
  }
}
.top_qie a.active {
  background: url(../assets/a_active.png);
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
</style>
