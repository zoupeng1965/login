<template>
  <div class="home">
     
    <el-row class="tac">
      <el-col :span="4">
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
           @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户中心</span>
            </template>
            <el-menu-item-group>
              <template slot="title">收货人信息</template>
              <el-menu-item index="1-1">所有收货人信息</el-menu-item>
              <el-menu-item index="1-2">武汉收货人信息</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="用户安全">
              <el-menu-item index="1-3">修改密码</el-menu-item>
            </el-menu-item-group>
            
          </el-submenu>
         <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>装备中心</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
        
          
        </el-menu>
      </el-col>
       <el-col :span="20">
           <div >
               <p>昵称:{{userInfo.nickname}}</p>
               <el-button type="danger">退出登录</el-button>
           </div>
            <router-view/>
       </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data(){
        return {
            userinfo: JSON.parse(localStorage.getItem('userInfo') || '{}')
        }
    },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    switch(key){
        case "1-1":
        // 处理1-1的回调
        this.$router.push("/home/alllist")
        break;
         case "1-2":
        // 处理1-2的回调
        break;
        
    }
    }
  }
};
</script>