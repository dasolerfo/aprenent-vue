<template>
  <h1>{{ message }}</h1>
  <FoodItem />
  <FoodItem />
  <FoodItem />
  <FoodItem />
  <FoodItem />

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