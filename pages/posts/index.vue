<template>
  <div class="mt-12 pt-6 mb-12 pb-12">
    <v-layout>
      <v-flex xs12 sm10 md12 class="ml-3">
        <h3 class="text-center py-4 text-uppercase">Articles</h3>
           <v-card color="deep-purple lighten-5" max-width="1000" class="mx-auto">
               <v-col v-for="item  in items" :key="item.id" cols="12">
                  <v-card color="deep-purple lighten-3" >
                     <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                           <v-card-title class="headline" v-text="item.title"></v-card-title>
                           <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                           <v-btn router exact :to="'/singlePost'" color="deep-purple darken-1" class="ml-3 mt-4" dark>See Details
                             <v-icon large>mdi-chevron-right</v-icon>
                           </v-btn>
                        </div>
                        <v-avatar class="ma-3" size="125" tile>
                           <v-img :src="item.image"></v-img>
                        </v-avatar>
                       </div>
                   </v-card>
                 </v-col>
             </v-card>
          </v-flex>
      </v-layout>
    </div>
</template>


<script>
  export default {
    data: () => ({
      items: [
        {
          image: require("../../assets/images/m1.jpg"),
          title: 'Great Musical Orchestra in london',
          artist: 'dtoolz mass choir : songs from the midnight team',
          id: 'abc'
        },
        {
          image: require("../../assets/images/m2.jpg"),
          title: 'Intriguing Season Of The EUFA Champions League',
          artist: 'Oghenerhioke Donatus',
          id: 'abcd'
        },
        {
          image: require("../../assets/images/m3.jpg"),
          title: 'COVID-19 Aids African Leaders To Steal Funds',
          artist: 'cnn, bbc, sahara reporters, news daily',
          id: 'abcde'
        },
        {
          image: require("../../assets/images/m4.jpg"),
          title: 'Digital Age Promotes E-commerce Market Globally',
          artist: 'Dtoolz Rhioke',
          id: 'abcdef'
        }
      ],
    }),
  }
</script>