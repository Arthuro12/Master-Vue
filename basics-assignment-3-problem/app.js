const app = Vue.createApp({
    data() {
        return {
            initialValue: 0,
            displayedText: "",
        };
    },
    methods: {
        add(value) {
            this.initialValue = this.initialValue + value;
            // this.setText();
        },
        setText() {
            // if (this.initialValue < 37) {
            //     this.displayedText = "Not there yet";
            // }
            // if (this.initialValue > 37) {
            //     this.displayedText = "Too much!";
            // }
        },
    },
    computed: {
        setText() {
            if (this.initialValue < 37) {
                return "Not there yet";
            }
            if (this.initialValue > 37) {
                return "Too much!";
            }
        }
    },
    watch: {
        initialValue() {
            const that = this;
            setTimeout(() => {
                that.initialValue = 0;
            }, 5000);
        }
    }
});
app.mount("#assignment");