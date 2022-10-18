<template>
  <div>
    <v-container class="grey lighten-5">
      <h1>Programming Skills</h1>
      <v-row no-gutters>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
              height="200px"
            ></v-img>

            <v-card-title> Java Programming </v-card-title>

            <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          Java is a powerful general-purpose programming language. It is
              used to develop desktop and mobile applications, big data
              processing, embedded systems, and so on. According to Oracle, the
              company that owns Java, Java runs on 3 billion devices worldwide,
              which makes Java one of the most popular programming languages.
        </v-card-text>
      </div>
    </v-expand-transition>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
              height="200px"
            ></v-img>

            <v-card-title> HTML </v-card-title>

        
            <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          The HyperText Markup Language or HTML is the standard markup
              language for documents designed to be displayed in a web browser.
              It can be assisted by technologies such as Cascading Style Sheets
              and scripting languages such as JavaScript.
        </v-card-text>
      </div>
    </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  }
</script>
