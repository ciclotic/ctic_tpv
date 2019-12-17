<template>
  <v-app>
    <v-app-bar max-height="65" dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>TPV</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container fluid>
      <v-navigation-drawer
              v-model="drawer"
              absolute
              temporary
      >
        <v-list dense>

          <v-list-item
                  v-for="item in menu"
                  :key="item.title"
                  @click="goTo(item.link)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
  import { VApp, VSpacer, VIcon, VAppBar, VAppBarNavIcon, VToolbarTitle, VBtn, VContainer, VNavigationDrawer, VList, VListItem, VListItemTitle, VListItemContent, VListItemIcon } from 'vuetify/lib'
  export default {
    name: 'olimpoTpv',

    components: {VApp, VSpacer, VIcon, VAppBar, VAppBarNavIcon, VToolbarTitle, VBtn, VContainer, VNavigationDrawer, VList, VListItem, VListItemTitle, VListItemContent, VListItemIcon},

    data () {
      return {
        drawer: false,
        menu: [
          {
            title: 'Tpv',
            icon: 'mdi-desktop-classic',
            link: 'Tpv'
          },
          {
            title: 'Configuración',
            icon: 'mdi-settings',
            link: 'Settings'
          }
        ]
      }
    },

    methods: {
      goTo (routeName) {
        this.$router.push({name: routeName})
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
