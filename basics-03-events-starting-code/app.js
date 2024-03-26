const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      // fullName: ""
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
      return this.name === "" || this.lastName === "" ? "" : this.name + " " + this.lastName;
    },
  },
  watch: {
    counter(value) {
      if (value === 50) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   this.fullName = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   this.fullName = this.name + " " + value;
    // }
  },
});

app.mount('#events');
