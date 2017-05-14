<template>
  <div>
    <label class="label" v-if="label">{{ label }}</label>
    <input class="input" 
      :type="type" 
      @keyup="onChange" 
      :value="value" />
  </div>
</template>

<script>
  export default {
    name: 'rInput',
    props: {
      label: String,
      type: {
        default: 'text'
      },
      value: {}
    },
    methods: {
      onChange (event) {
        this.$emit('changed', event.target.value)
      }
    }
  }
</script>

<style lang="postcss" scoped>
.input {
  background-color: var(--color-white);
  border: 1px solid var(--color-alto);
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  display: flex;
  font-family: var(--font-default);
  font-size: 14px;
  margin-bottom: var(--spacing);
  padding: var(--spacing-third) var(--spacing-half);
  transition: border-color ease-in-out 150ms, box-shadow ease-in-out 150ms;

  &:focus {
    outline: none;
  }

  &.disabled {
    background-color: var(--color-gallery);
  }
}

.label {
  display: block;
  font-size: 16px;
  margin-bottom: var(--spacing-third);
}
</style>