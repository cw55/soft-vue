<template>
    <!-- 留言板具体展示页面 -->
    <div id="contact_show">
        <div class="img">
            <img src="../assets/banner_jing.png" alt="">
        </div>
        <div class="content">
            <div class="head_bar">
                <span>位置：</span>
                <router-link to="/helloworld">首页</router-link> >
                <router-link to="/contact">留言板</router-link> >
                <span>留言</span>
            </div>

            <div class="title">
                <div><span>评论</span></div>
                <span>COMMENT BOARD</span>
            </div>
            <div class="show">
                <div class="nav_show">
                    <div class="nav_show_s">
                        <a href="#">首页</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">下一页</a>
                        <a href="#">尾页</a>
                    </div>
                    <div class="nav_show_s">
                        <span>31</span>回复贴，共<span>2</span>页，跳到&nbsp;<input type="text">&nbsp;页
                        <button>确定</button>
                    </div>
                </div>
                <div class="k_body overflow">
                    <div class="left k_list" v-if="liuyan_obj">
                        <div class="title_show overflow">
                            <div class="left" v-if="liuyan_obj.liuyan_title">
                                {{liuyan_obj.liuyan_title.length>15 ?liuyan_obj.liuyan_title.slice(0,16)+'...' : liuyan_obj.liuyan_title}}
                            </div>
                            <div class="right">
                                <button>只看楼主</button>
                                <button>收藏</button>
                                <button>回复</button>
                            </div>
                        </div>
                        <div class="show_list_tiezi_body">
                            <div class="list_tiezi overflow">
                                <div class="left d_author">
                                    <img src="../../static/fengsheng.png" alt="">
                                    <p><a href="#">{{liuyan_obj.liuyan_author}}</a></p>
                                </div>
                                <div class="left d_neirong">
                                    <div class="list_neirong">
                                        {{liuyan_obj.liuyan_neirong}}
                                    </div>
                                    <div class="c_img">
                                        <!-- <img :src="'../../static/uploads/photos/'+item.liuyan_img_address"  height="100px" alt=""> -->
                                        <img v-if='liuyan_obj.liuyan_img_address' :src="'../../static/uploads/photos/'+liuyan_obj.liuyan_img_address"  height="100px" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="list_neirong_nth">
                                <a rel="noopener" href="#" class="tail-info" data-checkun="un"><img class="icon-jubao" src="../../static/jubao_button_5f60185.png"></a>
                                <span class="tail-info">1楼</span>
                                <span class="tail-info">2018-11-14 13:30</span>
                                <a rel="noopener" href="#" class="p_reply p_reply_first">回复</a>
                            </div>
                        </div>
                        
                    </div>
                    <div class="right">

                    </div>
                </div>
                
            </div>
            <div class="pinglunqu">
                <div class="pingl_title">
                    <p><span></span> 发表评论</p>
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
                    <div class="pinglunqu_content">
                        <textarea name="" id="pingluntext" cols="30" rows="10" placeholder="请输入评论内容"></textarea>
                    </div>
                    <div class="pinglunqu_bottom">
                        <span>评论</span>
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
        
    </div>
</template>

<script>
export default {
    name:'contact_show',
    data (){
        return {
            pinglun_id:0,
            liuyan_obj:{},
            kong:false,
            formData:new FormData(),
            imgs: {},
            imgLen:0,
            biaoti:'',
            neirong:'',
            news:'',
            newName:''
        }
    },
    mounted: function(){
        $("#contact_show").css('background','#fff');//离开时判断没写

        var mounted = this.$route.query.n;
        console.log(mounted);
        //带入的item  
        var list = this.$route.query.list;
        console.log(list);
        this.liuyan_obj = list;

        //获取这个帖子下面的评论

        //获取这个帖子下面的回复并对应到位置

        // this.$http.post('api/user/take_liuyan',{
        //     id:mounted
        // },{}).then((Response)=>{
        //     console.log(Response);
        //     this.liuyan_obj = Response.data[0];
        // }).catch(function(err){
        //     console.log(err)
        // })

        // this.$http.post('api/user/take_liuyan',{
        //     id:mounted
        // },{}).then((Response)=>{
        //     console.log(Response)
        // }).catch(function(err){
        //     console.log(err)
        // })
    },
    methods:{
        biaoqingbao:function(){
            //给当前的span 定位
            $(this).css({'position':'relative'});
            //点击后展示 or 隐藏 kong
            // this.kong = true;
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
            // console.log(this.fil)
            // console.log(this.imgs)
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
    }
}
</script>

<style>
@import '../assets/css/stroke.css';
@import '../assets/css/liuyan_show.css';
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
