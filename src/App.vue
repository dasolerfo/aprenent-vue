<template>
  <h1>{{ message }}</h1>
  <FoodItem  food-desc="Les pomes son vermelles" food-name="Apples"  @toggle-favorite="receiveEmit"/>

  <FoodItem  food-name="Apples" food-desc="Les pomes son vermelles"  @toggle-favorite="receiveEmit"/>
  <FoodItem  food-name="Pizzeta" food-desc="Les pizzes son italianes"  @toggle-favorite="receiveEmit"/>
  <FoodItem  food-name="Arroç" food-desc="L'arroç són hidrats"  @toggle-favorite="receiveEmit"/>
  <FoodItem  food-name="Pinya" food-desc="La pinya és on viu Bob Esponja"  @toggle-favorite="receiveEmit"/>
  
  <FoodItem v-for="menjar in menjars" :food-name="menjar.name" :food-desc="menjar.desc" :key="menjar.name"/>
  

</template>

<script>
import FoodItem from './components/FoodItem.vue';

export default {
  data() {
    return {
      message: 'This is some text',
      menjars: [
        { name: 'Apples', desc: 'Les pomes son vermelles' },
        { name: 'Pizzeta', desc: 'Les pizzes son italianes' },
        { name: 'Arroç', desc: 'L\'arroç són hidrats' },
        { name: 'Pinya', desc: 'La pinya és on viu Bob Esponja' }
      ]
    };
  }
,methods: {
    receiveEmit(foodName) {
      alert('Rebut l\'emissió de l\'esdeveniment toggle-favorite' + foodName);
    }
  },
  components: {
    FoodItem
  }
};
</script>

<style>

#app > div:hover {
  cursor: pointer;
}
#app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;}


</style>