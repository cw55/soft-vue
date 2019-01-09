<template>
    <div class="form-group">
      <h1>测试</h1>
      标题：<input type="text" v-model="biaoti"><br>
        发布人：<br>
        内容：<textarea name="" id="" cols="30" rows="10" v-model="neirong"></textarea><br>
        最新评论人：<input type="text" v-model="news"><br>
        时间：<br>
        图片：<br>
      <label class="control-label">上传图片</label>
      <div class="control-form">
        <p class="help-block">(建议图片格式为：JPEG/BMP/PNG/GIF，大小不超过5M，最多可上传4张)</p>
        <ul class="upload-imgs">
          <li v-if="imgLen>=4 ? false : true">
            <input type="file" class="upload" @change="addImg" ref="inputer" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
            <a class="add"><i class="iconfont icon-plus"></i></a>
          </li>
          <li v-for='(value, key) in imgs'>
            <p class="img"><img :src="getObjectURL(value)"><a class="close" @click="delImg(key)">×</a></p>
          </li>
        </ul>
        <a href="javascript:;" @click="submit">上传图片</a>
      </div>


      <div>
        
        <button @click='tijiao'>提交</button>
      </div>
      
    </div>
</template>

<script>
  export default {
    data() {
      return {
        formData:new FormData(),
        imgs: {},
        imgLen:0,
        biaoti:'',
        neirong:'',
        news:'',
        newName:''
      }
    },
    methods: {
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
            console.log('上传成功')
          }else{
            console.log('上传出错')
          }
        });
      },
      tijiao(){
        var biaoti = this.biaoti;//标题
        
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

        var user_id = this.getCookie("user_id");
        if(user_id==''){
          alert('请登陆后重试');
          return;
        }

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
    }
  }
</script>

<style>

/* .upload-imgs{margin: 10px 0 30px 0;overflow: hidden;font-size: 0;}
.upload-imgs li{position: relative;width: 118px;height: 118px;font-size: 14px;display: inline-block;padding: 10px;margin-right: 25px;border: 2px dashed #ccc;text-align: center;vertical-align: middle;}
.upload-imgs li:hover{border-color: $them-color;}
.upload-imgs .add{display: block;background-color: #ccc;color: #ffffff;height: 94px;padding: 8px 0;}
.upload-imgs .add .iconfont{padding: 10px 0;font-size: 40px;}
.upload-imgs li:hover .add{background-color: $them-color;}
.upload-imgs li .upload{position: absolute;top: 0;bottom: 0;left: 0;right: 0;width: 118px;height: 118px;}
.upload-imgs .img{position: relative;width: 94px;height: 94px;line-height: 94px;}
.upload-imgs .img img{vertical-align: middle;}
.upload-imgs .img .close{display: none;}
.upload-imgs li:hover .img .close{display: block;position: absolute;right: -6px;top: -10px;line-height: 1;font-size: 22px;color: #aaa;} */
</style>


