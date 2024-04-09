const app = Vue.createApp({
    data() {
        return {
            friends: [
                { 
                    id: "1", 
                    name: "Nana Karl", 
                    phone: "+237 655 555 555", 
                    email: "nana@gmail.com" 
                },
                { 
                    id: "2", 
                    name: "Jean De Lafontaine", 
                    phone: "+237 644 555 555", 
                    email: "dfontaine@gmail.com" 
                },
            ],
        };
    },
});

app.component("friend-contact", {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button type="button" @click="toggleDetails()">
                {{ toggle ? 'Show' : 'Hide' }} Details
            </button>
            <ul v-show="toggle">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            toggle: true,
            friend: 
                { 
                    id: "1", 
                    name: "Nana Karl", 
                    phone: "+237 655 555 555", 
                    email: "nana@gmail.com" 
            },
        };
    },
    methods: {
        toggleDetails() {
            this.toggle = !this.toggle;
        }
    }
});

app.mount("#app");