import {createApp} from 'vue'
import App from './App.vue'
import './style.css';

import {
  create,
  NButton,
  NIcon
} from 'naive-ui'

const naive = create({
  components: [NButton, NIcon]
})
createApp(App).use(naive).mount('#app')
