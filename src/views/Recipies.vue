 <template>
  <section>
    <h3>All Recipies</h3>
    <ul>
      <router-link 
        tag="li"
        to="/view-recipies/1"
        style="cursor: pointer">Recipie 1</router-link>
      <router-link 
        tag="li"
        to="/view-recipies/2"
        style="cursor: pointer">Recipie 2</router-link>
      <router-link 
        tag="li"
        to="/view-recipies/3"
        style="cursor: pointer">Recipie 3</router-link>
    </ul>
  </section>
</template>


<script>
  export default {
    data () {
      return {
        
      }
    },
    computed: {
      recipies () {
        this.$store.state.recipies
      }
    }
  }
</script>

<style scoped>

</style>