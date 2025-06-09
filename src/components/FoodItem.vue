<template>
  
    <div v-on:click="countClicks">
      <h2>{{ name }}</h2>
      <p>{{ message }}</p>
      <p id="red">Click count: {{ clicks }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Apples',
        message: 'I like apples',
        clicks: 0
      }
    },
    methods: {
      countClicks() {
        this.clicks++;
      }
    }
  };
  </script>
  
  <style>
#red {
  color: red;
  font-weight: bold;
}
  </style>