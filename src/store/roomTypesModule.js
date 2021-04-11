import request from './request.js'

const roomTypesModule = {
    state: {
        roomTypesList: null,
    },
    mutations: {
        setRoomTypesList(state,payload){
            state.roomTypesList = payload;
          },
      
    },
    actions: {
        
    async fetchRoomTypesData({commit, rootState}) {
        const data = await request.get('room-types/', {
            headers : {
                'Accept-Language' : rootState.globalLanguage
            }
        })
        commit('setRoomTypesList', data.data);
      },
    },
    getters: {
        getRoomTypesList(state){
            return state.roomTypesList;
            },
      
    }
};
export default roomTypesModule