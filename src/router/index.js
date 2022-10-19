import { createRouter, createWebHistory } from 'vue-router'
import personallife from '../views/personallife.vue'
import programmingskill from '../views/programmingskill.vue'
import abouttip from '../views/about.vue'
import calculator from '../views/Calculator.vue'
import string from '../views/StringAppView.vue'
import vuetify from '../views/vuetify.vue'
import comp from '../views/composition.vue'
import area from '../views/AreaCalculator.vue'
import vowelc from '../views/vowelcount.vue'
import numberc from '../views/numbercount.vue'
import consonantc from '../views/consonantcount.vue'
import vowelcon from '../views/vowelconvert.vue'
import stringup from '../views/stringupper.vue'
import conscon from '../views/conscon.vue'
import test from '../views/test.vue'
import lab1 from '../views/Lab1.vue'
import lab2 from '../views/Lab2.vue'
import quiz from '../views/quizapp.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    
    {
      path: '/lab1',
      name: 'lab1',
      component: lab1
    },
    {
      path: '/lab2',
      name: 'lab2',
      component: lab2
    },
  

    {
      path: '/personal',
      name: 'personal',
      component: personallife
    },
    {
      path: '/calculator',
      name: ' calculator',
      component: calculator
    },
    {
      path: '/string',
      name: 'string',
      component: string
    },
    {
      path: '/vowelc',
      name: ' vowelc',
      component: vowelc
    },

    {
      path: '/numberc',
      name: ' numberc',
      component: numberc
    },
    {
      path: '/consonantc',
      name: ' consonantc',
      component: consonantc
    },
    {
      path: '/vowelcon',
      name: 'vowelcon',
      component: vowelcon
    },

    {
      path: '/stringup',
      name: ' stringup',
      component: stringup
    },
    {
      path: '/conscon',
      name: 'conscon',
      component: conscon
    },
    {
      path: '/programmingskill',
      name: 'programmingskill',
      component: programmingskill
    },
    
    {
      path: '/abouttip',
      name: 'abouttip',
      component: abouttip
    },
    {
      path: '/vue',
      name: 'vue',
      component: vuetify
    },
    {
      path: '/comp',
      name: 'comp',
      component: comp
    },

    {
      path: '/area',
      name: 'area',
      component: area
    },

    {
      path: '/test',
      name: 'test',
      component: test
    },

    {
      path: '/quiz',
      name: 'quiz',
      component: quiz
    },



  ]
})

export default router
