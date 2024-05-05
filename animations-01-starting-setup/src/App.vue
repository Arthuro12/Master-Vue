<template>
  <router-view v-slot="slotProps">
    <Transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </Transition>
  </router-view>

  <!-- <div class="container">
    <UserList />
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <Transition 
      :css="false"
      @before-enter="beforeEnter" 
      @enter="enter" 
      @after-enter="afterEnter" 
      @before-leave="beforeLeave"
      @leave="leave" 
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
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
  </div> -->
</template>  

<script>
export default {
  data() {
    return { 
      animatedBlock: false,
      dialogIsVisible: false,
      enterInterval: null,
      leaveInterval: null,
      usersAreVisible: false,
      paragraphIsVisible: false,
    };
  },
  methods: {
    afterEnter(target) {
      console.log('I´ll be displayed after the transition has started.');
    },
    afterLeave(target) {},
    animateBlock() {
      this.animatedBlock = true;
    },
    beforeEnter(target) {
      console.log('I´ll be displayed before the transition start.');
      console.log(target);
      target.style.opacity = 0;
    },
    beforeLeave(target) {
      console.log('I´ll be displayed before the transition is over.');
      console.log(target);
      target.style.opacity = 1;
    },
    enter(target, done) {
      console.log('I will be displayed when the transition will be active.');
      let round = 1;
      this.enterInterval = setInterval(() => {
        target.style.opacity = round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    leave(target, done) {
      let round = 1;
      this.leaveInterval = setInterval(() =>  {
        target.style.opacity = 1 - round * 0.1;
        round++;
        if (round > 10) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
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
  /*animation: slide-fade 0.3s ease-out;*/
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
  /*animation: slide-fade 0.3s ease-out;*/
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

.route-enter-from {}

.route-enter-active {
  animation: slide-fade 0.4s ease-out;
}

.route-enter-to {}

.route-leave-active {
  animation: slide-fade 0.4s ease-in;
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