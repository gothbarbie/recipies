 <template>
  <section>
    <h2>View Recipies</h2>
    <ul v-if="recipies.length > 0" class="recipies">
      <li v-for="r in recipies">{{ r.name }}</li>
    </ul>
    <div v-else>No recipies found</div>
    {{ recipies }}
  </section>
</template>


<script>
  export default {
    computed: {
      recipies () {
        return this.$store.state.recipies
      }
    }
  }
</script>

<style scoped>
ul.recipies {
  list-style-type: square;
  margin: var(--spacing);
}
</style>