<template>
  <button class="btn"
    @click="onClick"
    :class="{
      primary: primary,
      large: large,
      secondary: secondary,
      disabled: disabled
    }"
    :disabled="disabled"
    :type="type">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'rButton',
    props: ['type', 'primary', 'secondary', 'disabled', 'large'],
    methods: {
      onClick () {
        this.$emit('clicked')
      }
    }
  }
</script>

<style>
.btn {
  font-size: 1em;
  padding: var(--spacing-third) var(--spacing-half);
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: var(--color-dodger-blue);
  box-shadow: 0 1px 3px rgba(0,0,0,.05);

  &:hover {
    background-color: var(--color-boston-blue);
    box-shadow: none;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-image: linear-gradient(to bottom, var(--color-silver), var(--color-dove-gray));
    border: 1px solid;
    border-image-source: linear-gradient(to left, var(--color-dove-gray), var(--color-dove-gray) 48%, var(--color-alabaster));
    border-image-slice: 1;
    cursor: not-allowed;
  }
}

.large {
  padding: 15px var(--spacing);
}

.primary {
  background: linear-gradient(var(--color-allports) 0%, var(--color-allports) 100%);
  border-color: var(--color-alto);
  background: var(--color-allports);

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: var(--color-alto);
    background: linear-gradient(var(--color-eastern-blue) 0%, var(--color-eastern-blue) 100%);
  }

  &:active {
    background: linear-gradient(var(--color-venice-blue) 0%, var(--color-venice-blue) 100%)
  }
}

.secondary {
  background: linear-gradient(var(--color-white) 0%, var(--color-alabaster) 100%);
  border-color: var(--color-alto) var(--color-alto) var(--color-silver);
  color: var(--color-mine-shaft);

  &:hover,
  &:focus {
    color: var(--color-boston-blue);
  }

  &:active {
    background: linear-gradient(var(--color-dodger-blue) 0%, var(--color-gallery) 100%)
  }
}

.iconWrap {
  margin-right: var(--spacing-third);
}
</style>