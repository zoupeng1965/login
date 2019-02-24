<template>
  <div class="login">
      <h1 class="dl">登录</h1>
    <el-form ref="form"  label-width="80px">
      <el-form-item label="用户账号">
        <el-input v-model="username"></el-input>
      </el-form-item>
       <el-form-item label="用户密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
    
      <el-form-item class="db">
        <el-button type="primary" @click="onSubmit" class="btn">登录</el-button>
        <router-link class="tz" to="/singup">没有账号?去注册</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
   username:"",
   password:''

    };
  },
  methods: {
    onSubmit() {
        let {username,password}=this
      if(username.trim().length==0||password.trim().length==0){
          return   this.$message({
          showClose: true,
          message: '用户名或者密码为空',
           type: 'error'
        });
       
      }
        // 1. 将用户输入的信息提交给服务器 vue-resource  axios
     this.$http.post("users/login",{
         username,
         password
     }).then(res=>{
       console.log(this,11)
          this.$message({
          showClose: true,
          message: res.succMsg,
        });
    // console.log(res.data.data.token)
    localStorage.setItem("token",res.data.token)
    localStorage.setItem("userinfo",JSON.stringify(res.data) )

    this.$router.push("/home")

     })



    }
  }
};
</script>

<style lang="less">
.login,.singup{
    width:40%;
    margin: 200px auto;
    .dl{
      width: 110%;
color: #0094ff;
text-align: center
    }
    .el-form-item__content{
      display: flex;
      justify-content: space-between;
      .btn{
        width: 30%;
    }
    .tz{
      text-decoration: none;
        color: #0094ff;
    }
    }
    
}
</style>
