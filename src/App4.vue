<template>
    <h1>Dynamic Components</h1>
    <p>App.vue switches between which component to show.</p>
    <button @click="toggleValue = !toggleValue">
      Switch component
    </button>
    <KeepAlive>
        <component :is="activeComp"></component>
    </KeepAlive>
    
  </template>
  
  <script>
    export default {
      data() {
        return {
          toggleValue: true
        }
      },
      computed: {
        activeComp() {
          if(this.toggleValue) {
            return 'comp-one'
          }
          else {
            return 'comp-two'
          }
        }
      }
    }
  </script>
