import request from './request.js'

const contactModule = {
    state: {
        contact: null,
    },
    mutations: {
        setContact(state, payload){
            state.contact = payload;
          },
    },
    actions: {
        async fetchContactData({commit, rootState}) {
            const data = await request.get('contact/', {
                headers : {
                    'Accept-Language' : rootState.globalLanguage
                }
            })
            commit('setContact', data.data);
          },      
    },
    getters: {
    getContact(state){
        return state.contact
      },
    }
};
export default contactModule