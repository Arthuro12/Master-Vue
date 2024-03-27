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
                this.boxASelected = !this.boxASelected;
            } else if(boxName === "B") {
                this.boxBSelected = !this.boxBSelected;
            } else if(boxName === "C") {
                this.boxCSelected = !this.boxCSelected;
            }
        },
    },
});

app.mount("#styling");