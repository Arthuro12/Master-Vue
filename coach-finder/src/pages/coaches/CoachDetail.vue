<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button :link="true" :to="coantactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :text="area"></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    }
  },
  computed: {
    areas() {
      return this.selectedCoach.areas
    },
    constactLink() {
      return this.$route.path + '/' + this.id + '/contact'
    },
    description() {
      return this.selectedCoach.description
    },
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName
    },
    rate() {
      return this.selectedCoach.hourlyRate
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (currCoach) => currCoach.id === this.id
    )
  }
}
</script>
