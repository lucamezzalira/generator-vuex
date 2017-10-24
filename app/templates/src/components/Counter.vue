<template>
  <div id="app">
    Clicked: {{ $store.state.counter.value }} times.
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Types from '../configs/MutationTypes';
export default {
  methods: mapActions([
    Types.INCREMENT
  ])
}
</script>