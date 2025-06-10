import { createApp } from 'vue'

//import App from './App.vue'
//import App2 from './App2.vue'
import App3 from './App3.vue'

import SlotComponent from './components/SlotComponent.vue'
import FoodItem from './components/FoodItem.vue'
import './style.css'

const app = createApp(App3)
app.component('FoodItem', FoodItem)
app.component('slot-comp', SlotComponent)
app.mount('#app')