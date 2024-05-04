<template>
    <ul>
        <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
    </ul>
    <div>
        <input type="text" v-model="newUser"/>
        <button @click="addUser">Add User</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newUser: '',
            users: [
                'Ana',
                'Larson',
                'Jerry',
                'Jean', 
                'Manuel'
            ]
        };
    },
    methods: {
        addUser() {
            this.users.push(this.newUser);
            this.newUser = '';
        },
        removeUser(user) {
            this.users.splice(this.users.findIndex((currUser) => currUser === user), 1);
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}
</style>