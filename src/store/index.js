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
      userAvatar: ""
    }
  },
  getters: {},
  mutations: {
    updateUserInfo(state, newObj) {
      state.userInfo = newObj;
    }
  },
  actions: {},
  modules: {}
});
