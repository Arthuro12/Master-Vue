<template>
  <section class="container">
    <!-- <h2>{{ user.name }}</h2> -->
    <h2>{{ userName }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click="updateAge">Change age</button>
    <!-- <input type="text" placeholder="First Name" v-model="user.firstName" />
    <input type="text" placeholder="Last Name" v-model="user.lastName" /> -->
    <input type="text" placeholder="First Name" @input="updateFirstName" />
    <input type="text" placeholder="Last Name" @input="updateLastname" />
  </section>
</template>

<script>
import { reactive, ref, computed } from 'vue';

export default {
  setup() {
    // const userName = ref('Arthur');
    // const age = ref(28);
    // const user = ref({
    //   name: 'Arthur',
    //   age: 28,
    // });

    const lastName = ref('');
    const firstName = ref('');

    const user = reactive({
      // name: 'Usher',
      firstName: 'Paul',
      lastName: 'Laroche',
      age: 45,
    });

    // const user2 = reactive({
    //   name: 'Marco',
    //   age: 27,
    // });

    // const user2Ref = toRefs(user2);

    // console.log(user, user2);

    // setTimeout(() => {
    //   //userName.value = 'Billie';
    //   // user.value.name = 'Billie';
    //   // user.value.age = 21;
    //   // user.name = 'Nathy';
    //   // user.age = 25;
    //   // user2.name = 'Nathy';
    //   // user2.age = 25;
    // }, 2000);

    // const userName = computed(() => user.lastName + ' ' + user.firstName);

    const userName = computed(() => lastName.value + ' ' + firstName.value);

    function updateAge() {
      user.age++;
    }

    function updateFirstName(event) {
      firstName.value = event.target.value;
    }

    function updateLastname(event) {
      lastName.value = event.target.value;
    }

    return {
      // userName,
      // age,
      user,
      userName,
      updateAge,
      updateFirstName,
      updateLastname,
      // name: user2Ref.name,
      // age: user2Ref.age,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
