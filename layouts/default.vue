<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      class="deep-purple lighten-2" dark
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>



    <v-app-bar
      fixed
      class="deep-purple lighten-2" dark
    >
      <v-app-bar-nav-icon class="hidden-lg-only"  @click.stop="drawer = !drawer" />
      <v-btn class="ml-6" router exact :to="'/'" text>
        <v-icon>mdi-home</v-icon>
        <v-toolbar-title>Dtoolz Blog</v-toolbar-title>
      </v-btn>
      <v-spacer />
      <v-btn router exact :to="'/posts'" text class="mr-2 hidden-xs-only" >
        <v-icon class="hidden-xs-only">mdi-apps</v-icon>
         <v-toolbar-title class="hidden-xs-only">Articles</v-toolbar-title>
      </v-btn>
     
      <v-btn router exact :to="'/about'" text class="hidden-xs-only">
          <v-icon class="hidden-xs-only">mdi-chart-bubble</v-icon>
        <v-toolbar-title  class="hidden-xs-only">About Us</v-toolbar-title>
      </v-btn>
    </v-app-bar>

    
    <v-content>
        <nuxt />
    </v-content>

    <v-footer class="deep-purple lighten-1 py-4" dark>
      <v-row>
        <v-col  sm="4" xs="12">
            <p class="text-justify">
             Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.
            </p>
        </v-col>
        <v-col  sm="4" xs="12">
            <p class="text-justify">
             Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.
            </p>
        </v-col>
        <v-col  sm="4" xs="12">
            <p class="text-justify">
             Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce convallis metus.
            </p>
        </v-col>
      </v-row>
      
     <v-layout column justify-center align-center>
       <v-flex xs12 sm8 md6 class="font-weight-bold">
        <span>&copy; Dtoolz {{ new Date().getFullYear() }}</span>
       </v-flex>
     </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
     
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'Articles',
          to: '/posts'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About-Us',
          to: '/about'
        }
      ],
      title: 'Dtoolz Blog'
    }
  }
}
</script>


<style >
*{
  box-sizing: border-box;
}
</style>