<template>
    <h2>{{ friend.name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button type="button" @click="toggleFavorite">Toggle favorite</button>
    <button type="button" @click="toggleDetails">{{ toggle ? "Hide" : "Show" }} Details</button>
    <ul v-show="toggle">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>E-Mail:</strong> {{ friend.email }}</li>
    </ul>
    <button type="button" @click="deleteFriend">Delete</button>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        friend: {
            type: Object,
            required: true
        }, 
        isFavorite: {
            type: Boolean,
            required: true
        }
    },
    emits: ['toggle-favorite', 'delete-friend'],
    // emits: {
    //     'toggle-favorite': function(id) {
    //         if (id != null) {
    //             return true;
    //         } else {
    //             console.log("Id is missing!")
    //             return false;
    //         }
    //     }
   //  },
    data() {
        return {
            toggle: false,
        };
    },
    methods: {
        toggleDetails() {
            this.toggle = !this.toggle;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id);
        },
        deleteFriend() {
            this.$emit('delete-friend', this.id);
        }
    }
};
</script>