import Vue from 'vue'
import App from './App'
import {next} from 'api/mixin.js'
import saveSurveyObj from 'api/saveSurveyObj.js'
Vue.config.productionTip = false
Vue.prototype.$next = next
Vue.prototype.$allArr = saveSurveyObj



App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
