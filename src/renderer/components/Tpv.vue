<template>
  <v-card class="mx-auto" shaped max-width="500">
    <v-card-title class="headline">TEst</v-card-title>

    <v-card-text>
      Test
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { VCard, VCardTitle, VCardText, VIcon, VBtn, VContainer, VRow, VCol, VTextField, VForm } from 'vuetify/lib'

export default {
  name: 'Tpv',
  components: {VCard, VCardTitle, VCardText, VIcon, VBtn, VContainer, VRow, VCol, VTextField, VForm},

  data () {
    return {
      valid: true,
      loader: null
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/token'
    })
  },

  methods: {
    ...mapMutations({
      postToken: 'user/postToken'
    })
  }
}
</script>

<style type="scss">
</style>
