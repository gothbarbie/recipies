 <template>
  <section>
    
    <section>
      <h2>New Recipie</h2>
      
      <r-input @changed="changedName" name="name" type="text" label="Name"></r-input>
      <r-textarea @changed="changedDescription" name="description" label="Description"></r-textarea>

      <div class="add-ingredient">
        <h4>Add Ingredient</h4>

        <r-input name="ingredient-name" 
          type="text" 
          label="Ingredient" 
          :value="ingredient.name"
          @changed="changedIngredientName"></r-input>
        <r-input 
          name="ingredient-amount" 
          type="text" label="Amount" 
          :value="ingredient.amount"
          @changed="changedIngredientAmount"></r-input>
        <r-select 
          name="ingredient-measurement" 
          label="Measurement" 
          :list="measurementsList"
          :selected="ingredient.measurement"
          @changed="changedMeasurement"></r-select>
        
        <r-button primary="true" @clicked="addIngredient">
          <icon type="plus"></icon>
        </r-button>
      </div>

    </section>

    <section>
      <h4>Preview</h4>

      <div class="preview-name-description">
        <div class="preview-item">Name: {{ recipie.name }}</div>
        <div class="preview-item" style="white-space: pre">Description: 
          <div>{{ recipie.description }}</div>
        </div>
      </div>

      <h5>Ingredients</h5>
      <ul class="ingredients">
        <li v-for="(ing, i) in recipie.ingredients">
          {{ ing.name }} - {{ ing.amount }}{{ ing.measurement }}
          <r-button primary="true" @clicked="removeIngredient(i)">
            <icon type="minus"></icon>
          </r-button>
        </li>
      </ul>
    </section>

    <div class="align-right">
      <r-button secondary="true" @clicked="saveRecipie">
        Save
        <icon type="plus"></icon>
      </r-button>
    </div>

  </section>
</template>

<script>
import { mapActions } from 'vuex'

import rButton from '@/components/Button'
import rInput from '@/components/Input'
import Icon from '@/components/Icon'
import rTextarea from '@/components/TextArea'
import rSelect from '@/components/Select'


export default {
  name: 'AddRecipie',
  data () {
    return {
      ingredient: {
        name: '',
        amount: 0,
        measurement: 'g'
      },
      measurement: {},
      measurementsList: ['g', 'mg', 'hg', 'ml', 'tsk', 'msk']
    }
  },
  computed: {
    recipie () {
      return {
        name: '',
        description: '',
        ingredients: []
      }
    }
  },
  components: {
    rButton,
    Icon,
    rInput,
    rTextarea,
    rSelect
  },
  methods: {
    ...mapActions(['addRecipie']),
    changedName(value) {
      this.recipie.name = value
    },
    changedDescription(value) {
      this.recipie.description = value
    },
    changedIngredientName(value) {
      this.ingredient.name = value
    },
    changedIngredientAmount (value) {
      this.ingredient.amount = value
    },
    changedMeasurement(value) {
      this.ingredient.measurement = value
    },
    addIngredient() {
      this.recipie.ingredients.push({
        name: this.ingredient.name,
        amount: this.ingredient.amount,
        measurement: this.ingredient.measurement
      })

      this.resetIngredient()
    },
    removeIngredient (i) {
      this.recipie.ingredients.splice(i, 1)
    },
    resetIngredient () {
      this.ingredient = {
        name: '',
        amount: 0,
        measurement: 'g'
      }
    },
    saveRecipie () {
      this.$http.post('recipies.json', this.recipie)
      this.$router.push('/')
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

.add-ingredient {
  border: 1px solid #ccc;
  padding: var(--spacing);
}
.row {
  display: flex;
}
.col2 { 
  flex: 1
} 
.preview-name-description {
  margin-bottom: var(--spacing);
}
.preview-item {
  line-height: 1.5em;
}
.align-right {
  display: flex;
  justify-content: flex-end;
}
</style>