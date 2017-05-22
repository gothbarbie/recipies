 <template>
  <section>
    <h2>Recepies</h2>
    <app-recipie v-for="(recipie, i) in recipies" :recipie="recipie" :key="i"></app-recipie>
  </section>
</template>


<script>
  import Recipie from './Recipie.vue'

  export default {
    components: {
      appRecipie: Recipie
    },
    computed: {
      recipies () {
        return this.$store.getters.recipies
      }
    }
  }
</script>