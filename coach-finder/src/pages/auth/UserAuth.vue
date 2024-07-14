<template>
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
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login'
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
    submitForm() {
      this.formIsValid = true
      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false
        return
      }

      if (this.mode === 'login') {
      } else {
        this.$store.dispatch('signup', {
          email: this.email,
          password: this.password
        })
      }
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup'
      } else {
        this.mode = 'login'
      }
    }
  }
}
</script>

<style scoped>
form {
  border: none;
}
</style>
