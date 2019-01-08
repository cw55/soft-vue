<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="username" v-model="userName"> <br>
      <input type="text" name="age" v-model="age"> <br>
      <a href="javascript:;" @click="addUser">提交</a>
      <a href="javascript:;" @click="selectFrom" data-select="student">查表</a>
      选择图片：<input type="file" name="pic" ref="inputer" @change="addImg" multiple accept="image/png,image/jpeg,image/gif,image/jpg"/>
      <a href="javascript:;" @click="upload">上传图片</a>
    </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: '',
      age: '',
      formData:new FormData(),
      fill:'',
      imgs: {},
    }
  },
  methods: {
    addUser() {
      var name = this.userName;
      var age = this.age;
      console.log(name,age);
      this.$http.post('/api/user/addUser', {
        username: name,
        age: age
      },{}).then((response) => {
        console.log(response);
      }).catch(function(error){
        //报错Uncaught (in promise),
        //这个在后面加个 catch 就行了
        // PS：
        // 1. 前面不必非得改成 response => 的这种形式；
        // 2. 这不解决问题（非问题解决之道），现在代码的状态是前面有错，所以catch获取了异常，并打印了出来，并没有说前面的res就能用了。
        console.log(error)
      });
    },
    selectFrom(event) {
      // var student = $(event.currentTarget).attr("data-select");
      // console.log(student);
      this.$http.post('/api/user/select', {
        date1: '1988-1-2',
        date2: '1988-12-1'
      },{}).then((response) => {
        console.log(response);
      }).catch(function(error){
        //报错Uncaught (in promise),
        //这个在后面加个 catch 就行了
        // PS：
        // 1. 前面不必非得改成 response => 的这种形式；
        // 2. 这不解决问题（非问题解决之道），现在代码的状态是前面有错，所以catch获取了异常，并打印了出来，并没有说前面的res就能用了。
        console.log(error)
      });
    },
    addImg(event){
      let inputDOM = this.$refs.inputer;
      // 通过DOM取文件数据
      this.fil = inputDOM.files;
      console.log(this.fil[0].name)
      console.log(this.fil[0].name+'?'+new Date().getTime())
      console.log(this.fil[0])
      this.$set(this.imgs,this.fil[0].name+'?'+new Date().getTime(),this.fil[0]);
      console.log(this.imgs)

      for(let key in this.imgs){
        let name=key.split('?')[0];
        this.formData.append('multipartFiles',this.imgs[key],name);
      }
      // this.formData.append('multipartFiles',this.imgs,this.fil[0].name);
      console.log(this.formData)
    },
    upload() {
      // var student = $(event.currentTarget).attr("data-select");
      // console.log(student);
      this.$http.post('/api/user/upload', this.formData,{
        headers: {'Content-Type': 'multipart/form-data'}
      }).then((response) => {
        console.log(response);
      }).catch(function(error){
        //报错Uncaught (in promise),
        //这个在后面加个 catch 就行了
        // PS：
        // 1. 前面不必非得改成 response => 的这种形式；
        // 2. 这不解决问题（非问题解决之道），现在代码的状态是前面有错，所以catch获取了异常，并打印了出来，并没有说前面的res就能用了。
        console.log(error)
      });
    }
  }
}
</script>