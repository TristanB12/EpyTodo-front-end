<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>


<script>
import NavBar from '@/components/NavBar.vue';

  export default {
    components: {
      NavBar,
    },
  }
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Courgette&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>