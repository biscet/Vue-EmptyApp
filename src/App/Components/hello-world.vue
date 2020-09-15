<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="email" :class="email.length < 2 ? 'red':'green'" />
    <button v-on:click="alertMsg">Домой</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    alertMsg: function () {
      this.email.length > 2 ? alert("true") : alert("false");
    },
  },
  props: {
    msg: { type: String, required: false, default: "Стринги" },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
