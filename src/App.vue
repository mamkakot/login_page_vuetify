<template>
  <v-app>
    <v-app-bar app color="teal" dark>
      <v-toolbar-title>
        Vuetify project
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn 
        v-for="link in links" 
        :key="`${link.label}-header-link`" 
        text 
        rounded 
        :to="link.url">
          {{ link.label }}
        </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer
      color="teal"
      padless
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          :to="link.url"
          color="white"
          text
          rounded
          class="my-2" 
        >
          {{ link.label }}
        </v-btn>
        <v-col
          class="teal lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>Vuetify project</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    links: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Login',
        url: '/login'
      },
      {
        label: 'Charts',
        url: '/charts'
      },
      {
        label: 'Blog',
        url: '/blog'
      }
    ]
  }),  
};
</script>
