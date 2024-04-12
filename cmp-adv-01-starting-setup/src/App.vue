<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps.anotherProp }}</p>
      </template>
    </course-goals> -->
    <button type="button" @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button type="button" @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <active-goals v-if="selectedComponentTagName === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponentTagName === 'manage-goals'"></manage-goals>
  </div>
</template>

<script>
import ActiveGoals from './components/ActiveGoals.vue';
// import BadgeList from './components/BadgeList.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
import TheHeader from './components/TheHeader.vue';
// import UserInfo from './components/UserInfo.vue';

export default {
  components: {
    'active-goals': ActiveGoals,
    // 'badge-list': BadgeList,
    // 'course-goals': CourseGoals,
    'manage-goals': ManageGoals,
    'the-header' :TheHeader,
    // TheHeader: TheHeader,
    // TheHeader
    // 'user-info': UserInfo
  },
  data() {
    return {
      selectedComponentTagName: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(tagName) {
      this.selectedComponentTagName = tagName;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>