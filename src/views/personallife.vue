<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col >
        <v-card class="pa-2" outlined tile>
          <h1>Myself</h1>
          <p>
            I'm Karl Joshua Gonzales, 4th year student Bachelor of Information Technology at Technological
            Institute of the Philippines (TIP). I was born on November 25, 2000
            in Makati Medical Center.
          </p>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-2" outlined tile> 
            <h1>Hobbies</h1>
            <h5>Playing Online Games</h5> 
            <h5>Playing Basketball</h5> 
            <h5>Watching Anime</h5>
            <h5>Reading Manga</h5>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    alignments: ["start", "center", "end"],
  }),
  data() {
    return {
      items: [
        {
          src: "https://scontent.fmnl3-3.fna.fbcdn.net/v/t1.6435-9/67567867_2389787187764160_8511076333860683776_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=DbT9uKCu8LcAX_uM6js&_nc_ht=scontent.fmnl3-3.fna&oh=00_AT-zb3TJkOqxEutGjpwbTVHmqxVM90eQw12q4Kpt8tRcmw&oe=63644CF4",
        },
        {
          src: "https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.6435-9/48384677_2003258776409721_7975262460556869632_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=WkbgCWsFP0UAX9z52d5&_nc_ht=scontent.fmnl3-4.fna&oh=00_AT-G0u0x5d9LxDFGc-zfwHztMLT3TypU3j0R2REw5limyg&oe=6364A7B2",
        },
        {
          src: "https://scontent.fmnl3-1.fna.fbcdn.net/v/t1.6435-9/124986738_3477815485666481_8668804102193966997_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vFU4zDT0wtYAX-KuUKC&_nc_ht=scontent.fmnl3-1.fna&oh=00_AT-Z2blAj0ets0nALk8DsPx04A3M7CAjVt8iz1GMk7lfmQ&oe=63677603",
        },
        {
          src: "https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.6435-9/105937302_3055955507852483_7166404185354905253_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=PJCNFdrv_TEAX-g3gNI&_nc_ht=scontent.fmnl3-2.fna&oh=00_AT84NxCe0XxT1f0HV9zoH2jr0kBESeXOvagJPBQrdockfA&oe=6364B072",
        },
      ],
    };
  },
};
</script>