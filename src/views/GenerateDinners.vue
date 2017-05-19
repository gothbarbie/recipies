<template>
  <section>
    <h2>Generate Dinners</h2>
    <div class="align-right">
      <r-button
        @clicked="generate"
        primary="true">
        Generate
        <Icon type="plus"></Icon>
      </r-button>
    </div>
    <ul class="weekdays">
      <li>
        <div class="day">Måndag</div>
        <template v-if="results.length > 0">
          <div class="recipie">{{ results[0].name }}</div>
          <r-button
            @clicked="save(0)"
            primary="true">
            Save
            <Icon type="plus"></Icon>
          </r-button>
        </template>
      </li>
      <li>
        <div class="day">Tisdag</div>
        <template v-if="results.length > 0">
          <div class="recipie">{{ results[1].name }}</div>
          <r-button
            @clicked="save(1)"
            primary="true">
            Save
            <Icon type="plus"></Icon>
          </r-button>
        </template>
      </li>
      <li>
        <div class="day">Onsdag</div>
        <template v-if="results.length > 0">
          <div class="recipie">{{ results[2].name }}</div>
          <r-button
            @clicked="save(2)"
            primary="true">
            Save
            <Icon type="plus"></Icon>
          </r-button>
        </template>
      </li>
      <li>
        <div class="day">Torsdag</div>
        <template v-if="results.length > 0">
          <div class="recipie">{{ results[3].name }}</div>
          <r-button
            @clicked="save(3)"
            primary="true">
            Save
            <Icon type="plus"></Icon>
          </r-button>
        </template>
      </li>
      <li>
        <div class="day">Fredag</div>
        <template v-if="results.length > 0">
          <div class="recipie">{{ results[4].name }}</div>
          <r-button
            @clicked="save(4)"
            primary="true">
            Save
            <Icon type="plus"></Icon>
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
    data () {
      return {
        recipies: this.$store.state.recipies,
        results: [],
        saved: []
      }
    },
    components: {
      rButton,
      Icon
    },
    methods: {
      generate() {
        const totalNumberOfRecipies = this.recipies.length
        
        for (let i = 0; i < 5; i++) {
          this.results.push(this.recipies[this.random(totalNumberOfRecipies)])
        }
      },
      random(max) {
        return Math.floor(Math.random() * (max - 0))
      },
      save(id) {
        // if it isnt already saved
        let exist = ''
        
        if (this.saved.length > 0) {
          exist = _.find(this.saved, function(o) { return o.id === id.toString() })
        }
        
        console.log(exist)

        if (exist !== '') {
          this.saved.push(this.results[id])
        }
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