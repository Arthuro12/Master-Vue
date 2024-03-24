const app = Vue.createApp({
  data() {
    return {
      counter: 0,
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
    setName(event, lastName) {
      // this.name = event?.target.value;
      this.name = event?.target.value + " " + lastName;
    },
    submitForm() {
      alert("Submited!");
    }
  },
});

app.mount('#events');
