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
    outpuFullName() {
      
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
  computed: {
    fullName() {
      return this.name === "" ? "" : this.name + " " + "Fotso";
    },
  },
});

app.mount('#events');
