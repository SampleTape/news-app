<template>
  <div class="edit-info-view">
    <div class="header">
      <div class="left">
        <div class="icon" @click="back">
          <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
        </div>
      </div>
      <div class="right">
        <div>编辑资料</div>
        <div>
          <span>资料完成度</span>
          <span>50%</span>
        </div>
      </div>
    </div>
    <div class="avatar-box">
      <div class="avatar">
        <van-uploader
          :before-read="beforeRead"
          :after-read="afterRead"
          :preview-full-image="false"
          :deletable="false"
          :max-count="1"
        >
          <van-image round :src="userinfo.userAvatar" />
        </van-uploader>
      </div>
      <div class="text">点击更换头像</div>
    </div>
    <div class="info-items">
      <van-field
        v-model="userinfo.userName"
        name="用户名"
        label="用户名"
        placeholder="待完善"
      />
    </div>
    <div class="info-items">
      <van-field
        v-model="userinfo.userDec"
        name="简介"
        label="简介"
        placeholder="待完善"
      />
    </div>
    <div class="info-items">
      <van-field
        v-model="userinfo.userSex"
        is-link
        readonly
        name="picker"
        label="性别"
        placeholder="待完善"
        @click="showPicker = true"
      />
      <van-popup v-model:show="showPicker" position="bottom">
        <van-picker
          :columns="columns"
          @confirm="onConfirmSex"
          @cancel="showPicker = false"
        />
      </van-popup>
    </div>
    <div class="info-items">
      <van-field
        v-model="userinfo.userBirthday"
        is-link
        readonly
        name="calendar"
        label="生日"
        placeholder="待完善"
        @click="showCalendar = true"
      />
      <van-calendar v-model:show="showCalendar" @confirm="onConfirmBirthday" />
    </div>
    <div class="info-items">
      <van-field
        v-model="userinfo.userArea"
        is-link
        readonly
        name="area"
        label="地区"
        placeholder="待完善"
        @click="showArea = true"
      />
      <van-popup v-model:show="showArea" position="bottom">
        <van-area
          :area-list="areaList"
          @confirm="onConfirmArea"
          @cancel="showArea = false"
        />
      </van-popup>
    </div>
  </div>
</template>
<script>
import { getApi, postApi } from "@/util/api.js";
import { areaList } from "@vant/area-data";

export default {
  data() {
    return {
      userinfo: {
        userId: "",
        userName: "",
        userDec: "",
        userSex: "",
        userBirthday: "",
        userArea: "",
        userAvatar: ""
      },
      showArea: false,
      showCalendar: false,
      showPicker: false,
      areaList: areaList,
      columns: ["男", "女"]
    };
  },
  mounted() {
    getApi("/userinfo/" + this.userId).then((res) => {
      console.log(res);
      this.userinfo = res.data;
      this.$store.commit("updateUserInfo", this.userinfo);
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    onConfirmArea(areaValues) {
      // 调用接口
      this.showArea = false;
      this.userinfo.userArea = areaValues
        .filter((item) => !!item)
        .map((item) => item.name)
        .join("/");
    },
    onConfirmBirthday(date) {
      // 调用接口
      this.userinfo.userBirthday = `${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    },
    onConfirmSex(value) {
      // 调用接口
      this.userinfo.userSex = value;
      this.showPicker = false;
    },
    beforeRead(file) {
      const url = window.URL || window.webkitURL || window.mozURL;
      const src = url.createObjectURL(file); // 本地临时的地址
      this.userinfo.userAvatar = src;
      return true;
    },
    afterRead() {
      this.$toast.loading({
        duration: 12000,
        forbidClick: true
      });
      postApi("/updateuserinfo", {
        userId: this.userId
      }).then((res) => {
        // 更新服务器url
        this.userinfo.userAvatar = res.data.userAvatar;
        this.$toast.success("更新成功！");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.edit-info-view {
  box-sizing: border-box;
  height: 100vh;
  padding: 4rem 1rem;
  color: #222222;
  .header {
    background-color: #ffffff;
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5000;
    border-bottom: 1px solid #e8e8e8;
    .icon {
      font-size: 1.25rem;
      color: #222222;
    }
    .left {
      position: absolute;
      left: 1rem;
      top: 0;
      height: 3rem;
      line-height: 3rem;
    }
    .right {
      & > div:first-child {
        padding-top: 0.2rem;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
      }
      & > div:last-child {
        font-size: 0.75rem;
        padding: 0.1rem;
        text-align: center;
        & > span:first-child {
          color: #999999;
        }
        & > span:last-child {
          color: #dd504a;
        }
      }
    }
  }
  .avatar-box {
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .avatar {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .text {
      padding: 1rem;
      font-size: 1rem;
    }
  }
  .info-items {
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    border-bottom: 1px solid #e8e8e8;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      color: #999999;
      &.filled {
        color: #222222;
      }
      .icon {
        color: #999999;
      }
    }
  }
}
</style>
