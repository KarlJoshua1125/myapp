<template>
  <section class="home">
    <h1>Quiz App</h1>
    <p>Choose the difficulty</p>
    <div class="difficulties">
      <div>
        <input
          @click="changeDifficulty($event)"
          name="difficulty"
          type="radio"
          id="easy"
        /><label class="button" for="easy" role="button">Easy</label>
      </div>
      <div>
        <input
          @click="changeDifficulty($event)"
          name="difficulty"
          type="radio"
          id="medium"
          checked
        /><label class="button" for="medium" role="button">Medium</label>
      </div>
      <div>
        <input
          @click="changeDifficulty($event)"
          name="difficulty"
          type="radio"
          id="hard"
        /><label class="button" for="hard" role="button">Hard</label>
      </div>
    </div>

    <p>Choose the number of questions (from 10 to 50)</p>
    <input
      class="questions"
      type="number"
      min="10"
      max="50"
      v-model="questions"
    />

    <button @click="passEvent()">Start!</button>
  </section>
</template>

<script>
import axios from "../axios/axios";

export default {
  name: "Home",
  data() {
    return {
      categories: [],
      selectedCategoryId: 15,
      difficulty: "medium",
      questions: 10,
    };
  },

  async mounted() {
    try {
      const { data } = await axios.get("https://opentdb.com/api.php?amount=10&category=15");
      this.categories = data.trivia_categories;
     
    } catch (error) {
      console.error(error);
    }
  },

  methods: {
    
    changeDifficulty(event) {
      this.difficulty = event.target.id;
    },
    passEvent() {
      this.$emit("startTheGame", {
        difficulty: this.difficulty,
        categoryId: this.selectedCategoryId,
        questions: this.questions,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../quiz.scss";
$bg: #11111c;

#app{
  background: $bg;
}
.home {
  color:white;
  background: $bg;
  width: min(95%, 400px);
  @include quiz.flex();

  h1 {
    font-size: 2.5rem;
  }

  p {
    color:white;
    text-align: center;
    margin: 10px 0 5px;
    font-size: 1.3rem;
  }

  select {
    color:gray;
    width: 80%;
    padding: 3px;
    font-size: 1rem;
    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }

  .difficulties {
    @include quiz.flex(row);
    gap: 7px;

    div {
      @include quiz.flex(row);
      position: relative;
      margin-bottom: 5px;
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ .button {
          background: quiz.$difficulty-checked;
          box-shadow: quiz.$box-shadow;
        }
      }
      .button {
        transition: 0.3s;
        display: inline-block;
        width: 70px;
        text-align: center;
        color: black;
        background: rgb(34, 34, 250);
      }
      &:hover input:not(:checked) ~ .button {
        background: quiz.$difficulty-hover;
      }
    }
  }

  .questions {
    width: 25%;
    padding: 2px 5px;
  }
}
</style>