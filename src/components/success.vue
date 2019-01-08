<template>
    <div id="success">
        <div class="img">
            <img src="../assets/banner_jing.png" alt="">
        </div>
        <div class="content">
            <div class="head_bar">
                <span>位置：</span>
                <a href="/helloworld">首页</a> >
                <span>成功案例</span>
            </div>
            <div class="title">
                <div><span>成功案例</span></div>
                <span>SUCCESSFUL CASE</span>
            </div>
            <div class="paper paper2" v-html="paper2"></div>

            <div class="qiehuan">
                <p class="qie_title"><span>客户现场照片</span></p>
                <div class="img_qie">
                    <img :src="imgs" alt="">
                </div>
                <div class="foot_qie">
                    <div class="anniu_foot">
                        <button @click="anniu_top">↑上一个</button>
                    </div>
                    <div class="xiaotu">
                        <div class="xiaotu_box">
                            <div class="xiaotu_img" v-for="(item,index) in items" :key='item.images' @click="plotClick(item.images,index)">
                                <img :src="item.images" alt="">
                                <p class="xiaotu_img_p"><span>{{item.message}}</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="anniu_foot">
                        <button @click="anniu_bottom">下一个↓</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "success",
    data (){
        return {
            paper2: `<p>截至2017年12月，已实施开发交付各类集团企业项目近300家，知名企业如中国海运集团、江苏悦达集团、江苏吴中集团、福建能源集团、南京禄口机场等。</p>
                <p>阅软公司在软件实施方面积累了大量经验，且拥有高素质的实施团队，项目交付能力在用友伙伴中实力最强、客户满意度最高。</p>`,
            imgs: '',
            items:[],
            items2:[],
            ceshi:'',
            index:0,
            jishuqi:0,
            flag: true,
        }
    },
    computed:{
        
    },
    mounted: function(){
        var items= [
                {images: '../../static/images/fendong.png' ,message:'丰东股份'},
                {images: '../../static/images/nanyao.jpg' ,message:'南药集团'},
                {images: '../../static/images/xiandai.png' ,message:'现代快报'},
                {images: '../../static/images/xinbai.png' ,message:'南京新百'},
            ];
            this.items2 = items;
            this.items = items.slice(0,3);
        //默认取前3个
        this.imgs = items[0]['images'];
        this.ceshi = items[0]['images'];//
    },
    methods: {
        plotClick: function(images,index){
            console.log(images,index);
            this.imgs = images;
            this.ceshi = images;
            this.index = index;
        },
        anniu_top: function(event){
            this.index--;
            this.jishuqi++;
            
            if(this.index<0){
                if(this.flag){
                    this.items = this.items2.slice(1);
                    this.imgs = this.items[2]['images'];
                    this.index = 2;
                    this.flag = false;
                    // console.log("111")
                }else{
                    this.items = this.items2.slice(0,3);
                    this.imgs = this.items[0]['images'];
                    this.index = 0;
                    this.flag = true;
                    // console.log("222")
                }
            }else{
                this.imgs = this.items[this.index]['images'];
            }
            // console.log(this.imgs,this.index);
        },
        anniu_bottom: function(event){
            this.index++;
            this.jishuqi++;
            if(this.index>2){
                if(this.flag){
                    this.items = this.items2.slice(1);
                    this.imgs = this.items[2]['images'];
                    this.index = 2;
                    this.flag = false;
                    // console.log("111")
                }else{
                    this.items = this.items2.slice(0,3);
                    this.imgs = this.items[0]['images'];
                    this.index = 0;
                    this.flag = true;
                    // console.log("222")
                }
            }else{
                this.imgs = this.items[this.index]['images'];
            }
            // console.log(this.imgs,this.index);
        }
    },
    watch: {
        jishuqi(newQuestion, oldQuestion) {
            // console.log(newQuestion, oldQuestion);
            //让下标者高亮
            // console.log(this.items)
            // var xiabiao_arr = this.items;
            // var imgs_str = this.imgs;
            // console.log(imgs_str)
            // var xiabiao_index = 0;
            // for(var i=0;i<xiabiao_arr.length;i++){
            //     console.log(xiabiao_arr[i]['images'])
            //     if(xiabiao_arr[i]['images'] == imgs_str){
            //         xiabiao_index = i;
            //         console.log(xiabiao_index)
            //         $(".xiaotu_img").removeClass("my_class").eq(xiabiao_index).addClass("my_class")
            //         break;
            //     }
            // }
            //  $(".xiaotu_img").removeClass("my_class").eq(this.index).addClass("my_class")
            
        },
    }
}
</script>

<style>
@import '../assets/css/stroke.css';
.paper2{
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    padding: 0.75rem 0;
}
.anniu_foot{
    text-align: center;
}
.anniu_foot button{
    outline: none;
    background: #fff;
    border: 1px solid #999;
    box-shadow: 2px 2px 1px #999;
    font-family: 'SimSun', 'Arial Narrow', Arial, sans-serif;
    font-size: 0.875rem;
    color:#666;
    padding:0.2rem 0.5rem;
    cursor: pointer;
    transition: all .3s;
}
.anniu_foot button:hover{
    border: 1px solid #81a849;
    box-shadow: 2px 2px 1px #81a849;
    color:#81a849;
}
.qiehuan{
    margin: 2rem 0;
}
.qiehuan .qie_title{
    margin-top: 2.5rem;
    text-align: center;
    font-size: 1.25rem;
    font-weight: bold;
    color:#81a849;
}
.qiehuan .img_qie{
    text-align: center;
    width: 100%;
    max-height: 37.5rem;
    overflow: hidden;
}
.qiehuan .img_qie img{
    width: 100%;
}
.qiehuan .foot_qie{
    height: 12rem;
    /* display: flex; */
    /* justify-content:space-between; */
    overflow: hidden;
    margin: 1.75rem 0;
}
.qiehuan .foot_qie .anniu_foot{
    float: left;
    width: 6%;
    /* height: 10.2rem; */
    text-align: center;
    margin-top: 5rem;
}
.qiehuan .foot_qie .anniu_foot:first-child{
    float: left;
}
.qiehuan .foot_qie .anniu_foot:last-child{
    float: right;
}
/* .qiehuan .foot_qie .anniu_foot button{
    
} */
.qiehuan .foot_qie .xiaotu{
    margin-left: 6%;
    float: left;
    width: 80%;
    /* margin: 0 auto; */
    /* overflow: hidden; */
    position: relative;
    height: 11.2rem;
}
.qiehuan .foot_qie .xiaotu .xiaotu_box{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.qiehuan .foot_qie .xiaotu .xiaotu_img{
    border-bottom: 1px solid #cccccc;
    width: 30%;
    display: inline-block;
    margin: 0 1%;
    cursor: pointer;
    transition: all 0.3s;
}
.qiehuan .foot_qie .xiaotu .xiaotu_img img{
    width: 100%;
}
.qiehuan .foot_qie .xiaotu .xiaotu_img p{
    margin: 0.4rem;
    color:#666;
    text-indent: 1rem;
}
.qiehuan .foot_qie .xiaotu .xiaotu_img:hover{
    border-bottom: 1px solid #81a849;
}
.qiehuan .foot_qie .xiaotu .xiaotu_img:hover p{
    color:#81a849;
}
.my_class{
    border-bottom: 1px solid #81a849 !important;
}
.my_class p{
    color:#81a849 !important;
}
</style>
