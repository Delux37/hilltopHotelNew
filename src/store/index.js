import { createStore } from 'vuex'
import request from './request.js'
import zoomedImage from './zoomedImage.js'
import headerModule from './header.js'
import roomTypesModule from './roomTypesModule.js'
import servicesModule from './servicesModule.js'
import blogListModule from './blogListModule.js'
import contactModule from './contactModule.js'

export default createStore({
  modules: {
    zoomedImage,
    headerModule,
    roomTypesModule,
    servicesModule,
    blogListModule,
    contactModule
  },
  state: {
    about: null,
    isScrolled: false,

    globalLanguage: 'en'

  },
  mutations: {
    setAbout(state,payload){
      state.about = payload
    },
    setScrolled(state,payload){
      state.isScrolled = payload
    },
    setGlobalLanguage(state,payload){
      state.globalLanguage = payload;
    }
  },
  actions: {
    async fetchAboutData({commit, state}) {
      const data = await request.get('about/', {
          headers : {
              'Accept-Language' : state.globalLanguage
          }
      })
      commit('setAbout', data.data);
    },
    isScrolled({commit}, payload){
      commit('setScrolled', payload);
    },
    changeLanguage({commit}, payload){
      commit('setGlobalLanguage', payload);
    }
  },
  getters: {
    getAbout(state){
      return state.about
    },
    isScrolled(state){
      return state.isScrolled
    },
  }
})
