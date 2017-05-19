 <template>
  <section>
    <ul class="recipies">
      <router-link
        v-for="(r, i) in recipies"
        :key="i"
        tag="li"
        :to="'/view-recipies/' + i"
        style="cursor: pointer">{{ r.name }}</router-link>
    </ul>
  </section>
</template>


<script>
  export default {
    data () {
      return {
        recipies: this.$store.state.recipies
      }
    }
  }
</script>

<style scoped>
  .recipies {
    margin: 0 1em;
    & li {
      margin: 1em 0;
    }
  }
</style>