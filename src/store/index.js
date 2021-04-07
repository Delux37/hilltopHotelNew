import { createStore } from 'vuex'
import request from './request.js'

export default createStore({
  state: {
    slide: null,

    roomTypesList: null,
  },
  mutations: {
    setSlide(state, payload){
      state.slide = payload
    },

    setRoomTypesList(state,payload){
      state.roomTypesList = payload;
      console.log(payload)
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
    }
  },
  getters: {
    getSlider(state){
      return state.slide;
    },

    getRoomTypesList(state){
      return state.roomTypesList;
      }
  }
})
