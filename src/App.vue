<template>
  <div id="app">
    <!-- 灰底黑字 -->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="./assets/logo.png" alt="Logo" style="width:28px;">
          </a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><router-link to="/" class="nav-link">首页</router-link></li>
            <li><router-link to="/company" class="nav-link">公司概况</router-link></li>
            <li><router-link to="/product" class="nav-link">产品简介</router-link></li>
            <li><router-link to="/success" class="nav-link">成功案例</router-link></li>
            <li><router-link to="/news" class="nav-link">企业新闻</router-link></li>
            <li><router-link to="/contact" class="nav-link">留言板</router-link></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span id="user">{{user}}</span> <span class="caret"></span></a>
              <ul class="dropdown-menu li_style" v-html="list" >
                <!-- <li><a class="nav-link" href="#" data-toggle="modal" data-target="#myModal">登录</a></li>
                <li><a class="nav-link" href="#" data-toggle="modal" data-target="#myModal2">注册</a></li> -->
                
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <!-- 模态框 -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">欢迎登录</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">邮箱</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" v-model="login_email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="login_password">
              </div>
              <!-- <div class="form-group">
                <label for="exampleInputFile">File input</label>
                <input type="file" id="exampleInputFile">
                <p class="help-block">Example block-level help text here.</p>
              </div> -->
              <!-- <div class="checkbox">
                <label>
                  <input type="checkbox"> Check me out
                </label>
              </div> -->
              <a href="javascript:void(0)" @click="Login" >登录2</a>
              <!-- <button class="btn btn-default" @click="Login">登录</button> -->
            </form>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">返回首页</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
        </div>
      </div>
    </div>
    <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabe2">欢迎注册</h4>
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail2">用户名</label>
                <input type="text" class="form-control" name="name2" v-model="r_user" placeholder="Name">
              </div>
              <div class="form-group">
                <label for="exampleInputPhone">手机号</label>
                <input type="number" class="form-control" pattern="^[0-9]{11}$" v-model="r_phone" name="exampleInputPhone" placeholder="Phone">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail2">邮箱</label>
                <input type="email" class="form-control" name="exampleInputEmail2" v-model="r_email" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword2">密码</label>
                <input type="password" class="form-control" name="exampleInputPassword2" v-model="r_password" placeholder="Password">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword2">确认密码</label>
                <input type="password" class="form-control" name="exampleInputPassword2_again" v-model="r_password2" placeholder="Again Password">
              </div>
              <!-- <div class="form-group">
                <label for="exampleInputFile">头像</label>
                <input type="file" id="exampleInputFile">
                <p class="help-block">头像大小请低于300kb</p>
              </div> -->
              <!-- <div class="checkbox">
                <label>
                  <input type="checkbox"> Check me out
                </label>
              </div> -->
              <a href="javascript:void(0)" @click="Register" >注册并登录</a>
              <!-- <button type="submit" class="btn btn-default" @click="Register">注册并登录</button> -->
            </form>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">返回</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div> -->
        </div>
      </div>
    </div>
    <!-- 模态框 end -->

    <!-- <HelloWorld/> -->
    <router-view></router-view>
    <div class="footer">
      <div class="footer_con">
        <div class="con">
          <div class="nei">
            <div class="">
              <ul class="di_nav clearfix">
                <li><router-link to="/" class="nav-link">首页</router-link></li>
                <li><router-link to="/company" class="nav-link">公司概况</router-link></li>
                <li><router-link to="/product" class="nav-link">产品简介</router-link></li>
                <li><router-link to="/success" class="nav-link">成功案例</router-link></li>
                <li><router-link to="/news" class="nav-link">企业新闻</router-link></li>
                <li><router-link to="/contact" class="nav-link">留言板</router-link></li>
                <!-- <li><a href="index.html">首页</a></li>
                <li><a href="scenic_overview.html">公司概况</a></li>
                <li><a href="court_travel.html">产品简介</a></li>
                <li><a href="comfortable.html">成功案例</a></li>
                <li><a href="news.html">企业文化</a></li> -->
                <!-- <li><a href="feedback.html">留言中心</a></li> -->
                <!-- <li><a href="contact.html">联系我们</a></li> -->
              </ul>
            </div>
            <div class="clear"></div>
            <div class="lian">
              电话：<a href="tel:025-86330858">025-86330858</a><br />
              邮箱：<a href="mailto:yuesoft@yuesoft.cn">yuesoft@yuesoft.cn</a><br />
              地址：南京市雨花台区小行路16号万谷移动互联科技园6#4楼401-403室<br />
              <a href="/map" class="nav-link">地图测试</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copy">Copyright© 2018 版权所有：南京阅软信息技术有限公司</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
    name: "app",
    // components:{
    //   HelloWorld
    // }
    data () {
      return {
        user: '用户',
        list:"",
        token_my:0,
        login_email: '',
        login_password:'',
        r_user:'',
        r_phone:'',
        r_email:'',
        r_password:'',
        r_password2:''
      }
    },
    mounted: function(){
      //获取cookie
      var name = this.getCookie('user_email');
      var pass = this.getCookie('user_password');
      console.log(name,pass);
      // if(typeof name !=='undefined' && typeof pass !=='undefined'){
      if(name !=null || pass !=null){
        this.$http.post('/api/user/Login', {
          email: name,
          password: pass
        },{}).then((response) => {
          console.log(response);
          if(response.data.length != 0){
            this.user = response.data[0]['name'];
            this.token_my = 1;
            $("#myModal").modal('hide');
            document.cookie="user_email="+name;
            document.cookie="user_password="+pass;
            document.cookie="user_id="+response.data[0]['id'];
          }else{
            alert('登陆密码错误，请重试！');
            document.cookie="user_email=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            document.cookie="user_password=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
          }
        }).catch(function(error){console.log(error)});
      }
      this.list_action(this.token_my);

      var that = this;
      this.$nextTick().then(() => {
        $('.li_style').bind('click','li',function(){
          // 接下来看你了
          var out = $(this).find('li').attr('data-zt');
          console.log(out);
          if(out=='2'){
            that.Out();
          }
        })
      })
    },
    methods:{
      getCookie: function (name) {
        var arr;
        var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
          return unescape(arr[2]);
        else
          return null;
      },
      list_action: function(str) {
        var list1 = `<li data-zt='1'><a class="nav-link" href="#" data-toggle="modal" data-target="#myModal">登录</a></li>
                <li><a class="nav-link" href="#" data-toggle="modal" data-target="#myModal2">注册</a></li>`;
        var list2 = `<li data-zt='2'><router-link to="/contact" class="nav-link">合同管理后台</router-link></li>
                  <li><a class="nav-link out" href="javascript:void(0);">退出</a></li>`;
        if(str == 0){
          this.list = list1;
        }else{
          this.list = list2;
        }
      },
      Login() {
        var login_email = this.login_email;
        var login_password = this.login_password;
        this.$http.post('/api/user/Login', {
          email: login_email,
          password: login_password
        },{}).then((response) => {
          console.log(response);
          if(response.data.length != 0){
            this.user = response.data[0]['name'];
            this.token_my = 1;
            $("#myModal").modal('hide');
            document.cookie="user_email="+login_email;
            document.cookie="user_password="+login_password;
            document.cookie="user_id="+data[0].id;
          }else{
            alert('登陆密码错误，请重试！');
            document.cookie="user_email=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            document.cookie="user_password=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
          }
        }).catch(function(error){
          //报错Uncaught (in promise),
          //这个在后面加个 catch 就行了
          // PS：
          // 1. 前面不必非得改成 response => 的这种形式；
          // 2. 这不解决问题（非问题解决之道），现在代码的状态是前面有错，所以catch获取了异常，并打印了出来，并没有说前面的res就能用了。
          console.log(error)
        });
      },
      Register(){
        var r_user = this.r_user;
        var r_phone = this.r_phone;
        var r_email = this.r_email;
        var r_password = this.r_password;
        var r_password2 = this.r_password2;
        if(r_password != r_password2){
          alert("两次输入密码不正确");
          return
        }
        this.$http.post('/api/user/Register', {
          user: r_user,
          phone: r_phone,
          email: r_email,
          password: r_password
        },{}).then((response) => {
          console.log(response);
          var data = response.data;
          try {
            if(data.zt==0){
              //存在重复的数据
              alert('手机号或邮箱重复');
            }else{
              //注册成功数据，存到cookie
              $("#myModal2").modal('hide');
              document.cookie="user_email="+r_email;
              document.cookie="user_password="+r_password;
              this.token_my=1;
              this.user = r_user;
              console.log(data.user_id);
              document.cookie="user_id="+data.user_id;
            }
          } catch (error) {
            
          }
        }).catch(function(error){
          console.log(error)
        });
      },
      Out:function(){
        console.log("哈哈哈哈");
        this.user = '用户';
        document.cookie="user_email=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie="user_password=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        this.token_my = 0;
      }
    },
    watch:{
      token_my(newo,old){
        console.log(newo,old)
        this.list_action(newo);
      }
    }
};
</script>


<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
    /* text-align: center; */
    color: #2c3e50;
    /* margin-top: 60px; */
    background: url(./assets/bg.png);
}
@media (min-width: 576px){
  .navbar-toggle {
      display: none;
  }
  .navbar-expand-sm .navbar-collapse{
    flex-direction: row-reverse;
  }
}

.navbar-toggle {
    position: relative;
    float: right;
    padding: 9px 10px;
    margin-top: 8px;
    margin-right: 15px;
    margin-bottom: 8px;
    background-color: #333;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
.navbar-toggle .icon-bar+.icon-bar {
    margin-top: 4px;
}
.navbar-toggle .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
}
.dropdown-menu{
  background-color: #343a40;
}
.li_style li{
  display: block;
}
/* .bv-form .help-block {
  margin-bottom: 0;
}
.bv-form .tooltip-inner {
  text-align: left;
}
.nav-tabs li.bv-tab-success > a {
  color: #3c763d;
}
.nav-tabs li.bv-tab-error > a {
  color: #a94442;
}

.bv-form .bv-icon-no-label {
  top: 0;
}

.bv-form .bv-icon-input-group {
  top: 0;
  z-index: 100;
} */
.footer {
    background: url(./assets/fonter_bg.png) no-repeat;
    overflow: hidden;
    /* padding-bottom: 2.5rem; */
}
.footer_con {
    max-width: 1240px;
    width: 98%;
    margin: 2.5rem auto 20px;
    background: #ffffff;
    padding: 0.625rem;
}
.footer_con .con {
    border: 1px solid #f7f5ee;
}
.footer_con .con .nei {
    width: 60%;
    margin: auto;
    padding: 2.5rem 0px;
}
.footer_con .con .nei .di_nav {
    /* float: left;
    width: 100%; */
    display: flex;
    align-content: space-between;
    flex-wrap: nowrap;
    justify-content:space-between;
}
.footer_con .con .nei .di_nav li:not(:last-child) {
    /* float: left;
    width: 16%; */
    
    /* background: url(./assets/nav_r.png) no-repeat right; */
    text-align: center;
    line-height: 1.875rem;
    font-size: 0.875rem;
    list-style: none;
}
.footer_con .con .nei .di_nav li {
    /* float: left;
    width: 16%; */
    /* align-content: space-between; */
    text-align: center;
    line-height: 1.875rem;
    font-size: 0.875rem;
    list-style: none;
}
.footer_con .con .nei .di_nav li a {
    color: #666666;
}
.footer_con .con .nei .di_nav li a:hover {
    color: #81a849;
}
.footer_con .con .nei .links {
    width: 4.375rem;
    float: left;
    line-height: 1.875rem;
    background: url(./assets/links_r.png) no-repeat right;
    text-align: center;
    cursor: pointer;
    position: relative;
    color: #666666;
    font-size: 0.875rem;
}
.footer_con .con .nei .links ul {
    position: absolute;
    top: 1.625rem;
    z-index: 9999;
    width: 43.75rem;
    text-align: center;
    color: #666666;
    font-size: 0.75rem;
    line-height: 1.95rem;
    display: none;
}
.footer_con .con .nei .links ul a {
    color: #666666;
}
.footer_con .con .nei .links ul a:hover {
    color: #81a849;
}
.footer_con .con .nei .lian {
    color: #999999;
    font-size: 0.875rem;
    text-align: center;
    line-height: 1.625rem;
}
.footer_con .con .nei .lian a {
    color: #999999;
}
.footer_con .con .nei .lian a:hover {
    color: #81a849;
}
.footer_con .con .nei .lian .er_a {
    position: relative;
    width: 5.625rem;
    cursor: pointer;
}
.footer_con .con .nei .lian .er_a .er_img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 5.5rem;
    height: 5.5rem;
    z-index: 99999;
    display: none;
}
@media (max-width: 992px) {
    .footer_con .con .nei {
        width: 98%;
    }
}
@media (max-width: 480px) {
    .footer_con .con .nei {
        padding: 1.875rem 0px;
    }
    .footer_con .con .nei .di_nav,
    .footer_con .con .nei .links {
        display: none;
    }
}

.copy {
    color: #999999;
    line-height: 1.325rem;
    text-align: center;
    font-size: 0.875rem;
    padding: 1.25rem;
}
@media (max-width: 480px) {
    .copy {
        font-size: 0.75rem;
    }
}
</style>
