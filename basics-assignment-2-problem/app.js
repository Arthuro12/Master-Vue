const app = Vue.createApp({
    data: function() {
        return {
            output: ""
        };
    },
    methods: {
        setOutput: function(event) {
            this.output = event?.target.value;
        },
        showAlert: function() {
            alert("Button pressed!");
        }
    }
});

app.mount("#assignment");