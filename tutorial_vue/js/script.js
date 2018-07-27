Vue.component('app-username', {
  props: ['username'],
  data: function () {
    return {
      //username: 'Chris'
    };
  },
  //template: '<pv-on:click="usernameClicked">{{ username }}</p>',
  template: '<p v-on:click="usernameClicked">{{ username }}</p>',
  methods: {
    usernameClicked: function() {
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
    getColor: function (number) {
      return number % 2 == 0 ? 'green' : 'blue';
    },
    userWasClicked: function(name) {
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
