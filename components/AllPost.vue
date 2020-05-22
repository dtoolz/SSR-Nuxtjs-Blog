<template>
    <div>
    <v-layout>
      <v-flex xs12 sm10 md12 class="ml-3">
           <v-card color="deep-purple lighten-5" max-width="1000" class="mx-auto">
               <v-col cols="12">
                  <v-card color="deep-purple lighten-4" >
                     <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                           <v-card-title class="headline">{{title}} </v-card-title>
                           <v-card-subtitle >{{artist}} </v-card-subtitle>
                           <v-btn router exact :to="id" color="deep-purple darken-1" class="ml-3 mt-4" dark>See Details
                             <v-icon large>mdi-chevron-right</v-icon>
                           </v-btn>
                        </div>
                        <v-avatar class="ma-3" size="125" tile>
                           <v-img :src="image"></v-img>
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
     props: {
        image:{
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        artist:{
            type: String,
            required: true
        },
        details:{
            type: String,
            required: true
        },
        id:{
            type: String,
            required: true
        }
    }
}
</script>