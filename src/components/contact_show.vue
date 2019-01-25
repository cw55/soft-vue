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
            <div class="show11">
                <div class="nav_show">
                    <div class="nav_show_s" v-if="a_page!=1">
                        <a href="javascript:void(0)" @click="router_page(1)">首页</a>
                        <!-- <router-link v-for="(it,index) in a_page" :key="index" @click="router_page(it)" :to="{name: 'contact_show', query: { n:tiezi_id,page: it }}">{{it}}</router-link> -->
                        <!-- <router-link v-for="(it,index) in a_page" :key="index" @click="router_page(it)" >{{it}}</router-link> -->
                        <a href="javascript:void(0)" :class="it==page ?'dq_page':''" v-for="(it,index) in a_page" :key="index" @click="router_page(it)">{{it}}</a>
                        <a href="javascript:void(0)" @click="router_page(page+1)">下一页</a>
                        <a href="javascript:void(0)" @click="router_page(a_page.length)">尾页</a>
                    </div>
                    <div class="nav_show_s">
                        <span>{{all_arr.length}}</span>回复贴，共<span>{{a_page}}</span>页
                        <div v-if="a_page!=1">
                            ，跳到&nbsp;<input type="text">&nbsp;页
                            <button>确定</button>
                        </div>
                    </div>
                </div>
                <div class="k_body overflow">
                    <div class="left k_list" v-if="liuyan_obj">
                        <div class="title_show overflow">
                            <div class="left" v-if="liuyan_obj.liuyan_title">
                                {{liuyan_obj.liuyan_title.length>15 ?liuyan_obj.liuyan_title.slice(0,16)+'...' : liuyan_obj.liuyan_title}}
                            </div>
                            <div class="right">
                                <button @click="zhikan_louzhu(event)" :data-zt="0">只看楼主</button>
                                <button>收藏</button>
                                <button @click="hufui_liucheng">回复</button>
                            </div>
                        </div>
                        <div class="show_list_tiezi_body">
                            <div v-for="item in new_arr" :key="item.pinglun_biao_id" class="pl_show_box">
                                <div class="list_tiezi overflow">
                                    <div class="left d_author">
                                        <img src="../../static/fengsheng.png" alt="">
                                        <p><a href="#">{{item.pinglun_name}}</a></p>
                                    </div>
                                    <div class="left d_neirong">
                                        <div class="list_neirong">
                                            {{item.pinglun_neirong}}
                                        </div>
                                        <div class="c_img">
                                            <img v-if='item.pinglun_img_address' :src="'../../static/uploads/photos/'+item.pinglun_img_address"  height="100px" alt="">
                                        </div>
                                        <div class="list_neirong_nth">
                                            <a rel="noopener" href="#" class="tail-info" data-checkun="un"><img class="icon-jubao" src="../../static/jubao_button_5f60185.png"></a>
                                            <span class="tail-info">{{item.pinglun_biao_id}}楼</span>
                                            <span class="tail-info">{{item.pinglun_time.slice(0,16).split('T').join(" ")}}</span>
                                            <a rel="noopener" href="javascript:void(0)" class="list_deteqa_reply" :data-huifu="item.pinglun_biao_id" data-unfold="false" @click="huifu_unfold($event)">回复({{item.huifu ? item.huifu.length:''}})</a>
                                        </div>
                                        <div class="huifu_box">
                                            <div class="show_huifu">
                                                <ul>
                                                    <li class="ul_huifu" v-if="item.huifu!=''" v-for="item2 in item.huifu.slice(0,5)" :key="item2.huifu_id">
                                                        <a href="javascript:void(0)" class="yh_img">
                                                            <img src="../../static/fengsheng.png" alt="">
                                                        </a>
                                                        <div class="huifu_neir">
                                                            <a href="javascript:void(0)" class="huifu_name" >{{item2.huifu_name}}</a>
                                                            <span>：&nbsp;</span>
                                                            <span class="huifu_content">{{item2.huifu_neirong}}</span>
                                                            <div class="huifu_reply">
                                                                <span class="huifu_reply_time">{{item2.huifu_time}}</span>
                                                                <a href="javascript:void(0)" class="huifu_reply_btn">回复</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    
                                                    <li class="ul_btn" v-if="item.huifu!=''" v-show="item.huifu.length>5">
                                                        <p>
                                                            <span>还有{{Number(item.huifu.length)-5 > 0 ? Number(item.huifu.length)-5 : 0}}条回复，</span>
                                                            <a href="javascript:void(0)" @click="dianjichakan($event)">点击查看</a>
                                                            <a href="javascript:void(0)" class="jixu_talk">我也说一句</a>
                                                        </p>
                                                    </li>

                                                    <li class="ul_huifu chaochushugeyingc" style="display:none" v-if="item.huifu!=''" v-for="item2 in item.huifu.slice(5)" :key="item2.huifu_id">
                                                        <a href="javascript:void(0)" class="yh_img">
                                                            <img src="../../static/fengsheng.png" alt="">
                                                        </a>
                                                        <div class="huifu_neir">
                                                            <a href="javascript:void(0)" class="huifu_name" >{{item2.huifu_name}}</a>
                                                            <span>：&nbsp;</span>
                                                            <span class="huifu_content">{{item2.huifu_neirong}}</span>
                                                            <div class="huifu_reply">
                                                                <span class="huifu_reply_time">{{item2.huifu_time}}</span>
                                                                <a href="javascript:void(0)" class="huifu_reply_btn">回复</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="jixu_huifu_tiezi">
                                                <textarea name="" id="" cols="30" rows="2" v-model="huifu_pinglun"></textarea>
                                                <p class="jixu_huifu_tiezi_p" @click="huifu_fabiao($event)" :data-huifu2="item.pinglun_biao_id"><span>发表</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="list_neirong_nth">
                                    <a rel="noopener" href="#" class="tail-info" data-checkun="un"><img class="icon-jubao" src="../../static/jubao_button_5f60185.png"></a>
                                    <span class="tail-info">{{item.pinglun_biao_id}}楼</span>
                                    <span class="tail-info">{{item.pinglun_time.slice(0,16).split('T').join(" ")}}</span>
                                    <a rel="noopener" href="#" class="p_reply p_reply_first" :data-huifu="item.pinglun_biao_id">回复</a>
                                </div> -->
                            </div>
                        </div>
                        <div class="nav_show">
                            <div class="nav_show_s" v-if="a_page!=1">
                                <a href="javascript:void(0)" @click="router_page(1)">首页</a>
                                <!-- <router-link v-for="(it,index) in a_page" :key="index" @click="router_page(it)" :to="{name: 'contact_show', query: { n:tiezi_id,page: it }}">{{it}}</router-link> -->
                                <!-- <router-link v-for="(it,index) in a_page" :key="index" @click="router_page(it)" >{{it}}</router-link> -->
                                <a href="javascript:void(0)" :class="it==page ? 'dq_page':''" v-for="(it,index) in a_page" :key="index" @click="router_page(it)">{{it}}</a>
                                <a href="javascript:void(0)" @click="router_page(Number(page)+1)">下一页</a>
                                <a href="javascript:void(0)" @click="router_page(a_page)">尾页</a>
                            </div>
                            <div class="nav_show_s">
                                <span>{{all_arr.length}}</span>回复贴，共<span>{{a_page}}</span>页
                                <div v-if="a_page!=1">
                                    ，跳到&nbsp;<input type="text">&nbsp;页
                                    <button>确定</button>
                                </div>
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
                        <textarea name="" id="pingluntext" cols="30" rows="10" placeholder="请输入评论内容" v-model="neirong"></textarea>
                    </div>
                    <div class="pinglunqu_bottom">
                        <span @click="pinglun1">评论</span>
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
            page:1,//url上的参数
            liuyan_obj:{},
            pinglun_obj:{},
            huifu_obj:{},
            new_arr:[],//展示到页面最多10条
            all_arr:[],//记录帖子所有数据
            all_arr2:[],//查看楼主时保存原数据，方便还原数据
            a_page:0,//分页
            kong:false,
            formData:new FormData(),
            imgs: {},
            imgLen:0,
            biaoti:'',
            tiezi_id:0,
            neirong:'',
            news:'',
            newName:'',
            huifu_louceng:'',
            huifu_pinglun:'',
            julu_html:'',//记录点击回复前的状态
            nav_show_arr:[],//分页的页码标记
        }
    },
    mounted: function(){
        $("#contact_show").css('background','#fff');//离开时判断没写
        var pinglun_arr = [];
        var huifu_arr = [];
        var mounted = this.$route.query.n;//获取url参数n
        console.log(mounted);
        this.tiezi_id = mounted;

        //测试page,我在听《椿》
        // try{
        //     //如果url上存在page参数，就获取他，并在生成之前改变new_arr
        //     var chun_page = this.$route.query.page;
        //     this.page = chun_page;
        //     console.log("我喜欢的那个椿是："+chun_page);
        // }catch(e){
        //     console.log(e)
        // }

        //获取头部标签的信息
        this.$http.post('api/user/take_liuyan',{
            id:mounted
        },{}).then((Response)=>{
            console.log(Response);
            //这边是展示头部的标题文字
            this.liuyan_obj = Response.data[0];
        }).catch(function(err){
            console.log(err)
        })
        
        //获取这个帖子下面的评论
        this.$http.post('api/user/chaxun_pinglun',{
            tiezi_id:mounted
        },{}).then((Response)=>{
            console.log('Response')
            console.log(Response);
            //这边是所以评论的数据展示
            this.pinglun_obj = Response.data;
            pinglun_arr = Response.data;
            console.log(Response.data);

            //获取页数
            var a_page = Math.floor(pinglun_arr.length/10);
            console.log(a_page);
            this.a_page = a_page+1;

        }).catch(function(err){
            console.log(err)
        });

        //获取当前留言评论的回复信息
        this.$http.post('api/user/take_huifu', {
            tiezi_id:mounted
        }, {}).then((Response) => {
            console.log(Response);
            this.huifu_obj = Response.data;
            huifu_arr = Response.data;

            /*注：这里写法，为什么要写在里面是由于http.post请求是异步的，promises写法不推荐 */
            //获取这个帖子下面的回复并对应到位置
            var new_arr = pinglun_arr;
            console.log(new_arr)
            for(var i=0;i<pinglun_arr.length;i++){
                var huifu_jilu = [];
                for(var j=0;j<huifu_arr.length;j++){
                    if(pinglun_arr[i].pinglun_biao_id == huifu_arr[j].pinglun_louceng){
                        console.log("why")
                        huifu_jilu.push(huifu_arr[j]);
                    }
                }
                new_arr[i]['huifu'] = huifu_jilu
            }
            console.log(new_arr);
            this.all_arr = new_arr;
            //对展示数据做操作
            //判断url是否带参数chun_page
            // if(chun_page){
            //     this.new_arr = new_arr.slice((chun_page-1)*10,chun_page*10);
            // }else{
                this.new_arr = new_arr.slice(0,10);
            // }
            

        }).catch(function(err){
            console.log(err)
        });

        
        

    },
    methods:{
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
            var user_id = this.getCookie("user_id");
            if(!user_id){
                alert('请登陆后重试');
                return;
            }
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
        pinglun1:function(){
            var user_id = this.getCookie("user_id");
            if(!user_id){
                alert('请登陆后重试');
                return;
            }
            //首先要获取pinglun_name,pinglun_biao_id,tiezi_id,pinglun_neirong,pinglun_img_address,pinglun_time
            var pl_name = $("#user").html();//评论人可以是自己
            
            //取当前最大的评论楼层数
            var biao_max_arr = [];
            this.all_arr.forEach((item,index)=>{
                biao_max_arr.push(item.pinglun_biao_id)
            });
            console.log(biao_max_arr)
            //往评论表存储的评论id，用来区分  回复的信息
            var pl_louceng = Math.max(...biao_max_arr);
            console.log('我获取的最大楼层是：'+pl_louceng);
            //发送请求时要 +1 楼层不能重复
            //获取这条帖子的id
            var pl_tiezi_id = this.pinglun_obj[0].tiezi_id;

            //内容
            var pl_neirong = this.neirong;
            //地址
            var pl_address = this.newName;

            //时间
            //创建时间
            var data = new Date();
            var pl_time = this.formatDateTime(data);
            console.log(pl_time);

            //请求插入评论
            this.$http.post('/api/user/add_pinglun', {
                name: pl_name,
                louceng: Number(pl_louceng)+1,
                tiezi_id: pl_tiezi_id,
                neirong: pl_neirong,
                address: pl_address,
                time: pl_time
            },{}).then((response) => {
                console.log(response);
                if(response.statusText=="OK"){
                    //上传完成后，清除input，并修改new_arr数据，展示到页面
                    //还是直接刷新吧
                    // this.reload()

                    //1.18 采用修改data数据的方法
                    this.$data.neirong = '';
                    this.reload_zujian();
                    alert("评论成功")
                }else{
                    //提示上传失败

                }
            }).catch(function(error){
                console.log(error)
            });
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
        //点击回复的时候展开回复数据
        huifu_unfold(event){
            var that = this;
            // console.log(that.pinglun_id)
            var huifu_louceng = event.target.getAttribute('data-huifu');//当前点击的楼层 ,传到data huifu_louceng中
            // console.log(huifu_louceng);
            //判断当前是否展开
            var unfold = event.target.getAttribute('data-unfold');
            // console.log(unfold);
            
            if(unfold=='false'){
                $(event.target).attr('data-unfold','true');
                //没展开情况，需要展开下面的 huifu_box
                $(event.target).parent().next('.huifu_box').css('display','block');
                //并且给自己加上apk_show样式
                $(event.target).addClass('apk_show');
                this.julu_html = $(event.target).html();
                $(event.target).html('取消回复');
                // event.target.parentNode.lastChild.style.display='inline-block';
                // event.target.classList.add("apk_show")
            }else{
                $(event.target).attr('data-unfold','false');
                //展开情况，需要隐藏下面的 huifu_box
                $(event.target).parent().next('.huifu_box').css('display','none');
                //并且去除apk_show样式
                $(event.target).removeClass('apk_show');
                $(event.target).html(this.julu_html);
            }

        },
        huifu_fabiao(event){
            var user_id = this.getCookie("user_id");
            if(!user_id){
                alert('请登陆后重试');
                return;
            }
            console.log("我点击了发表")
            //首先获取需要发布的内容
            var fabu_neirong = this.huifu_pinglun;
            console.log("发布的内容是"+fabu_neirong)
            //当前发布的时间
            var fabu_data = new Date();
            var fabu_time = this.formatDateTime(fabu_data);
            console.log(fabu_time);
            //发布人
            var fabu_name = $("#user").html();//评论人可以是自己
            console.log("发布人是"+fabu_name)
            //当前帖子的id
            var tiezi_id = this.tiezi_id;
            console.log("当前帖子的id是："+tiezi_id)
            //获取当前楼层
            var fabu_louceng = $(event.target).parent().attr('data-huifu2');
            console.log("楼层是："+fabu_louceng);
            //请求插入评论
            this.$http.post('/api/user/insert_huifu', {
                name: fabu_name,
                neirong: fabu_neirong,
                tiezi_id: tiezi_id,
                louceng: Number(fabu_louceng),
                time: fabu_time
            },{}).then((response) => {
                console.log(response);
                if(response.statusText=='OK'){
                    //给当前楼层的回复插入一条数据
                    // var charushu = {
                    //     huifu_id: 1,//这里的回复id无关紧要，数据会保存到后台，我们现在就是要在前台来改变数据
                    //     huifu_name: fabu_name,
                    //     huifu_neirong: fabu_neirong,
                    //     tiezi_id: tiezi_id,
                    //     pinglun_louceng: Number(fabu_louceng),
                    //     huifu_time: fabu_time
                    // };
                    // var charushuju2 = this.new_arr[Number(fabu_louceng)-1].huifu;
                    // console.log(charushuju2)
                    // charushuju2.push(charushu)
                    // var new2_arr = this.new_arr;
                    // new2_arr[Number(fabu_louceng)-1].huifu.push(charushu);
                    // this.new_arr = new2_arr;
                    // this.$set(this.new_arr,Number(fabu_louceng)-1,charushuju2) //这样就能被vue监控到，更新视图 
                }
            }).catch(function(error){
                console.log(error)
            });
        },
        dianjichakan(event){
            $(event.target).parent().parent().parent().find('.chaochushugeyingc').show();
            $(event.target).parent().parent().hide();
        },
        //点击“上方”的回复按钮，直接锚点到最下面的评论区
        hufui_liucheng(){
            //获取当前 评论区的位置
            // var dq_weizhi = $("#contact_show").scrollTop;
            // console.log(dq_weizhi);
            var plq_weizhi = $(".pinglunqu").offset().top;
            console.log(plq_weizhi);
            // $("body").scrollTop(plq_weizhi)
            window.scrollTo(0,plq_weizhi);
        },
        //点击上方只看楼主
        zhikan_louzhu(event){
            var dataZt = $(event.target).attr('data-zt');
            if(dataZt==0){
                //对new_arr 进行筛选
                var louzhu = this.all_arr;
                //这里需要保存备份all_arr 不然不能还原状态了

                console.log(louzhu);
                console.log(this.liuyan_obj);
                
                var new3_arr = [];
                for(var a=0;a<louzhu.length;a++){
                    if(louzhu[a]['pinglun_name'] == this.liuyan_obj['liuyan_author']){
                        new3_arr.push(louzhu[a]);
                        console.log('111')
                    }
                }
                console.log(new3_arr);
                //虽然修改了，但是页面没刷新
                // this.new_arr = new3_arr;
                this.$data.new_arr = new3_arr.slice(0,10);
                this.all_arr = new3_arr;

                $(event.target).html('取消只看楼主');
                $(event.target).attr('data-zt',1);
            }else{
                //恢复成默认 all_arr2
                this.$data.new_arr = this.all_arr2.slice(0,10);
                this.all_arr = this.all_arr2;

                $(event.target).html('只看楼主');
                $(event.target).attr('data-zt',0);
            }
            
        },
        router_page(page){
            console.log(page);
            console.log(this.page);
            if(page>this.a_page){
                page = this.a_page
            }
            this.page=page;
            //获取的page  修改new_arr的参数
            console.log((page-1)*10,(page-1)*10+10)
            var page_new_arr = this.all_arr.slice((page-1)*10,(page-1)*10+10);
            console.log(page_new_arr)
            // this.$set(this.new_arr,page_new_arr)
            //做为一个vue菜鸟，碰到各种稀奇古怪的问题都是很正常的，在这里先记录下来，等这一阵忙完了，回头研究。今天，更新data中的一个数组时，发现原来的数据清不掉，目前我暂时是用下面的方式处理的
            this.$data.new_arr = page_new_arr
            console.log(this.new_arr)
        },
        //刷新整个组件（没找到你敢信，那只能修改new_arr来修改了）
        reload_zujian(){
            //获取这个帖子下面的评论
            this.$http.post('api/user/chaxun_pinglun',{
                tiezi_id:this.tiezi_id
            },{}).then((Response)=>{
                console.log('Response')
                console.log(Response);
                //这边是所以评论的数据展示
                this.pinglun_obj = Response.data;
                var pinglun_arr = Response.data;
                console.log(Response.data);

                //获取页数
                var a_page = Math.floor(pinglun_arr.length/10);
                console.log(a_page);
                this.a_page = a_page+1;

                var huifu_arr = this.huifu_obj;

                /*注：这里写法，为什么要写在里面是由于http.post请求是异步的，promises写法不推荐 */
                //获取这个帖子下面的回复并对应到位置
                var new_arr = pinglun_arr;
                console.log(new_arr)
                for(var i=0;i<pinglun_arr.length;i++){
                    var huifu_jilu = [];
                    for(var j=0;j<huifu_arr.length;j++){
                        if(pinglun_arr[i].pinglun_biao_id == huifu_arr[j].pinglun_louceng){
                            console.log("why")
                            huifu_jilu.push(huifu_arr[j]);
                        }
                    }
                    new_arr[i]['huifu'] = huifu_jilu
                }
                console.log(new_arr);
                this.all_arr = new_arr;
                this.new_arr = new_arr.slice(0,10);

            }).catch(function(err){
                console.log(err)
            });
        }
    },
    watch:{
        page:function(old,now){
            console.log(old,now);
            //page发生了变化，就需要修改  this.new_arr 展示不同的数据
            //这里需要延迟加载吗？感觉 this.new_arr 还没加载
            console.log(this.all_arr)
        }
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
