import {createApp} from 'vue'
import App from './App.vue'
import './style.css';

import {
  create,
  NButton,
  NIcon,
  NInput,
  NModal,
  NCard,
  NTabs,
  NTabPane
} from 'naive-ui'

const naive = create({
  components: [NButton, NIcon, NInput, NModal, NCard, NTabs, NTabPane]
})
createApp(App).use(naive).mount('#app')
