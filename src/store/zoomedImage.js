const serviceModule = {
    state: {
      imageZoomed: false,
      zoomedImages: null,
    },
    mutations: {
      changeZoom(state, payload){
        state.imageZoomed = payload;
      },

      addImagesToCarousel(state,payload){
        state.zoomedImages = payload;
      }
    },
    actions: {
      zoomIn({commit}){
        commit('changeZoom', true)
      },
      zoomOut({commit}){
        commit('changeZoom', false)
      },

      addImagesToCarousel({commit}, payload){
        commit('addImagesToCarousel', payload)
      }
    },
    getters: {
      images(state){
        return state.zoomedImages;
      },
      isZoomed(state){
        return state.imageZoomed;
      }
    }
};
export default serviceModule