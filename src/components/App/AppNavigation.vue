<template>
  <nav class="navigation" role="navigation">
    <ul>
      <li>
        <r-button
          @clicked="goToGenerateDinners" 
          primary="true">
          Generate Dinners
          <icon type="refresh"></icon>
        </r-button>  
      </li>
      <li>
        <r-button
          @clicked="goToViewRecipies"
          primary="true">
          View Recipies
          <Icon type="apple"></Icon>
        </r-button>
      </li>
      <li>
        <r-button
          @clicked="goToAddRecipie"
          primary="true">
          New Recipie
          <Icon type="plus"></Icon>
        </r-button>
      </li>
    </ul>
  </nav>
</template>

<script>
import rButton from '@/components/Button'
import Icon from '@/components/Icon'

export default {
  components: {
    rButton,
    Icon
  },
  methods: {
    goToGenerateDinners () {
      this.$router.push('/generate-dinners')
    },
    goToViewRecipies () {
      this.$router.push('/view-recipies')
    },
    goToAddRecipie () {
      this.$router.push('/add-recipie')
    }
  }
}
</script>

<style lang="postcss" scoped>
.navigation {
  margin: var(--spacing) 0;
  & ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  height: 4em;
}
</style>