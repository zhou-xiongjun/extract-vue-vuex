<template>
  <div>
    <div>``{{ $store.state.a }}``</div>
    <div>``{{ $store.state.count }}``</div>
    <div>``{{ $store.getters.getCount }}``</div>

    <button @click="$store.state.a += 10">changeA</button>
    <button @click="$store.state.count += 10">changeCount</button>

    <button @click="fn">changeMutations</button>
    <button @click="fn2">changeActions</button>
  </div>
</template>

<script>
export default {
  name: '',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    fn() {
      let { commit } = this.$store
      commit('addCount', 10)
    },
    fn2() {
      this.$store.dispatch("actionsA", 1000)
    }
  },
  filters: {

  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    console.log(this.$store)
  },
  updated() {

  },
  beforeDestroy() {

  }
}
</script>

<style scoped>
</style>