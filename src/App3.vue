<template>
    <h3>Slots in Vue</h3>  
    <p>We create card-like div boxes from the foods array.</p>
    <div id="wrapper">
      <slot-comp v-for="x in foods" v-slot:default>
        <img v-bind:src="x.url">
        <h4>{{x.name}}</h4>
        <p>{{x.desc}}</p>
      </slot-comp>
    </div>

    <footer>
    <slot-comp #default>
      <h4>Footer</h4>
    </slot-comp>
  </footer>


  </template>
<script>
import SlotComp from './components/SlotComponent.vue';
export default {
  data() {
    return {
      foods: [
        { name: 'Apples', desc: 'I like apples', url: 'https://picsum.photos/200/300?random=1' },
        { name: 'Bananas', desc: 'I like bananas', url: 'https://picsum.photos/200/300?random=2' },
        { name: 'Cherries', desc: 'I like cherries', url: 'https://picsum.photos/200/300?random=3' }
      ]
    };
  },
  components: {
    SlotComp
  }
};
</script>
