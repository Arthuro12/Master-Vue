<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :text="area"></base-badge>
    </div>
    <div class="actions">
      <base-button :link="true" :to="coachContactLink" mode="outline">Contact</base-button>
      <base-button :link="true" :to="coachDetailsLink">View Detail</base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    coachContactLink() {
      return '/coaches/' + this.id + '/contact'
    },
    coachDetailsLink() {
      return '/coaches/' + this.id
    },
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
