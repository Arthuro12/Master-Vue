const app = Vue.createApp({
    data() {
        return {
            toggle: true,
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
    methods: {
        toggleDetails() {
            this.toggle = !this.toggle;
        }
    }
});

app.mount("#app");