<template>
<div class="mt-12 pt-6 mb-12 pb-12">
    <v-layout>
      <v-flex xs12 sm10 md12 class="ml-3">
         <v-card class="mx-auto" max-width="1200">
    <v-img class="white--text align-end" height="400px" :src="'https:'+post.fields.image.fields.file.url">
      <v-card-title>{{post.fields.title}}</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0">{{post.fields.artist}}</v-card-subtitle>
    <v-card-text class="text--primary">
      <div class="text-center">{{post.fields.title}}</div>
      <div class="text-center pt-3" v-html="$md.render(post.fields.details)"></div>
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
import client from "~/plugins/contentful";
export default {
  asyncData({params}){
      return client.getEntries({
          content_type: 'post',
          'fields.slug': params.slug
      }).then(entries => {
          return {post : entries.items[0]};
      }).catch( e => console.log(e));
  }
}
</script>