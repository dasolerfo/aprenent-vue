<template>
  <h1>{{ message }}</h1>
  <FoodItem  food-desc="Les pomes son vermelles" food-name="Apples"/>

  <FoodItem  food-name="Apples" food-desc="Les pomes son vermelles"/>
  <FoodItem  food-name="Pizzeta" food-desc="Les pizzes son italianes"/>
  <FoodItem  food-name="Arroç" food-desc="L'arroç són hidrats"/>
  <FoodItem  food-name="Pinya" food-desc="La pinya és on viu Bob Esponja"/>

</template>

<script>
import FoodItem from './components/FoodItem.vue';

export default {
  data() {
    return {
      message: 'This is some text'
    };
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