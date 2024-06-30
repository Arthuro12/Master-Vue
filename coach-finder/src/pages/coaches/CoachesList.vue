<template>
  <section>
    <coach-filter @update-filter="setFilter"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button :link="false" mode="outline" @click="loadCoaches">Refresh</base-button>
        <base-button v-if="!isCoach && !isLoading" :link="true" to="/register"
          >Register as Coach</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        />
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue'
import CoachItem from '../../components/coaches/CoachItem.vue'

export default {
  components: {
    CoachFilter,
    CoachItem
  },
  data() {
    return {
      isLoading: false,
      activeFilter: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  created() {
    this.loadCoaches()
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches']

      return coaches.filter((currCoach) => {
        if (this.activeFilter.frontend && currCoach.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilter.backend && currCoach.areas.includes('backend')) {
          return true
        }
        if (this.activeFilter.career && currCoach.areas.includes('career')) {
          return true
        }

        return false
      })
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches']
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach']
    }
  },
  methods: {
    async loadCoaches() {
      this.isLoading = true
      await this.$store.dispatch('coaches/loadCoaches')
      this.isLoading = false
    },
    setFilter(filter) {
      this.activeFilter = filter
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
