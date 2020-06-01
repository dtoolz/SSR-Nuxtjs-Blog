<template>
  <div class="mt-12 pt-6 mb-12 pb-12">
    <v-layout>
        <v-flex xs12 sm10 md12 class="ml-3">
          <h3 class="text-center py-4 text-uppercase">Articles</h3>
           <v-card color="deep-purple lighten-5" max-width="1000" class="mx-auto" v-for="post in posts" :key="post.fields.slug">
               <v-col cols="12">
                  <v-card color="deep-purple lighten-4" >
                     <div class="d-flex flex-no-wrap justify-space-between">
                        <div >
                           <v-card-title class="headline">{{ post.fields.title}} </v-card-title>
                           <v-card-subtitle >{{ post.fields.artist}} </v-card-subtitle>
                           <v-btn router exact :to="post.fields.slug" color="deep-purple darken-1" class="ml-3 mt-4" dark>See Details
                             <v-icon large>mdi-chevron-right</v-icon>
                           </v-btn>
                        </div>
                        <v-avatar class="ma-3" width="250" size="125" tile>
                            <v-img :src="'https:'+post.fields.image.fields.file.url"></v-img>
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
      computed: {
         posts (){
           return this.$store.state.posts;
         }
      }
  }
</script>