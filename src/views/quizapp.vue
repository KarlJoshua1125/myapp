<template>
  <div>
    <div>
      <button class="buttonn" @click="showModal = true">Register</button>
      <transition name="fade" appear>
        <div
          class="modal-overlay"
          v-if="showModal"
          @click="showModal = false"
        ></div>
      </transition>
      <transition name="slide" appear>
        <div class="modal" v-if="showModal">
          <form action="" @submit.prevent="handleSubmit">
          <h1 class="reg">Register</h1>
          <v-text-field label="Username" v-model="username"></v-text-field>
          <button type="button" class="buttonn" @click="showModal = false">
            Submit
          </button>
        </form>
        </div>
      </transition>
    </div>

    <v-container class="container">
      
      <main>
       
        <Home @startTheGame="startTheGame" v-if="showHome" />
        <Question
          v-if="gameStarted && quizData && !gameFinished"
          :quizData="this.quizData"
          @endGame="endGame"
        />
        <Final
          v-if="gameFinished"
          :correctAnswers="correctAnswers"
          :numberOfQuestions="numberOfQuestions"
          @resetGame="resetGame"
        />
      </main>
    </v-container>
  </div>
</template>
  
  <script>
import "../App.scss";
import axios from "../axios/axios";
import Home from "../components/Home.vue";
import Question from "../components/Question.vue";
import Final from "../components/Final.vue";



export default {
  name: "App",
  components: {
    Home,
    Question,
    Final,
  },
  data() {
    return {
      username: '',
      showModal: true,
      showHome: true,
      gameStarted: false,
      gameFinished: false,
      quizData: undefined,
      numberOfQuestions: 0,
    };
  },
  methods: {

    handleSubmit(){
      let userMessage =(
        name
      )
    },
    startTheGame({ difficulty, categoryId, questions }) {
      this.makeRequest(difficulty, categoryId, questions);
      this.showHome = false;
      this.gameStarted = true;
    },
    async makeRequest(difficulty, categoryId, questions) {
      try {
        const { data } = await axios.get(
          `api.php?amount=${questions}&category=${categoryId}&difficulty=${difficulty}&type=multiple`
        );

        this.quizData = data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    },
    endGame({ numberOfQuestions, correctAnswers }) {
      this.numberOfQuestions = numberOfQuestions;

      this.correctAnswers = correctAnswers;
      this.gameFinished = true;
    },
    resetGame() {
      this.showHome = true;
      this.gameStarted = false;
      this.gameFinished = false;
      this.quizData = undefined;
      this.numberOfQuestions = 0;
    },
  },
};
</script>

  <style lang="scss" scoped>
@use "../App.scss";
main {
  @include App.flex(row);
}
</style>

<style>
.buttonn {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  padding: 15px 25px;
  background:rgb(29, 105, 29);
  border-radius: 8px;

  color: #fff;
  font-size: 18px;
  font-weight: 700;

  transition: 0.4s ease-out;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;

  padding: 25px;
}

.reg{
  padding: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
  