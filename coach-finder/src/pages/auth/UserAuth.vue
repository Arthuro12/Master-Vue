<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating" fixed>
      <p>Authenticating...</p>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">
          Please enter a valid email and check that password is at least 6 characters long.
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="flat" @click="switchAuthMode">
          {{ switchModeButtonCaption }}
        </base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
import { handleError } from 'vue'

export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null
    }
  },
  computed: {
    submitButtonCaption() {
      return this.mode === 'login' ? 'Login' : 'Signup'
    },
    switchModeButtonCaption() {
      return this.mode === 'login' ? 'Signup instead' : 'Login instead'
    }
  },
  methods: {
    async submitForm() {
      this.formIsValid = true
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false
        return
      }

      this.isLoading = true

      const authPayload = {
        email: this.email,
        password: this.password
      }

      if (this.mode === 'login') {
        try {
          await this.$store.dispatch('login', authPayload)
        } catch (error) {
          this.error = error.message || 'Failed to authenticate, try later.'
        }
      } else {
        try {
          await this.$store.dispatch('signup', authPayload)
        } catch (error) {
          this.error = error.message || 'Failed to authenticate, try later.'
        }
      }

      this.isLoading = false
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup'
      } else {
        this.mode = 'login'
      }
    },
    handleError() {
      this.error = null
    }
  }
}
</script>

<style scoped>
form {
  border: none;
}
</style>
