<template>
<div class="mt-12 pt-6 mb-12 pb-12">
    <v-layout>
      <v-flex xs12 sm10 md12 class="ml-3">
         <v-card class="mx-auto" max-width="1200">
    <v-img class="white--text align-end" height="400px" :src="image">
      <v-card-title>{{title}}</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">{{artist}}</v-card-subtitle>
    <v-card-text class="text--primary">
      <div class="text-center">{{title}}</div>
      <div class="text-center pt-3">{{details}}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn router exact :to="'/posts'" color="deep-purple darken-1" class="ml-3 mt-4" dark>Go Back
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
    </v-card-actions>
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