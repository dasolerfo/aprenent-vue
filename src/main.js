import { createApp } from 'vue'

//import App from './App.vue'
//import App2 from './App2.vue'
//import App3 from './App3.vue'
import App4 from './App4.vue'

import SlotComponent from './components/SlotComponent.vue'
import FoodItem from './components/FoodItem.vue'
import CompOne from './components/Component1.vue'
import CompTwo from './components/Component2.vue'


import './style.css'

const app = createApp(App4)
app.component('FoodItem', FoodItem)
app.component('slot-comp', SlotComponent)

app.component('comp-one', CompOne)
app.component('comp-two', CompTwo)

app.mount('#app')