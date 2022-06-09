import { createStore } from "vuex";

export default createStore({
  state: {
    userInfo: {
      userId: "",
      userName: "",
      userDec: "",
      userSex: "",
      userBirthday: "",
      userArea: "",
      userAvatar: "",
      postNum: 0,
      likeNum: 0,
      followerNum: 0,
      followingNum: 0
    }
  },
  getters: {
    isLogin(state) {
      return state.userInfo.userId !== "";
    }
  },
  mutations: {
    updateUserInfo(state, newObj) {
      state.userInfo = newObj;
    }
  },
  actions: {},
  modules: {}
});
