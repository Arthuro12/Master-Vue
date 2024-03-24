const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: ""
    };
  },
  methods: {
    add(value) {
      this.counter = this.counter + value;
    },
    reduce(value) {
      this.counter = this.counter - value;
    },
    resetInput() {
      this.name = "";
    },
    setName(event, value) {
      // this.name = event?.target.value;
      this.name = event?.target.value;
    },
    submitForm() {
      alert("Submited!");
    }
  },
});

app.mount('#events');
