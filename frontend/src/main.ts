import {createApp} from 'vue'
import App from './App.vue'
import './style.css';

import {
  create,
  NButton,
  NIcon,
  NInput,
} from 'naive-ui'

const naive = create({
  components: [NButton, NIcon, NInput]
})
createApp(App).use(naive).mount('#app')
