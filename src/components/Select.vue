<template>
  <div>
    <label class="label" v-if="label">{{ label }}</label>
    <select
      @change="onChange">
      <option v-for="item in list" :selected="item === value">{{ item }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'rSelect',
    props: {
      list: Array,
      label: String,
      value: String
    },
    methods: {
      onChange (event) {
        this.$emit('changed', event.target.value)
      }
    }
  }
</script>

<style lang="postcss" scoped>
  select {
    background-color: var(--color-white);
    border: 1px solid var(--color-alto);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    display: flex;
    font-family: var(--font-default);
    font-size: 14px;
    margin-bottom: var(--spacing);
    padding: var(--spacing-third) var(--spacing-half);
    transition: border-color ease-in-out 150ms, box-shadow ease-in-out 150ms;
    width: 100%;
    height: 43px;

    &:focus {
      outline: none;
    }

    &.disabled {
      background-color: var(--color-gallery);
    }
  }

  option {
    padding: 1em;
  }

  .label {
    display: block;
    font-size: 16px;
    margin-bottom: var(--spacing-third);
  }
</style>