 <template>
  <section>
    <h2>View Recipies</h2>
    <router-view></router-view>
  </section>
</template>


<script>
  export default {
    data () {
      return {
        
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