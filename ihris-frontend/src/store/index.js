import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    version: "5.0.0",
    user: {
      loggedin: false,
      name: "",
      obj: {}
    },
    login: {
      links: []
    },
    signup: {},
    idp: 'ihris',
    security_off: false,
    route: {
      from: "/",
      to: "/"
    },
    message: {
      type: "info",
      text: null,
      timeout: 5000,
      active: false
    },
    cols: { header: 4, content: 8 },
    progress: {
      enabled: false,
      title: ''
    },
    minidrawer: false
  },
  mutations: {
    login( state, user ) {
      state.user.loggedin = true
      state.user.name = user.name
      state.user.role = user.role
      state.user.userId = user.userId
      state.user.obj = user.obj
      state.user.location = user.location
    },
    logout( state ) {
      state.user.loggedin = false
      state.user.name = ""
      state.user.role = ""
    },
    securityOff( state, data ) {
      state.security_off = data
    },
    closeMessage( state ) {
      state.message.active = false
    },
    setMessage( state, data ) {
      if ( typeof data === "string" ) {
        state.message.type = "info"
        state.message.timeout = 5000
        state.message.text = data
        state.message.active = true
      } else {
        state.message.type = data.type || "info"
        state.message.timeout = data.timeout || 5000
        state.message.text = data.text
        state.message.active = true
      }
    }
  },
  actions: {},
  modules: {}
});
