<template>
  <div class="singup">
    <h1 class="dl">注册</h1>
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input @change="yhmyz"  v-model="username" ></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="nickname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="oldpassword"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="mobile"></el-input>
      </el-form-item>
      <el-form-item label="验证码" class="db-yam">
        <el-input v-model="vCode" class="yam"></el-input>
        <div @click="getcode()"  class="v-yam" v-html="vCodeSvg"></div>
      </el-form-item>

      <el-form-item class="db">
        <el-button type="primary" @click="singup" class="btn">注册</el-button>
        <router-link class="tz" to="/login">已有账号?去登录</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      oldpassword: "",
      nickname: "",
      mobile: "",
      vCode: "",
      vCodeSvg: "",
    };
  },
  created() {
    this.getcode();
  },
  methods: {

    //   用户名是否重复验证
    yhmyz(){
        this.$http.get("users/checkUsername/"+this.username).then(res=>{
        },err=>{
            this.username=''
        })
    },

    //   获取验证码
    getcode(){
        this.$http.get("users/getVCode").then(res=>{
            this.vCodeSvg=res
        })
    },
    singup() {
      let {
        username,
        password,
        oldpassword,
        nickname,
        mobile,
        vCode,
        vCodeSvg
      } = this;

      // 非空校验
      if (
        !username.trim() ||
        !password.trim() ||
        !oldpassword.trim() ||
        !nickname.trim() ||
        !mobile.trim() ||
        !vCode.trim() 
      ) {
        return this.$message({
          showClose: "error",
          message: "请检查以上内容是否均已填写!"
        });
      }

      // 新老密码校验
      if (password !== oldpassword) {
        return this.$message({
          showClose: true,
          message: "两次输入密码有差异"
        });
      }

    this.$http.post("users/register",{
        username,
        nickname,
        password,
        vCode,
        mobile	
    }).then(res=>{
        // console.log(res,222)
        if(res.status==200){
            this.$message({
              type: 'success',
              message: res.succMsg
            })
        }
       localStorage.setItem("token",res.data.token)
    localStorage.setItem("userinfo",JSON.stringify(res.data) ) 
      this.$router.push("/home")
    })

    }
  }
};
</script>

<style lang="less" >
.singup {
  width: 50%;
  margin: 10px auto;
  .db-yam {
    .el-form-item__content {
      position: relative;
      // float: left;
      .yam {
        position: absolute;
        left: 0;
        width: 60%;
      }
      .v-yam {
        position: absolute;
        right: 80px;
      }
    }
  }
  .ztys{
      .el-input__inner{
          color: red;
      }
      
  }
}
</style>
