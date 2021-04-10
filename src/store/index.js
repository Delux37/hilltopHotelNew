import { createStore } from 'vuex'
import request from './request.js'
import zoomedImage from './zoomedImage.js'

export default createStore({
  modules: {
    zoomedImage,
  },
  state: {
    slide: null,

    roomTypesList: null,

    serviceList: null,

    about: null,

    blogList: null,
    blogDetail: null,

    contact: null,

    isScrolled: false,

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
    },

    setBlogDetail(state,payload){
      state.blogDetail = payload;
    },

    setContact(state, payload){
      state.contact = payload;
    },

    setScrolled(state,payload){
      state.isScrolled = payload
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

    async fetchBlogDetail({commit}, payload) {
      const data = await request.get( `blog/${payload}` , {
          headers : {
              'Accept-Language' : 'en'
          }
      })
      commit('setBlogDetail', data.data)
    },

    async fetchContactData({commit}) {
      const data = await request.get('contact/', {
          headers : {
              'Accept-Language' : 'en'
          }
      })
      commit('setContact', data.data);
    },

    isScrolled({commit}, payload){
      commit('setScrolled', payload);
    }
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
    },

    getBlogDetail(state){
      return state.blogDetail
    },

    getContact(state){
      return state.contact
    },

    isScrolled(state){
      return state.isScrolled
    }
  }
})
