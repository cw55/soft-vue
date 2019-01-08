<template>
    <!-- 留言板 -->
    <div id="contact">
        <div class="img">
            <img src="../assets/banner_jing.png" alt="">
        </div>
        <div class="content">
            <div class="head_bar">
                <span>位置：</span>
                <a href="/helloworld">首页</a> >
                <span>留言板</span>
            </div>

            <div class="title">
                <div><span>留言板</span></div>
                <span>Message Board</span>
            </div>

            <div class="list_body overflow">
                <div class="left c_list">
                    <!-- <div class="list_titles overflow">
                        <div class="list_titles_left left">
                            <p><span>199</span></p>
                        </div>
                        <div class="list_titles_right right">
                            <div class="overflow why">
                                <div class="baioti left">
                                    <a href="#">标题</a>
                                </div>
                                <div class="right c_author overflow">
                                    <span class="left c_ren">发布人</span>
                                    <span class="c_time right" title="创建时间">14:00</span>
                                </div>
                            </div>
                            <div class="overflow why2">
                                <div class="c_neirong left">
                                    <a href="#">超出隐藏内容：不换行，超出隐藏</a>
                                </div>
                                <div class="right new_author overflow">
                                    <span class="left c_ren">最新评论人</span>
                                    <span class="c_new_time right" title="最近评论时间">14:22</span>
                                </div>
                            </div>
                            <div class="c_img">
                                <img src="../assets/banner_contact.png"  height="100px" alt="">
                            </div>
                        </div>
                    </div> -->
                    
                    <div class="list_titles overflow" v-for="item in data_list" :key="item.liuyan_id">
                        <div class="list_titles_left left">
                            <p><span>{{item.liuyan_pinglunshu ? item.liuyan_pinglunshu:0}}</span></p>
                        </div>
                        <div class="list_titles_right right">
                            <div class="overflow why">
                                <div class="baioti left">
                                    <!-- <a href="#">{{item.liuyan_title}}</a> -->
                                    <!-- <router-link to="/contact_show">{{item.liuyan_title}}</router-link> -->
                                    <!-- <router-link :to="'/contact_show'+item.liuyan_id">{{item.liuyan_title}}</router-link> -->
                                    <router-link :to="{name: 'contact_show', query: { n: item.liuyan_id,list: item }}">{{item.liuyan_title}}</router-link>
                                </div>
                                <div class="right c_author overflow">
                                    <span class="left c_ren">{{item.liuyan_author}}</span>
                                    <span class="c_time right" data-time="item.liuyan_fabu_time" title="创建时间">{{item.liuyan_fabu_time.slice(5,10)}}</span>
                                </div>
                            </div>
                            <div class="overflow why2">
                                <div class="c_neirong left">
                                    <a href="#">{{item.liuyan_neirong}}</a>
                                </div>
                                <div class="right new_author overflow">
                                    <span class="left c_ren">{{item.liuyan_news}}</span>
                                    <span class="c_new_time right" title="最近评论时间">{{item.liuyan_new_time ? item.liuyan_new_time.slice(11,16):""}}</span>
                                </div>
                            </div>
                            <div class="c_img">
                                <img :src="'../../static/uploads/photos/'+item.liuyan_img_address"  height="100px" alt="">
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="right c_box">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'contact',
    data(){
        return {
            data_list:[]
        }
    },
    mounted: function(){
        //获取列表
        this.find_select(0);
    },
    methods:{
        find_select(ye){
            this.$http.post('/api/user/select_contact', {
                yema: ye
            },{}).then((response) => {
                console.log(response);
                //获取数据展示到页面
                var data = response.data;
                console.log(data);
                this.data_list = data;
            
            }).catch(function(error){
                console.log(error)
            });
        }
    }
}
</script>

<style>
@import '../assets/css/stroke.css';
@import '../assets/css/liuyanban.css';

</style>
