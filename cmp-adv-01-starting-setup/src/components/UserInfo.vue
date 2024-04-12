<template>
  <section>
    <base-card>
      <div>
        <header>{{ fullName }}</header>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </div>
    <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script scoped>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>