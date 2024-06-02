<template>
  <section>
    <coach-filter @update-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button :link="false" mode="outline">Refresh</base-button>
        <base-button :link="true" to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
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
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches']

      return coaches.filter((currCoach) => {
        if (this.activeFilters.frontend && currCoach.areas.includes('frontend')) {
          return true
        }
        if (this.activeFilters.backend && currCoach.areas.includes('backend')) {
          return true
        }
        if (this.activeFilters.career && currCoach.areas.includes('career')) {
          return true
        }

        return false
      })
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']
    }
  },
  methods: {
    setFilters(filters) {
      this.activeFilters = filters
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
