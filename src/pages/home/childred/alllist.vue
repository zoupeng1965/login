<template>
  <div class="alllist">
    <el-table :data="list" style="width: 100%">
      <el-table-column prop="id" label="编号" width="150"></el-table-column>
      <el-table-column label="配送信息">
        <el-table-column prop="receiver_name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="mobile" label="手机号" width="120"></el-table-column>
        <el-table-column label="地址">
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
          <el-table-column prop="city" label="市" width="120"></el-table-column>
          <el-table-column prop="area" label="区" width="120"></el-table-column>
          <el-table-column prop="detailed_address" label="地址" width="300"></el-table-column>
          <el-table-column prop="postcode" label="邮编" width="120"></el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: []
    }; 
  },
  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      let token = localStorage.getItem("token") || "";
      this.$http
        .get("users/getReceiverAddress", {
          // headers: { Authorization: token }
          // 拦截器设置了
        })
        .then(res => {
          this.list = res.data;
        });
    }
  }
};
</script>


<style lang="less">
.el-col-20 {
  padding: 20px;
}
</style>
