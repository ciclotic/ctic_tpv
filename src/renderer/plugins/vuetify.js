import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#2E4BF2',
        secondary: '#05592A',
        accent: '#5EA653',
        error: '#FF5252',
        info: '#85A0F2',
        success: '#5079F2',
        warning: '#FFC107'
      }
    }
  },
  light: true,
  icons: {
    iconfont: 'mdi'
  }
}

export default new Vuetify(opts)
