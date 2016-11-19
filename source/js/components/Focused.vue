<script>
import Vue from 'vue'

export default {
  name: 'Focused',

  data () {
    return {}
  },

  methods: {
    // Use Vue Transitions.
    // mouseover: function(e) {
    //   TweenLite.to(e.currentTarget, 0.5, { scale: 1.025 });
    // },
    // mouseout: function(e) {
    //   TweenLite.to(e.currentTarget, 0.5, { scale: 1 });
    // },
    // focusIn: function(e) {
    //   TweenLite.to(e.currentTarget, 0.5, { position: 'absolute', scale: 1.5 });
    // }
  }
}

</script>

<template>
  <div class="relative">
    <div 
      @mouseover="mouseover" 
      @mouseout="mouseout" 
      @click="focusIn" 
      class="relative z-1" 
      style="cursor: pointer;"
    >
      <slot></slot>
    </div>
    <!-- <div class="overlay-90 fixed top-0 left-0 wp-100 hp-100" :class="{ 'd-none': isFocused }"></div> -->
  </div>
</template>