<template>
  <div class="home">
    <img alt="Vue logo" src="../Static/Media/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "../Components/hello-world.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
