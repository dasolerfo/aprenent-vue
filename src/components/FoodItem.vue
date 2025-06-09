<template>
  
    <div v-on:click="countClicks">
      <h2>{{ foodName }}</h2>
      <p>{{ foodDesc }}</p>
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
    },
    props: {
      foodName: {
        type: String,
        required: true,
        default: 'Food Item'
      },
      foodDesc: {
        type: String,
        default: 'This is a food item description.', 
        validator: function(value) {
          if( 20<value.length && value.length<50 ) {
            return true;
          }
          else {
            return false;
          }
        }
      }
    },
  };

  </script>
  
  <style>
    #red {
      color: red;
      font-weight: bold;
    } 
  </style>