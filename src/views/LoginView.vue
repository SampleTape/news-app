<template>
  <div class="login-container">
    <div class="goBack" @click="goBack">
      <font-awesome-icon :icon="['fas', 'xmark']"></font-awesome-icon>
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="userName"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button color="#fe3444" round block native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { postApi } from "@/util/api.js";
export default {
  name: "LoginView",

  data() {
    return {
      userName: "",
      password: ""
    };
  },

  mounted() {},

  methods: {
    onSubmit() {
      postApi("/userlogin", {
        userName: this.userName,
        password: this.password
      }).then((res) => {
        console.log(res);
        this.$store.commit("updateUserInfo", res.data);
        this.$router.go(-1);
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  margin: 1rem auto;
  .goBack {
    margin: 0.5rem;
    font-size: 1rem;
  }
  form {
    margin: 10% auto;
  }
}
</style>
