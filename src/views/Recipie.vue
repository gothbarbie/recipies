 <template>
  <article class="recipie">
    <h3>{{ recipie.name }} <small v-if="recipie.rating">({{ recipie.rating }}/5)</small></h3>

    <div class="preview-name-description">
      <div class="preview-item" style="white-space: pre">
        <div>{{ recipie.description }}</div>
      </div>
    </div>

    <h5>Ingredients</h5>
    <ul class="ingredients">
      <li v-for="(ing, i) in recipie.ingredients">
        {{ ing.name }} - {{ ing.amount }}{{ ing.measurement }}
      </li>
    </ul>
  </article>
</template>


<script>
  export default {
    props: ['recipie'],
    computed: {
      recipies () {
        return this.$store.getters.recipies
      }
    }
  }
</script>

<style scoped>
  .recipie {
    padding: 20px;
    height: 300px;
    border: 1px solid #ccc;
  }
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