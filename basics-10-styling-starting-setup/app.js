const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        };
    },
    methods: {
        boxSelected(boxName) {
            if (boxName === "A") {
                this.boxASelected = true;
            } else if(boxName === "B") {
                this.boxBSelected = true;
            } else if(boxName === "") {
                this.boxCSelected = true;
            }
        },
    },
});

app.mount("#styling");