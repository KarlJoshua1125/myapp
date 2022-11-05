<template>
  <section class="home">
    <v-card class="card">
      {{ username }}
      <h1>Video Game Quiz</h1>
      <h2>Difficulty</h2>
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

      <h2>Questions (from 10 to 50)</h2>
      <v-text-field class="question" type="number" v-model="questions" />
      <div></div>

      <button @click="passEvent()">Start!</button>
    </v-card>
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
      const { data } = await axios.get(
        "https://opentdb.com/api.php?amount=10&category=15"
      );
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
@use "../App.scss";
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@500&family=EB+Garamond&display=swap");
.home {
  width: min(95%, 400px);
  @include App.flex();

  .card {
    background: rgb(196, 191, 191);
    width: 200%;
    height: 450px;
    text-align: center;
    padding: 60px;
  }
  h1 {
    font-family: "Cinzel", serif;

    color: black;
    font-size: 2.5rem;
  }

  h2 {
    font-family: "EB Garamond", serif;
    padding: 10px;
    color: black;
    text-align: center;
    margin: 10px 0 5px;
    font-size: 1.3rem;
  }

  select {
    width: 80%;
    padding: 3px;
    font-size: 1rem;
    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }

  .difficulties {
    @include App.flex(row);
    gap: 7px;
  }

  .question {
    width: 500px;
    padding-left: 200px;
    color: black;
    font-weight: 400;
  }
}
</style>