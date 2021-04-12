import request from './request.js'

const blogListModule = {
    state: {
        blogList: null,

        blogDetail: null,

        nextPage: '',
    },
    mutations: {
        
    setBlogs(state, payload){
        state.blogList = payload.results
        state.nextPage = payload.next
      },
      
      appendBlogs(state, payload){
        state.blogList.push(...payload.results);
        state.nextPage = payload.next
      },
      
      setBlogDetail(state,payload){
        state.blogDetail = payload;
      },
    },
    actions: {
        async fetchBlogs({commit, rootState}) {
            const data = await request.get('blog/?page=1', {
                headers : {
                    'Accept-Language' : rootState.globalLanguage
                }
            })
            commit('setBlogs', data.data)
          },
      
          async fetchBlogDetail({commit, rootState}, payload) {
            const data = await request.get( `blog/${payload}` , {
                headers : {
                    'Accept-Language' : rootState.globalLanguage
                }
            })
            commit('setBlogDetail', data.data)
          },
          async loadMore({commit, state ,rootState}) {
            const data = await request.get(state.nextPage, {
                headers : {
                    'Accept-Language' : rootState.globalLanguage
                }
            })
            commit('appendBlogs', data.data)
          },
    },
    getters: {
        getBlogs(state){
            return state.blogList;
          },
      
          getBlogDetail(state){
            return state.blogDetail
          },

          isLoadAvailable(state){
            return state.nextPage
          }
    }
};
export default blogListModule