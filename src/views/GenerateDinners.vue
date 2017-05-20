<template>
  <section>
    <h2>Generate Dinners</h2>
    <div class="align-right">
      <r-button
        @clicked="generate"
        primary="true">
        Generate
        <Icon type="refresh"></Icon>
      </r-button>
    </div>
    <ul class="weekdays">
      <li>
        <div class="day">Måndag</div>
        <template v-if="results.length > 0">
          <div class="recipie">{{ results[0].name }}</div>
          <r-button
            v-if="!isSaved(results[0].id)"
            @clicked="save(results[0].id)"
            primary="true">
            Keep
            <Icon type="thumb-tack"></Icon>
          </r-button>
          <r-button
            v-else
            @clicked="unSave(results[0].id)"
            primary="true">
            Delete
            <Icon type="times-circle"></Icon>
          </r-button>
        </template>
      </li>
      <li>
        <div class="day">Tisdag</div>
        <template v-if="results.length > 0">
          <div class="recipie">{{ results[1].name }}</div>
          <r-button
            v-if="!isSaved(results[1].id)"
            @clicked="save(results[1].id)"
            primary="true">
            Keep
            <Icon type="thumb-tack"></Icon>
          </r-button>
          <r-button
            v-else
            @clicked="unSave(results[1].id)"
            primary="true">
            Delete
            <Icon type="times-circle"></Icon>
          </r-button>
        </template>
      </li>
      <li>
        <div class="day">Onsdag</div>
        <template v-if="results.length > 0">
          <div class="recipie">{{ results[2].name }}</div>
          <r-button
            v-if="!isSaved(results[2].id)"
            @clicked="save(results[2].id)"
            primary="true">
            Keep
            <Icon type="thumb-tack"></Icon>
          </r-button>
          <r-button
            v-else
            @clicked="unSave(results[2].id)"
            primary="true">
            Delete
            <Icon type="times-circle"></Icon>
          </r-button>
        </template>
      </li>
      <li>
        <div class="day">Torsdag</div>
        <template v-if="results.length > 0">
          <div class="recipie">{{ results[3].name }}</div>
          <r-button
            v-if="!isSaved(results[3].id)"
            @clicked="save(results[3].id)"
            primary="true">
            Keep
            <Icon type="thumb-tack"></Icon>
          </r-button>
          <r-button
            v-else
            @clicked="unSave(results[3].id)"
            primary="true">
            Delete
            <Icon type="times-circle"></Icon>
          </r-button>
        </template>
      </li>
      <li>
        <div class="day">Fredag</div>
        <template v-if="results.length > 0">
          <div class="recipie">{{ results[4].name }}</div>
          <r-button
            v-if="!isSaved(results[4].id)"
            @clicked="save(results[4].id)"
            primary="true">
            Keep
            <Icon type="thumb-tack"></Icon>
          </r-button>
          <r-button
            v-else
            @clicked="unSave(results[4].id)"
            primary="true">
            Delete
            <Icon type="times-circle"></Icon>
          </r-button>
        </template>
      </li>
    </ul>

    {{ saved }}

  </section>
</template>

<script>
  import _ from 'lodash'

  import rButton from '@/components/Button'
  import Icon from '@/components/Icon'

  export default {
    name: 'GenerateDinners',
    computed: {
      recipies () {
        return this.$store.state.recipies 
      },
      saved () {
        return this.$store.state.saved
      }
    },
    components: {
      rButton,
      Icon
    },
    data () {
      return {
        results: []
      }
    },
    methods: {
      ...mapActions(['addSaved']),
      generate() {
        const totalNumberOfRecipies = this.recipies.length
        const max = 5 - this.results.length 

        for (let i = 0; i < max; i++) {
          this.results.push(this.recipies[this.random(totalNumberOfRecipies)])
        }
      },
      random(max) {
        return Math.floor(Math.random() * (max - 0))
      },
      isSaved (id) {
        const found = _.find(this.saved, function(o) {
          return o.id === id
        })
        return typeof found !== 'undefined'
      },
      getRecipie (id) {
        return _.find(this.recipies, function(o) {
          return o.id === id
        })
      },
      save (id) {
        let found
          
        if (this.saved.length > 0) {
          found = _.find(this.saved.saved, { 'id': id })
        }
        // if it isnt already saved
        if (typeof found == 'undefined') {
          this.addSaved(this.getRecipie(id))
        }
      },
      unSave (id) {
        const index = this.recipies.indexOf(o => {
          return o.id === id
        })
        return index
      } 
      
      // get length of total number of recipies
      // pick five random numbers
      // fetch recipies with indexes from these five numbers
    }
  }
</script>

<style lang="postcss">
  .weekdays {
    margin: 0 1em;
    display: flex;
    justify-content: center;

    & li {
      flex: 1;
      margin: 0 1em;
      text-align: center;
    }
  }
  .day {
    font-weight: bold;
  }
  .recipie {
    margin: 1em 0;
    line-height: 1.25em;
    height: 4em;
  }
  .align-right {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 2em 0;
  }
</style>