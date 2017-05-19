 <template>
  <section>
    <h3>{{ recipies[$route.params.id].name }}</h3>

    <div class="preview-name-description">
      <div class="preview-item" style="white-space: pre">
        <div>{{ recipies[$route.params.id].description }}</div>
      </div>
    </div>

    <h5>Ingredients</h5>
    <ul class="ingredients">
      <li v-for="(ing, i) in recipies[$route.params.id].ingredients">
        {{ ing.name }} - {{ ing.amount }}{{ ing.measurement }}
      </li>
    </ul>
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
ul.ingredients {
  list-style-type: square;
  margin: var(--spacing) 0 var(--spacing) var(--spacing);

  & li {
    line-height: 1.5em;
  }
}
.preview-name-description {
  margin-bottom: var(--spacing);
}
.preview-item {
  line-height: 1.5em;
}
</style>