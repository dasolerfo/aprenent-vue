<template>
    <li v-bind="$attrs">{{ itemName }}</li>
  </template>
  
  <script>
    export default {
      props: ['itemName']
    }
  </script>