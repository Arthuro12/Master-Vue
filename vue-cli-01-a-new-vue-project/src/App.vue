<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <ul v-for="friend in friends" :key="friend.id">
            <li>
                <friend-contact :friend="friend"></friend-contact>
            </li>
        </ul>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';

export default {
    data() {
        return {
            // friend: {
            //     id: "2",
            //     name: "Marie Ange",
            //     phone: "+237 674 888 888",
            //     email: "mariea@yahoo.com"
            // },
            friends: [
                {
                    id: "1",
                    name: "Jean Tabi",
                    phone: "+237 689 888 888",
                    email: "jt@yahoo.com"
                },
                {
                    id: "2",
                    name: "Marie Ange",
                    phone: "+237 674 888 888",
                    email: "mariea@yahoo.com"
                }
            ]
        };
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>