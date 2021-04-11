import request from './request.js'

const headerModule = {
    state: {
        slide: null,
    },
    mutations: {
        setSlide(state, payload){
            state.slide = payload
          },
    },
    actions: {
        async fetchSliderData({commit, rootState}) {
            const data = await request.get('slider/', {
                headers : {
                    'Accept-Language' : rootState.globalLanguage
                }
            })
            commit('setSlide', data.data);
          },
    },
    getters: {
        getSlider(state){
            return state.slide;
          },
    }
};
export default headerModule