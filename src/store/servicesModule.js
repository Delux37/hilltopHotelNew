import request from './request.js'

const servicesModule = {
    state: {
        serviceList: null,
    },
    mutations: {
        
    setService(state, payload){
        state.serviceList=payload
      },
    },
    actions: {
        async fetchServiceData({commit, rootState}) {
            const data = await request.get('service/', {
                headers : {
                    'Accept-Language' : rootState.globalLanguage
                }
            })
            commit('setService', data.data)
          },
    },
    getters: {
        getServiceList(state){
            return state.serviceList
        },
    }
};
export default servicesModule