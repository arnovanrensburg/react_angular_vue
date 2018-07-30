Vue.component('app-username', {
  props: ['username'],
  data: function () {
    return {
      //username: 'Chris'
    };
  },
  template: '<p v-on:click="usernameClicked">{{ username }}</p>',
  methods: {
    usernameClicked() {
      this.$emit('usrclicked', this.username);
    }
    
  }
});


new Vue({
  el: '#app',
  data: {
    name: 'Hello World',
    elements: []
  },
  methods: {
    changeName: function () {
      this.name = "Good Bye Cruel World";
    },
    addElement: function () {
      this.elements.push(this.elements.length + 1);
    },
    getColor(number) {
      return number % 2 == 0 ? 'green' : 'blue';
    },
    userWasClicked(name) {
      alert(name);
    }
  }
});

new Vue({
  el: '#app2',
  data: {
    message: "Hello There!"
  }
});
