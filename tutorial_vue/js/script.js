

Vue.component('app-username', {
  data: function() {
    return {
      username: 'Chris'
    };
  },
  template: '<p>{{ username }}</p>',
});





new Vue({
  el: '#app',
  data: {
    name: 'Hello World',
    elements: []
  },
  methods: {
    changeName: function() {
      this.name = "Good Bye Cruel World";
    },
    addElement: function() {
      this.elements.push(this.elements.length+1);
    },
    getColor: function(number) {
      return number % 2 == 0 ? 'green' : 'blue';
    }
  }
});

new Vue({
  el:'#app2',
  data: {
    message: "Hello There!"
  }
});


