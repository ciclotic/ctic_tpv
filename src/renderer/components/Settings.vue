<template>
  <v-card class="mx-auto" shaped max-width="500">
    <v-card-title class="headline">Configuración</v-card-title>

    <v-card-text>
      <v-form ref="formSettings" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-select
                    item-text="name"
                    item-value="id"
                    :items="terminals"
                    :value="terminal"
                    @input="postTerminal"
                    label="Terminal"
                    outlined />
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-btn
                    block
                    :loading="loader === 'settings'"
                    :disabled="loader !== null"
                    color="primary"
                    class="white--text"
                    @click="save">
              Guardar
              <v-icon right dark>mdi-content-save</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { VCard, VCardTitle, VCardText, VIcon, VBtn, VContainer, VRow, VCol, VTextField, VSelect, VForm } from 'vuetify/lib'

export default {
  name: 'Settings',
  components: {VCard, VCardTitle, VCardText, VIcon, VBtn, VContainer, VRow, VCol, VTextField, VSelect, VForm},

  data () {
    return {
      valid: true,
      loader: null,
      terminals: []
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/token',
      terminal: 'settings/terminal'
    })
  },

  watch: {
    token (value) {
      if (value === null) {
        this.goToLogin()
      }
    }
  },

  mounted () {
    if (this.token === null) {
      this.goToLogin()
    }

    this.fetchTerminals()
  },

  methods: {
    ...mapMutations({
      postTerminal: 'settings/postTerminal'
    }),

    goToLogin () {
      this.$router.push({name: 'Login'})
    },

    save () {
      if (!this.$refs.formSettings.validate()) {
        return
      }
      this.loader = 'settings'
      this.postTerminal(this.terminal)
      this.loader = null
    },

    fetchTerminals () {
      this.loader = 'terminals'
      this.$http.get('/v0.0.1/devices', {
        headers: {
          'Authorization': 'Bearer ' + this.token
        }
      })
        .then((response) => { this.terminals = response.data['hydra:member'] })
        .catch((error) => console.log(error))
        .finally(() => { this.loader = null })
    }
  }
}
</script>

<style type="scss">
</style>
