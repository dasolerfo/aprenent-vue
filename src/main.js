import { createApp } from 'vue'

import App from './App.vue'
import App2 from './App2.vue'
import FoodItem from './components/FoodItem.vue'
import './style.css'

const app = createApp(App2)
app.component('FoodItem', FoodItem)
app.mount('#app')