<template>
  <v-card class="mx-auto" shaped max-width="500">
    <v-card-title class="headline">Login</v-card-title>

    <v-card-text>
      <v-form ref="formLogin" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field label="Usuario" :rules="usernameRules" :value="username" @input="postUsername" outlined />
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    :rules="passwordRules"
                    label="Password"
                    :value="password"
                    @input="postPassword"
                    outlined
                    @click:append="showPassword = !showPassword" />
          </v-col>
          <v-col cols="12" sm="12" md="12">
            <v-btn
                    block
                    :loading="loader === 'login'"
                    :disabled="loader === 'login'"
                    color="primary"
                    class="white--text"
                    @click="login">
              Entrar
              <v-icon right dark>mdi-send</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { VCard, VCardTitle, VCardText, VIcon, VBtn, VContainer, VRow, VCol, VTextField, VForm } from 'vuetify/lib'

export default {
  name: 'Login',
  components: {VCard, VCardTitle, VCardText, VIcon, VBtn, VContainer, VRow, VCol, VTextField, VForm},

  data () {
    return {
      valid: true,
      usernameRules: [
        v => !!v || 'El nombre de usuario es obligatorio',
        v => v.length > 3 || 'El nombre de usuario debe tener más de 3 carácteres'
      ],
      passwordRules: [
        v => !!v || 'El password es obligatorio',
        v => v.length > 3 || 'El password debe tener más de 3 carácteres'
      ],
      showPassword: false,
      loader: null
    }
  },

  computed: {
    ...mapGetters({
      token: 'user/token',
      username: 'user/username',
      password: 'user/password'
    })
  },

  watch: {
    token (value) {
      if (value !== null) {
        this.goToHome()
      }
    }
  },

  mounted () {
    if (this.token !== null) {
      this.goToHome()
    }
  },

  methods: {
    ...mapMutations({
      postToken: 'user/postToken',
      postUsername: 'user/postUsername',
      postPassword: 'user/postPassword'
    }),

    goToHome () {
      this.$router.push({name: 'Tpv'})
    },

    login () {
      if (!this.$refs.formLogin.validate()) {
        return
      }
      this.loader = 'login'
      this.$http.post('/login', {
        username: this.username,
        password: this.password
      })
        .then((response) => this.postToken(response.data.token))
        .catch((error) => console.log(error))
        .finally(() => { this.loader = null })
    }
  }
}
</script>

<style type="scss">
</style>
