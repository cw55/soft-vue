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
                    <div class="nav_show">
                        <div class="nav_show_s">
                            <a href="javascript:void(0)" @click="find_select(1)">首页</a>
                            <a href="javascript:void(0)" @click="find_select(yema-1)" v-if="yema>1">上一页</a>
                            <a href="javascript:void(0)" v-for="item in Math.ceil(zongliuyan_num/10)" @click="find_select(item)">{{item}}</a>
                            <a href="javascript:void(0)" @click="find_select(yema+1)">下一页</a>
                            <a href="javascript:void(0)" @click="find_select(Math.ceil(zongliuyan_num/10))">尾页</a>
                        </div>
                        <div class="nav_show_s">
                            <span>{{zongliuyan_num}}</span>条留言，共<span>{{Math.ceil(zongliuyan_num/10)}}</span>页
                            <div>
                                ，跳到第&nbsp;<input type="text" v-model="tiaoye">&nbsp;页
                                <button @click="tiaoye_submit">确定</button>
                            </div>
                        </div>
                    </div>
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
                                    <router-link :to="{name: 'contact_show', query: { n: item.liuyan_id }}">{{item.liuyan_title}}</router-link>
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
                    <div class="pinglunqu">
                        <div class="pingl_title">
                            <p><span></span> 添加留言</p>
                        </div>
                        <div class="div_pinglun">
                            <span class="img_length" v-if="this.imgLen!=0">{{this.imgLen}}</span>
                            <div class="pinglunqu_top">
                                <span @click="stupian"></span>
                                <span></span>
                                <span @click="biaoqingbao"></span>
                                <div class="kong" v-if='kong'>
                                    <!-- 表情包 -->
                                </div>
                            </div>
                            <div class="new_biaoti">
                                <input type="text" v-model="biaoti" placeholder="请输入标题">
                                <span>还剩{{shengyu_zi-Number(biaoti.length)}}字</span>
                            </div>
                            <div class="pinglunqu_content">
                                <textarea name="" id="pingluntext" cols="30" rows="10" placeholder="请输入评论内容" v-model="neirong"></textarea>
                            </div>
                            <div class="pinglunqu_bottom">
                                <span @click="pinglun2">评论</span>
                            </div>
                        </div>
                        <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" style="background: rgba(1,1,1,0.3);">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 class="modal-title" id="ModalLabel">上传图片</h4>
                                    </div>
                                    <div class="modal-body">
                                        <div class="control-form">
                                            <p class="help-block">(建议图片格式为：JPEG/BMP/PNG/GIF，大小不超过5M，最多可上传4张)</p>
                                            <ul class="upload-imgs">
                                                <li v-if="imgLen>=4 ? false : true">
                                                    <!-- <input type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
                                                    <a class="add"><i class="iconfont icon-plus"></i></a> -->

                                                    <a href="javascript:void(0)" class="ceshi_upload">
                                                        <input type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
                                                    
                                                    </a>
                                                </li>
                                                <li v-for='(value, key) in imgs'>
                                                    <p class="img"><img :src="getObjectURL(value)"><a class="close" @click="delImg(key)">×</a></p>
                                                </li>
                                            </ul>
                                            <!-- <a href="javascript:;" @click="submit">上传图片</a> -->
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                                        <button type="button" class="btn btn-primary" @click="submit">上传图片</button>
                                    </div>
                                </div>
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
            data_list:[],
            imgLen:0,
            yema:1,
            zongliuyan_num:0,
            kong:false,
            neirong:'',
            imgs:{},
            formData:new FormData(),
            newName:'',//记录上传图片的地址
            biaoti:'',
            news:'',//最新评论人
            shengyu_zi:20,//标题最多输入个数
            tiaoye:1,//页面上填页数
        }
    },
    mounted: function(){
        //获取列表
        this.find_select(1);//这个1是取的起始值下标

        //获取总个数
        this.$http.post('api/user/every_liuyan', {},{}).then((res) => {
            console.log(res);
            var liuyan_num = res.data[0]['COUNT(*)'];
            console.log(liuyan_num);
            this.zongliuyan_num = liuyan_num;
        }).catch(function(err){
            console.log(err);
        })
    },
    methods:{
        //查看当前条
        find_select(ye){
            this.yema = ye;
            console.log(this.yema)
            this.$http.post('/api/user/select_contact', {
                yema: (Number(ye)-1)*10
            },{}).then((response) => {
                console.log(response);
                //获取数据展示到页面
                var data = response.data;
                console.log(data);
                this.$data.data_list = data;
            
            }).catch(function(error){
                console.log(error)
            });
        },
        biaoqingbao:function(){
            //给当前的span 定位
            $(this).css({'position':'relative'});
            //点击后展示 or 隐藏 kong
            this.kong = true;
        },
        stupian:function(){
            $('#Modal').modal('show');
        },
        addImg(event){
            let inputDOM = this.$refs.inputer;
            // 通过DOM取文件数据
            this.fil = inputDOM.files;
            let oldLen=this.imgLen;
            let len=this.fil.length+oldLen;

            //！！上传多张出错，初期修改默认只能传1张（后台接口问题）
            if(len>1){
                alert('sorry，目前最多可上传1张，您还可以上传'+(1-oldLen)+'张');
                return false;
            }

            if(len>4){
                alert('最多可上传4张，您还可以上传'+(4-oldLen)+'张');
                return false;
            }
            for (let i=0; i < this.fil.length; i++) {
                let size = Math.floor(this.fil[i].size / 1024);
                if (size > 5*1024*1024) {
                    alert('请选择5M以内的图片！');
                    return false
                }
                this.imgLen++;
                this.$set(this.imgs,this.fil[i].name+'?'+new Date().getTime()+i,this.fil[i]);
            }
        },
        getObjectURL(file) {
            var url = null ;
            if (window.createObjectURL!=undefined) { // basic
                url = window.createObjectURL(file) ;
            } else if (window.URL!=undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file) ;
            } else if (window.webkitURL!=undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file) ;
            }
            return url ;
        },
        delImg(key){
            this.$delete(this.imgs,key);
            this.imgLen--;
        },
        submit(){
            console.log(this.imgLen)
            if(this.imgLen==0){
                // $('#Modal').modal('hide');
                alert('请选择图片后上传')
                return
            }
            console.log(this.imgs)
            for(let key in this.imgs){
                let name=key.split('?')[0];
                this.formData.append('multipartFiles',this.imgs[key],name);
            }
            console.log(this.formData)
            this.$http.post('/api/user/upload', this.formData,{
                headers: {'Content-Type': 'multipart/form-data'}
            }).then(res => {
                console.log(res);
                this.newName = res.data.newName;
                console.log(res.data.flag) 
                console.log(res.data.newName) 
                if(res.data.flag=='ok'){
                    console.log('上传成功');
                    $('#Modal').modal('hide');
                }else{
                    console.log('上传出错')
                }
            });
        },
        pinglun2:function(){
            var user_id = this.getCookie("user_id");
            console.log(user_id)
            if(!user_id){
                alert('请登陆后重试');
                return;
            }
            //标题
            var biaoti = this.biaoti;
        
            //获取发布人
            // var name = this.user;//1、怎么获取app组件中的data数据？？？？
            var name = $("#user").html();
            console.log(name);

            var neirong = this.neirong;//内容
            var news = this.news;//最新评论人
            //创建时间
            var data = new Date();
            var fabu_time = this.formatDateTime(data);
            console.log(fabu_time);

            

            //上传文件名作为图片地址保存
            var address = this.newName;
            //liuyan_title,liuyan_author,liuyan_neirong,liuyan_news,liuyan_fabu_time,liuyan_new_time,liuyan_img_address,liuyan_pinglunshu
            // this.$http.post('/api/user/upload', this.formData,{
            //   headers: {'Content-Type': 'multipart/form-data'}
            // }).then(res => {
            //   console.log(res);
            // });
            this.$http.post('/api/user/add_contact', {
                biaoti: biaoti,
                name: name,
                neirong: neirong,
                news: news,
                fabu_time: fabu_time,
                address: address,
                userid: user_id
            },{}).then((response) => {
                console.log(response);
                //清空输入框并刷新页面
                this.biaoti = '';
                this.neirong = '';
                console.log(this.data_list);
                this.find_select(1);

            }).catch(function(error){
                console.log(error)
            });
        },
        getCookie: function (name) {
            var arr;
            var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        },
        formatDateTime(date) {  
            var y = date.getFullYear();  
            var m = date.getMonth() + 1;  
            m = m < 10 ? ('0' + m) : m;  
            var d = date.getDate();  
            d = d < 10 ? ('0' + d) : d;  
            var h = date.getHours();  
            h=h < 10 ? ('0' + h) : h;  
            var minute = date.getMinutes();  
            minute = minute < 10 ? ('0' + minute) : minute;  
            var second=date.getSeconds();  
            second=second < 10 ? ('0' + second) : second;  
            return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;  
        },
        tiaoye_submit(){
            //首先获取input
            var yeshu = this.tiaoye;
            this.find_select(yeshu);
        }
    },
    watch:{
        biaoti:function(){
            if(this.biaoti.length > this.shengyu_zi){
                console.log('超出20个字');
                this.biaoti = this.biaoti.slice(0,-1);
            }
        },
        tiaoye:function(){
            //只能输入页数

        }
    }
}
</script>

<style>
@import '../assets/css/stroke.css';
@import '../assets/css/liuyanban.css';
.pinglunqu .modal-header{
    display: block !important;
}
.pinglunqu .modal-body ul li{
    list-style: none;
}
.pinglunqu .modal-body .img{
    margin-top: 0.2rem;
}
.pinglunqu .modal-body .img img{
    height: 150px;
    width: auto;
    float: left;
}
.pinglunqu .modal-body .img a{
    float: left;
    margin-left: 10px;
}
.pinglunqu  .img_length{
    z-index: 3;
    position: absolute;
    left: 6px;
    top: 12px;
    font-size: 12px;
    /* background: red; */
    /* padding: 0px 6px; */
    width: 18px;
    text-align: center;
    border-radius: 100%;
    color: rgb(49, 134, 190);
}
</style>
