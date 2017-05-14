<template>
  <i 
    class="fa icon"
    :class="iconType"
    tabIndex="-1" />
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      type: {
        required: true
      }
    },
    computed: {
      iconType () {
        return `fa-${this.type}`
      }
    }
  }
</script>

<style lang="postcss" scoped>
  .icon:focus {
    outline: none;
  }
</style>