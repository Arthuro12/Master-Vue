<template>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <Transition name="paragraph" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave">
      <p v-if="paragraphIsVisible">This is only sometimes visible...</p>
    </Transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <Transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show users</button>
      <button @click="hideUsers" v-else>Hide users</button>
    </Transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      animatedBlock: false,
      dialogIsVisible: false,
      usersAreVisible: false,
      paragraphIsVisible: false,
    };
  },
  methods: {
    afterEnter() {
      console.log('I´ll be displayed after the transition is done.');
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    beforeEnter(target) {
      console.log('I´ll be displayed before the transition.');
      console.log(target);
    },
    beforeLeave(target) {
      console.log('I´ll be displayed before the transition is over.');
      console.log(target);
    },
    enter(target) {
      console.log('I will be displayed when the transition will be active.');
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 0.3s ease-out;*/
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /*transform: translateX(-150px);*/
  animation: slide-fade 0.3s ease-out forwards;
}

.paragraph-enter-from {
  /*opacity: 0;
  transform: translateY(-30px);*/
}

.paragraph-enter-active {
  animation: slide-fade 0.3s ease-out;
}

.paragraph-enter-to {
  /*opacity: 1;
  transform: translateY(0);*/
}

.paragraph-leave-from {
  /*opacity: 1;
  transform: translateY(0);*/
}

.paragraph-leave-active {
  animation: slide-fade 0.3s ease-out;
}

.paragraph-leave-to {
 /* opacity: 0;
  transform: translateY(30px);*/
}

.modal-enter-from {
  
}

.modal-enter-active {
  /*animation: modal 0.3s ease-out;*/
}

.modal-enter-to {}

.fade-button-enter-from,
.fade-button-leave-from
{
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to, .fade-button-leave-to
{
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translate(-150px) scale(1);
  }
}

/*@keyframes modal {
  from {
    opacity: 0;
    transform: translateX(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}*/
</style>