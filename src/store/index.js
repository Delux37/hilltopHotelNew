import { createStore } from 'vuex'
import request from './request.js'

export default createStore({
  state: {
    slide: null,

    roomTypesList: null,

    serviceList: null,

    about: null,

    blogList: null,
  },
  mutations: {
    setSlide(state, payload){
      state.slide = payload
    },

    setRoomTypesList(state,payload){
      state.roomTypesList = payload;
    },

    setService(state, payload){
      state.serviceList=payload
    },

    setAbout(state,payload){
      state.about = payload
    },

    setBlogs(state, payload){
      state.blogList = payload.results
    }

  },
  actions: {
    async fetchSliderData({commit}) {
      const data = await request.get('slider/', {
          headers : {
              'Accept-Language' : 'en'
          }
      })
      commit('setSlide', data.data);
    },

    async fetchRoomTypesData({commit}) {
      const data = await request.get('room-types/', {
          headers : {
              'Accept-Language' : 'en'
          }
      })
      commit('setRoomTypesList', data.data);
    },

    async fetchServiceData({commit}) {
      const data = await request.get('service/', {
          headers : {
              'Accept-Language' : 'en'
          }
      })
      commit('setService', data.data)
    },

    async fetchAboutData({commit}) {
      const data = await request.get('about/', {
          headers : {
              'Accept-Language' : 'en'
          }
      })
      commit('setAbout', data.data);
    },

    async fetchBlogs({commit}) {
      const data = await request.get('blog/?page=1', {
          headers : {
              'Accept-Language' : 'en'
          }
      })
      commit('setBlogs', data.data)
    },
  },
  getters: {
    getSlider(state){
      return state.slide;
    },

    getRoomTypesList(state){
      return state.roomTypesList;
      },

      getServiceList(state){
        return state.serviceList
    },

    getAbout(state){
      return state.about
    },

    getBlogs(state){
      return state.blogList;
    }
  }
})
