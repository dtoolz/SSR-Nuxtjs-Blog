<template>
<div class="mt-12 pt-6 mb-12 pb-12">
    <v-layout>
      <v-flex xs12 sm10 md12 class="ml-3">
         <v-card class="mx-auto" max-width="1200">
    <v-img class="white--text align-end" height="400px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
      <v-card-title>Top 10 Australian beaches</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>
      <div>Whitsunday Island, Whitsunday Islands</div>
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