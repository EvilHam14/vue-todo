<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button>Get Started</button>
  </div>
</template>


<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Organize at the speed of lite!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
button{
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  padding: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  cursor: pointer;
}
</style>
