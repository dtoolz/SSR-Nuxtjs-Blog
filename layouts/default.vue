<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      fixed
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
    >
      <v-app-bar-nav-icon class="hidden-lg-only"  @click.stop="drawer = !drawer" />
      <v-btn router exact :to="'/'" text>
        <v-icon>mdi-home</v-icon>
        <v-toolbar-title>Dtoolz Blog</v-toolbar-title>
      </v-btn>
      <v-spacer />
      <v-btn router exact :to="'/'" text class="mr-2 hidden-xs-only" >
        <v-icon class="hidden-xs-only">mdi-apps</v-icon>
         <v-toolbar-title class="hidden-xs-only">Articles</v-toolbar-title>
      </v-btn>
     
      <v-btn router exact :to="'/about'" text >
        <v-toolbar-title  class="hidden-xs-only">About Us</v-toolbar-title>
      </v-btn>
    </v-app-bar>

    
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
          icon: 'mdi-apps',
          title: 'Articles',
          to: '/'
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