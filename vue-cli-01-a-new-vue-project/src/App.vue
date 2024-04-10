<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <ul v-for="friend in friends" :key="friend.id">
            <li>
                <friend-contact :friend="friend" :is-favorite="friend.isFavorite" :id="friend.id" @toggle-favorite="toggleFavoriteStatus"></friend-contact>
            </li>
        </ul>
    </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';

export default {
    data() {
        return {
            friends: [
                {
                    id: "1",
                    name: "Jean Tabi",
                    phone: "+237 689 888 888",
                    email: "jt@yahoo.com",
                    isFavorite: true
                },
                {
                    id: "2",
                    name: "Marie Ange",
                    phone: "+237 674 888 888",
                    email: "mariea@yahoo.com",
                    isFavorite: true
                }
            ]
        };
    },
    methods: {
        toggleFavoriteStatus(id) {
            const identifiedFriend = this.friends.find((currFriend) => {
                return currFriend.id === id;
            });
            identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>