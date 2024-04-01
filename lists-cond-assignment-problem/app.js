const app = Vue.createApp({
    data: function() {
        return {
            enteredTask: "",
            tasks: [],
            show: true,
        };
    },
    methods: {
        addTask: function() {
            this.tasks.push(this.enteredTask);
        },
        toggleVisibility: function() {
            this.show = !this.show;
        }
    },
    computed: {
        buttonCaption: function() {
            return this.show ? "Hide List" : "Show List";
        }
    }
});

app.mount("#assignment");