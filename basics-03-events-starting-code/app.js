const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(value) {
      this.counter = this.counter + value;
    },
    reduce(value) {
      this.counter = this.counter - value;
    }
  },
});

app.mount('#events');
