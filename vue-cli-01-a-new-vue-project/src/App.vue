<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <new-friend @add-contact="handleAddContact"/>
        <ul v-for="friend in friends" :key="friend.id">
            <li>
                <friend-contact :friend="friend" :is-favorite="friend.isFavorite" :id="friend.id" @toggle-favorite="toggleFavoriteStatus" @delete-friend="handleDeleteFriend" />
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
        },
        handleAddContact(friendContact) {
            this.friends.push(friendContact);
        },
        handleDeleteFriend(id) {
            const identifiedFriend = this.friends.find((currFriend) => currFriend.id === id);
            const identifiedFriendIdx = this.friends.findIndex((currFriend) => currFriend == identifiedFriend);
            this.friends.splice(identifiedFriendIdx, 1);
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
    box-sizing: border-box;
  }
  
  html {
    font-family: 'Jost', sans-serif;
  }
  
  body {
    margin: 0;
  }
  
  header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #58004d;
    color: white;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }
  
  #app ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  #app li, #app form {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    width: 90%;
    max-width: 40rem;
  }
  
  #app h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #58004d;
    margin: 0 0 1rem 0;
  }
  
  #app button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  }
  
  #app button:hover,
  #app button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  }

  #app input {
    font: inherit;
    padding: 0.15rem;;
  }

  #app label {
    font-weight: bold;
    margin-right: 1rem;
    width: 7rem;
    display: inline-block;
  }

  #app form div {
    margin: 1rem 0;
  }
</style>