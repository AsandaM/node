import { createStore } from 'vuex'
import axios from 'axios'
import { toast }  from 'vue3-toastify'
import { applyToken } from '@/service/AuthenticatedUser.js'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()
import 'vue3-toastify/dist/index.css'
import router from '@/router'

const apiURL = 'https://fullstack-project-ra29.onrender.com'
// Should you reload the page after logging in
applyToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
    user: null,
    products : null,
    product : null,
    recentProducts: null,
    homeRecentProducts: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) { 
      state.users = value
    },
    setUser(state, value) { 
      state.user = value
    },
    setProduct(state, value) { 
      state.product = value
    },
    setProducts(state, value) { 
      state.products = value
    },
    setRecentProducts(state, value) { 
      state.recentProducts = value
    },
    setHomeRecentProducts(state, value) {
      state.homeRecentProducts = value
    }
  },
  actions: {
    // ==== Product =====
    async fetchProducts(context) {
      try {
        const results = await (await axios.get(`${apiURL}product`)).data
        if (results) {
          context.commit('setProducts', results)
        } else {
          router.push({ name: 'login' })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async homeRecentProducts(context) {
      try {
        const res = await axios.get(`${apiURL}/products/homeRecent`) 
        console.log(res);
        
        const results = await res.data
        
        if(results) {
          context.commit('setHomeRecentProducts', results)
        } else {
          toast.error('Please try again later')  , {  //its going to be success if the request was successful. Its style
            autoClose: 2000
          }  //Used to display an error message
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
        // Toast is used to display an error message
        
      }
    },
    async recentProducts(context) {
      try {
        const res = await axios.get(`${apiURL}/products/recent`) 
        console.log(res);
        
        const results = await res.data
        
        if(results) {
          context.commit('setRecentProducts', results)
        } else {
          toast.error('Please try again later')  , {  
            autoClose: 2000
          }  
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000
        })
        
      }
    }
  
  },
  
  modules: {
  }
})
