<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>


<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Are you lost?'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
