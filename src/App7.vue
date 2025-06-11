<template>
    <h1>Example</h1>
    <p>Click the button to reveal the 3rd list element stored as an array element in the $refs object.</p>
    <button @click="getValue">Get the 3rd list element</button><br>
    <ul>
      <li v-for="x in liTexts" ref="liEl">{{ x }}</li>
    </ul>
    <pre>{{ thirdEl }}</pre>
  </template>
  
  <script>
    export default {
      data() {
        return {
          thirdEl: ' ',
          liTexts: ['Apple','Banana','Kiwi','Tomato','Lichi']
        }
      },
      methods: {
        getValue() { 
          this.thirdEl = this.$refs.liEl[2].innerHTML;
          console.log("this.$refs.liEl = ",this.$refs.liEl);
        }
      }
    };
  </script>
  
  <style>
  pre {
    background-color: lightgreen;
    display: inline-block;
  }
  </style>