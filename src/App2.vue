<template>
    <h2>Slot</h2>
    <slot-comp>Hello World!</slot-comp>

    <h3>Todo List</h3>  
    <ul>
      <todo-item
        v-for="x in items"
        :key="x"
        :item-name="x"
        style="background-color: lightgreen;"
      />
    </ul>
    <input v-model="newItem">
    <button @click="addItem">Add</button>
  </template>
  
  <script>

    import TodoItem from './components/TodoItem.vue';

   
    export default {
      data() {
        return {
          newItem: '',
          items: ['Buy apples','Make pizza','Mow the lawn']
        };
      },
      methods: {
        addItem() {
          this.items.push(this.newItem),
          this.newItem = '';
        }
      }, 
    components: {
      TodoItem
    }
    }
  </script>